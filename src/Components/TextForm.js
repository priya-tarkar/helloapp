import React from 'react'
import { useState } from 'react'

export default function TextForm() {

    const[text,settext]=useState("");

    function changeclick(){
        let n=text.toUpperCase();
        settext(n);
    }
    function changeit(event)
    {
        console.log("on change");
        settext(event.target.value)
    }
    function changelowerclick(){
      let n1=text.toLocaleLowerCase();
      settext(n1);
    }
  return (

    <>
    <div>
    <div className="container">
    <h1>Enter the Text</h1>
      <div className="form-group">
    <textarea className="form-control" value={text} onChange={changeit} id="exampleFormControlTextarea1" rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-2"  onClick={changeclick}>Convert To UpperCase</button>
  <button className="btn btn-primary mx-2"   onClick={changelowerclick}>Convert To LowerCase</button>
  </div>
    </div>
    <div className="container my-3">
      <div> no. of words <span className='text-primary'> {text.split(" ").length}</span> and no. of character <span className='text-primary'> {text.length}</span></div>
      <h3 className='mt-3'>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  )
}
