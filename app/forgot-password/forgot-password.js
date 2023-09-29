// forgotpassword.js
import React, { useState } from "react";
import Link from "next/link";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleResetPassword = async () => {
    // Jika Anda ingin menambahkan logika reset password tanpa penggunaan router, Anda dapat melakukannya di sini
    // Misalnya, mengirim email dengan instruksi reset password
    // Setelah berhasil, Anda bisa mengatur pesan seperti berikut:
    setMessage("Email with reset instructions sent.");
  };

  return (
    <div className="container mx-auto flex h-screen justify-center items-center">
      <div
        className="bg-primary w-5/6 md:w-[500px] h-[600px] rounded-3xl flex flex-col justify-center items-center"
        id="tempat-form-login"
      >
        <form className="w-full flex flex-col justify-center items-center">
          <div className="w-4/5">
            <label
              htmlFor="input-email"
              className="self-start text-lg font-bold text-base-100"
            >
              Email
            </label>{" "}
            <br></br>
            <input
              type="email"
              id="input-email"
              placeholder="Type here"
              className="input input-bordered w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-control w-4/5">
            <button
              id="btn-reset-password"
              className="btn text-center font-bold text-warnadua bg-base-100 mt-20 w-full rounded-xl text-xl h-20"
              onClick={handleResetPassword}
            >
              Reset Password
            </button>
            <label className="label">
              <span className="label-text-alt">
                <div className="form-control">
                  <span className="label-text ml-2 text-base-100">
                    <Link href="/">Back to Login</Link>
                  </span>
                </div>
              </span>
            </label>
          </div>
          {message && <p className="text-red-500 mt-2">{message}</p>}
        </form>
      </div>
    </div>
  );
}
