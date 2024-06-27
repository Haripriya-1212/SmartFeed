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
<<<<<<< HEAD
<<<<<<< HEAD
import CardTry from './pages/CardTry';
=======
import Try from './pages/Try';
>>>>>>> 173cea014c9835cc188b7e37ca01307b9c73bedd
=======

>>>>>>> 1db5ea56bfa456f0daa84c6496ef30d517f42cbf

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

<<<<<<< HEAD
<<<<<<< HEAD
            <Route path={"/cardTry"} element={<CardTry />}></Route>

            <Route path={"/post/:id"} element={<PostPage />}></Route>
          </Route>
        </Routes>
=======
          <Route path={'/cardTry'} element={<Try/>}></Route>
=======
>>>>>>> 1db5ea56bfa456f0daa84c6496ef30d517f42cbf

          <Route path={'/post/:id'} element={<PostPage/>}></Route>
        </Route>
      </Routes>
        
>>>>>>> 173cea014c9835cc188b7e37ca01307b9c73bedd
      </RegisterContextProvider>
    </UserContextProvider>
  );
}

export default App;
