import React from 'react';
import { Transition } from 'react-transition-group';

function Fade({ in: inProp, duration = 300 }) {
  const targetRef = React.useRef(null);

  // 默认样式
  const defaultStyle = {
    transition: `all ${duration}ms ease-in-out`,
  };

  // 动画过程样式
  const transitionStyles = {
    entering: { opacity: .1 },
    entered: { opacity: 1 },
    exiting: { opacity: .5 },
    exited: { opacity: .1 },
  };

  return (
    <Transition
      in={inProp}
      timeout={duration}
      nodeRef={targetRef}
    >
      {
        state => {
          console.log('===fade state===', state);
          return (
            <div
              ref={targetRef}
              style={{
                ...defaultStyle,
                ...transitionStyles[state]
              }}
            >
              I'm fade Transition!
            </div>
          )
        }
      }
    </Transition>
  );
}

export default Fade;
