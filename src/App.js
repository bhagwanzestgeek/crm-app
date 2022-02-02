import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";



const HomePage = React.lazy(() => import('./components/HomePage'));
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
            <Route path='/' element={ <HomePage/> } />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={ <Login/> }/>
            <Route path='/dashboard' element={ <Dashboard/> }/>
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
