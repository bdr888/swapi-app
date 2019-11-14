import React from "react"
import styled from "styled-components"

const TileWrapper = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  padding: 0.5rem;
  min-width: 250px;
  background-color: #e9e9e9;
  border: 2px solid grey;
  border-radius: 8px;
`

const Heading = styled.div`
  margin: 0.5rem;
  font-weight: bold;
  font-size: 1rem;
`

const SubHeading = styled.div`
  margin: 0.5rem;
  font-size: 0.8rem;
`

const Tile = ({ heading, subHeading }) => (
  <TileWrapper>
    <Heading>{heading}</Heading>
    <SubHeading>{subHeading}</SubHeading>
  </TileWrapper>
)

export default Tile
