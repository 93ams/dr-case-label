import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react'
import jwt from 'jsonwebtoken'
import { useRouter } from 'next/router'
import { useLocalStorage } from './storage'

export type AuthState = {
  login: (f: HTMLFormElement) => void
  isAuthenticated?: boolean
  cleanError: () => void
  logout: () => void
  username?: string
  error?: string
  token?: string
}

const AuthContext = createContext<AuthState>({
  cleanError: () => null,
  logout: () => null,
  login: () => null,
})
export const useAuth = () => useContext(AuthContext)
export const AuthProvider = ({ children }: PropsWithChildren<any>) => {
  const [token, setToken] = useLocalStorage<string>('APP_TOKEN')
  const [username, setUsername] = useState<string>()
  const [error, setError] = useState<string>()
  const router = useRouter()
  useEffect(() => {
    if (!token) router.push('/auth')
  }, [children, token])
  useEffect(() => {
    setUsername(token ? (jwt.decode(token) as any).username : undefined)
  }, [token])
  const state = {
    login: async (f: HTMLFormElement) => {
      await fetch('/auth/login', {
        method: 'post',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: [...new FormData(f).entries()]
          .map(
            (x) =>
              `${encodeURIComponent(x[0])}=${encodeURIComponent(
                x[1] as string,
              )}`,
          )
          .join('&'),
      })
        .then((res) => res.json())
        .then(({ access_token }) => setToken(access_token))
        .then(() => router.push('/'))
        .catch(() => setError('invalid credentials'))
    },
    cleanError: () => setError(undefined),
    logout: () => setToken(undefined),
    isAuthenticated: !!username,
    username,
    token,
    error,
  }
  console.log(username)
  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>
}
