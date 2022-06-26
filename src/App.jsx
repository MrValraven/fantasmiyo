import "./App.css";
import Contacts from "./components/Contacts/Contacts";
import CustomOrder from "./components/CustomOrder/CustomOrder";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Work from "./components/Work/Work";

function App() {
  return (
    <div className="App">
      <Hero />
      <Work />
      <CustomOrder />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
