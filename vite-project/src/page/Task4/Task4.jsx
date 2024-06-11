import { useDispatch, useSelector } from "react-redux";
import { show, hide } from "../slice/showText";
function Task4() {
  const flag = useSelector((all) => all.showText);

  const dispatch = useDispatch();

  return (
    <>
      <p>
        Создайте компонент, который предоставляет две кнопки: Показать и Скрыть.
        При нажатии на Показать отображается текст, а при нажатии на крыть текст
        скрывается.
      </p>

      <button onClick={() => dispatch(show())}>show</button>
      <button onClick={() => dispatch(hide())}>hide</button>

      <h1>{flag ? "showasdfsd" : ""}</h1>
    </>
  );
}

export default Task4;
