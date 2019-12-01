import React from "react"
import View from "./View"
import { getUser } from "../utils/auth"

const Profile = () => {
  const user = getUser();
  const { name, email, emailVerified } = user;
  const accessToken = user.stsTokenManager.accessToken; 

  return (
    <View title="Your Profile">
      <p>Welcome back to your profile!</p>
     <ul>
          <li>Display name: {name}</li>
          <li>Email address: {email}</li>
          <li>Email Verified: {`${emailVerified}`}</li>
          <li>Firebase Access Token: {`${accessToken}`}</li>
      </ul>
    </View>
  )
}

export default Profile
