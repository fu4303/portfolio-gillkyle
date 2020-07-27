import React from 'react'
import styled from '@emotion/styled'

import Button from './shared/Button'
import Text from './shared/Text'
import Image from './shared/Image'
import {
  ContentContainer,
  SectionContainer,
  CenteredContainer,
} from './shared/Containers'
import { Paragraph } from './shared/Typography'

import HeroGraphicSVG from '../images/HeroGraphic.svg'
import HeroGraphicSmallSVG from '../images/HeroGraphicSmall.svg'
import HeroLeftSideBar from '../images/HeroLeftSideBar.svg'
import HeroRightSideBar from '../images/HeroRightSideBar.svg'

import { COLORS, BORDER_RADIUS, MEDIA_QUERIES } from '../styles/constants'

const Intro = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`
const IntroName = styled.div`
  margin-bottom: 25px;
`
const IntroDescription = styled.div`
  margin-bottom: 25px;
`
const IntroButton = styled(Button)`
  background-color: ${COLORS.white};
  padding: 20px 60px;
  letter-spacing: 2px;
`
const LargeImage = styled(Image)`
  @media (max-width: ${MEDIA_QUERIES['mobile']}px) {
    display: none;
  }
`
const SmallImage = styled(Image)`
  @media (min-width: ${MEDIA_QUERIES['mobile']}px) {
    display: none;
  }
`

const Hero = () => (
  <SectionContainer style={{ paddingTop: 60 }} backgroundFilled>
    <Image
      src={HeroLeftSideBar}
      style={{ position: 'absolute', left: 0 }}
      lighten
    />
    <Image
      src={HeroRightSideBar}
      style={{ position: 'absolute', right: 0 }}
      lighten
    />
    <ContentContainer numColumns={2}>
      <Intro>
        <IntroName>
          <Text color="white" size="large">
            Hi, my name is
          </Text>
          <br />
          <Text color="white" style={{ fontSize: 72 }} weight="bold">
            Kyle Gill
          </Text>
          <br />
          <Text color="white" style={{ fontSize: 60 }}>
            I love to code.
          </Text>
        </IntroName>
        <IntroDescription>
          <Paragraph inverted>
            I'm a software engineer specializing in developing - and often
            designing - high-quality applications and websites. I’m currently a
            Senior Software Engineer at Gatsby.
          </Paragraph>
        </IntroDescription>
        <div>
          <a href="mailto:kylerobertgill@gmail.com">
            <IntroButton>GET IN TOUCH</IntroButton>
          </a>
        </div>
      </Intro>
      <CenteredContainer>
        <LargeImage src={HeroGraphicSVG} />
        <SmallImage src={HeroGraphicSmallSVG} />
      </CenteredContainer>
    </ContentContainer>
  </SectionContainer>
)

export default Hero
