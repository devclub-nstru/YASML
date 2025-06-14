// App.jsx
import React from 'react';
import Counter from './components/ZustandCounter/ZCounter';
import ReduxCounter from './components/ReduxCounter/RCounter';

function App() {
  return (
    <div>
      {/* Toggle or test either counter */}
      <ReduxCounter />
      <br></br>
      <br></br>
      <Counter/>
      {/* <Counter /> */}
    </div>
  );
}

export default App;
