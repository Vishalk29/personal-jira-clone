"use client";

import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { DottedSaparator } from "@/components/dotted-saparator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";

// ✅ Schema definition
import { loginSchema } from "../schemas";
import { useLogin } from "../api/use-login";

type SignInFormValues = z.infer<typeof loginSchema>;

export const SignInCard: React.FC = () => {
  const { mutate } = useLogin();
  const form = useForm<SignInFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur", // ✅ Validate on blur for better UX
  });

  const handleSubmit = (values: SignInFormValues) => {
    // console.log("Form Values:", values);
    // TODO: Replace with actual API call
    mutate(values);
  };

  return (
    <Card className="w-full h-full md:w-[487px] border-none shadow-none">
      <CardHeader className="flex flex-col items-center text-center p-7">
        <CardTitle className="text-2xl font-semibold">Welcome Back</CardTitle>
      </CardHeader>

      <div className="px-7">
        <DottedSaparator />
      </div>

      <CardContent className="p-7">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-4"
            noValidate
          >
            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="Enter your email address"
                      autoComplete="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password Field */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder="Enter your password"
                      autoComplete="current-password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button type="submit" className="w-full" size="lg">
              Sign In
            </Button>
          </form>
        </Form>
      </CardContent>

      <div className="px-7">
        <DottedSaparator />
      </div>

      <CardContent className="p-7 flex flex-col gap-y-4">
        <Button
          variant="secondary"
          size="lg"
          className="w-full flex items-center justify-center"
        >
          <FcGoogle className="mr-2 size-5" />
          Continue with Google
        </Button>
        <Button
          variant="secondary"
          size="lg"
          className="w-full flex items-center justify-center"
        >
          <FaGithub className="mr-2 size-5" />
          Continue with GitHub
        </Button>
      </CardContent>
      <div className="px-7">
        <DottedSaparator />
      </div>
      <CardContent className="p-7 flex items-center justify-center ">
        <p>
          Don&apos;t Have an Account
          <Link href="/sign-up">
            <span className="text-blue-700">&nbsp;Sign Up</span>
          </Link>
        </p>
      </CardContent>
    </Card>
  );
};
