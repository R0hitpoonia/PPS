"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { json } from "stream/consumers";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.string().min(0).email().optional(),
  contact: z
    .string()
    .min(10, "Contact number must be at least 10 digits")
    .max(13, "Contact number can't be longer than 13 digits"), // Adjust min and max according to your specific phone number format requirements
  company: z.string().min(2, "Company name must be at least 2 characters long"),
  designation: z.string().min(0).optional(),
  industry: z.string().min(0).optional(),
  socials: z.string().min(0).optional(),
});

export function ProfileForm() {
  const [load, setLoad] = useState<boolean>(true);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      contact: "",
      company: "",
      designation: "",
      email: "",
      industry: "",
      socials: "",
    },
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful },
  } = form;
  useEffect(() => {
    setLoad(true);
    if (isSubmitSuccessful) {
      reset();
    }
    setLoad(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    try {
      const input = {
        Name: values.name,
        Email: values.email,
        Contact: values.contact,
        Company: values.company,
        Designation: values.designation,
        Industry: values.industry,
        Socials: values.socials,
      };
      const data = fetch("https://pps-0bf1.onrender.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      }).then((res) => res.json());

      data.then((res) => {
        console.log(res);
        if (res.message == "success") {
          toast({
            title: "Success",
            description: "Your response has been recorded",
            duration: 5000,
          });
        }
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong",
        duration: 2000,
      });
    }
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <div className="flex flex-row items-center gap-3">
                <FormLabel>Name</FormLabel>
                <FormMessage />
              </div>
              <FormControl>
                <Input placeholder="Your name." {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <div className="flex flex-row items-center gap-3">
                <FormLabel>Email</FormLabel>
                <FormMessage />
              </div>
              <FormControl>
                <Input placeholder="Email Address" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contact"
          render={({ field }) => (
            <FormItem>
              <div className="flex flex-row items-center gap-3">
                <FormLabel>Contact No.</FormLabel>
                <FormMessage />
              </div>
              <FormControl>
                <Input placeholder="Mobile No." {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <div className="flex flex-row items-center gap-3">
                <FormLabel>Company</FormLabel>
                <FormMessage />
              </div>
              <FormControl>
                <Input placeholder="Company Name" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="socials"
          render={({ field }) => (
            <FormItem>
              <div className="flex flex-row items-center gap-3">
                <FormLabel>Social Media</FormLabel>
                <FormMessage />
              </div>
              <FormControl>
                <Input placeholder="Social Media Link" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="industry"
          render={({ field }) => (
            <FormItem>
              <div className="flex flex-row items-center gap-3">
                <FormLabel>Industry</FormLabel>
                <FormMessage />
              </div>
              <FormControl>
                <Input placeholder="Your Industry." {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="designation"
          render={({ field }) => (
            <FormItem>
              <div className="flex flex-row items-center gap-3">
                <FormLabel>Your Designation.</FormLabel>
                <FormMessage />
              </div>
              <FormControl>
                <Input placeholder="Your Industry." {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button className="w-full text-center" type="submit" disabled={load}>
          {load ? "Loading..." : "Submit"}
        </Button>
      </form>
    </Form>
  );
}
