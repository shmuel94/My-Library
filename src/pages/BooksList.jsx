import { useState } from 'react'
import { Redirect } from 'react-router-dom'
export default function BooksList ({ auth, data, setData }) {
  let temp = [...data]
  const [search, setSearch] = useState('')
  function makeTrue (id) {
    let tempData = [...data]
    for (let i = 0; i < tempData.length; i++) {
      if (tempData[i].id === id) {
        tempData[i].readding = 'true'
        break
      }
    }
    setData(tempData)
  }

  if (!auth) {
    return <Redirect to='/' />
  }

  const element = temp
    .filter(value => {
      if (
        value.name.toLowerCase().includes(search.toLowerCase()) ||
        value.author.toLowerCase().includes(search.toLowerCase()) ||
        value.description.toLowerCase().includes(search.toLowerCase())
      ) {
        return value
      }
    })
    .map((book, i) => {
      if (i < 10) {
        return (
          <div key={i} id='container'>
            <div>
              <h3>{book.name}</h3>
              <img style={{ height: '200px', width: '150px' }} src={book.img} />
              <p>{book.author}</p>
              <p id='hide'>{book.description}</p>
              <button
                onClick={() => {
                  makeTrue(book.id)
                  console.log(book)
                }}
              >
                <img src="https://img.icons8.com/material-outlined/24/000000/add.png"/>
                <img src='https://img.icons8.com/color/60/000000/spiderman-head.png' />
              </button>
            </div>
          </div>
        )
      }
    })

  return (
    <div>
      <h4>Search</h4>
      <input
        type='text'
        placeholder='Search...'
        onChange={e => {
          setSearch(e.target.value)
        }}
      />{' '}
      <br />
      <br />
      {element}
    </div>
  )
}
