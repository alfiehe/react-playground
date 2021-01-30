const workerCode = () => {
  onmessage = e => {
    console.log('worker===e===', e.data);

    postMessage('I am from worker');

    // 关闭 worker
    // close();
  };
}

// 把脚本代码转为string
let code = workerCode.toString();
code = code.substring(code.indexOf("{")+1, code.lastIndexOf("}"));
const blob = new Blob([code], {type: "application/javascript"});
const workerScript = URL.createObjectURL(blob);

module.exports = workerScript;
