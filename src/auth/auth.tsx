import { useState } from "react";
import Login from "./forms/login";
import Signup from "./forms/signup"; 
import ForgotPassword from "./forms/forgetpassword";
import style from "./login.module.css";
import Personlogin from "../images/personlogin.png";

export default function Auth() {
  const [formType, setFormType] = useState<"login" | "signup" | "forgot">("login");

  return (
    <div className={`${style.loginContainer} flex flex-col items-center justify-center min-h-screen bg-gray-100`}>
      <h2 className="m-2 text-4xl p-6 ">ورود / ثبت‌نام</h2>
      <div className={`${style.login} flex flex-col md:flex-row items-center justify-between bg-white rounded-lg overflow-hidden w-11/12 md:w-3/4 lg:w-2/3`}>
        
        {/* فرم */}
        <div className="form md:w-1/2 p-6 bg-blue-100">
          {formType === "login" && <Login />}
          {formType === "signup" && <Signup />}
          {formType === "forgot" && <ForgotPassword />}

          {/* لینک تغییر فرم */}
          <div className="mt-4 text-center">
            {formType !== "login" && (
              <button onClick={() => setFormType("login")} className="text-blue-500 underline mr-2">
                ورود
              </button>
            )}
            {formType !== "signup" && (
              <button onClick={() => setFormType("signup")} className="text-blue-500 underline mr-2">
                ثبت‌نام
              </button>
            )}
            {formType !== "forgot" && (
              <button onClick={() => setFormType("forgot")} className="text-blue-500 underline">
                فراموشی رمز
              </button>
            )}
          </div>
        </div>

        {/* عکس */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6">
          <img src={Personlogin} alt="Login" className="w-64 h-64 object-contain" />
        </div>
      </div>
    </div>
  );
}
