import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`
const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const Header = ({ siteTitle }) => {
  return (
    <header
      style={{
        background: `salmon`,
        marginBottom: `1.45rem`,
      }}
    >
      <HeaderWrapper
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ display: "flex", margin: 2, fontSize: 28 }}>
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
        <Links>
          <h4 style={{ display: "flex", margin: 6 }}>
            <Link
              to="/films"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              Films
            </Link>
          </h4>
          <h4 style={{ display: "flex", margin: 6 }}>
            <Link
              to="/planets"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              Planets
            </Link>
          </h4>
        </Links>
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
