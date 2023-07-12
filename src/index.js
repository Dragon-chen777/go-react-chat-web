import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Login from './views/Login'
import Panel from './views/Panel'
import Test from './Test/Test.jsx'
import './index.css'
import store from './redux'

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route path="/" component={Test} />
				<Route path="/login" component={Login} />
				<Route path="/panel" component={Panel} />
			</Switch>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root'),
)
