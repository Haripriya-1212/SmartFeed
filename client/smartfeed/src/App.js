// import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Header from './component/Header';
// import Newspost from './component/Newspost';
import {Routes, Route} from 'react-router-dom';
import Layout from './Layout';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import ExplorePage from './pages/ExplorePage';
import YourFeed from './pages/YourFeed';
import RegisterPage from './pages/RegisterPage';
import { UserContextProvider, RegisterContextProvider } from './UserContext';
import PostPage from './pages/PostPage';
import ChoosePref from './pages/ChoosePref';
import CardTry from './pages/CardTry';


function App() {
  return (
    <UserContextProvider>
      <RegisterContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<IndexPage />}></Route>

            <Route path={"/login"} element={<LoginPage />}></Route>

            <Route path={"/register"} element={<RegisterPage />}></Route>
            <Route path={"/choose"} element={<ChoosePref />}></Route>

            <Route path={"/yourfeed"} element={<YourFeed />}></Route>
            <Route path={"/explore"} element={<ExplorePage />}></Route>

            <Route path={"/cardTry"} element={<CardTry />}></Route>

            <Route path={"/post/:id"} element={<PostPage />}></Route>
          </Route>

          <Route path={'/post/:id'} element={<PostPage/>}></Route>
      </Routes>
        
      </RegisterContextProvider>
    </UserContextProvider>
  );
}

export default App;
