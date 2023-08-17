import logo from './logo.svg';
import './App.css';
import Navigation from './Components/NavigationHome';
import NavigationHome from './Components/NavigationHome';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createContext, useState } from 'react';
import Home from './Components/Home';
import NavigationUser from './Components/NavigationUser';
import CreateEventsForms from './Components/CreateEventsForms';

import ViewEvents from './Components/ViewEvents';
import EventDetails from './Components/EventDetails';
import UserReg from './Components/UserReg';
import Invitations from './Components/Invitations';
import Login from './Components/Login';
import InviteUser from './Components/InviteUser';
import Footer from './Components/Footer';
// import Footer from './Components/Footer';



const samplecontext=createContext()
function App() {
  const [showhomenav, setshowhomenav] = useState(true)
  const [showfooter, setshowfooter] = useState(true)
  return (
    <div >
      <ToastContainer position="top-center"></ToastContainer>
      <samplecontext.Provider value={{setshowhomenav,setshowfooter}}>
      <BrowserRouter>
      {showhomenav===true ? <NavigationHome/>:""}
      {/* {showbanner===true ? <Banner/>:""} */}
      
        <Routes>
          <Route path="/"  element={<Home/>}></Route>
          <Route path="/Navuser"  element={<NavigationUser/>}></Route>
          <Route path="/eventCreate"  element={<CreateEventsForms/>}></Route>
          <Route path="/inviteuser"  element={<InviteUser/>}></Route>
          <Route path="/viewevent"  element={<ViewEvents/>}></Route>
          <Route path="/eventdetail"  element={<EventDetails/>}></Route>
          <Route path="/userReg"  element={<UserReg/>}></Route>
          <Route path="/eventInvitation"  element={<Invitations/>}></Route>
          <Route path="/login"  element={<Login/>}></Route>
          {/* <Route path="/footer"  element={<Footer/>}></Route> */}
          {/* <Route path="/latest" element={<PopularMovie Url={LatestMovie} />}></Route>
          <Route path="/comedy"  element={<PopularMovie Url={ComedyMovies}/>}></Route>
          <Route path="/details" element={<MovieDetails/>}></Route> */}
        </Routes>
      </BrowserRouter>
      {showfooter===true ? <Footer/>:""}
      </samplecontext.Provider>
    </div>
  );
}

export default App;
export {samplecontext};
