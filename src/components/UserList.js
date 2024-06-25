import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from '../redux/slices';

const UserList = ({ setUserToEdit }) => {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
            <button onClick={() => setUserToEdit(user)}>Edit</button>
            <button onClick={() => dispatch(deleteUser(user.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
