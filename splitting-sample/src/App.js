import logo from './logo.svg';
import './App.css';
import React, { Suspense, useState } from 'react';
import loadable from '@loadable/component';

// const SplitMe = React.lazy(() => import('./SplitMe'));
const SplitMe = loadable(() => import('./SplitMe'), {
  fallback: <div>loading...</div>
});

function App() {
  // const onClick = () => {
  //   // import를 함수로 사용하면 Promise를 반환한다. 이렇게 import를 함수로 사용하는 문법은
  //   // 비록 아직 표준 자바스크립트가 아니지만, state-3 단계에 있는 dynamic import 문법이다.
  //   import('./notify').then(result => result.default());
  // }
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };
  const onMouseOver = () => {
    SplitMe.preload();
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <p onClick={onClick} onMouseOver={onMouseOver}> Hello React! </p>
            {visible && <SplitMe />}
      </header>
    </div>
  );
}

export default App;