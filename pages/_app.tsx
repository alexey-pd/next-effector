import {Scope, fork, serialize} from 'effector'
import {Provider} from 'effector-react/scope'

import './style.scss'

let clientScope: Scope

export default function App({Component, pageProps}: any) {
  const scope = fork({
    values: {
      ...(clientScope && serialize(clientScope)),
      ...pageProps.initialState,
    },
  })
  if (typeof window !== 'undefined') clientScope = scope
  console.log('scope', serialize(scope))
  return (
    <Provider value={scope}>
      <Component {...pageProps} />
    </Provider>
  )
}
