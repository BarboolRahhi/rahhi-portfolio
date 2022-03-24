import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const experienceQuery = '*[_type == "experiences"]';
    const skillQuery = '*[_type == "skills"]';

    client.fetch(experienceQuery).then((data) => {
      const experiences = data.sort((e1, e2) => e2.year - e1.year);
      setExperiences(data);
      console.log(data);
    });

    client.fetch(skillQuery).then((data) => {
      setSkills(data);
    });
  }, []);
  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skills.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience, index) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.year + index * 33}
            >
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <div className="app__flex">
                        <h4 className="bold-text">{work.name}</h4>
                        <h2 className="p-text" style={{ marginLeft: "8px" }}>
                          @{work.company}
                        </h2>
                      </div>
                      <p className="p-text-italic">2020 - Present</p>

                      <ul className="app__skills-exp-desc">
                        {work.desc.map((point, index) => (
                          <li className="p-text" key={index}>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Skills, "app__skills"), "skills");
