import "./App.css";
import HomePage from "./pages/HomePage";
import CountryDetails from "./pages/CountryDetailsPage";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const [countries, setCountries] = useState([]); 

  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/country/:alpha3Code" element={<CountryDetails  countries={countries} setCountries={setCountries}/>} />
      </Routes>
 
    </div>
  );
}

export default App;
