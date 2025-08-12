"use client";
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { Form } from "../ui/form";
import FormField from "./FormField";
import CustomButton from "../ui/Custom/Button";

const contactFormSchema = () => {
  return z.object({
    name: z.string().min(3, { message: "Name must be at least 3 characters" }),
    email: z.string().email({ message: "Invalid email address" }),
    subject: z
      .string()
      .min(3, { message: "Subject must be at least 3 characters" }),
    message: z
      .string()
      .min(30, { message: "Message must be at least 30 characters" }),
  });
};

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const formSchema = contactFormSchema();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const { name, email, subject, message } = values;
    try {
      setLoading(true);

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID as string,
        {
          from_name: name,
          from_email: email,
          message: message,
          subject: subject,
        },
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_ID as string
      );
      form.reset();
      toast.success("Message sent successfully!");
      setLoading(false);
    } catch (error: unknown) {
      console.log(error);
      setLoading(false);
      toast.error("Some went wrong!");
    }
  };

  return (
    <div className="w-full bg-card py-16 px-8 rounded-xl">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6 mt-4 grid grid-cols-12 gap-6"
        >
          {" "}
          <div className="col-span-12 lg:col-span-6">
            <FormField
              control={form.control}
              name="name"
              label="Name"
              placeholder="Your Name"
            />
            {form?.formState?.errors?.name?.message && (
              <p className="text-xl text-red-600 mt-3 font-dm-serif">
                {form?.formState?.errors?.name?.message}
              </p>
            )}
          </div>
          <div className="col-span-12 lg:col-span-6">
            <FormField
              control={form.control}
              name="email"
              label="E-mail"
              placeholder="Your Email"
              type="email"
            />
            {form?.formState?.errors?.email?.message && (
              <p className="text-xl text-red-600 mt-3 font-dm-serif">
                {form?.formState?.errors?.email?.message}
              </p>
            )}
          </div>
          <div className="col-span-12">
            <FormField
              control={form.control}
              name="subject"
              label="Subject"
              placeholder="Subject"
              type="text"
            />
            {form?.formState?.errors?.subject?.message && (
              <p className="text-xl text-red-600 mt-3 font-dm-serif">
                {form?.formState?.errors?.subject?.message}
              </p>
            )}
          </div>
          <div className="col-span-12">
            <FormField
              control={form.control}
              name="message"
              label="Message"
              placeholder="Write your message"
              textarea // <- optional prop to toggle textarea mode
            />
            {form?.formState?.errors?.message?.message && (
              <p className="text-xl text-red-600 mt-3 font-dm-serif">
                {form?.formState?.errors?.message?.message}
              </p>
            )}
          </div>
          {/* ========== btn ============= */}
          <div className="col-span-12">
            <CustomButton
              title={loading ? "Sending..." : "Send Message"}
              loading={loading}
              type="filed"
            />
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
