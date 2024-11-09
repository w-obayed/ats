"use client";

import {
  GitHubAuthButton,
  GoogleAuthButton,
  SubmitButton,
} from "@/components/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useFormState } from "react-dom";
import { GithubLogin, GoogleLogin, login } from "../actions/auths";

const LoginForm = () => {
  const [state, action] = useFormState(login, undefined);

  return (
    <>
      <div className="flex w-full h-screen justify-center items-center">
        <Card className="w-[440px] ">
          <CardHeader>
            <CardTitle>
              <h2 className="text-center text-4xl">Login</h2>
            </CardTitle>
          </CardHeader>
          <CardContent asChild>
            <h3 className="text-3xl">Login in your account!</h3>
            <form action={action}>
              <div className="mt-3">
                <Label className="text-xl leading-6" htmlFor="email">
                  email
                </Label>
                <input
                  className="w-full bg-slate-100 py-2 px-4 rounded focus:outline-none"
                  name="email"
                  type="email"
                  placeholder="email"
                />
              </div>
              <div className="mt-3">
                <Label className="text-xl leading-6" htmlFor="password">
                  password
                </Label>
                <input
                  className="w-full bg-slate-100 py-2 px-4 rounded focus:outline-none"
                  name="password"
                  type="password"
                  placeholder="password"
                />
              </div>
              <div className="mt-3">
                <SubmitButton text="Login" className="w-full text-xl" />
              </div>
            </form>
            <p className="flex justify-between mt-4 text-1xl">
              Don't have an account?{" "}
              <Link className="underline text-emerald-700" href="/signup">
                Sign up
              </Link>
            </p>
            <p className="py-5 text-xl uppercase before:block text-center relative before:absolute before:top-[50%] before:left-0 before:w-[45%] before:h-[1px] before:bg-gray-700 after:absolute after:top-[50%] after:right-0 after:w-[45%] after:h-[1px] after:bg-gray-700">
              or
            </p>
            <div>
              <form action={GoogleLogin} className="w-full">
                <GoogleAuthButton />
              </form>
              <form action={GithubLogin} className="w-full space-y-5">
                <GitHubAuthButton />
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default LoginForm;
