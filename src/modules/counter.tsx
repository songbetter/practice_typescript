const INCREASE = "COUNTER/INCREASE";
const DECREASE = "COUNTER/DECREASE";

export const increaseNumber = () => {
  return { type: INCREASE };
};

export const decreaseNumber = () => {
  return { type: DECREASE };
};

type CounterAction =
  | ReturnType<typeof increaseNumber>
  | ReturnType<typeof decreaseNumber>;

const initialState = {
  number: 10,
};

export default function counterReducer(
  state = initialState,
  action: CounterAction
) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        number: state.number + 1,
      };
    case DECREASE:
      return {
        ...state,
        number: state.number - 1,
      };
    default:
      return {
        ...state,
      };
  }
}
