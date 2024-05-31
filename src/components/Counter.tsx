import { useState } from 'react'
import styles from "./counter.module.scss"

function Counter() {
    const [count, setCount] = useState<number>(0)
    const increment = () => {
        setCount(n=> n + 1)
    }
    const decrement = () => {
        setCount(n=> n - 1)
    }

    return (
    <div>
        <h1>{count}</h1>
        <button className={styles.suka} onClick={increment}>
            +
        </button>
        <button onClick={decrement}>
            -
        </button>
    </div>
    )

}

export default Counter