import React from "react";
import ReactDOM from 'react-dom/client'
import App from "./App";
import './index.css'

/* -------------------------------------------------------------------------------------------------------------------------------------------(Connects to the root in public/index.html)------------------------------------------------------------------------------------------------------------------------------------------------------------*/
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)