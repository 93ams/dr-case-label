import { FC } from 'react'
import { AppProps } from 'next/app'
import createEmotionCache from '../client/theme/emotion'
import { EmotionCache } from '@emotion/cache'
import { CacheProvider } from '@emotion/react'

const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const App: FC<MyAppProps> = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) => {
  return (
    <CacheProvider value={emotionCache}>
      <Component {...pageProps} />
    </CacheProvider>
  )
}

export default App
