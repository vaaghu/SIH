import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences ,visualizations} from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-[#ffffff] text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const ImageCard = ({id,icon, name}) => {
  return (
    <Link
          to={`/info-${id}`}
          className="flex items-center gap-2 my-5"
        >
      <div className="flex flex-col m-10">
        <img src={icon} className="rounded-[20px] min-h-[280px] h-[280px]"/>
        <p className=" text-#FFAC1C text-[18px] font-bold cursor-pointer text-center my-5" >{name}</p>
      </div>
    </Link>)
}
const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>HIGH/HEAVY RAINFALL PREDICTION</p> 
        <h2 className={styles.sectionHeadText}>VISUALIZATION</h2>
        <p
        
        className="mt-4 text-[#ffffff] text-[17px] max-w-5xl leading-[30px]"
        >
        Nowcasting of high/heavy precipitation rainfall events can have a profound impact
        on various aspects of society and the environment. From mitigating disaster risks
        through early warnings and resource allocation to protecting crops and infrastructure,
        accurate forecasts are crucial for building a safer and more resilient future.
        By using advanced technologies like convolutional neural networks (CNNs),
        we can improve the accuracy and lead time of predictions, allowing communities
        to prepare for extreme weather events and minimize their potential damage.
        not only saves lives and protects livelihoods but also ensures the sustainable
        development of communities worldwide.
      </p>
      </motion.div>

      <div className="mt-20 flex flex-row justify-around flex-wrap">
        {visualizations.map((item,index) =>{
          // console.log(item)
          return <ImageCard key={index} {...item}/>}
        )}
        {/* <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline> */}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
