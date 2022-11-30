import Nav from "./Components/Navigation/Nav";
import Header from "./Components/Header/Header";
import Promoted from "./Components/Pages/Promoted/Promoted";
import Properties from "./Components/Pages/Properties/Properties";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
        <Nav/>
        <Header/>
        <Promoted/>
        <Properties/>
        <Footer/>
    </div>
  );
}

export default App;
