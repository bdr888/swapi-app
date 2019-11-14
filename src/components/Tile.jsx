import React, { useState } from "react"
import styled, { css } from "styled-components"
import useFetch from "../hooks/useFetch"

const TileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  padding: 0.5rem;
  width: 80vw;
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
// brittle animating to specific max height but it works: can't transition to height auto.
const OpeningCrawlStyled = styled.div(
  ({ crawlVisible }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
    height: auto;
    max-height: ${crawlVisible ? "600px" : "0px"};
    overflow: hidden;
    transition: 0.25s ease-in-out;
  `
)

const Tile = ({ heading, openingCrawl, subHeading }) => {
  const [crawlVisible, setCrawlVisible] = useState(false)

  return (
    <TileWrapper>
      <Heading>{heading}</Heading>
      <SubHeading>{subHeading}</SubHeading>
      <button onClick={() => setCrawlVisible(!crawlVisible)}>
        {crawlVisible ? "Hide" : "Show Opening Crawl"}
      </button>
      <OpeningCrawlStyled crawlVisible={crawlVisible}>
        {openingCrawl}
      </OpeningCrawlStyled>
    </TileWrapper>
  )
}

export default Tile
