import React from 'react';
import './skills.css'
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { FaReact, FaBootstrap, FaGitAlt, FaGithub, FaSass } from "react-icons/fa";
import 'aos/dist/aos.css';


function Skills(props) {


    return (
        <div className='skillsContainer' id='skills'>
            <h2 className='tittleS'
                data-aos="zoom-in"
                data-aos-duration="1000"
            >
                Skills</h2>
            <div className='skillsChild'>
                <div class="container">
                    <ul data-aos="zoom-in"
                        data-aos-duration="2000"
                        className='ulSkills'
                    >
                        <div>
                            <h3
                                className={props.html ? "desactive" : "activeH3top"}
                            >HTML5</h3>
                            <li
                                className={props.html ? "aClass" : "active"}
                                onMouseEnter={props.handleHTMLEnter}
                                onMouseLeave={props.handleHTMLLeave}
                            >
                                <a href="https://lenguajehtml.com/"><IoLogoHtml5 className='logo' /></a>
                            </li>
                            <li className={props.css ? "aClass" : "active"}
                                onMouseEnter={props.handlecssEnter}
                                onMouseLeave={props.handlecssLeave}>
                                <a href="https://lenguajecss.com/css/"><IoLogoCss3 className='logo' />
                                </a>
                            </li>
                            <h3 className={props.css ? "desactive" : "activeH3"}>CSS3</h3>
                        </div>
                        <div>
                            <h3 className={props.bootstrap ? "desactive" : "activeH3top"}>Bootstrap</h3>
                            <li
                                className={props.bootstrap ? "aClass" : "active"}
                                onMouseEnter={props.handlebootstrapEnter}
                                onMouseLeave={props.handlebootstrapLeave}>
                                <a href="https://getbootstrap.com/"><FaBootstrap className='logo' />
                                </a>
                            </li>
                            <li className={props.js ? "aClass" : "active"}
                                onMouseEnter={props.handlejsEnter}
                                onMouseLeave={props.handlejsLeave}>
                                <a href="https://www.javascript.com/"><IoLogoJavascript className='logo' />
                                </a>
                            </li>
                            <h3 className={props.js ? "desactive" : "activeH3"}>Javascript</h3>
                        </div>
                        <div>
                            <h3 className={props.react ? "desactive" : "activeH3top"}>React js</h3>
                            <li className={props.react ? "aClass" : "active"}
                                onMouseEnter={props.handlereactEnter}
                                onMouseLeave={props.handlereactLeave}>
                                <a href="https://es.reactjs.org/"><FaReact className='logo' />
                                </a>
                            </li>
                            <li className={props.git ? "aClass" : "active"}
                                onMouseEnter={props.handlegitEnter}
                                onMouseLeave={props.handlegitLeave}>
                                <a href="https://git-scm.com/"><FaGitAlt className='logo' />
                                </a>
                            </li>
                            <h3 className={props.git ? "desactive" : "activeH3"}>GIT</h3>
                        </div>
                        <div>
                            <h3 className={props.github ? "desactive" : "activeH3top"}>GIT HUB</h3>
                            <li className={props.github ? "aClass" : "active"}
                                onMouseEnter={props.handlegithubEnter}
                                onMouseLeave={props.handlegithubLeave}>
                                <a href="https://github.com/NicolasGabrieloni"><FaGithub className='logo' />
                                </a>
                            </li>
                            <li className={props.sass ? "aClass" : "active"}
                                onMouseEnter={props.handlesassEnter}
                                onMouseLeave={props.handlesassLeave}>
                                <a href="https://sass-lang.com/"><FaSass className='logo' />
                                </a>
                            </li>
                            <h3 className={props.sass ? "desactive" : "activeH3"}>SASS</h3>
                        </div>
                    </ul>
                </div>
            </div >
        </div >
    )
}

export { Skills }