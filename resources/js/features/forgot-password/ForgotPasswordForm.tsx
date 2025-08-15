import InputError from "@/components/ui/input-error";
import PrimaryButton from "@/components/ui/primary-button";
import TextInput from "@/components/ui/text-input";
import { useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function ForgotPasswordForm() {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("password.email"));
    };

    return (
        <form onSubmit={submit}>
            <TextInput
                id="email"
                type="email"
                name="email"
                value={data.email}
                className="mt-1 block w-full"
                isFocused={true}
                onChange={(e) => setData("email", e.target.value)}
            />

            <InputError message={errors.email} className="mt-2" />

            <div className="mt-4 flex items-center justify-end">
                <PrimaryButton className="ms-4" disabled={processing}>
                    Email Password Reset Link
                </PrimaryButton>
            </div>
        </form>
    );
}
