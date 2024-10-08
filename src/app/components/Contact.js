import { useEffect, useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import SpinnerSVG from "../../../public/assets/spinner.svg";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact({ closeMessenger }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSendingMail, setIsSendingMail] = useState(false);
  const [responseMessage, setResponseMessage] = useState(false);
  const [reCaptcha, setReCaptcha] = useState(null);
  const [showReCaptcha, setShowReCaptcha] = useState(false);

  //* delays render of reCaptcha due to laggy animation issues when rendering contact.js
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setShowReCaptcha(true);
    }, 350);

    return () => clearTimeout(timeOut);
  }, []);

  //* clears response message after 5s
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setResponseMessage(false);
    }, 5000);

    return () => clearTimeout(timeOut);
  }, [responseMessage]);

  // * handles Success and Error Messages
  function handleResponseMessage(text, error) {
    setResponseMessage({ text, error });
  }

  function changeFormData(prop, data) {
    setFormData({ ...formData, [prop]: data });
  }

  // * onSubmit
  async function sendEmail(event) {
    event.preventDefault();

    try {
      setIsSendingMail(true);
      const response = await fetch(`/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSendingMail(false);
        handleResponseMessage("Nachricht erfolgreich gesendet");
        setFormData({});
        event.target.reset();
      } else {
        const error = await response.json();
        setIsSendingMail(false);
        handleResponseMessage("Fehler beim Senden. Öffne Konsole", true);
        console.error(error);
      }
    } catch (error) {
      setIsSendingMail(false);
      handleResponseMessage("Fehler beim Senden. Öffne Konsole", true);
      console.error("Failed to send message:", error);
    }
  }

  // * shared styled from Form-Elements
  const inputFieldStyles = `border-2 text-sm border-gray-300 rounded w-full bg-slate-200`;
  const labelStyles = `w-full text-sm `;
  const containerStyles = `flex flex-col items-center w-full`;
  const requiredStyles = ` after:text-colorPreset6 after:content-["*"]`;

  // * disables button when input invalid
  const disableButton =
    !formData.email ||
    !formData.message ||
    formData.message.trim() === "" ||
    !reCaptcha;

  return (
    <div
      className={`fixed inset-0 z-20 flex h-screen w-screen flex-col items-center justify-center bg-gray-700 bg-opacity-90`}
    >
      <IoMdCloseCircle
        onClick={() => closeMessenger()}
        className={`fill-colorPreset6 absolute right-5 top-5 size-8`}
      />
      <motion.div
        initial={{ scale: 0, opacity: 0, y: 200 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={`size-5/6 overflow-x-hidden overflow-y-scroll rounded-xl bg-colorPreset2 text-colorPreset1`}
      >
        <form
          onSubmit={(event) => {
            sendEmail(event);
          }}
          className="flex w-full flex-col items-center justify-start gap-6 p-4"
        >
          <div className={containerStyles}>
            <label htmlFor="name" className={labelStyles}>
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Dein Name..."
              onChange={(event) => {
                changeFormData(event.target.name, event.target.value);
              }}
              className={inputFieldStyles}
            />
          </div>
          <div className={containerStyles}>
            <label htmlFor="email" className={labelStyles + requiredStyles}>
              E-Mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Deine Email-Adresse..."
              required
              onChange={(event) => {
                changeFormData(event.target.name, event.target.value);
              }}
              className={inputFieldStyles}
            />
          </div>
          <div className={`relative ` + containerStyles}>
            <label htmlFor="message" className={labelStyles + requiredStyles}>
              Nachricht
            </label>
            <textarea
              type="text"
              name="message"
              id="message"
              placeholder="Deine Nachricht..."
              required
              onChange={(event) => {
                changeFormData(event.target.name, event.target.value);
              }}
              className={`h-52 ` + inputFieldStyles}
            />
            <AnimatePresence>
              {responseMessage && (
                <motion.p
                  initial={{ scale: 0, y: 30, opacity: 0 }}
                  animate={{ scale: 1, y: 0, opacity: 1 }}
                  exit={{ scale: 0, y: 30, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className={`${responseMessage.error ? `border-colorPreset6 text-colorPreset6` : `border-colorPreset5 text-colorPreset5`} absolute -bottom-12 text-nowrap rounded border-2 p-2 text-sm`}
                >
                  {responseMessage.text}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
          <motion.button
            initial={{ marginTop: 0 }}
            animate={{ marginTop: responseMessage ? "2rem" : 0 }}
            transition={{ duration: 0.5 }}
            disabled={disableButton}
            type="submit"
            className={`bg-colorPreset5 flex w-32 justify-center rounded-xl p-2 text-colorPreset2 disabled:opacity-50`}
          >
            {isSendingMail ? (
              <SpinnerSVG className={`size-6 fill-colorPreset2`} />
            ) : (
              "Absenden"
            )}
          </motion.button>
          {showReCaptcha && (
            <ReCAPTCHA
              onChange={(event) => setReCaptcha(event)}
              sitekey="6LfRE1sqAAAAAAQwwPFFfOjmzD3pR8JjPXttLSCj"
            />
          )}
        </form>
      </motion.div>
    </div>
  );
}
