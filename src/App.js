import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";



const HomePage = React.lazy(() => import('./components/Dashboard/Navbar/Index'));
const Signup=React.lazy(()=> import('./components/Auth/Signup'))
const Login = React.lazy(() => import('./components/Auth/Login'));
const Dashboard = React.lazy(() => import('./components/Dashboard'));
 

function App() {

  const user = useSelector(state => state.user);

  console.log('Initial User Data : ', user);

  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
         {/* <Navbar />  */}
        <Router>
          <Routes>
            <Route path='/' element={ <Login/> } />
            <Route path='/signup' element={<Signup />} />
            <Route path='/dashboard' element={ <HomePage/> }/>
            <Route path='/forget_password' element={ <p>Reset Your Password Here</p> }/>
            <Route path='/dashboard' element={ <Dashboard/> }/>
            <Route path='/user/edit/:id' element={ <p>Edit User Details</p> }/>
            <Route path='/user/delete/:id' element={ <p>Dele User</p> }/>
            <Route path='/user/:id' element={ <p>Dele User</p> }/>
            <Route path='/user/projComponent' element={ <p>Material Ui Project</p> }/>
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
