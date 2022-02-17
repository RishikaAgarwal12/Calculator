import './CreateButtonList.css'
import Button from './Button';
const CreateButtonList = (props) => {

    const buttonClickHandler=(event)=>{
            props.getvalue(event.target.innerText);

    }
    if(props.name.length>4){
  return (
    <div className='button'>
      <Button className="button-style" label={props.name[0]} onClick= {buttonClickHandler}></Button>
      <Button className="button-style" label={props.name[1]} onClick= {buttonClickHandler}></Button>
      <Button className="button-style" label={props.name[2]} onClick= {buttonClickHandler}></Button>
      <Button className="button-style" label={props.name[3]}onClick= {buttonClickHandler}></Button>
      <Button className="button-style" label={props.name[4]}onClick= {buttonClickHandler}></Button>
    </div>
  );
    }
    return(
        <div className='button'>
      <Button className="button-style" label={props.name[0]} onClick= {buttonClickHandler}></Button>
      <Button className="button-style" label={props.name[1]} onClick= {buttonClickHandler}></Button>
      <Button className="button-style" label={props.name[2]} onClick= {buttonClickHandler}></Button>
      <Button className="button-style" label={props.name[3]}onClick= {buttonClickHandler}></Button>
      
    </div>

    );
};
export default CreateButtonList;
