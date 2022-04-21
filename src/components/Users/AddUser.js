import { Button, Card } from '../UI';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const addUserHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" />
        <label htmlFor="age">Age</label>
        <input id="age" type="number" />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
