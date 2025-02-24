import { useState, Suspense , lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./tailwindcss.css";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const Main = lazy(() => import('./pages/main'));
const Reserver = lazy(() => import('./pages/reserver'));
const PaymentSuccess = lazy(() => import('./pages/payment-success'));
const ConfirmPage = lazy(() => import('./pages/chart'));
const ChartTest = lazy(() => import('../tests/chart'));
const Resturant = lazy(() => import('./pages/resturant'));
const Beach = lazy(() => import('./pages/beach'));
const Fitness = lazy(() => import('./pages/fitness'));
const Activite = lazy(() => import('./pages/activite'));
const Login = lazy(() => import('./pages/login'));
const Dashboard = lazy(() => import('./pages/dashboard')); // Import Login component
const SignUp = lazy(() => import('./pages/signup')); // Import SignUp component

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/reserver' element={<Reserver />} />
            <Route path='/chart' element={<ConfirmPage />} />
            <Route path='/payment-success' element={<PaymentSuccess />} />
            <Route path='/chartTest' element={<ChartTest />} />
            <Route path='/resturant' element={<Resturant />} />
            <Route path='/beach' element={<Beach />} />
            <Route path='/fitness' element={<Fitness />} />
            <Route path='/activite' element={<Activite />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} /> {/* Add Login route */}
            <Route path="/signup" element={<SignUp />} /> {/* Add SignUp route */}
            <Route path='*' element={"404"} />
          </Routes>
        </Router>
      </Suspense>
    </>
  );
}

export default App;