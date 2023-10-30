import React, {useEffect} from 'react'
import './App.css';
import Nav from './components/navbar/navbar';
import Board from './components/dashboard/board';
import {useDispatch, useSelector} from 'react-redux';
import { fetchAllData } from './func/func';
import Loading from './components/loading/loading';

const App = () =>
{
  const dispatch = useDispatch();
  const {allTickets} = useSelector(state => state.DataReducer);

useEffect(()=>{
  dispatch(fetchAllData());
},[dispatch])

return allTickets ? (
  <div style={{paddingTop : "10px"}} >
      <Nav/>
      <hr style={{marginTop : "10px"}} />
      <Board/>
    </div>
) : <Loading/>
}
export default App