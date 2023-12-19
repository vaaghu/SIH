import React from "react";
import { Tilt }from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Image } from 'antd';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] min-h-[280px] flex justify-evenly items-center flex-col"
      >

        {/* <img
          src={icon}
          alt="web-development"
          className="w-full h-full object-contain"
        /> */}
          <Image
          height={280}
          src={icon}
          className="rounded-[20px]"
        />
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Annual</p> 
        <h2 className={styles.sectionHeadText}>RAINFALL PREDICTION</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-[#ffffff] text-[17px] max-w-4xl leading-[30px]"
      >
        INSAT-3D and INSAT-3DR are two geostationary meteorological satellites of India having
        6 channel Imager and 19 channel Sounder payloads. The imagery captured in the visible
        range by INSAT satellite can be used to detect clouds. The high/heavy impact of rainfall
        will be predicted with the cloud image data  obtained by INSAT 3DR. This is the initiative
        for eliminating the failure of effective prediction of rainfall impacts. The average rainfall in India is 118 cm according to annual data from the Meteorological Department.

      </motion.p>


      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
