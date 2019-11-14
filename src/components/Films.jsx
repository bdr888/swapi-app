import React from "react"
import styled from "styled-components"
import Tile from "./Tile"
import useFetch from "../hooks/useFetch"
import LoadingSpinner from "./LoadingSpinner"

// outer-most wrapper
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Films = () => {
  const { loading, data, error } = useFetch("https://swapi.co/api/films/")

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
        <Tile
          heading={item.title}
          id={item.episode_id}
          key={index}
          subHeading={item.director}
        />
      ))}
    </Wrapper>
  )
}

export default Films
