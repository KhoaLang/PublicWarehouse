import './App.css';
import Navbar from './Components/Navbar';
import pic from './4565.jpg'
function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${pic})`}}>
      <Navbar />
      
    </div>
  );
}

export default App;
