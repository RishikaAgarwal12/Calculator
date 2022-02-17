import "./CreateButtonList.css";
const Button = (props) => {
  return (
    <div className="button-style" onClick={props.onClick}>
      {props.label}
    </div>
  );
};
export default Button;
