"use client";
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Corrected import path from 'next/navigation' to 'next/router'
import { signIn } from 'next-auth/react';

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await signIn("credentials", { email, password, redirect: false });

            if (res.error) {
                setError("Invalid credentials");
            } else {
                router.replace("/dashboard"); // Redirect only if there's no error
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="grid place-items-center h-screen">
            <div className="shadow-lg p-5 rounded-lg border-t-4 border-blue-500">
                <h1 className="text-xl font-bold my-4">Login</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3"> {/* Added onSubmit event handler */}
                    <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" />
                    <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                    <button type="submit" className="bg-blue-500 text-white py-2 rounded-lg">
                        Login</button>

                    {error && (<div className="text-red-600">
                        {error}
                    </div>)}

                    <Link href={"/register"}>
                        Don&apos;t have an account? Register here
                    </Link>
                </form>
            </div>
        </div>
    );
}