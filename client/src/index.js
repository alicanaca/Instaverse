import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './app'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import reducers from "./reducers"

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

const store = createStore(reducers, compose(applyMiddleware(thunk)))

root.render(
    <Provider store={store}>
        <App />
    </Provider>
)
