import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import { router } from './Routes/Router';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='bg-[#F2F2F2] container mx-auto'>
        <RouterProvider router={router}></RouterProvider>
        <Toaster />
    </div>
  );
}

export default App;
