// import { useState } from "react";
import { computed } from "@preact/signals-react";
import Counter, { count } from "./Counter";

function App() {
    console.log("rendering app...");

    // const [count, setCount] = useState(0);
    // const double = signal(0);
    const double = computed(() => count.value * 2);

    // const update = (val) => setCount((prevCount) => prevCount + val);
    const update = (val) => (count.value += val);

    return (
        <div
            style={{
                padding: "5px",
            }}
        >
            <Counter />
            <h1>Count: {count}</h1>
            <h1>Double: {double}</h1>

            <div
                style={{
                    marginTop: "40px",
                    display: "flex",
                    gap: "10px",
                }}
            >
                <button onClick={() => update(1)}>Increment</button>
                <button onClick={() => update(-1)}>Decrement</button>
            </div>
        </div>
    );
}

export default App;
