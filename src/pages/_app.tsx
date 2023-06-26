import { persistor, store } from '@/store'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import '../../styles/index.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <title>CMS</title>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}
