import { useState } from "react";
import { supabase } from "../../supabaseClient";

export default function Signup() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signUp({ email, password });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("ثبت‌نام با موفقیت انجام شد! ایمیل خود را تایید کنید.");
    }
  };

  return (
    <form onSubmit={handleSignup} className="flex flex-col gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="ایمیل"
        className="border p-2 rounded"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        placeholder="رمز عبور"
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-green-500 text-white p-2 rounded">
        ثبت‌نام
      </button>
      {message && <p className="text-red-500">{message}</p>}
    </form>
  );
}
