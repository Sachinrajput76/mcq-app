'use client';


import { useState } from 'react';
import { useRouter } from 'next/navigation';

function LoginPage() {
    const router = useRouter();
    const [form, setForm] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (form.email === "admin@mcq.com" && form.password === "admin@123") {
            localStorage.setItem('isAuthenticated', 'true'); // Save auth state
            router.push("/mcq");
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h2 className="text-2xl font-semibold mb-4">Login</h2>
            <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full px-4 py-2 border rounded"
                />
                <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="w-full px-4 py-2 border rounded"
                />
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded"
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default LoginPage;
