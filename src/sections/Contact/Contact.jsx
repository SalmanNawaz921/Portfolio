import { motion } from "framer-motion";
import { slideIn } from "../../utils/motion";
import ContactForm from "../../components/ContactForm/ContactForm";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";

const Contact = () => {
  return (
    <motion.div
      variants={slideIn("up", "tween,0.6,1")}
      className="flex-[0.75]  p-8 rounded-xl w-full "
    >
      <div className="text-center">
        <p className="text-base med:text-sm text-btnColor mb-4">04. Whats Next?</p>
        <h3 className="text-5xl med:text-3xl text-headingColor font-semibold">Get In Touch</h3>
      </div>
        <ContactForm />
    </motion.div>
  );
};

export default SectionWrapper(Contact, "contact");
