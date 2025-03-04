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
import { useState } from "react"

export type AuthFormType = "SIGN-IN" | "SIGN-UP";

interface Props<T extends FieldValues> {
    type: AuthFormType;
    defaultValues: T;
    schema: ZodType<T>;
    onSubmit: (data: T) => Promise<{success: boolean, error?: string}>;
    // Optional props for customization
    title?: string;
    subtitle?: string;
    submitButtonText?: string;
    showFormDescriptions?: boolean;
}

const AuthForm = <T extends FieldValues>({
    type, 
    schema, 
    onSubmit, 
    defaultValues,
    title,
    subtitle,
    submitButtonText,
    showFormDescriptions = false
}: Props<T>) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const form: UseFormReturn<T> = useForm({
        resolver: zodResolver(schema),
        defaultValues: defaultValues as DefaultValues<T>
    });
    
    const router = useRouter();
    
    // Default texts based on type
    const defaultTitle = type === "SIGN-IN" ? "Welcome Back To Bookify" : "Create An Account";
    const defaultSubtitle = type === "SIGN-IN" 
        ? "Access the vast collection of resources, and stay up to date with the latest trends." 
        : "Join our community and unlock a world of knowledge and inspiration.";
    const defaultButtonText = type === "SIGN-IN" ? "Sign In" : "Sign Up";
    
    const handleSubmit: SubmitHandler<T> = async (data) => {
        try {
            setIsSubmitting(true);
            const result = await onSubmit(data);
            
            if (result.success) {
                toast.success(type === "SIGN-IN" ? "You have successfully signed in." : "You have successfully signed up.");
                router.push("/");
            } else {
                toast.error(result.error || `Failed to ${type === "SIGN-IN" ? "sign in" : "sign up"}. Please try again.`);
            }
        } catch (error) {
            console.error(`${type} error:`, error);
            toast.error(error instanceof Error 
                ? error.message 
                : `There was an error ${type === "SIGN-IN" ? "signing in" : "signing up"}. Please try again.`
            );
        } finally {
            setIsSubmitting(false);
        }
    };
      
    return (
        <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
            <h1 className="text-2xl font-semibold text-white">
                {title || defaultTitle}
            </h1>
            <p className="text-light-100 mb-4">
                {subtitle || defaultSubtitle}
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
                                    <FormLabel className="capitalize">
                                        {FIELD_NAMES[key as keyof typeof FIELD_NAMES]}
                                    </FormLabel>
                                    <FormControl>
                                        <Input 
                                            type={FIELD_TYPES[key as keyof typeof FIELD_TYPES]} 
                                            placeholder={FIELD_PLASHOLDERS[key as keyof typeof FIELD_PLASHOLDERS]} 
                                            className="form-input" 
                                            {...field} 
                                            // Disable autocomplete for password fields
                                            autoComplete={key.toLowerCase().includes('password') ? 'new-password' : 'on'}
                                        />
                                    </FormControl>
                                    
                                    {showFormDescriptions && (
                                        <FormDescription>
                                            {key === 'username' && 'This is your public display name.'}
                                            {key === 'email' && 'We will never share your email with anyone else.'}
                                            {key === 'password' && 'Your password must be at least 8 characters long.'}
                                        </FormDescription>
                                    )}
                                    
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    ))}
                    
                    <Button 
                        type="submit" 
                        className="form-btn w-full" 
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Processing...' : (submitButtonText || defaultButtonText)}
                    </Button>
                </form>
            </Form>

            {form.formState.errors.root && (
                <div className="text-red-500 text-sm mt-2 p-2 bg-red-50 rounded border border-red-200">
                    {form.formState.errors.root.message}
                </div>
            )}

            <p className="text-center text-base font-medium mt-4">
                {type === "SIGN-IN" ? "Don't have an account? " : "Already have an account? "}
                <Link href={type === "SIGN-IN" ? "/sign-up" : "/sign-in"} className="text-primary font-bold hover:underline">
                    {type === "SIGN-IN" ? "Create an account" : "Sign in"}
                </Link>
            </p>
        </div>
    );
};

export default AuthForm;