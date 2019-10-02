import React from 'react'
import { render } from 'react-dom'

import './assets/scss/main.scss'
import { ErrorBoundary } from './app/exception'
import registerServiceWorker from './registerServiceWorker'
import App from './app/App'

render(
	<ErrorBoundary>
		<App />
	</ErrorBoundary>, document.getElementById('root'))

registerServiceWorker()
