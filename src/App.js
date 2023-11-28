import React, { useState } from 'react';
import './App.css';
import { Menu } from './Menu';
import { Inicio } from './Inicio';
import { Skills } from './Skills';
import { Proyectos } from './Proyectos'
import { Contacto } from './Contacto';
import { Aboutme } from './Aboutme';
import { Credits } from './Credits';
import AOS from 'aos';


function App() {

  const [state, setState] = useState({
    html: true,
    typescript: true,
    react: true,
    github: true,
    css: true,
    js: true,
    git: true,
    tailwind: true,
    next: true,
    prisma: true,
    mySql: true,
    apiRest: true,
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
  const handleTypescriptEnter = () => {
    setState({
      ...state,
      typescript: !state.typescript,
    })
    console.log(state.typescript)
  }
  const handleTypescriptLeave = () => {
    setState({
      ...state,
      typescript: !state.typescript,
    })
    console.log(state.typescript)
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
  const handleTailwindEnter = () => {
    setState({
      ...state,
      tailwind: !state.tailwind,
    })
    console.log(state.tailwind)
  }
  const handleTailwindLeave = () => {
    setState({
      ...state,
      tailwind: !state.tailwind,
    })
    console.log(state.tailwind)
  }

  const handleApiRestEnter = () => {
    setState({
      ...state,
      apiRest: !state.apiRest,
    })
    console.log(state.apiRest)
  }
  const handleApiRestLeave = () => {
    setState({
      ...state,
      apiRest: !state.apiRest,
    })
    console.log(state.apiRest)
  }
  const handleNextEnter = () => {
    setState({
      ...state,
      next: !state.next,
    })
    console.log(state.next)
  }
  const handleNextLeave = () => {
    setState({
      ...state,
      next: !state.next,
    })
    console.log(state.next)
  }
  const handlePrismaEnter = () => {
    setState({
      ...state,
      prisma: !state.prisma,
    })
    console.log(state.prisma)
  }
  const handlePrismaLeave = () => {
    setState({
      ...state,
      prisma: !state.prisma,
    })
    console.log(state.prisma)
  }
  const handleSqlEnter = () => {
    setState({
      ...state,
      mySql: !state.mySql,
    })
    console.log(state.mySql)
  }
  const handleSqlLeave = () => {
    setState({
      ...state,
      mySql: !state.mySql,
    })
    console.log(state.mySql)
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
        handleTypescriptEnter={handleTypescriptEnter}
        handleTypescriptLeave={handleTypescriptLeave}
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
        handleTailwindEnter={handleTailwindEnter}
        handleTailwindLeave={handleTailwindLeave}
        handleApiRestEnter={handleApiRestEnter}
        handleApiRestLeave={handleApiRestLeave}
        handleNextEnter={handleNextEnter}
        handleNextLeave={handleNextLeave}
        handlePrismaEnter={handlePrismaEnter}
        handlePrismaLeave={handlePrismaLeave}
        handleSqlEnter={handleSqlEnter}
        handleSqlLeave={handleSqlLeave}
        html={state.html}
        typescript={state.typescript}
        react={state.react}
        github={state.github}
        css={state.css}
        js={state.js}
        git={state.git}
        tailwind={state.tailwind}
        apiRest={state.apiRest}
        next={state.next}
        prisma={state.prisma}
        mySql={state.mySql}

      />

      <Proyectos />

      <Credits />
    </div>
  );
}

export default App;
