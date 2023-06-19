import { CSSTransition } from 'react-transition-group'

import styles from './styles.module.css'

const Loader = ({ isActive, onExited }) => {
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
            onExited={() => {onExited()}}
        >
            <div>
                <div className={`${styles.loader} ${styles.book}`}>
                    {[0,1,2].map((elem) => (<figure key={elem} className={styles.page}></figure>))}
                </div>

                <h1 className={styles.loader__text}>Loading</h1>
            </div>
        </CSSTransition>
    )
}

export default Loader