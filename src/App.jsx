
import Navbar from './Pages/Main/NavBar';
import About from './Pages/Main/About.jsx';
import { Route, Routes } from 'react-router-dom';
import Contact from './Pages/Main/contact.jsx';


function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* Other components go here */}
    </div>
  );
}

export default App;  