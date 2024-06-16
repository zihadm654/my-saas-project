"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";

import { Icons } from "../shared/icons";

export const Social = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });
  };
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState<boolean>(false);
  const [isGithubLoading, setIsGithubLoading] = useState<boolean>(false);

  return (
    // <div className="flex w-full items-center gap-x-2">
    //   <Button
    //     size="lg"
    //     className="w-full"
    //     variant="outline"
    //     onClick={() => onClick("google")}
    //   >
    //     {/* <FcGoogle className='h-5 w-5' /> */}
    //   </Button>
    //   <Button
    //     size="lg"
    //     className="w-full"
    //     variant="outline"
    //     onClick={() => onClick("github")}
    //   >
    //     {/* <FaGithub className='h-5 w-5' /> */}
    //   </Button>
    // </div>
    <>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <div className="flex items-center justify-around">
        <Button
          type="button"
          className={cn(buttonVariants({ variant: "outline" }))}
          onClick={() => {
            setIsGoogleLoading(true);
            signIn("google");
          }}
          disabled={isLoading || isGoogleLoading}
        >
          {isGoogleLoading ? (
            <Icons.spinner className="mr-2 size-4 animate-spin" />
          ) : (
            <Icons.google className="mr-2 size-4" />
          )}{" "}
          Google
        </Button>
        <Button
          type="button"
          className={cn(buttonVariants({ variant: "outline" }))}
          onClick={() => {
            setIsGithubLoading(true);
            signIn("github");
          }}
          disabled={isLoading || isGithubLoading}
        >
          {isGithubLoading ? (
            <Icons.spinner className="mr-2 size-4 animate-spin" />
          ) : (
            <Icons.gitHub className="mr-2 size-4" />
          )}{" "}
          Github
        </Button>
      </div>
    </>
  );
};
