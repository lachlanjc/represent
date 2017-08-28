import React from 'react'
import Textarea from 'react-textarea-autosize'
import ToggleButton from './ToggleButton'
import styled from 'styled-components'

const Root = styled.main`
  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  height: 100vh;
  width: 100vw;
`

const Container = styled.section`
  width: 100%;
  max-width: 48rem;
`

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 300;
  color: #fff;
  margin-top: 0;
  margin-left: 1rem;
  margin-bottom: 1rem;
`

const Help = styled.p`
  color: #999;
  font-size: .875rem;
  font-weight: 400;
  margin: 0;
  margin-left: 1rem;
`

const Label = styled.label`
  display: flex;
  align-items: baseline;
  color: #eee;
  font-weight: 600;
  margin-bottom: .5rem;
  padding-left: 1rem;
  width: 100%;
`

const Input = styled(Textarea)`
  background-color: #222;
  border: 1px solid #222;
  color: #fff;
  font: inherit;
  padding: 1rem;
  width: 100%;
  min-height: 66vh;

  &:focus {
    outline: none;
    border-color: #333;
  }
`

const Editor = ({ text, onChange, onToggle }) =>
  <Root>
    <ToggleButton editing={true} onClick={onToggle} />
    <Container>
      <Title>Present</Title>
      <Label for="editor">
        Edit slides (Markdown)
        <Help>
          separate slides with <code>---</code>
        </Help>
      </Label>
      <Input
        id="editor"
        onChange={e => onChange(e.target.value)}
        defaultValue={text}
      />
    </Container>
  </Root>

export default Editor
