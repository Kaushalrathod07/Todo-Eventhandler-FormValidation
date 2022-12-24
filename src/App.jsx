
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Navbar from "./components/Navbar";
import EventHandlers from "./pages/EventHandlers";
import FormValidation from "./pages/Form-Validation/FormValidation";
import HomePage from "./pages/HomePage";
import Classbasedlifecycle from './pages/ClassBaselifecycle/Classbasedlifecycle'
import RestApi from "./pages/RestApi";


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/form-validation" element={<FormValidation/>}/>
        <Route path='/event-handlers' element={<EventHandlers />} />
        <Route path="/class-based-life-cycle" element={<Classbasedlifecycle/>} />
        <Route path='/rest-api' element={<RestApi />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;