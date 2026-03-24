import { Routes, Route } from 'react-router-dom';
import { ResultProvider } from './provider/Provider';
import Login from "./pages/login/Login";
import LoginS from "./pages/loginS/LoginS";
import LogoutS from "./pages/logoutStudent/LogoutS";
import LogoutT from "./pages/logoutTeacher/LogoutT";
// import Home from "./pages/logoutStudent/sections/Sectiom";

function App() {
  return (
    <ResultProvider> {/* Provider barcha Route-larni o'rab turibdi */}
      <div className="App">
        <Routes>
          <Route path='/' element={<LoginS />} />
          <Route path='/loginteacher' element={<Login />} />
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path='/student/*' element={<LogoutS />} />
          <Route path='/teacher/*' element={<LogoutT />} />
        </Routes>
      </div>
    </ResultProvider>
  );
}
export default App;