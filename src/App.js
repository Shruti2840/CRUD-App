import React, { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import './App.css';

function App() {
  const [userToEdit, setUserToEdit] = useState(null);

  return (
    <div className="App">
      <h1>CRUD App with Redux Toolkit</h1>
      <UserForm user={userToEdit} setUserToEdit={setUserToEdit} />
      <UserList setUserToEdit={setUserToEdit} />
    </div>
  );
}

export default App;
