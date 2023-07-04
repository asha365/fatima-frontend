import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import Home from './components/Home/Home/Home';

function App() {

  const router = createBrowserRouter([
      {
        path: '/',
        element: <Main></Main>,
        children: [
          {
            path: '/',
            element: <Home></Home>
          }
        ]
 
      }
    ])

  return (
    <div className='max-w-screen-xl mx-auto text-slate-950'>
          <RouterProvider router={router} />
    </div>
  );
}

export default App;
