
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Topbar from './compenents/Topbar';
import Dashboard from './compenents/Dashboard';
import Pricing from './compenents/Pricing';
import Home from './compenents/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Setting from './compenents/Setting';
import Profile from './compenents/Profile';
import Hooks from './compenents/Hooks';
import Forms from './compenents/Forms';
import Form1 from './compenents/Form1';
import { Toaster } from 'react-hot-toast';
import StudentList from './compenents/StudentList';
import StudentView from './compenents/StudentView';
import Task1 from './compenents/Task1';


function App() {
  return (
    <BrowserRouter>
    <Topbar />
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Dashboard' element={<Dashboard />}/>
        <Route path='/Hooks' element={<Hooks />}/>
        <Route path='/Forms' element={<Forms/>}/>
        <Route path='Form1' element={<Form1/>}/>
        <Route path='task1' element={<Task1/>}/>

        <Route path='students' element={<StudentList/>}/>
        <Route path='students/:id' element={<StudentView/>}/>
        <Route path='Pricing' element={ <Pricing />}/>
        <Route path='/setting' element={<Setting/>}>
          <Route path='profile' element={<Profile/>}/>
        </Route>
      
      
      </Routes>
      <Toaster   position="bottom-center"  toastOptions={{
    // Define default options
    className: '',
    duration: 5000,
    style: {
      background: '#000',
      color: '#fff',
    },

    // Default options for specific types
    success: {
      duration: 3000,
      theme: {
        primary: 'green',
        secondary: 'black',
      },
    },
  }}
/>

    </BrowserRouter>
  );
}

export default App;
