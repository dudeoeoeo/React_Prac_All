import React from 'react';
import Counter from './components/Counter';
import Todos from './components/Todos';
import CounterContainers from './containers/CounterContainers';
import TodosContainer from './containers/TodosContainer';

const App = () => {
  return (
    <div>
      <CounterContainers />
      <hr />
      <TodosContainer />
    </div>
  );
};

export default App;