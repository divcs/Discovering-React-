import { createContext, useContext, useState } from 'react'

// creating usercontext and giving some initial values
export const userContext = createContext({
  user: null,
  logIn: () => {},
  logOut: () => {},
})

const USER = { name: 'Guest', isGuestUser: true }

// Provider
export function UserContextProvider({ children }) {
  const [user, setUser] = useState(USER)
  function logIn(username) {
    setUser({ isGuestUser: false, name: username })
  }
  function logOut() {
    setUser(USER)
  }
  return (
    <userContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </userContext.Provider>
  )
}

// custom hook for consuming the values of the context to the header and other components
// Consumer
export function useUserContext() {
  const { user, logIn, logOut } = useContext(userContext)

  return { user, logIn, logOut }
}
