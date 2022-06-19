import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
  /* Strict Mode : 리액트에서 제공하는 검사 도구.
  개발 모드일 때만 디버그를 하며 해당 태그로 감싸져 있다면 자손까지 검사한다.
  console.log가 2번 실행되는 원인.
  */
);

reportWebVitals();
