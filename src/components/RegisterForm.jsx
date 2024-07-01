"use client";
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
export default function RegisterForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const role = "user" ; // ["user", "admin"]
    const japply = [] ; 
    const [error, setError] = useState("");
    const router = useRouter(); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !email || !password) {
            setError("Please fill all fields");
            return;
        }
        try {

            const resUserExists = await fetch("/api/userExists", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            const { user } = await resUserExists.json();

            if (user) {
                setError("User already exists");
                return;
            }

            const res = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, email, password, role, japply})
            });
            if (res.ok) {
                console.log("User registered");
                const form = e.target;
                form.reset();
                router.push("/login");
            }
            else {
                console.log("error in registration", error)
            }
        } catch (error) { }
    };



    return (
        <div className="grid place-items-center h-screen">
            <div className="shadow-lg p-5 rounded-lg border-t-4 border-blue-500">
                <h1 className="text-xl font-bold my-4">Register</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" />
                    <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" />
                    <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                    <button type="submit" className="bg-blue-500 text-white py-2 rounded-lg">
                        Register</button>
                    {error && (
                        <div className="text-red-600">
                            {error}
                        </div>
                    )}
                    <Link href={"/login"}>
                        Don&apos;t have an account? Login here
                    </Link>
                </form>
            </div>

        </div>
    );
}