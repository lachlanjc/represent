import React from 'react'
import styled from 'styled-components'

const Root = styled.div`
  position: absolute;
  padding: 2rem;
  right: 0;
  top: 0;
  z-index: 1;
`

const ToggleButton = ({ editing, onClick }) =>
  <Root onClick={onClick}>
    <img
      src={`https://icon.now.sh/${editing ? 'play_arrow' : 'edit'}/32/666666`}
    />
  </Root>

export default ToggleButton
