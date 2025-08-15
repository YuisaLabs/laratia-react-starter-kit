import GuestLayout from "@/components/layouts/guest-layout";
import { Head } from "@inertiajs/react";
import ResetPasswordForm from "@/features/reset-password/ResetPasswordForm";

interface ResetPasswordPageProps {
    token: string;
    email: string;
}

export default function ResetPassword({
    token,
    email,
}: ResetPasswordPageProps) {
    return (
        <GuestLayout>
            <Head title="Reset Password" />

            <ResetPasswordForm token={token} email={email} />
        </GuestLayout>
    );
}
