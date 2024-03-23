import "../sass/style.scss";
import Header from "./components/Header";
import Notice from "./components/Notice";
import Hero from "./components/Hero";
import Section from "./components/Section";

function App() {
  return (
    <>
      <Notice/>
      <Header/>
      <div className="stack">
        <Hero />
        <Section />
      </div>
    </>
  );
}

export default App;
