import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import EditUser from './Components/EditUser';
function App() {
  return (
    <div className="bg-blue-600 w-screen h-screen flex flex-col justify-center items-center overflow-hidden">
      
      <Routes>

        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* Student Form page */}
       
  <Route path="/edit/:id" element={<EditUser />} />
      </Routes>

    </div>
  );
}

export default App;
