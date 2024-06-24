import LoginForm from "../../components/LoginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Login() {
    const session = await getServerSession(authOptions);

    if (session) redirect("/dashboard");
    return (


        <div className="grid place-items-center h-screen">
            <LoginForm />
        </div>
    );
}