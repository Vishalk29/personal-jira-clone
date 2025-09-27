import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { DottedSaparator } from "@/components/dotted-saparator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export const SignUpCard = () => {
  return (
    <Card className="w-full h-full md:w-[487px] border-none shadow-none">
      <CardHeader className="flex items-center justify-center text-center p-7">
        <CardTitle className="text-2xl">Sign Up</CardTitle>
        <CardDescription>
          By signing up , you have agree to our{" "}
          <Link href="/privacy">
            <span className="text-blue-700">Privacy policy</span>
          </Link>{" "}
          and{" "}
          <Link href="/term">
            <span className="text-blue-700">Term of service</span>
          </Link>{" "}
        </CardDescription>
      </CardHeader>
      <div className="px-7">
        <DottedSaparator />
      </div>
      <CardContent className="p-7">
        <form className="space-y-4">
          <Input
            required
            type="text"
            value={""}
            // onChange={() => {}}
            placeholder="Enter your name"
            disabled={false}
          />
          <Input
            required
            type="email"
            value={""}
            // onChange={() => {}}
            placeholder="Enter the email address"
            disabled={false}
          />
          <Input
            required
            type="password"
            value={""}
            // onChange={() => {}}
            placeholder="Enter the password"
            disabled={false}
            min={8}
            max={256}
          />
          <Button className="w-full" size="lg">
            Register
          </Button>
        </form>
      </CardContent>
      <div className="px-7">
        <DottedSaparator />
      </div>
      <CardContent className="p-7 flex flex-col gap-y-4">
        <Button
          variant="secondary"
          size="lg"
          className="w-full"
          disabled={false}
        >
          <FcGoogle className="mr-2 size-5" />
          Login with Google
        </Button>
        <Button
          variant="secondary"
          size="lg"
          className="w-full"
          disabled={false}
        >
          <FaGithub className="mr-2 size-5" />
          Login with GitHub
        </Button>
      </CardContent>
    </Card>
  );
};
