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
      <Header title="Hacker News" mantra="Top stories from the world of hacking"/>
      <Stories />
    </Container>
  );
}

export default App;
