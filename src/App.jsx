import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Contacts from "./components/Contacts/Contacts";
import CustomOrder from "./components/CustomOrder/CustomOrder";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Work from "./components/Work/Work";

function App() {
  const [currentTheme, setCurrentTheme] = useState({
    name: "",
    backgroundColor: "",
    textColor: "",
    secondaryTextColor: "",
  });

  const accentColor = "#878787";

  const darkTheme = {
    name: "dark",
    backgroundColor: "#292828",
    textColor: "#e0e0e0",
    secondaryTextColor: "#d6d7d6",
  };

  const lightTheme = {
    name: "light",
    backgroundColor: "#fefeff",
    textColor: "#181818",
    secondaryTextColor: "#878787",
  };

  const switchThemes = () => {
    console.log("t");
    if (currentTheme.name === "light") {
      setCurrentTheme(darkTheme);
    } else setCurrentTheme(lightTheme);
  };

  useEffect(() => {}, []);

  return (
    <div
      className="app"
      style={{
        backgroundColor: currentTheme.backgroundColor,
        color: currentTheme.textColor,
      }}
    >
      <Header switchTheme={switchThemes} />
      <Hero />
      <Work />
      <CustomOrder />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
