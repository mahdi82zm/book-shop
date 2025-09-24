import React from "react";
import style from "./login.module.css";
import Personlogin from "../images/personlogin.png";
export default function Login() {
  return (
    <div
      className={`${style.loginContainer} flex items-center justify-center  min-h-screen bg-gray-100`}
    >
      <div
        className={`${style.login} flex flex-col md:flex-row  items-center justify-between  bg-white rounded-lg  overflow-hidden w-11/12 md:w-3/4 lg:w-2/3`}
      >
        <div className="form md:w-1/2 p-6   bg-blue-100">
          <h1 className="text-xl font-bold mb-4 text-center ">صفحه ورود </h1>
          <form className="space-y-4">
            <label>
              <h3 className="block font-sans font-bold">ایمیل:</h3>
              <input
                className="w-full  border border-gray-300 focus:ring-blue-500   p-2 rounded"
                type="email"
                name="email"
              />
            </label>
            <label>
              <h3 className="font-sans font-bold block mb-1">رمز عبور:</h3>
              <input
                className="w-full border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 p-2 rounded disabled:border-gray-300 "
                type="password"
                name="password"
              />
            </label>

            <div className="flex items-center justify-between text-sm">
              <label htmlFor="rememberMe" className="flex items-center">
                <input
                  className="mr-2"
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                />
                مرا به خاطر بسپار
              </label>{" "}
              <a href="#" className="text-blue-500 hover:underline">
                فراموشی رمز عبور؟
              </a>
            </div>
            <button
              className=" w-full font-semibold py-2 hover:bg-blue-600 transition rounded "
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 ">
          <img src={Personlogin} alt="Login" className="w-64 h-64 object-contain" />
        </div>
        <div className="p-4">
          <p className="font-sans font-bold">ورود به حساب کاربری</p>
        </div>
      </div>
    </div>
  );
}
