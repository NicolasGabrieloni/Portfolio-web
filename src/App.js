import React, { useState } from 'react';
import './App.css';
import { Menu } from './Menu';
import { Inicio } from './Inicio';
import { Skills } from './Skills';
import { Proyectos } from './Proyectos'
import { Contacto } from './Contacto';
import { Aboutme } from './Aboutme';
import AOS from 'aos';


function App() {

  const [state, setState] = useState({
    html: true,
    bootstrap: true,
    react: true,
    github: true,
    css: true,
    js: true,
    git: true,
    sass: true,
    tittle1: true,
    tittle2: true,
  });

  const handletittle1Enter = () => {
    setState({
      ...state,
      tittle1: !state.tittle1,
    })
    console.log(state.tittle1)
  };
  const handletittle1Leave = () => {
    setState({
      ...state,
      tittle1: !state.tittle1,
    })
    console.log(state.tittle1)
  };
  const handletittle2Enter = () => {
    setState({
      ...state,
      tittle2: !state.tittle2,
    })
    console.log(state.tittle2)
  };
  const handletittle2Leave = () => {
    setState({
      ...state,
      tittle2: !state.tittle2,
    })
    console.log(state.tittle2)
  };



  const handleHTMLEnter = () => {
    setState({
      ...state,
      html: !state.html,
    })
    console.log(state.html)
  };
  const handleHTMLLeave = () => {
    setState({
      ...state,
      html: !state.html,
    })
    console.log(state.html)
  }
  const handlebootstrapEnter = () => {
    setState({
      ...state,
      bootstrap: !state.bootstrap,
    })
    console.log(state.bootstrap)
  }
  const handlebootstrapLeave = () => {
    setState({
      ...state,
      bootstrap: !state.bootstrap,
    })
    console.log(state.bootstrap)
  }
  const handlereactEnter = () => {
    setState({
      ...state,
      react: !state.react,
    })
    console.log(state.react)
  }
  const handlereactLeave = () => {
    setState({
      ...state,
      react: !state.react,
    })
    console.log(state.react)
  }
  const handlegithubEnter = () => {
    setState({
      ...state,
      github: !state.github,
    })
    console.log(state.github)
  }
  const handlegithubLeave = () => {
    setState({
      ...state,
      github: !state.github,
    })
    console.log(state.github)
  }
  const handlecssEnter = () => {
    setState({
      ...state,
      css: !state.css,
    })
    console.log(state.css)
  }
  const handlecssLeave = () => {
    setState({
      ...state,
      css: !state.css,
    })
    console.log(state.css)
  }
  const handlejsEnter = () => {
    setState({
      ...state,
      js: !state.js,
    })
    console.log(state.js)
  }
  const handlejsLeave = () => {
    setState({
      ...state,
      js: !state.js,
    })
    console.log(state.js)
  }
  const handlegitEnter = () => {
    setState({
      ...state,
      git: !state.git,
    })
    console.log(state.git)
  }
  const handlegitLeave = () => {
    setState({
      ...state,
      git: !state.git,
    })
    console.log(state.git)
  }
  const handlesassEnter = () => {
    setState({
      ...state,
      sass: !state.sass,
    })
    console.log(state.sass)
  }
  const handlesassLeave = () => {
    setState({
      ...state,
      sass: !state.sass,
    })
    console.log(state.sass)
  }



  AOS.init();

  return (
    <div className="App">


      <Menu />
      <Contacto />
      <Inicio
        tittle1={state.tittle1}
        tittle2={state.tittle2}
        handletittle1Enter={handletittle1Enter}
        handletittle1Leave={handletittle1Leave}
        handletittle2Enter={handletittle2Enter}
        handletittle2Leave={handletittle2Leave}
      />

      <Aboutme />
      <div className='fondo2'></div>
      <Skills
        handleHTMLEnter={handleHTMLEnter}
        handleHTMLLeave={handleHTMLLeave}
        handlebootstrapEnter={handlebootstrapEnter}
        handlebootstrapLeave={handlebootstrapLeave}
        handlereactEnter={handlereactEnter}
        handlereactLeave={handlereactLeave}
        handlegithubEnter={handlegithubEnter}
        handlegithubLeave={handlegithubLeave}
        handlecssEnter={handlecssEnter}
        handlecssLeave={handlecssLeave}
        handlejsEnter={handlejsEnter}
        handlejsLeave={handlejsLeave}
        handlegitEnter={handlegitEnter}
        handlegitLeave={handlegitLeave}
        handlesassEnter={handlesassEnter}
        handlesassLeave={handlesassLeave}
        html={state.html}
        bootstrap={state.bootstrap}
        react={state.react}
        github={state.github}
        css={state.css}
        js={state.js}
        git={state.git}
        sass={state.sass}
      />

      <Proyectos />

    </div>
  );
}

export default App;
