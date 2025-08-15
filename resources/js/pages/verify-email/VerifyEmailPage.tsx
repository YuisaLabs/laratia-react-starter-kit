import GuestLayout from "@/components/layouts/guest-layout";
import { Head } from "@inertiajs/react";
import VerifyEmailForm from "@/features/verify-email/VerifyEmailForm";

export default function VerifyEmail({ status }: { status?: string }) {
    return (
        <GuestLayout>
            <Head title="Email Verification" />

            <div className="mb-4 text-sm text-gray-600">
                Thanks for signing up! Before getting started, could you verify
                your email address by clicking on the link we just emailed to
                you? If you didn't receive the email, we will gladly send you
                another.
            </div>

            {status === "verification-link-sent" && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    A new verification link has been sent to the email address
                    you provided during registration.
                </div>
            )}

            <VerifyEmailForm />
        </GuestLayout>
    );
}
