import { Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import ArrivalInfo from "./components/ArrivalInfo";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='arrivalinfo/:id' element={<ArrivalInfo/>}/>
      </Routes>
    </>
  );
}

export default App;
