
// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage/Home';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path='/' element={<Homepage/>}> </Route>
    
      </Routes>
    </div>
  );
}

export default App;
