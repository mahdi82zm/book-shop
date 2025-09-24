import { useState } from "react";
import { supabase } from "../../supabaseClient";

export default function ForgotPassword() {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.auth.resetPasswordForEmail(email);

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("ایمیل بازیابی رمز عبور ارسال شد!");
    }
  };

  return (
    <form onSubmit={handleReset} className="flex flex-col gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="ایمیل"
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-yellow-500 text-white p-2 rounded">
        بازیابی رمز
      </button>
      {message && <p className="text-red-500">{message}</p>}
    </form>
  );
}
