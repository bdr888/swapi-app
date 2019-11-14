import React, {useState} from "react"
import styled from "styled-components"
import useFetch from "../hooks/useFetch"

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

const OpeningCrawlStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  padding: 0.5rem;
`
const Tile = ({ heading, id, subHeading }) => {
  const [crawlVisible, setCrawlVisible] = useState(false)
  const { data } = useFetch(`https://swapi.co/api/films/${id}`)

  return (
    <TileWrapper>
      <Heading>{heading}</Heading>
      <SubHeading>{subHeading}</SubHeading>
      {crawlVisible && (
        <OpeningCrawlStyled>{data.opening_crawl}</OpeningCrawlStyled>
      )}
      <button onClick={() => setCrawlVisible(!crawlVisible)}>
        {crawlVisible ? "Hide" : "Show Opening Crawl"}
      </button>
    </TileWrapper>
  )
}

export default Tile
