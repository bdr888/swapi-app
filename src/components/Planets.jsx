import React from "react"
import styled from "styled-components"
import Tile from "./Tile"
import useFetch from "../hooks/useFetch"
import LoadingSpinner from "./LoadingSpinner"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Planets = () => {
  const { loading, data, error } = useFetch("https://swapi.co/api/planets/")

  if (loading === true) {
    return <LoadingSpinner />
  }

  if (error) {
    return (
      <>
        <div>{error}</div>
      </>
    )
  }

  return (
    <Wrapper>
      {data.results.map((item, index) => (
        <Tile key={index} heading={item.name} subHeading={item.terrain}/>
      ))}
    </Wrapper>
  )
}

export default Planets
