"use client";

import { SubmitButton } from "@/components/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";
import { login } from "../actions/auths";

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
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default LoginForm;
