import React from 'react';
import './contacto.css';
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail, SiLinkedin } from "react-icons/si";

function Contacto(props) {

    return (
        <div className='contactContainer' id='contacto'>
            <div className='contactChild'>
                <h4 className='tittleContact'>¡Contact me!</h4>
                <div className='btns'>
                    <a href='https://wa.link/vkmj5c'>
                        <button><FaWhatsapp /></button>
                    </a>
                    <a href='mailto:nicogabrieloni@gmail.com'>
                        <button>
                            <SiGmail />
                        </button>
                    </a>
                    <a href='https://www.linkedin.com/in/nicolas-gabrieloni-frontend-dev/'>
                        <button>
                            <SiLinkedin />
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export { Contacto }