import useCounter from './useCounter'

const CounterA = () => {
  let { count, handleIncrement, handleDecrement } = useCounter()
  return (
    <div>
      <h1> Count : {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default CounterA