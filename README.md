# Gatsby Firebase Simple Authentication Starter

This is a simplified starter to show how an authentication workflow is implemented in Gatsby using [Firebase](https://firebase.google.com/) as authentication provider.

This starter follows the best practices described in the official gatsby doc: [Client-only Routes](https://www.gatsbyjs.org/docs/client-only-routes-and-user-authentication/) and [User Authentication](https://www.gatsbyjs.org/tutorial/authentication-tutorial/). It uses [Gatsby Plugin Firebase](https://www.gatsbyjs.org/packages/gatsby-plugin-firebase/) to import and set firebase SDK, and [Gatsby Plugin Create Client Path](https://www.gatsbyjs.org/packages/gatsby-plugin-create-client-paths) to set a private route.

The short version is:
- Gatsby statically renders all unauthenticated routes as usual static pages
- Authenticated routes are whitelisted as client-only (in this starter in the path mysite/app/*)
- Logged out users are redirected to the login page if they attempt to visit private routes
- Logged in users will see their private content

# Getting Started

Create the `.env.development` and `.env.production` file in your root directory:

```
GATSBY_FIREBASE_API_KEY=<YOUR_FIREBASE_API_KEY>
GATSBY_FIREBASE_AUTH_DOMAIN=<YOUR_FIREBASE_AUTH_DOMAIN>
GATSBY_FIREBASE_DATABASE_URL=<YOUR_FIREBASE_DATABASE_URL>
GATSBY_FIREBASE_PROJECT_ID=<YOUR_FIREBASE_PROJECT_ID>
GATSBY_FIREBASE_STORAGE_BUCKET=<YOUR_FIREBASE_STORAGE_BUCKET>
GATSBY_FIREBASE_MESSAGING_SENDER_ID=<YOUR_FIREBASE_MESSAGING_SENDER_ID>
GATSBY_FIREBASE_APP_ID=<YOUR_FIREBASE_APP_ID>
GATSBY_FIREBASE_MEASUREMENT_ID=<YOUR_FIREBASE_ANALYTICS_TRACKING_ID>
```

and then:

```
npm install # or yarn install
gatsby develop 
```
