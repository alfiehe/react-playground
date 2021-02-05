import React from 'react';
import Fade from '../transition/fade';

function FadeDemo() {
  const [show, setShow] = React.useState(false);
  
  const fadeConfig = {
    in: show,
    duration: 500
  }
  return (
    <section>
      <h3>Fade</h3>
      <Fade {...fadeConfig} />
      <button onClick={() => setShow(!show)}>Toggle</button>
    </section>
  );
}

export default FadeDemo;
