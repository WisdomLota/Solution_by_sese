import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Explore from './pages/Explore';
import About from './pages/About';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import ScheduleTour from "./pages/ScheduleTour";
import './styles/general.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PaymentPage from "./pages/PaymentPage";
import EditProfile from "./pages/EditProfile";
import FormTypes from "./pages/FormTypes";
import Confirmation from "./pages/Confirmation";

function App() {
  return (
    <>
    <Router>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/explore' element={<Explore />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/schedule-tour' element={<ScheduleTour />}/>
        <Route path='/payments' element={<PaymentPage />}/>
        <Route path='/edit-profile' element={<EditProfile />}/>
        <Route path='/all-form-types' element={<FormTypes />}/>
        <Route path='/confirmation' element={<Confirmation />}/>
      </Routes>
    <Footer />
    </Router>
    </>
  );
}

export default App;
