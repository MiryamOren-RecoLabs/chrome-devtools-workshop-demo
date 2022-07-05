import './App.css';
import React, { useEffect, useState } from 'react';
import { getCookie, getDataFromServer, thisFunctionIsCausingError, sum } from './helperFunctions'

function App() {
  const [cookieValue, setCookieValue] = useState(getCookie("example cookie"));
  useEffect(()=> {
    console.log('If we are logging any message from our code, we could see it here');
    getDataFromServer();
  }, []);

  useEffect(() => {
    try {
      thisFunctionIsCausingError(5);
    } catch(error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCookieValue(getCookie("example cookie"))
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>This is a one-page project designed to demonstrate the use of Chrome Devtools</h1>
      </header>
      <main>
        <p>{`2 + 8 = ${sum(2, 8)}`}</p>
        <p>{`The value of the cookie "example cookie" is "${cookieValue}"`}</p>
      </main>
    </div>
  );
}
export default App;