import React from 'react'
import styled from 'styled-components'
import {
  Provider,
  Carousel,
  Slide,
  Markdown,
  Keyboard,
  Hash,
  SlideList
} from 'redeck'
import ToggleButton from './ToggleButton'

const Footer = styled.footer`
  background-color: #111;
  border-top: 1px solid #222;
`

const Presentation = ({ onToggle, slides }) =>
  <Provider>
    <ToggleButton editing={false} onClick={onToggle} />
    <Carousel>
      {slides.map(slide =>
        <Slide key={slide}>
          <Markdown>
            {slide}
          </Markdown>
        </Slide>
      )}
    </Carousel>
    <Keyboard />
    <Hash />
    <Footer>
      <SlideList slides={slides} />
    </Footer>
  </Provider>

export default Presentation
