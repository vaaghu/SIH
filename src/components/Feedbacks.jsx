import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  id,
  icon,
  name,
}) => (
  <Link
      to={`/info-${id}`}
      className="flex items-center gap-2 my-5"
    >
    <div className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full">
      <img src={icon} className="rounded-[20px] min-h-[280px] h-[280px]"/>
      <p className=" text-#FFAC1C text-[18px] font-bold cursor-pointer text-center">{name}</p>
    </div>
  </Link>
  // <motion.div
  //   variants={fadeIn("", "spring", index * 0.5, 0.75)}
  //   className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  // >
  //   <p className="text-white font-black text-[48px]">"</p>

  //   <div className="mt-1">
  //     <p className="text-white tracking-wider text-[18px]">{testimonial}</p>
  //   </div>
  // </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>FEATURES</p>
          <h1 className={styles.sectionHeadText}>CROP YIELD RECOMMENDATION</h1>

        <p className="mt-4 text-[#ffffff] text-[17px] max-w-5xl leading-[30px]">
        The science of training machines to learn and produce models for future predictions
        is widely used, and not for nothing. Agriculture plays a critical role in the global economy.
        With the continuing expansion of the human population understanding worldwide crop yield is central
        to addressing food security challenges and reducing the impacts of climate change. Crop yield prediction
        is an important agricultural problem. The Agricultural yield primarily depends on weather conditions
        (rain, temperature, etc), pesticides and accurate information about history of crop yield is an
        important thing for making decisions related to agricultural risk management and future predictions.
        </p>

        <div className="my-12" />
      
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7 justify-center`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "feedback");
