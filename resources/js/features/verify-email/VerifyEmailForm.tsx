import PrimaryButton from "@/components/ui/primary-button";
import { Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function VerifyEmailForm() {
    const { post, processing } = useForm({});

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("verification.send"));
    };
    
    return (
        <form onSubmit={submit}>
            <div className="mt-4 flex items-center justify-between">
                <PrimaryButton disabled={processing}>
                    Resend Verification Email
                </PrimaryButton>

                <Link
                    href={route("logout")}
                    method="post"
                    as="button"
                    className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Log Out
                </Link>
            </div>
        </form>
    );
}
