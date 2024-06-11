import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Field, Form, ErrorMessage, Formik } from "formik";
import * as yup from "yup";
import { FadeInSection } from "../modules/FadeInSection";
import hero from "@/public/imgs/hero-bg.jpg";
import Image from "next/image";
import contact from "@/public//contact-pic.webp";

export default function Contact() {
  const [sendStatus, setSendStatus] = useState("SUBMIT");

  const ValidationSchema = yup.object({
    from_name: yup.string().required("* Name field is required"),
    email: yup
      .string()
      .email("Invalid email address")
      .required("* Email field is required"),
    message: yup.string().required("* Message field is required"),
  });

  return (
    <section
      id="contact"
      className="s-contact container-fluid flex flex-col items-center py-16"
      style={{
        backgroundImage: `url(${hero.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="section-title-container">
        <h2 className="section-title-light">CONTACT</h2>
        <div className="section-title-bar" />
      </div>
      <FadeInSection classProps="contact-container m-auto flex items-start justify-center">
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
            const serviceId = "service_elh2eah";

            emailjs
              .send(serviceId, templateId, values, "wgi6cGen04bpt-EVb")
              .then(
                (result) => {
                  setSendStatus("SENT!");
                  alert(
                    `Thank you for your message. I'll get back to you as soon as I can!`,
                  );
                  setSubmitting(false);
                  resetForm();
                  console.log(
                    "Email sent successfully!",
                    result.status,
                    result.text,
                  );
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
              className="contact-form my-10 flex flex-col rounded-md shadow-xl"
              data-netlify="true"
            >
              <div className="contact-form-header flex items-center justify-start gap-6 p-4">
                <Image src={contact.src} alt="contact" width={70} height={70} />
                <div>
                  <div>Have any questions? Want to work together?</div>{" "}
                  <div>I&apos;d love to hear from you!</div>
                </div>
              </div>
              <div className="contact-input-group flex flex-col">
                <div className="flex w-full gap-6">
                  <div className="contact-info-input flex w-full flex-col">
                    <label className="text-light" htmlFor="from_name">
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
                      {(msg) => <span className="text-red ml-3">{msg}</span>}
                    </ErrorMessage>
                  </div>
                  <div className="contact-info-input flex w-full flex-col">
                    <label className="text-light" htmlFor="email">
                      Email
                    </label>
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      className="my-2 rounded px-2 py-1"
                      value={props.values.email}
                      onChange={props.handleChange}
                    />
                    <ErrorMessage name="email">
                      {(msg) => <span className="text-red ml-3">{msg}</span>}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="contact-msg-input flex w-full flex-col">
                  <label className="text-light" htmlFor="message">
                    Message
                  </label>
                  <Field
                    id="message"
                    name="message"
                    as="textarea"
                    className="my-2 resize-y rounded p-2.5"
                    rows={4}
                    value={props.values.message}
                    onChange={props.handleChange}
                  />
                  <ErrorMessage name="message">
                    {(msg) => <span className="text-red ml-3">{msg}</span>}
                  </ErrorMessage>
                </div>
                <button
                  disabled={props.isSubmitting}
                  className={`${
                    props.isSubmitting ? "animate-spin" : ""
                  } btn mx-auto`}
                  type="submit"
                >
                  {sendStatus}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </FadeInSection>
    </section>
  );
}
