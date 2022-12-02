import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
import {IntlProvider} from 'react-intl';


let locale = "en-US";
if (navigator.language.includes("es")) {
  locale = "es-ES";

}
const root = ReactDOM.createRoot(document.getElementById('root'));

if (locale ==="en-US")
    root.render(
        <IntlProvider locale={locale} messages={localeEnMessages} >
        <App/>
        </IntlProvider>, document.getElementById("root")
    );
else
    root.render(
        <IntlProvider locale={locale} messages={localeEsMessages} >
        <App/>
        </IntlProvider>, document.getElementById("root")
    );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
