
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { inputs } from "../../constant/constant";

const Input = ({type, register, placeholder, style, label}) => {
  return (
    <label className="flex flex-col med:text-sm ">
      <span className="text-bodyColor font-medium mb-4">{label}</span>
      {label?.toLowerCase() !== "message" ? (
        <input
          type={type}
          {...register(label?.toLowerCase())}
          placeholder={placeholder}
          className={style}
        />
      ) : (
        <textarea
          rows="7"
          {...register(label.toLowerCase())}
          placeholder={placeholder}
          className="bg-transparent placeholder:text-bodyColor placeholder:opacity-80 text-bodyColor rounded-md border-[1px] border-bodyColor font-medium py-4 px-6 resize-none med:text-sm  med:placeholder:text-xs"
        />
      )}
    </label>
  );
};

const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          to_name: "Salman",
          from_email: data.email,
          to_email: "salmannawaz008@gmail.com",
          message: data.message,
        },
        import.meta.env.VITE_APP_EMAILJS_USER_ID
      );
      alert("Thank you, I will get back to you as soon as possible");
      reset();
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

 

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-12 flex flex-col gap-8"
    >
      {inputs.map(({key,label,type})=>(
        <Input key={key} label={label} placeholder={`Whats your ${label.toLowerCase()}?`} type={type} style="bg-transparent placeholder:text-bodyColor placeholder:opacity-80 text-bodyColor rounded-md outlined-none border-[1px] border-bodyColor font-medium py-4 px-6 med:text-sm  med:placeholder:text-xs" register={register} />
      ))}
      <button
        type="submit"
        className="red-btn py-3 px-8 w-fit text-bodyColor font-semibold shadow-md shadow-primary rounded-xl border-2 text-sm med:text-xs"
        style={{border:"2px solid rgb(136,146,176)",color:"rgb(136,146,176)"}}
      >
        {loading ? "Sending..." : "Send"}
      </button>
    </form>
  );
};

export default ContactForm;
