import { useState } from 'react';
import { Button, Card } from '../UI';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [formData, setFormData] = useState({ name: '', age: '' });
  const { name, age } = formData;
  const [error, setError] = useState();

  const inputHandler = (e) =>
    setFormData({
      ...formData,
      id: crypto.getRandomValues(new Uint32Array(10)),
      [e.target.id]: e.target.value,
    });

  const addUserHandler = (e) => {
    e.preventDefault();
    if (name.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age.',
      });
      return;
    }

    if (+age < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (>0).',
      });
      return;
    }

    props.onAddUser(formData);
    setFormData({ name: '', age: '' });
  };

  const errorHandler = () => setError(null);

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" value={name} onChange={inputHandler} />
          <label htmlFor="age">Age</label>
          <input id="age" type="number" value={age} onChange={inputHandler} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
