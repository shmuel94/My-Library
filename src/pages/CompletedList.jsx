import React from 'react'
import { Redirect } from 'react-router-dom'
import StarRating from '../Hooks/StarRating'

export default function CompletedList ({
  auth,
  data,
  setData,
  redirect,
  setRedirect,
  setDetails,
  setRating
}) {

  const temp = [...data]
   function removeFromComleted (i) {
    temp[i].completed = 'false'
    setData(temp)
  }


  if (!auth) {
    return <Redirect to='/' />
  }

  if (redirect) {
    return <Redirect to='/Details' />
  }

  const element = temp.map((book, i) => {
    if (book.completed == 'true') {
      return (
        <div id='container' key={book.id}>
          <div>
            <StarRating bookRating={setRating} id={book.id} initRate={book.rating}/>
            <h3>{book.name}</h3>
            <img
              onClick={() => {
                setDetails(book)
                setRedirect(true)
              }}
              style={{ height: '200px', width: '150px' }}
              src={book.img}
            />
            <p>{book.author}</p>
            <p id='hide'>{book.description}</p>
            <button
              onClick={() => {
                removeFromComleted(i)
              }}
            >
              <img src="https://img.icons8.com/ios/22/000000/xbox-x.png"/>
              <img src='https://img.icons8.com/fluency/50/000000/infinity-gauntlet.png' />
            </button>
          </div>
        </div>
      )
    }
  })
  return (
    <div>
      <h4>Completed List</h4>
      {element}
    </div>
  )
}
