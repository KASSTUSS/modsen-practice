import styles from './Loader.module.css'
import { CSSTransition } from 'react-transition-group'

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
            <div class={`${styles.loader} ${styles.book}`}>
                <figure class={styles.page}></figure>
                <figure class={styles.page}></figure>
                <figure class={styles.page}></figure>
            </div>

            <h1 class={styles.loader__text}>Loading</h1>
            </div>
        </CSSTransition>


    )
}

export default Loader