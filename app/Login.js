"use client";

import Image from "next/image";
import gambarDiskusi from "./assets/discussion.png";
import { useEffect } from "react";
import LoginService from "@/service/LoginService";
import IsLogin from "@/service/IsLogin";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  useEffect(() => {
    IsLogin(router);
  }, [router]);
  return (
    <>
      <article className="container mx-auto flex h-screen justify-center items-center">
        <div
          className=" bg-primary w-5/6 md:w-[500px] h-[600px] rounded-3xl flex flex-col justify-center items-center"
          id="tempat-form-login"
        >
          <form className="w-full flex flex-col justify-center items-center ">
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
              />
            </div>

            <div className="w-4/5 mt-12">
              <label
                htmlFor="input-password"
                className="self-start text-lg font-bold text-base-100"
              >
                Password
              </label>
              <input
                type="password"
                id="input-password"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
          </form>

          <div className="form-control w-4/5">
            <button
              id="btn-login"
              className="btn text-center font-bold text-warnadua bg-base-100 mt-20 w-full rounded-xl text-xl h-20"
              onClick={async () => {
                let inputEmail = document.querySelector("#input-email").value;
                let inputPassword =
                  document.querySelector("#input-password").value;
                let inputRememberMe =
                  document.querySelector("#input-rememberme").checked;

                await LoginService(inputEmail, inputPassword, inputRememberMe);
              }}
            >
              LOGIN
            </button>
            <label className="label">
              <span className="label-text-alt">
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked="checked"
                      id="input-rememberme"
                      className="checkbox bg-base-100"
                    />
                    <span className="label-text ml-2 text-base-100">
                      Remember me
                    </span>
                  </label>
                </div>
              </span>
              <span className="label-text-alt font-semibold text-base-100 mt-2">
                Forgot Password?
              </span>
            </label>
          </div>
        </div>

        <div className="hidden lg:flex">
          <Image
            src={gambarDiskusi}
            alt="gambar-diskusi"
            width={700}
            height={300}
            priority={true}
          />
        </div>
      </article>
    </>
  );
}
