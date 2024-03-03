import {useReducer} from "react";

const Counter = () => {
    const reducer = (state, action) => {
        switch (action.type) {
            case "increment":
                return state + 1
            case "decrement":
                return state - 1
            case "reset":
                return 0;
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, 0, undefined);
    const setIncrement = () => {
        dispatch({type: "increment"})
    };
    const setDecrement = () => {
        dispatch({type: "decrement"})
    };
    const setReset = () => {
        dispatch({type: "reset"})
    };


    return (
        <div>
            <div>Counter{state}</div>
            <button onClick={setIncrement}>Increment</button>
            <button onClick={setDecrement}>Decrement</button>
            <button onClick={setReset}>Reset</button>
        </div>
    )
}

export default Counter;