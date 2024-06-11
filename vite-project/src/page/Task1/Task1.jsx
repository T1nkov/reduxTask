import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, refresh } from "../slice/slice";

function Task1() {
  const count = useSelector((all) => all.counter);
  const dispatch = useDispatch();

  return (
    <>
      <p>
        Создайте компонент инкремента. Компонент возвращает кнопку и параграф, в
        котором отображается значение (первоначальное значение 1). Ваша задача
        так реализовать функционал, чтобы при клике на кнопку автоматически
        прибавлялась +1 к значению параграфа
      </p>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={()=>dispatch(refresh())}>0</button>
    </>
  );
}

export default Task1;
