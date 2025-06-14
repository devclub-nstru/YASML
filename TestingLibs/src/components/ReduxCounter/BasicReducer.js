export function counterReducer(state = { value: 0 }, action) {
    switch (action.type) {
      case 'INCREMENT':
        return { value: state.value + 1 };
      case 'DECREMENT':
        return { value: state.value - 1 };
      case 'RESET':
        return { value: 0 };
      case 'INCREMENT_BY_AMOUNT':
        return { value: state.value + action.payload };
      default:
        return state;
    }
  }
  