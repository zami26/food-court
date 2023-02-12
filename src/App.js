import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import Reviews from './components/Reviews/Reviews';
import Location from './components/Location/Location';
import About from './components/About/About';
import Main from './layout/Main';
import ItemDetails from './components/itemDetails/ItemDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      { path: 'home', element: <Home></Home> },
      {
        path: 'menu',
        loader: async () => {
          return fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
        },
        element: <Menu></Menu>
      },
      {
        path: '/menuItem/:mealId',
        loader: async ({ params }) => {
          return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`)
        },
        element: <ItemDetails></ItemDetails>
      },
      {
        path: 'reviews',
        loader: async () => {
          return fetch('https://jsonplaceholder.typicode.com/comments')
        },
        element: <Reviews></Reviews>
      },
      { path: 'location', element: <Location></Location> },
      { path: 'about', element: <About></About> }
    ]
  },
  { path: '*', element: <div><h2>This page is not available: 404!! </h2></div> }

]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
