import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
 <Section row nopadding>
   <LeftSection>
     <SectionTitle main center>
       Welcome To <br />
       My Personal Portfolio
     </SectionTitle>
     <SectionText>
       The purpose of Javascript Mastery is to create there skills in to the next level and build awesome apps.
       To work in a Team as Group of Members with Skills is for me very important role. Offering Upwork in a new environment. 
     </SectionText>
     <Button onClick={() window.location =‘https:/google.com‘}</LeftSection> Learn More</Button>
   </LeftSection>
 </Section>
);

export default Hero;