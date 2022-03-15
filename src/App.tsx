import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from './hooks/redux';
import { userSlice } from './store/reducers/UserSlice';



function App() {
  

  const dispatch = useDispatch()
  

  return (
    <div className="App">
    </div>
  );
}

export default App;
