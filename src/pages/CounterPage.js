import Button from "../components/Button";
import { useReducer } from "react";
import Panel from "../components/Panel";
import produce from "immer";

const INCREMENT_COUNT = "increment-count";
const DECREMENT_COUNT = "decrement-count";
const SET_ADDITIONAL_NUMBER = "set-additional-number";
const ADD_NUMBERS = "add-numbers";

function reducer(state, action) {
  switch (action.type) {
    case INCREMENT_COUNT:
      state.count++;
      return;
    case DECREMENT_COUNT:
      state.count--;
      return;
    case SET_ADDITIONAL_NUMBER:
      state.additionalNumber = action.payload;
      return;
    case ADD_NUMBERS:
      state.count += state.additionalNumber;
      state.additionalNumber = 0;
      return;
    default:
      throw new Error("Reducer error");
  }
}
function CounterPage({ initialCount }) {
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    additionalNumber: 0,
  });

  const handleIncrement = () => {
    dispatch({
      type: INCREMENT_COUNT,
    });
  };

  const handleDecrement = () => {
    dispatch({
      type: DECREMENT_COUNT,
    });
  };

  const handleSetAdditionNumber = (e) => {
    const value = +e.target.value;

    dispatch({
      type: SET_ADDITIONAL_NUMBER,
      payload: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: ADD_NUMBERS,
    });
  };

  return (
    <Panel className="flex flex-col gap-5">
      <h1>Count is {state.count}</h1>
      <div className="flex gap-3">
        <Button onClick={handleIncrement}>Increment</Button>
        <Button onClick={handleDecrement}>Decrement</Button>
      </div>
      <hr />
      <form onSubmit={handleSubmit} className="flex flex-col gap-1 items-start">
        <label htmlFor="">Add count</label>
        <input
          className="p-1.5 border"
          type="number"
          value={state.additionalNumber || ""}
          onChange={handleSetAdditionNumber}
        />
        <Button>Add number</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
