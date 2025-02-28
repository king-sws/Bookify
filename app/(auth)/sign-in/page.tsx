"use client";
import { signInSchema } from '@/lib/Validations';
import AuthForm from '@/components/AuthForm';
import { signInWithCredentials } from '@/actions/auth';

export default function SignInPage() {
  return (
    <div className="container py-10">
      <AuthForm
        type="SIGN-IN"
        schema={signInSchema}  // Add this line
        onSubmit={signInWithCredentials}
        defaultValues={{
          email: '',
          password: ''
        }}
      />
    </div>
  );
}