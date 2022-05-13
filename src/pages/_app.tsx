import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client'
import createEmotionCache from '../client/theme/emotion'
import { ThemeProvider } from '../client/theme/provider'
import { AuthProvider } from '../client/provider/auth'
import { CacheProvider } from '@emotion/react'
import { EmotionCache } from '@emotion/cache'
import { AppProps } from 'next/app'
import theme from '../client/theme'
import { FC } from 'react'
import { setContext } from '@apollo/client/link/context'

const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}
const httpLink = createHttpLink({
  uri: '/graphql',
})
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('APP_TOKEN')?.replaceAll('"', '')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

const App: FC<MyAppProps> = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) => {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <ApolloProvider client={client}>
            <Component {...pageProps} />
          </ApolloProvider>
        </AuthProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default App
