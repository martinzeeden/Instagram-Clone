import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import * as ROUTES from './constants/Routes'

const Login = lazy(() => import ('./pages/Login/Login'));
const Register = lazy(() => import ('./pages/Register/Register'))

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading ...</p>}>
        <Routes>
          <Route path={ROUTES.LOGIN} element={<Login/>}/>
          <Route path={ROUTES.REGISTER} element={<Register/>}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
