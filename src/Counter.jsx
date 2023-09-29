import { signal } from "@preact/signals-react";

export const count = signal(0);

export default function Counter() {
    return (
        <div>
            <h1>Count: {count}</h1>
            <hr />
        </div>
    );
}
