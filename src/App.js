import { useState } from 'react';
import { AddUser, UserList } from './components/Users/';

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const displayUserHandler = (formData) =>
    setUsersList((prevUsersList) => [...prevUsersList, formData]);

  return (
    <div>
      <AddUser onAddUser={displayUserHandler} />
      <UserList users={usersList} />
    </div>
  );
};

export default App;
