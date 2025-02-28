"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { DefaultValues, FieldValues, Path, SubmitHandler, useForm, UseFormReturn } from "react-hook-form"
import { z, ZodType } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { FIELD_NAMES, FIELD_PLASHOLDERS, FIELD_TYPES } from "@/constants"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

interface Props <T extends FieldValues> {
    type: "SIGN-IN" | "SIGN-UP";
    defaultValues: T;
    schema: ZodType<T>
    onSubmit: (data: T) => Promise<{success: boolean, error?: string}>
}

const AuthForm = <T extends FieldValues> ({type, schema, onSubmit, defaultValues}: Props<T>) => {
    const form: UseFormReturn<T> = useForm({
        resolver: zodResolver(schema),
        defaultValues: defaultValues as DefaultValues<T>
      })
      const router = useRouter()
      // Update handleSubmit in AuthForm to use the passed onSubmit prop
      const handleSubmit: SubmitHandler<T> = async (data) => {
        try {
            const result = await onSubmit(data);
            
            if (result.success) {
                toast.success(type === "SIGN-IN" ? "You have successfully signed in." : "You have successfully signed up.");
                router.push("/");
            } else {
                // Handle failed but not error case (e.g., wrong credentials)
                toast.error(result.error || `Failed to ${type === "SIGN-IN" ? "sign in" : "sign up"}. Please try again.`);
            }
        } catch (error) {
            console.error(`${type} error:`, error);
            toast.error(error instanceof Error 
                ? error.message 
                : `There was an error ${type === "SIGN-IN" ? "signing in" : "signing up"}. Please try again.`
            );
        }
    };
      
      return (
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-semibold text-white " >
                {type === "SIGN-IN" ? "Welcome Back To Bookify" : "Create An Account"}
            </h1>
            <p className="text-light-100" >
                {type === "SIGN-IN" ? "Access the vast collection of resources, and stay up to date with the latest trends." : "Join our community and unlock a world of knowledge and inspiration."}
            </p>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6 w-full">
                    {Object.keys(defaultValues).map((key) => (
                        <FormField
                            key={key}
                            control={form.control}
                            name={key as Path<T>}
                            render={({ field }) => (
                            <FormItem>
                            <FormLabel className="capitalize" >
                                {FIELD_NAMES[key as keyof typeof FIELD_NAMES]}
                            </FormLabel>
                            <FormControl>
                                <Input type={FIELD_TYPES[key as keyof typeof FIELD_TYPES]} placeholder={FIELD_PLASHOLDERS[key as keyof typeof FIELD_PLASHOLDERS]} className="form-input" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                    ))}
                    <Button type="submit" className="form-btn" >{type === "SIGN-IN" ? "Sign In" : "Sign Up"}</Button>
                </form>
            </Form>

            {form.formState.errors.root && (
                <div className="text-red-500 text-sm">
                    {form.formState.errors.root.message}
                </div>
            )}

            <p className="text-center text-base font-medium">
                {type === "SIGN-IN" ? "Don't have an account? " : "Already have an account? "}
                <Link href={type === "SIGN-IN" ? "/sign-up" : "/sign-in"} className="text-primary font-bold hover:underline">
                    {type === "SIGN-IN" ? "Create an account" : "Sign in"}
                </Link>
            </p>

        </div>
      )
}

export default AuthForm