"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Button from "../ui/Custom/Button";
import { Form } from "../ui/form";
import FormField from "./FormField";

const contactFormSchema = () => {
  return z.object({
    name: z.string().min(3),
    email: z.string().email(),
    subject: z.string().min(3),
    message: z.string().min(20),
  });
};

const ContactForm = () => {
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

  return (
    <div className="w-full bg-card py-16 px-8 rounded-xl">
      <Form {...form}>
        <form
          //   onSubmit={form.handleSubmit(onSubmit)}
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
          </div>
          <div className="col-span-12 lg:col-span-6">
            <FormField
              control={form.control}
              name="email"
              label="E-mail"
              placeholder="Your Email"
              type="email"
            />
          </div>
          <div className="col-span-12">
            <FormField
              control={form.control}
              name="subject"
              label="Subject"
              placeholder="Subject"
              type="text"
            />
          </div>
          <div className="col-span-12">
            <FormField
              control={form.control}
              name="message"
              label="Message"
              placeholder="Write your message"
              textarea // <- optional prop to toggle textarea mode
            />
          </div>
          {/* ========== btn ============= */}
          <div className="col-span-12">
            <Button title="Send Message" type="filed" />
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
