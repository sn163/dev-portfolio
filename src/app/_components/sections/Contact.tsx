import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Field, Form, ErrorMessage, Formik } from "formik";
import * as yup from "yup";
import { FadeInSection } from "../ui/FadeInSection";
import hero from "@/public/imgs/hero-bg.jpg";
import Image from "next/image";
import contact from "@/public//contact-pic.webp";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

export default function Contact() {
  const [sendStatus, setSendStatus] = useState("SUBMIT");

  const ValidationSchema = yup.object({
    from_name: yup.string().required("* Name field is required"),
    email: yup.string().email("Invalid email address").required("* Email field is required"),
    message: yup.string().required("* Message field is required"),
  });

  return (
    <section
      id="contact"
      className="w-full scroll-mt-16 overflow-hidden"
      style={{
        backgroundImage: `url(${hero.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container className="min-h-[calc(100vh-11rem)]">
        <div className="section-title-container">
          <h2 className="section-title-light">CONTACT</h2>
          <div className="section-title-bar" />
        </div>
        <FadeInSection classProps="contact-container m-auto flex items-start justify-center shadow">
          <Formik
            initialValues={{
              from_name: "",
              email: "",
              message: "",
            }}
            validationSchema={ValidationSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              setSendStatus("SENDING...");

              const templateId = "template_ykuqq3v";
              const serviceId = "service_rfgjn8i";

              emailjs.send(serviceId, templateId, values, "wgi6cGen04bpt-EVb").then(
                (result) => {
                  setSendStatus("SENT!");
                  alert(`Thank you for your message. I'll get back to you as soon as I can!`);
                  setSubmitting(false);
                  resetForm();
                  console.log("Email sent successfully!", result.status, result.text);
                },
                (error) => {
                  setSendStatus("SEND");
                  setSubmitting(false);
                  console.log("Email failed to send", error.text);
                },
              );
            }}
          >
            {(props) => (
              <Form
                noValidate
                onSubmit={props.handleSubmit}
                className="contact-form flex flex-col rounded-md shadow-lg"
                data-netlify="true"
              >
                <div className="flex select-none items-center justify-start gap-6 p-4 text-base-100">
                  <Image src={contact.src} alt="contact" width={70} height={70} />
                  <div>
                    <div>Have any questions? Want to work together?</div> <div>I&apos;d love to hear from you!</div>
                  </div>
                </div>
                <div className="flex flex-col rounded-xl border-8 border-base-300 bg-[#272727] p-7">
                  <div className="flex w-full gap-6">
                    <div className="flex min-h-24 w-full flex-col">
                      <label className="select-none text-base-100" htmlFor="from_name">
                        Name
                      </label>
                      <Field
                        id="from_name"
                        name="from_name"
                        type="text"
                        className="my-2 rounded bg-base-100 px-2 py-1"
                        value={props.values.from_name}
                        onChange={props.handleChange}
                      />
                      <ErrorMessage name="from_name">
                        {(msg) => <span className="ml-3 select-none text-primary">{msg}</span>}
                      </ErrorMessage>
                    </div>
                    <div className="flex min-h-24 w-full flex-col">
                      <label className="select-none text-base-100" htmlFor="email">
                        Email
                      </label>
                      <Field
                        id="email"
                        name="email"
                        type="email"
                        className="my-2 rounded bg-base-100 px-2 py-1"
                        value={props.values.email}
                        onChange={props.handleChange}
                      />
                      <ErrorMessage name="email">
                        {(msg) => <span className="ml-3 select-none text-primary">{msg}</span>}
                      </ErrorMessage>
                    </div>
                  </div>
                  <div className="flex min-h-44 w-full flex-col">
                    <label className="select-none text-base-100" htmlFor="message">
                      Message
                    </label>
                    <Field
                      id="message"
                      name="message"
                      as="textarea"
                      className="my-2 resize-y rounded bg-base-100 p-2.5"
                      rows={4}
                      value={props.values.message}
                      onChange={props.handleChange}
                    />
                    <ErrorMessage name="message">
                      {(msg) => <span className="ml-3 select-none text-primary">{msg}</span>}
                    </ErrorMessage>
                  </div>
                  <Button
                    disabled={props.isSubmitting}
                    size="sm"
                    className={`${props.isSubmitting ? "animate-spin" : ""} mx-auto`}
                    type="submit"
                  >
                    {sendStatus}
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </FadeInSection>
      </Container>
    </section>
  );
}
