import GuestLayout from "@/components/layouts/guest-layout";
import { Head } from "@inertiajs/react";
import RegisterForm from "@/features/register/RegisterForm";

export default function Register() {
    return (
        <GuestLayout>
            <Head title="Register" />

            <RegisterForm />
        </GuestLayout>
    );
}
