// 计数累加
export const addToCounter = (store, number) => {
  const counter = store.state.counter + number;
  store.setState({ counter });
};