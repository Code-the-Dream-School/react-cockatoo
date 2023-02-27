import { useRef, useEffect } from "react";


const InputWithLabel=({handleTitleChange, todoTitle, children})=>{

const inputRef = useRef();

useEffect(()=>{
inputRef.current.focus();
},[])

return(
    <>
    <label htmlFor="todoTitle">{children}</label>
      <input
        onChange={handleTitleChange}
        value={todoTitle}
        type="text"
        name="title"
        id="todoTitle"
        ref={inputRef}
       
      />
       </>
);

};


export default InputWithLabel;
