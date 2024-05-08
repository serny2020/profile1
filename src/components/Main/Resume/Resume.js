import React from "react";
import styles from "./Resume.module.css";
import { Skill } from "./Skill";
import { Experience } from "./Experience";
import { skills as skillData } from "../../../assets/data/skills";
import { experience as experienceData } from "../../../assets/data/experience";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Resume = () => {
  return (
    <section className={styles.resume}>
      <h1>Resume</h1>
      
      {/* <div className="w-full justify-center flex items-center gap-3 mt-6">
            <Link target="_blank" href={userData.resume} className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
              <button className="px-3 text-xs md:px-4 py-2 md:py-2.5 bg-[#0d1224] rounded-full border-none text-center font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Get Resume</span>
                <MdDownload size={16} />
              </button>
            </Link>
          </div> */}
      <div>
        <Link to={{ pathname: "https://drive.google.com/file/d/1-wdpDj1D56dEKbW6whdIY1NOgE3p8kz6/view?usp=drive_link" }} target="_blank">
          <button>
            <span>Download PDF</span>
          </button>
        </Link>
      </div>

      <section className={styles.container}>
        <section className={styles.experience}>
          <article className={styles.item}>
            <h2>Work Experience​​</h2>
            <section>
              {experienceData["work"].map(data => (
                <Experience
                  job={data.job}
                  company={data.company}
                  time={data.time}
                  description={data.description}
                />
              ))}
            </section>
          </article>
          <article className={styles.item}>
            <h2>Education</h2>
            <section>
              {experienceData["education"].map(data => (
                <Experience
                  job={data.job}
                  company={data.company}
                  time={data.time}
                  description={data.description}
                />
              ))}
            </section>
          </article>
        </section>
        <section className={styles.skill}>
          <Skill icon={faCode} type="Coding" skillData={skillData["Coding"]} />
          <Skill
            icon={faCog}
            type="Soft Skills"
            skillData={skillData["Soft Skills"]}
          />
          <Skill
            icon={faGlobe}
            type="Language"
            skillData={skillData["Language"]}
          />
        </section>
      </section>
    </section>
  );
};
