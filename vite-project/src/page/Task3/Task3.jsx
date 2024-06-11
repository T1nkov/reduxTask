import { useDispatch, useSelector } from "react-redux";
import { addValueToInput } from "../slice/textInput";
function Task3() {
  const str = useSelector((all) => all.showInput);
  const dispatch = useDispatch();
  return (
    <>
      <p>
        . Создайте компонент формы. По клику на кнопку собрать данные из input и
        проверить вводимую строку на палиндром
      </p>
      <h1>
        {str.length == 0
          ? "пустая строка"
          : str == str.split("").reverse().join("")
          ? "палиндром"
          : "неа"}
      </h1>
      <input
        type="text"
        onChange={(e) => dispatch(addValueToInput(e.target.value))}
      />
    </>
  );
}

export default Task3;
