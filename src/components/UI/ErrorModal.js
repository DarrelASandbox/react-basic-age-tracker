import { Button, Card } from './';
import classes from './ErrorModal.module.css';

const ErrorModal = ({ title, message, onConfirm }) => (
  <div>
    <div className={classes.backdrop} onClick={onConfirm} />
    <Card className={classes.modal}>
      <header>
        <h2 className={classes.header}>{title}</h2>
        <div className={classes.content}>
          <p>{message}</p>
        </div>
      </header>

      <footer className={classes.actions}>
        <Button onClick={onConfirm}>Ok</Button>
      </footer>
    </Card>
  </div>
);

export default ErrorModal;
