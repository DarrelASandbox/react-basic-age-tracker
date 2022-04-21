import { Card } from '../UI';
import classes from './UserList.module.css';

const UserList = ({ users }) => (
  <Card className={classes.users}>
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} is {user.age} years old
        </li>
      ))}
    </ul>
  </Card>
);

export default UserList;
