/** @jsx jsx */
import { jsx } from 'theme-ui'
import styled from '@emotion/styled'

import Image from './shared/Image'
import GatsbyImage from './shared/GatsbyImage'
import { UList, ListItem } from './shared/List'
import {
  ContentContainer,
  SectionContainer,
  CenteredContainer,
} from './shared/Containers'

import AboutMeLeftSideBar from '../images/AboutMeLeftSideBar.svg'
import AboutMeRightSideBar from '../images/AboutMeRightSideBar.svg'

import { Heading, Paragraph } from './shared/Typography'
import { COLORS } from '../styles/constants'

const AboutMeContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`
const AboutDescription = styled.div``

const About = () => (
  <SectionContainer id="about">
    <Image
      src={AboutMeLeftSideBar}
      sx={{ position: 'absolute', left: 0, transform: 'translateY(-50px)' }}
      lighten
    />
    <Image
      src={AboutMeRightSideBar}
      sx={{ position: 'absolute', right: 0, transform: 'translateY(-50px)' }}
      lighten
    />
    <ContentContainer numColumns={2}>
      <AboutMeContainer>
        <Heading>About Me</Heading>
        <AboutDescription>
          <Paragraph>
            Hello! I’m a software engineer that loves the junction of
            engineering and design. I build experiences with exact attention to
            detail that comes through clean code and solid architecture.
          </Paragraph>
          <Paragraph>
            I graduated from Brigham Young University with a Master’s Degree in
            Information Systems and a focus on engineering and software
            development. I love that technology means I’m always learning
            something new.
          </Paragraph>
          <Paragraph>Here are some things I'm experienced with:</Paragraph>
          <UList style={{ color: COLORS.black }}>
            <ListItem>Javascript</ListItem>
            <ListItem>React</ListItem>
            <ListItem>Gatsby</ListItem>
            <ListItem>Node</ListItem>
            <ListItem>GraphQL</ListItem>
            <ListItem>Ruby on Rails</ListItem>
            <ListItem>Python</ListItem>
            <ListItem>Swift</ListItem>
            <ListItem>Sketch</ListItem>
            <ListItem>Figma</ListItem>
          </UList>
        </AboutDescription>
      </AboutMeContainer>
      <CenteredContainer>
        <GatsbyImage sx={{ height: '100%', width: '100%' }} />
      </CenteredContainer>
    </ContentContainer>
  </SectionContainer>
)

export default About
