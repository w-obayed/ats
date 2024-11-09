import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { Loader } from "lucide-react";
import { cn } from "@/lib/utils";
import GitHubLogo from "@/public/github.svg";
import GoogleLogo from "@/public/Google.svg";
import Image from "next/image";

export function SubmitButton({ text, variant, className }) {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled variant="outline" className={cn("w-fit", className)}>
          <Loader className="size-4 mr-2 animate-spin" /> Please wait
        </Button>
      ) : (
        <Button
          type="submit"
          variant={variant}
          className={cn("w-fit", className)}
        >
          {text}
        </Button>
      )}
    </>
  );
}

export function GoogleAuthButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled variant="outline" className="w-full">
          <Loader className="size-4 mr-2 animate-spin" />
          Please wait
        </Button>
      ) : (
        <Button variant="outline" className="w-full text-xl">
          <Image src={GoogleLogo} alt="Google" className="size-4 mr-2" />
          Sign in with Google
        </Button>
      )}
    </>
  );
}

export function GitHubAuthButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled variant="outline" className="w-full">
          <Loader className="size-4 mr-2 animate-spin" />
          Please wait
        </Button>
      ) : (
        <Button variant="outline" className="w-full text-xl">
          <Image src={GitHubLogo} alt="GitHub" className="size-4 mr-2" />
          Sign in with GitHub
        </Button>
      )}
    </>
  );
}
