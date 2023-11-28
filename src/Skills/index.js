import React from "react";
import "./skills.css";
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiPrisma, SiMysql } from "react-icons/si";
import { TbBrandNextjs, TbApi } from "react-icons/tb";
import "aos/dist/aos.css";

function Skills(props) {
  return (
    <div className="skillsContainer" id="skills">
      <h2 className="tittleS" data-aos="zoom-in" data-aos-duration="1000">
        Skills
      </h2>
      <div className="skillsChild">
        <div class="container">
          <ul data-aos="zoom-in" data-aos-duration="2000" className="ulSkills">
            <div>
              <div>
                <li
                  className={props.html ? "aClass" : "active"}
                  onMouseEnter={props.handleHTMLEnter}
                  onMouseLeave={props.handleHTMLLeave}
                >
                  <a href="https://lenguajehtml.com/">
                    <IoLogoHtml5 className="logo" />
                  </a>
                </li>
                <h3 className={props.html ? "desactive" : "activeH3top"}>
                  HTML
                </h3>
              </div>
              <div>
                <li
                  className={props.css ? "aClass" : "active"}
                  onMouseEnter={props.handlecssEnter}
                  onMouseLeave={props.handlecssLeave}
                >
                  <a href="https://lenguajecss.com/css/">
                    <IoLogoCss3 className="logo" />
                  </a>
                </li>
                <h3 className={props.css ? "desactive" : "activeH3"}>CSS</h3>
              </div>
              <div>
                <li
                  className={props.apiRest ? "aClass" : "active"}
                  onMouseEnter={props.handleApiRestEnter}
                  onMouseLeave={props.handleApiRestLeave}
                >
                  <a href="https://www.redhat.com/es/topics/api/what-is-a-rest-api">
                    <TbApi className="logo" />
                  </a>
                </li>
                <h3 className={props.apiRest ? "desactive" : "activeH3"}>
                  API REST
                </h3>
              </div>
            </div>

            <div>
              <div>
                <li
                  className={props.typescript ? "aClass" : "active"}
                  onMouseEnter={props.handleTypescriptEnter}
                  onMouseLeave={props.handleTypescriptLeave}
                >
                  <a href="https://typescriptlang.org/">
                    <SiTypescript className="logo" />
                  </a>
                </li>
                <h3 className={props.typescript ? "desactive" : "activeH3top"}>
                  TypeScript
                </h3>
              </div>
              <div>
                <li
                  className={props.js ? "aClass" : "active"}
                  onMouseEnter={props.handlejsEnter}
                  onMouseLeave={props.handlejsLeave}
                >
                  <a href="https://www.javascript.com/">
                    <IoLogoJavascript className="logo" />
                  </a>
                </li>
                <h3 className={props.js ? "desactive" : "activeH3"}>
                  Javascript
                </h3>
              </div>
              <div>
                <li
                  className={props.mySql ? "aClass" : "active"}
                  onMouseEnter={props.handleSqlEnter}
                  onMouseLeave={props.handleSqlLeave}
                >
                  <a href="https://www.mysql.com/">
                    <SiMysql className="logo" />
                  </a>
                </li>
                <h3 className={props.mySql ? "desactive" : "activeH3"}>MySql</h3>
              </div>
            </div>

            <div>
              <div>
                <li
                  className={props.react ? "aClass" : "active"}
                  onMouseEnter={props.handlereactEnter}
                  onMouseLeave={props.handlereactLeave}
                >
                  <a href="https://es.reactjs.org/">
                    <FaReact className="logo" />
                  </a>
                </li>
                <h3 className={props.react ? "desactive" : "activeH3top"}>
                  React js
                </h3>
              </div>
              <div>
                <li
                  className={props.git ? "aClass" : "active"}
                  onMouseEnter={props.handlegitEnter}
                  onMouseLeave={props.handlegitLeave}
                >
                  <a href="https://git-scm.com/">
                    <FaGitAlt className="logo" />
                  </a>
                </li>
                <h3 className={props.git ? "desactive" : "activeH3"}>Git</h3>
              </div>
              <div>
                <li
                  className={props.prisma ? "aClass" : "active"}
                  onMouseEnter={props.handlePrismaEnter}
                  onMouseLeave={props.handlePrismaLeave}
                >
                  <a href="https://www.prisma.io/">
                    <SiPrisma className="logo" />
                  </a>
                </li>
                <h3 className={props.prisma ? "desactive" : "activeH3"}>Prisma</h3>
              </div>
            </div>

            <div>
              <div>
                <li
                  className={props.github ? "aClass" : "active"}
                  onMouseEnter={props.handlegithubEnter}
                  onMouseLeave={props.handlegithubLeave}
                >
                  <a href="https://github.com/NicolasGabrieloni">
                    <FaGithub className="logo" />
                  </a>
                </li>
                <h3 className={props.github ? "desactive" : "activeH3top"}>
                  Git Hub
                </h3>
              </div>
              <div>
                <li
                  className={props.tailwind ? "aClass" : "active"}
                  onMouseEnter={props.handleTailwindEnter}
                  onMouseLeave={props.handleTailwindLeave}
                >
                  <a href="https://tailwindcss.com/">
                    <SiTailwindcss className="logo" />
                  </a>
                </li>
                <h3 className={props.tailwind ? "desactive" : "activeH3"}>
                  Tailwind CSS
                </h3>
              </div>
              <div>
                <li
                  className={props.next ? "aClass" : "active"}
                  onMouseEnter={props.handleNextEnter}
                  onMouseLeave={props.handleNextLeave}
                >
                  <a href="https://nextjs.org/">
                    <TbBrandNextjs className="logo" />
                  </a>
                </li>
                <h3 className={props.next ? "desactive" : "activeH3"}>
                  Next js
                </h3>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export { Skills };
