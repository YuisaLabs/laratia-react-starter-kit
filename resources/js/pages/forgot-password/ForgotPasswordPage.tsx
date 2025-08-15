import GuestLayout from "@/components/layouts/guest-layout";
import { Head } from "@inertiajs/react";

export default function ForgotPassword({ status }: { status?: string }) {
    return (
        <GuestLayout>
            <Head title="Forgot Password" />

            <div className="mb-4 text-sm text-gray-600">
                Forgot your password? No problem. Just let us know your email
                address and we will email you a password reset link that will
                allow you to choose a new one.
            </div>

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}
        </GuestLayout>
    );
}
