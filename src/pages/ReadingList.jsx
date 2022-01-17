import React from 'react'
import { Redirect } from 'react-router-dom'

export default function ReadingList ({auth,data ,setData,redirect,setRedirect,setDetails }) {
  let temp = [...data];

  function addToCompleted(i) {
  temp[i].completed="true";
  temp[i].readding="false";
  setData(temp)
  }

  if(!auth){
    return <Redirect to="/"/>
  }
  
  if(redirect){
    return <Redirect to= "/Details"/>
  }

  function removeFromReading(i) {
    temp[i].readding="false";
    setData(temp)
  }
  const element = temp.map((book,i) => {
    if (book.readding == "true") {
      return (
        <div id="container" key={book.id}>
          <div>
          <h3>{book.name}</h3>
          <img onClick={()=>{setDetails(book); setRedirect(true)}} style={{ height: '200px', width: '150px' }} src={book.img} />
          <p>{book.author}</p>
          <p id="hide">{book.description}</p>
          <button onClick={()=>{
            addToCompleted(i)
          }} ><img src="https://img.icons8.com/material-outlined/24/000000/add.png"/> <img src="https://img.icons8.com/plasticine/50/000000/black-panther--v2.png"/></button>
          <button onClick={()=>{
            removeFromReading(i)
          }}> <img src="https://img.icons8.com/ios/26/000000/xbox-x.png"/> <img src="https://img.icons8.com/plasticine/50/000000/black-panther--v1.png"/></button>
          </div>
        </div>
      )
    }
  })
  return (
    <div>
      <h4>Reading List</h4>
      {element}
    </div>
  )
}
