import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import CarDetails from './pages/CarDetails';
import Home from './pages/Home';
import MyBookings from './pages/MyBookings';
import Footer from './components/Footer';
import Cars from './pages/Cars';
import Layout from './pages/owner/Layout';
import Dashboard from './pages/owner/Dashboard';
import AddCar from './pages/owner/AddCar';
import ManageCars from './pages/owner/ManageCars';
import ManageBookings from './pages/owner/ManageBookings';


const App = () => {

  const [showLogin, setShowLogin] = useState(false);
  const isOwnerPath = useLocation().pathname.startsWith('/owner')

  return (
    <>
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin}/>}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/car-details/:id' element={<CarDetails/>} />
        <Route path='/cars' element={<Cars/>} />
        <Route path='/my-bookings' element={<MyBookings/>} />
        <Route path='/owner' element={<Layout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path='manage-cars' element={<ManageCars/>}/>
          <Route path='manage-bookings' element={<ManageBookings/>}/>
          <Route path='add-car' element={<AddCar/>}/>
        </Route>

      </Routes>

      {!isOwnerPath && <Footer/>}
    </>
  )
}

export default App 