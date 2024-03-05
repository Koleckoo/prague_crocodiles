import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
import Practise from "./components/Practise/Practise";
import LastTournament from "./components/LastTournament/LastTournament";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <LastTournament />
      <Practise />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
