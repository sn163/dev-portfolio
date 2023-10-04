import { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import * as yup from "yup";

export default function Contact() {
  const [sendStatus, setSendStatus] = useState("SEND");

  const formik = useFormik({
    initialValues: {
      from_name: "",
      email: "",
      message: "",
    },
    validationSchema: yup.object({
      from_name: yup.string().required("* Name field is required"),
      email: yup
        .string()
        .email("Invalid email address")
        .required("* Email field is required"),
      message: yup.string().required("* Message field is required"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setSendStatus("SENDING...");

      const templateId = "template_ykuqq3v";
      const serviceId = "service_elh2eah";

      emailjs.send(serviceId, templateId, values, "wgi6cGen04bpt-EVb").then(
        (result) => {
          setSendStatus("SENT!");
          alert(
            `Thank you for your message. I'll get back to you as soon as I can!`
          );
          setSubmitting(false);
          resetForm();
          console.log("Email sent successfully!", result.status, result.text);
        },
        (error) => {
          setSendStatus("SEND");
          setSubmitting(false);
          console.log("Email failed to send", error.text);
        }
      );
    },
  });

  return (
    <Container id="contact" className="s-contact target-section" fluid>
      <div className="flex w-full h-full items-start justify-center">
        <Form
          noValidate
          onSubmit={formik.handleSubmit}
          className="contact-form flex flex-col w-full max-w-4xl my-20 p-10 rounded-xl space-y-2"
        >
          <div className="flex space-x-8">
            <Form.Group className="mb-3 w-full" controlId="from_name">
              <Form.Label className="text-light">Name</Form.Label>
              <Form.Control
                name="from_name"
                size="lg"
                type="text"
                value={formik.values.from_name}
                onChange={formik.handleChange}
                isValid={formik.touched.from_name && !formik.errors.from_name}
                isInvalid={!!formik.errors.from_name}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                * Name field is required
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3 w-full" controlId="email">
              <Form.Label className="text-light">Email</Form.Label>
              <Form.Control
                name="email"
                size="lg"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                isValid={formik.touched.email && !formik.errors.email}
                isInvalid={!!formik.errors.email}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                * Email field is required or invalid
              </Form.Control.Feedback>
            </Form.Group>
          </div>
          <Form.Group className="mb-3" controlId="message">
            <Form.Label className="text-light">Message</Form.Label>
            <Form.Control
              name="message"
              size="lg"
              as="textarea"
              rows={8}
              value={formik.values.message}
              onChange={formik.handleChange}
              isValid={formik.touched.message && !formik.errors.message}
              isInvalid={!!formik.errors.message}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              * Message field is required
            </Form.Control.Feedback>
          </Form.Group>
          <div className="flex justify-center items-center">
            <Button
              disabled={formik.isSubmitting}
              size="lg"
              className="btn-outline w-fit"
              type="submit"
            >
              {sendStatus}
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
}
