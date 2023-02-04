import { useState } from 'react';
import style from './counter.module.scss'

const Counter = (): JSX.Element => {
  const [state, setState] = useState<number>(0);
  return (
    <div>
      <h1>Counter {state}</h1>
      <button onClick={() => setState(state + 1)} className={style.btn}>+</button>
    </div>
  );
};

export default Counter;
