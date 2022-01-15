import React from 'react'
// import { FaStar } from 'react-icons/fa'
import { Redirect } from 'react-router-dom'
import StarRating from '../Hooks/StarRating';
export default function Details ({ setRating, details, setRedirect, redirect, arr, setData }) {
    if (!redirect) {
    return <Redirect to='/BooksList'/>
  }

  const updateNote = (e)=>{
    let temp = [...arr];
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].id == details.id) {
        temp[i].note = e.target.value;
        setData(temp);
        break;
      }
    }
  }
  return (
    <div id='container'>
      <div>
      <StarRating bookRating={setRating} id={details.id} initRate={details.rating}/>
        <h3>{details.name}</h3>
        <img style={{ height: '200px', width: '150px' }} src={details.img} />
        <p>{details.author}</p>
        <p>{details.description}</p>
        <button onClick={() => setRedirect(false)}> go back </button>
        <p>Nots:</p>
        <textarea onChange={updateNote} value={details.note?details.note:""} cols="50" rows="10"/>
      </div>
    </div>
  )
}
