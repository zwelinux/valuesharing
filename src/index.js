import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProgramCreation from './routes/program_creation';
import ContentCreation from './routes/content_creation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  // <BrowserRouter>
  //   <App />
  // </BrowserRouter>
  // </React.StrictMode>

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="program_creation" element={<ProgramCreation />} />
      <Route path="content_creation" element={<ContentCreation />} />
      <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>ဟိတ် ဘယ်တွေလျှောက်သွားနေတာတုန်း?</p>
        </main>
      }
    />
    </Routes>
  </BrowserRouter>

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
