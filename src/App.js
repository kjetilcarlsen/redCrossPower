import React, { Component } from 'react';
import './App.css';

function useWindowSize() {
  const w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight || e.clientHeight || g.clientHeight;


  return { x, y }
}

const size = {
  mobile: 480,
  tablet: 768,
  web: 1249
}


function App() {
  const [{ x, y }, setWindowSize] = React.useState(useWindowSize())

  React.useEffect(() => {

    function resizeWindow() {
      setWindowSize(useWindowSize())
    }

    window.addEventListener("resize", resizeWindow)

    return () => {
      window.removeEventListener("resize", resizeWindow);
    }
  })

  function renderIframeSrc() {
    if (x > size.mobile) {
      return "https://app.powerbi.com/view?r=eyJrIjoiYzFjYWFlNzQtMzBhOS00MzExLWI0MzQtNDliYjg4ZjEzYTg1IiwidCI6Ijc2YTJhZTVhLTlmMDAtNGY2Yi05NWVkLTVkMzNkNzdjNGQ2MSIsImMiOjh9"
    } else if (x > size.tablet) {
      return "https://app.powerbi.com/view?r=eyJrIjoiODIwYWY2MGEtYzRmMy00MTkyLTgwY2QtYjM1MWQxOGNkOTBlIiwidCI6Ijc2YTJhZTVhLTlmMDAtNGY2Yi05NWVkLTVkMzNkNzdjNGQ2MSIsImMiOjh9"
    } else {
      return "https://app.powerbi.com/view?r=eyJrIjoiODIwYWY2MGEtYzRmMy00MTkyLTgwY2QtYjM1MWQxOGNkOTBlIiwidCI6Ijc2YTJhZTVhLTlmMDAtNGY2Yi05NWVkLTVkMzNkNzdjNGQ2MSIsImMiOjh9"

    }
  }

  return (
    <div className="App">
      <iframe title="power-bi-redcross" width={x} height={y} src={renderIframeSrc()} frameborder="0" allowFullScreen="true" />
    </div>
  );
}

export default App;
