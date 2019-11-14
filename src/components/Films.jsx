import React from "react"
import styled from "styled-components"
import Tile from "./Tile"
import useFetch from "./useFetch"
import LoadingSpinner from "./LoadingSpinner"

// outer-most wrapper
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Films = () => {
  // const url = 'https://swapi.co/api/films/';
  // const [films, setFilms] = useState([
  //   { title: 'title', director: 'director' },
  // ]);

  // useEffect(() => {
  //   fetch(url)
  //   .then(res => res.json())
  //   .then(json => setFilms(json.results))
  // }, []);

  const { loading, data, error } = useFetch("https://swapi.co/api/films/")

  if (loading === true) {
    return <LoadingSpinner />
  }

  // return loading && <LoadingSpinner />

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
        <Tile key={index} heading={item.director} subHeading={item.title} />
      ))}
    </Wrapper>
  )
}

export default Films
