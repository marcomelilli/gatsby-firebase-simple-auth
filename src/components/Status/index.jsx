import React from "react"
import { Link, navigate } from "@reach/router"
import { getUser, isLoggedIn, logout } from "../../utils/auth"
import firebase from "gatsby-plugin-firebase"

export default () => {

  let details;
  if (!isLoggedIn()) {
    details = (
      <p className="text-right px-5">
        <Link to="/app/login"><u>Log in</u></Link>
      </p>
    )
  } else {
    const { displayName, email } = getUser()
    details = (
      <p className="text-right px-5">
        Logged in as {displayName} ({email}
        )!
        {` `}
        <a href="/" onClick={event => { event.preventDefault(); logout(firebase).then(() => navigate(`/app/login`)) }}>
          <u>log out</u>
        </a>
      </p>
    )
  }

  return <div>{details}</div>
}
