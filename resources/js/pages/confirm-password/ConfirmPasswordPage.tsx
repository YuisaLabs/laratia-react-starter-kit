import GuestLayout from "@/components/layouts/guest-layout";
import { Head } from "@inertiajs/react";
import ConfirmPasswordForm from "@/features/confirm-password/ConfirmPasswordForm";

export default function ConfirmPassword() {
    return (
        <GuestLayout>
            <Head title="Confirm Password" />

            <div className="mb-4 text-sm text-gray-600">
                This is a secure area of the application. Please confirm your
                password before continuing.
            </div>

            <ConfirmPasswordForm />
        </GuestLayout>
    );
}
