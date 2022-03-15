import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PostContainer from './components/PostContainer';
import { useAppSelector } from './hooks/redux';
import { fetchUsers } from './store/reducers/ActionCreators';
import { userSlice } from './store/reducers/UserSlice';


function App() {
  

  const dispatch = useDispatch()
  const { users, isLoading, error } = useAppSelector(state => state.userReducer)

  useEffect(() => {
    dispatch(fetchUsers());
  }, [])
  
  console.log(users);
  

  return (
    <div className="App">
      {/* {isLoading && <h1>Идет загрузка...</h1>}
      {error && <h1>{error}</h1>}
      {JSON.stringify(users, null, 2)}
       */}
    <PostContainer />

    </div>
  );
}

export default App;
