import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './main/App.tsx'
//import './index.css' not needed after installing bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

/* main.tsx is the entry point for the app
  It instructs the ReactDOM() function to find the element root
  component and render this component in the browser

  In index.html, the file that will initially be loaded by the browser 
  the element "root" is present. so in this very spot the root component
  with all chiuld components will be rendered.
*/
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
