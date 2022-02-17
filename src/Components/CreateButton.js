import CreateButtonList from "./CreateButtonList";

const CreateButton = (props) => {
  const getvalueHandler = (enteredvalue) => {
    props.getEnteredValue(enteredvalue);
  };
  return (
    <div className="button-container">
      {props.buttonArray.map((item) => {
        return (
          <CreateButtonList key={item} name={item} getvalue={getvalueHandler} />
        );
      })}
    </div>
  );
};
export default CreateButton;
