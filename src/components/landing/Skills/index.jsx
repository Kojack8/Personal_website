import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={dev} alt="I’m Kyle and I’m a fullstack engineer!" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>More about me</h1>
          <p>
            I was born in and attended college in Chicago, IL but I worked all over the country (and sometimes out of it) as a television camera operator and video engineer.
            It was a fun time in my life but after a couple years I discovered software development and dove headfirst into a brand new adventure. It's one of the best 
            decisions I've ever made.
          </p>
          <Button as={AnchorLink} href="#contact">
            E-mail me
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
