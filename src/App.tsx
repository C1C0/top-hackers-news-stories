/** @jsxRuntime classic */

import "./App.scss";
import { Container } from "react-bootstrap";

/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Header } from "./Components/Header/Header";
import { Stories } from "./Components/Stories/Stories";

function App() { 
  return (
    <Container className="App">
      <Header title={process.env.REACT_APP_APP_TITLE || ""} mantra={process.env.REACT_APP_APP_MANTRA}/>
      <Stories />
    </Container>
  );
}

export default App;
