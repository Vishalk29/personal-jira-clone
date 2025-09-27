"use client";

import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { DottedSaparator } from "@/components/dotted-saparator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// ✅ Define schema
const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Minimum of 8 characters"),
});

// ✅ Type inference from schema
type SignUpFormValues = z.infer<typeof formSchema>;

export const SignUpCard = () => {
  // ✅ Setup react-hook-form with Zod resolver
  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  // ✅ Handle form submission
  const onSubmit = (values: SignUpFormValues) => {
    console.log("Form submitted:", values);
    // Here you can call your API or mutation
  };

  return (
    <Card className="w-full h-full md:w-[487px] border-none shadow-none">
      {/* Header */}
      <CardHeader className="flex items-center justify-center text-center p-7">
        <CardTitle className="text-2xl">Sign Up</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          By signing up, you agree to our{" "}
          <Link href="/privacy" className="text-blue-700 hover:underline">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/term" className="text-blue-700 hover:underline">
            Terms of Service
          </Link>
        </CardDescription>
      </CardHeader>

      {/* Separator */}
      <div className="px-7">
        <DottedSaparator />
      </div>

      {/* Form */}
      <CardContent className="p-7">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Name Field */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Enter your name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

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
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit */}
            <Button type="submit" className="w-full" size="lg">
              Sign Up
            </Button>
          </form>
        </Form>
      </CardContent>

      {/* Separator */}
      <div className="px-7">
        <DottedSaparator />
      </div>

      {/* Social logins */}
      <CardContent className="p-7 flex flex-col gap-y-4">
        <Button variant="secondary" size="lg" className="w-full">
          <FcGoogle className="mr-2 size-5" />
          Continue with Google
        </Button>
        <Button variant="secondary" size="lg" className="w-full">
          <FaGithub className="mr-2 size-5" />
          Continue with GitHub
        </Button>
      </CardContent>
    </Card>
  );
};
