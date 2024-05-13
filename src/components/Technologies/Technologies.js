import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
  <SectionDivider />
  <SectionTitle> Technologies</SectionTitle>
  >SectionText>
    I've worked with a range a of a lot of technologies in the web development world and environment.
    From Front-end to UX Designs.
  </SectionText>
  <ListItem>
    >ListItem>
    <DiFirebase />

  </ListItem>
  </SectionTitle>
  </Section>

export default Technologies;
