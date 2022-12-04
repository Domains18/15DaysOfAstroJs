import Nav from "./Components/Navigation/Nav";
import Header from "./Components/Header/Header";
import Promoted from "./Components/Content/Promoted/Promoted";
import Properties from "./Components/Content/Properties/Properties";
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
