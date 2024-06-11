import { useDispatch, useSelector } from "react-redux";
import { checkEmail } from "../slice/validationEmail";

function Task5() {
  const flag = useSelector((all) => all.validEmail);
  const dispatch = useDispatch();
  return (
    <>
      <p>
        Создайте компонент, который отображает проверку почты (true, false) на
        валидность регулярному выражению. Валидатор состоит из Input для ввода
        почты и кнопки для запуска валидатора.
      </p>

      <input
        type="text"
        onChange={(e) => dispatch(checkEmail(e.target.value))}
      />
      <p>{flag?"valid":"invalid"}</p>

    </>
  );
}

export default Task5;
