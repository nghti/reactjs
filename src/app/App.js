import React from 'react'
import { Provider } from 'react-redux'

import {store} from './store'
import routes from './routes'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        {routes}
      </Provider>
    )
  }
}

export default App
