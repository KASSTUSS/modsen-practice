import { CSSTransition } from 'react-transition-group';
import uuid from 'react-uuid';

import styles from './styles.module.css';

function Loader({ isActive }) {
  return (
    <CSSTransition
      in={isActive}
      timeout={500}
      classNames={{
        enterActive: styles.loader_entering,
        exitActive: styles.loader_exiting,
      }}
      mountOnEnter
      unmountOnExit
    >
      <div>
        <div className={`${styles.loader} ${styles.book}`}>
          {new Array(3).fill(0).map(() => (
            <figure key={uuid()} className={styles.page} />
          ))}
        </div>

        <h1 className={styles.loader__text}>Loading</h1>
      </div>
    </CSSTransition>
  );
}

export default Loader;
