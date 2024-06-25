import LoginForm from "../components/LoginForm";
import Link from "next/link";

export default function Home() {
    return (
        <div className="grid place-items-center h-screen">
            <div>
            Welcome to the home page of Cuvette <br />
            <Link href="/login">Login</Link> <br />
            <Link href="/register">Register</Link> <br />
            Crafted with ❤️ by Harshil Malhtra
            </div>
        </div>
    );
}