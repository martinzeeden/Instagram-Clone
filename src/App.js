import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './variables.css';
import * as ROUTES from './constants/Routes';
import useAuthListener from './hooks/useAuthListener';
import UserContext from './context/user';

const Login = lazy(() => import('./pages/Login/Login'));
const Register = lazy(() => import('./pages/Register/Register'));
const Dashboard = lazy(() => import('./pages/Dashboard/Dashboard'));
const Profile = lazy(() => import('./pages/Profile/Profile'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

const App = () => {
  const { user } = useAuthListener();

  return (
    <UserContext.Provider value={{ user}}>
      <BrowserRouter>
        <Suspense fallback={<p>Loading ...</p>}>
          <Routes>
            <Route path={ROUTES.LOGIN} element={<Login />} />
            <Route path={ROUTES.REGISTER} element={<Register />} />
            <Route path={ROUTES.DASHBOARD} element={<Dashboard/>}/>
            <Route path={ROUTES.PROFILE} element={<Profile/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default App;
