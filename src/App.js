import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {
  const [user, setUser] = useState([]);
  
  const addUserHandler = (uName, uAge) =>{
    setUser((prevUsers)=>{
      return [...prevUsers, {name: uName, age: uAge, id: Math.random().toString()}]; 
    });
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={user}/>
    </div>
  );
};

export default App;
