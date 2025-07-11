import { useState } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CarDetails from './pages/CarDetails';
import Home from './pages/Home';
import MyBookings from './pages/MyBookings';


const App = () => {

  const [showLogin, setShowLogin] = useState(false);
  const isOwnerPath = useLocation().pathname.startsWith('/owner')

  return (
    <>
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin}/>}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/car-details/:id' element={<CarDetails/>} />
        <Route path='/cars' element={<CarDetails/>} />
        <Route path='/my-bookings' element={<MyBookings/>} />
      </Routes>
      
    </>
  )
}

export default App 