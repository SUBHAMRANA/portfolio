import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        Hi, I'm Ritik Bhatt Nice to meet you .
        I'm a full stack Developer with 1 year of experience through my projects. I'm currently pursuing my 3rd year of Engineering from Army Institute of Technology, Pune. I'm quitely confident, naturally curious and perpetuallly working on improving my chops on design problem at a time. 
        </SectionText>
        {/* <Button onClick={props.handleClick}>Learn More</Button> */}
      </LeftSection>
    </Section>
  </>
);

export default Hero;