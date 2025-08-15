import InputError from "@/components/ui/input-error";
import InputLabel from "@/components/ui/input-label";
import PrimaryButton from "@/components/ui/primary-button";
import TextInput from "@/components/ui/text-input";
import { useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function ConfirmPasswordForm() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("password.confirm"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <form onSubmit={submit}>
            <div className="mt-4">
                <InputLabel htmlFor="password" value="Password" />

                <TextInput
                    id="password"
                    type="password"
                    name="password"
                    value={data.password}
                    className="mt-1 block w-full"
                    isFocused={true}
                    onChange={(e) => setData("password", e.target.value)}
                />

                <InputError message={errors.password} className="mt-2" />
            </div>

            <div className="mt-4 flex items-center justify-end">
                <PrimaryButton className="ms-4" disabled={processing}>
                    Confirm
                </PrimaryButton>
            </div>
        </form>
    );
}
