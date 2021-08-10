import React from 'react';
import BgAnimation from './components/BackgrooundAnimation/BackgroundAnimation';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Technologies from './components/Technologies/Technologies';
import { Layout } from './layout/Layout';
import { Section } from './styles/GlobalComponents';


const App = () => {

  return (
    <Layout>
    <Section grid>
      <Hero />
      <BgAnimation />
    </Section>
    <Projects />
    <Technologies />
    {/* <Timeline />
    <Acomplishments /> */}
  </Layout>
  )
}

export default App
