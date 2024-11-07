"use client";
import { SubmitButton } from "@/components/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";
import { signup } from "../actions/auths";

const SignupForm = () => {
  const [state, action] = useFormState(signup, undefined);
  return (
    <>
      <div className="flex w-full h-screen justify-center items-center">
        <Card className="w-[440px] ">
          <CardHeader>
            <CardTitle>
              <h2 className="text-center text-4xl">SignUp</h2>
            </CardTitle>
          </CardHeader>
          <CardContent asChild>
            <h3 className="text-3xl">Create an account</h3>
            <form action={action}>
              <div className="mt-3">
                <Label className="text-xl leading-6" htmlFor="name">
                  name
                </Label>
                <input
                  className="w-full bg-slate-100 py-2 px-4 rounded focus:outline-none"
                  name="name"
                  type="name"
                  placeholder="name"
                />
              </div>
              {state?.errors?.name && <p>{state.errors.name}</p>}
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
              {state?.errors?.name && <p>{state.errors.name}</p>}
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
              {state?.errors?.name && <p>{state.errors.name}</p>}
              <div className="mt-3">
                <SubmitButton text="Sign Up" className="w-full text-xl" />
                {/* <submitButton text="Sign Up" className="w-full text-xl" /> */}
              </div>
            </form>
            <p className="flex justify-between mt-4 text-1xl">
              Already have an account.{" "}
              <Link className="underline text-emerald-700" href="/login">
                Login
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default SignupForm;
