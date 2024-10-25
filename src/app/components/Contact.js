import { useEffect, useRef, useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import SpinnerSVG from "../../../public/assets/spinner.svg";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import FocusTrap from "focus-trap-react";
import { doc } from "prettier";

export default function Contact({ closeMessenger }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSendingMail, setIsSendingMail] = useState(false);
  const [responseMessage, setResponseMessage] = useState(false);
  const [reCaptchaValid, setReCaptchaValid] = useState(false);
  const [showReCaptcha, setShowReCaptcha] = useState(false);

  const dialogRef = useRef();

  //* showModal() on dialog not possible because google challenge validation gets stuck behind modal-Dialog
  //* focus-trap
  useEffect(() => {
    const focusableElements = dialogRef.current.querySelectorAll(
      'button, input, svg, textarea, [href], [tabindex]:not([tabindex="-1"]',
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    function handleTabKey(event) {
      if (event.key === "Tab") {
        if (event.shiftKey && document.activeElement === firstElement) {
          lastElement.focus();
          event.preventDefault();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          firstElement.focus();
          event.preventDefault();
        }
      }
    }

    firstElement.focus();
    document.addEventListener("keydown", handleTabKey);
    return () => document.removeEventListener("keydown", handleTabKey);
  }, []);

  //* delays render of reCaptcha because of laggy animation issues when rendering contact.js
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setShowReCaptcha(true);
    }, 800);

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

  //* handles reCaptcha-Validation
  async function onRecaptchaChange(value) {
    try {
      const response = await axios.post("/api/contact/verifyReCaptcha", {
        token: value,
      });
      if (response.statusText === "OK") setReCaptchaValid(true);
    } catch (error) {
      setReCaptchaValid(false);
      console.error("reCaptcha validation failed:", error);
    }
  }

  console.log(reCaptchaValid);

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
  const inputFieldStyles = `border-2 border-gray-300 rounded w-full bg-slate-200`;
  const labelStyles = `w-full`;
  const containerStyles = `flex flex-col items-center w-full text-[1rem] md:text-lg lg-portrait:text-2xl`;
  const requiredStyles = ` after:text-colorPreset6 after:content-["*"]`;

  // * disables button when input or reCaptcha invalid
  const disableButton =
    !formData.email ||
    !formData.message ||
    formData.message.trim() === "" ||
    !reCaptchaValid;

  return (
    <dialog
      open
      ref={dialogRef}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          closeMessenger();
        }
      }}
      className={`fixed inset-0 flex h-dvh items-center justify-center overflow-visible bg-gray-700 bg-opacity-90`}
    >
      <motion.div
        initial={{ scale: 0, opacity: 0, y: 200 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={`relative size-[90%] max-h-[700px] max-w-[1000px] overflow-x-hidden overflow-y-scroll rounded-xl bg-colorPreset2 text-colorPreset1 lg-portrait:max-h-[800px]`}
      >
        <IoMdCloseCircle
          onKeyDown={(event) => {
            if (event.code === "Enter") {
              closeMessenger();
            }
          }}
          aria-label="Close Modal"
          tabIndex={0}
          className={`absolute right-0 top-0 z-20 size-8 cursor-pointer fill-colorPreset6 hover:scale-110 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500`}
          onClick={() => closeMessenger()}
        />
        <form
          onSubmit={(event) => {
            sendEmail(event);
          }}
          className="relative flex h-full w-full flex-col items-center justify-start gap-6 overflow-x-hidden overflow-y-scroll p-4"
        >
          <div className={containerStyles + ` `}>
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
          <div className={containerStyles + ` `}>
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
          <div className={`relative h-full ` + containerStyles}>
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
              className={`h-full ` + inputFieldStyles}
            />
            <div
              className={`mt-1 flex w-full items-start justify-start gap-1 text-xs`}
            >
              <input
                id="privacy policy"
                name="privacy policy"
                required
                type="checkbox"
              />
              <label htmlFor="privacy policy">
                Hiermit stimme ich zu, dass die Angaben des Formulars als E-Mail
                zum Websiten Ersteller gesendet werden.{" "}
                <a
                  href="/assets/Datenschutz.pdf"
                  className={`text-cyan-700 underline`}
                  target="_blank"
                >
                  Datenschutzrechtlinien
                </a>{" "}
              </label>
            </div>
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
            className={`flex w-32 justify-center rounded-xl bg-colorPreset5 p-2 text-colorPreset2 disabled:opacity-50 md:w-40 md:text-xl`}
          >
            {isSendingMail ? (
              <SpinnerSVG className={`size-6 fill-colorPreset2`} />
            ) : (
              "Absenden"
            )}
          </motion.button>
          {showReCaptcha && (
            <ReCAPTCHA
              onChange={(event) => onRecaptchaChange(event)}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY}
              className={`z-10 md:scale-125`}
            />
          )}
          <div tabIndex={0} className={`absolute`}></div>
        </form>
      </motion.div>
    </dialog>
  );
}
