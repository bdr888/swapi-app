import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled, { css } from "styled-components"
import useWindowWidth from "../hooks/useWindowWidth"

// pass in window width to toggle flex direction
const HeaderWrapper = styled.div(
  ({ windowWidth }) => css`
    display: flex;
    flex-direction: ${windowWidth > 400 ? 'row' : 'column'};
    align-items: center;
    justify-content: flex-start;
  `
)

const Header = ({ siteTitle }) => {
  const width = useWindowWidth()
  return (
    <header
      style={{
        background: `salmon`,
        marginBottom: `1.45rem`,
      }}
    >
      <HeaderWrapper
        windowWidth={width}
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ display: "flex", margin: 2 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <h3 style={{ display: "flex", margin: 8 }}>
          <Link
            to="/films"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            Films
          </Link>
        </h3>
        <h3 style={{ display: "flex", margin: 8 }}>
          <Link
            to="/planets"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            Planets
          </Link>
        </h3>
      </HeaderWrapper>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
