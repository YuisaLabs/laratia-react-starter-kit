import GuestLayout from "@/components/layouts/guest-layout";
import { Head } from "@inertiajs/react";
import LoginForm from "@/features/login/LoginForm";

interface LoginPageProps {
    status?: string;
    canResetPassword: boolean;
}

export default function Login({ status, canResetPassword }: LoginPageProps) {
    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <LoginForm canResetPassword={canResetPassword} />
        </GuestLayout>
    );
}
