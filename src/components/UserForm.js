import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, updateUser } from '../redux/slices';

const UserForm = ({ user, setUserToEdit }) => {
  const [formData, setFormData] = useState(user || { name: '', email: '' });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      dispatch(updateUser({ id: user.id, newUser: formData }));
      setUserToEdit(null);
    } else {
      dispatch(addUser({ id: Date.now(), ...formData }));
    }
    setFormData({ name: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <button type="submit">{user ? 'Update' : 'Add'} User</button>
    </form>
  );
};

export default UserForm;
