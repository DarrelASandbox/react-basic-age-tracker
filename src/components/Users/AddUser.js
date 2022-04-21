import { useState } from 'react';
import { Button, Card } from '../UI';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [formData, setFormData] = useState({ name: '', age: '' });
  const { name, age } = formData;

  const inputHandler = (e) =>
    setFormData({ ...formData, [e.target.id]: e.target.value });

  const addUserHandler = (e) => {
    e.preventDefault();
    if (name.trim().length === 0 || age.trim().length === 0) return;
    if (+age < 1) return;

    console.log(formData);
    setFormData({ name: '', age: '' });
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" value={name} onChange={inputHandler} />
        <label htmlFor="age">Age</label>
        <input id="age" type="number" value={age} onChange={inputHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
