import { Routes, Route } from 'react-router-dom';
import { ResultProvider } from './provider/Provider';
import Login from "./pages/login/Login";
import LoginS from "./pages/loginS/LoginS";
import LogoutS from "./pages/logoutStudent/LogoutS";
import LogoutT from "./pages/logoutTeacher/LogoutT";

function App() {
  return (
    <ResultProvider>
      <div className="App">
        <Routes>
          {/* Asosiy sahifalar */}
          <Route path='/' element={<LoginS />} />
          <Route path='/loginteacher' element={<Login />} />
          
          {/* Dashboardlar - ichki navigatsiya bilan */}
          <Route path='/student/*' element={<LogoutS />} />
          <Route path='/teacher/*' element={<LogoutT />} />
        </Routes>
      </div>
    </ResultProvider>
  );
}
export default App;