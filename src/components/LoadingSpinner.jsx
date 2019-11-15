// completely lifted from https://github.com/tienpham94/react-awesome-spinners/blob/master/src/Ring/index.js
import React from "react"
import styled, { keyframes } from "styled-components"

const motion = props => keyframes`
  0% {
      transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  width: 64px;
  height: 64px;
`

const RingSpinner = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: ${p => `${p.size}${p.sizeUnit}`};
  height: ${p => `${p.size}${p.sizeUnit}`};
  margin: 6px;
  border: 6px solid ${p => p.color};
  border-radius: 50%;
  animation: ${p => motion(p)} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: ${p => p.color} transparent transparent transparent;
  :nth-child(1) {
    animation-delay: -0.45s;
  }
  :nth-child(2) {
    animation-delay: -0.3s;
  }
  :nth-child(3) {
    animation-delay: -0.15s;
  }
`

const LoadingSpinner = ({ color, size, sizeUnit }) => (
  <Wrapper>
    <RingSpinner color={color} size={size} sizeUnit={sizeUnit} />
  </Wrapper>
)

LoadingSpinner.defaultProps = {
  size: 50,
  color: "salmon",
  sizeUnit: "px",
}

export default LoadingSpinner
