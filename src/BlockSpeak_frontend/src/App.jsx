import { useState } from 'react';
import { BlockSpeak_backend } from 'declarations/BlockSpeak_backend';
import { login, logout as destroy } from "./utils/auth";
import { Button } from "react-bootstrap";
// import Landing from './components/landing';

function App() {
  const [greeting, setGreeting] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    BlockSpeak_backend.greet(name).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }

  return (
    <main>
      <Button
            onClick={login}
            variant="outline-light"
            className="rounded-pill px-3 mt-3"
          >
            Login
          </Button>
      
    </main>
  );
}

/**
 * <img src="/logo2.svg" alt="DFINITY logo" />
      <br />
      <br />
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name: &nbsp;</label>
        <input id="name" alt="Name" type="text" />
        <button type="submit">Click Me!</button>
      </form>
      <section id="greeting" className='text-red-600'>{greeting}</section>
      <h1 className='text-red-600'>Hello</h1>

      <Button
            onClick={login}
            variant="outline-light"
            className="rounded-pill px-3 mt-3"
          >
            Login
          </Button>

 */


      
export default App;
