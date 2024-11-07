import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { Loader } from "lucide-react";
import { cn } from "@/lib/utils";

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
