import React from 'react';
import useGlobal from './store';

function Demo() {
  const [globalState, globalActions] = useGlobal();
  return (
    <section>
      <h2>use-global-hook</h2>
      <h3>counter: { globalState.counter }</h3>
      <div>{ globalState.list }</div>
      <button onClick={() => globalActions.addToCounter(1)}>++++++++++++++++++++++</button>
    </section>
  )
}

export default Demo;
