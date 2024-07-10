import React from "react";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection } from "./HeroStyles";
import Button from "react-bootstrap/Button";
import Resume from "../../files/resume.pdf";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          Hi, I'm Subham Rana. <br />
          Nice to meet you! I am a dedicated Software Engineer with a robust skill set in frontend development using React and TypeScript, backend API design with Spring Boot and Reactive Java, and CI/CD integration with GitHub Actions and Azure Pipelines. At Turtlemint, I optimized user engagement through dynamic landing pages and impactful A/B testing, significantly boosting conversion rates. My tenure as a Software Engineering Intern at Microsoft involved streamlining development processes by integrating CI into the Playwright dashboard, enhancing debugging experiences. Additionally, I have experience as a Teaching Assistant at Geeks for Geeks, where I mentored students in computer fundamentals, contributing to their academic growth. I am proud to have qualified for Facebook Hackercup multiple times, achieved 6-star status on Hackerrank, and secured top global rankings on competitive programming platforms like Codeforces and CodeChef.
        </SectionText>
        <a href={Resume} download="resume" target="_blank">
          <Button variant="outline-warning">Download Resume</Button>
        </a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
