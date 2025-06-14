export function createStore(reducer, initialState) {
    let state = initialState;
    let listeners = [];
  
    function getState() {
      return state;
    }
  
    function dispatch(action) {
      state = reducer(state, action);
      listeners.forEach(listener => listener());
    }
  
    function subscribe(listener) {
      listeners.push(listener);
  
    
      return () => {
        listeners = listeners.filter(l => l !== listener);
      };
    }
  
    dispatch({ type: '@@INIT' });
  
    return {
      getState,
      dispatch,
      subscribe,
    };
  }
  