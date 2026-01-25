import { useState } from "react";


export function Counter() {

    const [count, setCount] = useState<number>(0);

    return (
        <div>
            <p>Cups  orderded : {count}</p>
            <button onClick={() => setCount(count + 1)} disabled={count >= 10}>Order cups</button>
            <button onClick={() => setCount(count - 1)} disabled={count <= 0}>Cancel order</button>
        </div>
    )

}