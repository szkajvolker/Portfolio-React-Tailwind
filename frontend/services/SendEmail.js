import dotenv from "dotenv";
import emailjs from "@emailjs/browser";

dotenv.config();

export function sendEmail({ name, email, message }) {
  const serviceId = import.meta.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  const templateParams = {
    from_name: name,
    from_email: email,
    to_name: "myself",
    message: message,
  };

  return emailjs.send(serviceId, templateId, templateParams, publicKey);
}
