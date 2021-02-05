import React from 'react';
import workerScript from './worker';

function WorkerDemo() {

  React.useEffect(() => {
    const myWorker = new Worker(workerScript);

    // 主线程向worker发消息
    myWorker.postMessage('I am from main')

    // worker处理的结果返回给主线程
    myWorker.onmessage = e => {
      // console.log('myWorker===e===', e.data);

      // 关闭worker
      // myWorker.terminate();
    };

    // 错误处理
    myWorker.onerror = (err) => {
      console.log('onerror', err);
    }

  }, []);

  return (
    <section>
      <h2>webWorker</h2>
    </section>
  );
}

export default WorkerDemo;
