export const isBrowser = () => typeof window !== "undefined"

export const getUser = () =>
  isBrowser() && window.localStorage.getItem("user")
    ? JSON.parse(window.localStorage.getItem("user"))
    : {}

export const setUser = user =>
  isBrowser() && window.localStorage.setItem("user", JSON.stringify(user))

const deleteFirebaseCookie = () => {
  const firebaseAuthUser = isBrowser() && Object.keys(window.localStorage).filter(item => item.startsWith('firebaseui:'))[0]
  isBrowser() && window.localStorage.removeItem(firebaseAuthUser);
}

export const isLoggedIn = () => {
  const user = getUser()
  return !!user.email
}

export const logout = callback => {
  deleteFirebaseCookie();
  setUser({})
  callback()
}