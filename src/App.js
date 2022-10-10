import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './component/Home/Home';
import About from './component/About/About';
import Default from './component/Default/Default';
import Main from './component/Main/Main';
import Friends from './component/Friends/Friends';
import FriendDetail from './component/FriendDetail/FriendDetail';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        { path: '/', element: <div>This page is default</div> },
        { path: '/home', element: <Home></Home> },
        { path: '/about', element: <About></About> },
        {
          path: '/friends',
          loader: ()=> {
            return fetch('https://jsonplaceholder.typicode.com/users')
          },
          element: <Friends></Friends>
        },
        {
          path: '/friend/:friendId',
          loader: async({params})=> {
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
            // console.log(params)
          },
          element: <FriendDetail></FriendDetail>
        },
        { path: '*', element: <div>Tomar Page khuje pawa jacce na</div> },
      ]
    },

  ])



  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
