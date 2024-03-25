import logo from './logo.svg';
import './App.css';
//import AmenityList from './AmenityList';
//import Villa from './Villa';
//import Home from './Home';
//import VillaNumber from './VillaNumber';
import Header from './Header';
//import Footer from './Footer';
import Register from './Register';
//import Registerval from './Registerval';
import Login from './Login';
//import AmenityCreate from './AmenityCreate';
import AmenityUpdate from './AmenityUpdate';
import VillaNumberList from './VillaNumberList';
import VillanumCreate from './VillanumCreate';
import VillaNumUpdate from './VillaNumUpdate';
import VillanumDelete from './VillanumDelete';
import VillaList from './VillaList';
import VillaCreate from './VillaCreate';
import VillaUpdate from './VillaUpdate';
import VillaDelete from './VillaDelete';
import Front from './Front';
//import FrontNew from './FrontNew';
import PrivacyPage from './PrivacyPage';
import AmenityLis from './AmenityLis';
import Booking from './Booking';
import VillaCrud from './VillaCrud';
import VillaNumberCrud from './VillaNumberCrud';
import AmenityCrud from './AmenityCrud';
import { BrowserRouter as Router, Routes,Route, Link, BrowserRouter} from 'react-router-dom';
import Headernew from './Headernew';

import Mainpage from './Mainpage'
import Mainpage1 from './Mainpage1'
import Detailsnew from './Detailsnew';
import LoginNew from './LoginNew';
import RegisterNew from './RegisterNew';
 
function App() {
  return (
    <div>
 
      <BrowserRouter>

      <Routes>
        <Route path="/" element={<Headernew />}></Route>

        <Route path="/admin" element={<Header />}></Route>
        <Route path="/login" element={<LoginNew />}></Route>
         <Route path="/register" element={<RegisterNew />}></Route>
       
         <Route path="/Login" element={<Login />}></Route>
         <Route path="/Register" element={<Register></Register>}></Route>
         <Route path="/PrivacyPage" element={<PrivacyPage></PrivacyPage>}></Route>
         <Route path="/Front" element={<Front></Front>}></Route>
         <Route path="/VillaList" element={<VillaList></VillaList>}></Route>
         <Route path="/VillaNumberList" element={<VillaNumberList></VillaNumberList>}></Route>
         <Route path="/villanum/create" element={<VillanumCreate></VillanumCreate>}></Route>
         <Route path="/villanum/update" element={<VillaNumUpdate></VillaNumUpdate>}></Route>
         <Route path="/VillaNumDelete" element={<VillanumDelete></VillanumDelete>}></Route>
         <Route path="/AmenityLis" element={<AmenityLis></AmenityLis>}></Route>
         <Route path="/VillaCrud" element={<VillaCrud></VillaCrud>}></Route>
         <Route path="/VillaNumberCrud" element={<VillaNumberCrud></VillaNumberCrud>}></Route>
         <Route path="/AmenityCrud" element={<AmenityCrud></AmenityCrud>}></Route>
         <Route path="/VillaCreate" element={<VillaCreate></VillaCreate>}></Route>
         <Route path="/VillaUpdate" element={<VillaUpdate></VillaUpdate>}></Route>
         <Route path="/VillaDelete" element={<VillaDelete></VillaDelete>}></Route>
         <Route path="/Booking" element={<Booking></Booking>}></Route>
         <Route path="/AmenityUpdate" element={<AmenityUpdate></AmenityUpdate>}></Route>

         <Route path='/front/details/:id' element={ <Detailsnew />} ></Route>
      </Routes>
      
    </BrowserRouter>


      
    
    </div>

    
  );
}
 
export default App;