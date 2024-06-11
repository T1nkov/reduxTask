import { useDispatch, useSelector } from "react-redux";
import { addValueToInput } from "../slice/textInput";
function Task2() {
  const str = useSelector((all) => all.showInput);
  const dispatch = useDispatch();
  return (
    <>
      <p>
        Создайте компонент текстового поля, который позволяет пользователю
        вводить текст и отображает его в реальном времени.
      </p>
      <h1>{str}</h1>
      <input
        type="text"
        onChange={(e) => dispatch(addValueToInput(e.target.value))}
      />
    </>
  );
}

export default Task2;
