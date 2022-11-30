import Nav from "./Components/Navigation/Nav";
import Header from "./Components/Header/Header";
import Promoted from "./Components/Pages/Promoted/Promoted";
import Properties from "./Components/Pages/Properties/Properties";
function App() {
  return (
    <div className="App">
        <Nav/>
        <Header/>
        <Promoted/>
        <Properties/>
    </div>
  );
}

export default App;
