import "./App.css";
import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import { ThemeProvider } from "./components/ThemeProvider";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <header>
        <Banner />
        <NavBar />
      </header>
      <h1 className="dark:bg-red-400">hi</h1>
      </ThemeProvider>
    </>
  );
}

export default App;
