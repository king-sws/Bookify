'use client';
import { signUp } from '@/actions/auth';
import AuthForm from '@/components/AuthForm';
import { signUpSchema } from '@/lib/Validations';

export default function SignInPage() {

  return (
    <div className="container py-10">
      <AuthForm 
        type="SIGN-UP"
        schema={signUpSchema}
        onSubmit={signUp}
        defaultValues={{
          fullName: '',
          email: '',
          password: ''
        }}
      />
    </div>
  );
}