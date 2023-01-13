import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { PostsContextProvider } from './context/postsContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <PostsContextProvider>
    <App />
  </PostsContextProvider>
  </React.StrictMode>,
)
