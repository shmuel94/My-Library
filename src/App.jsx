import { useEffect, useState } from 'react'
import './App.css'
import Home from './pages/Home'
import BooksList from './pages/BooksList'
import ReadingList from './pages/ReadingList'
import CompletedList from './pages/CompletedList'
import Details from './pages/Details'
import {BrowserRouter, Switch ,Link ,Route} from 'react-router-dom'
import useFetch from './Hooks/useFetch'


function App() {
  const [auth, setAuth] = useState(null);
  const [details, setDetails] = useState(null)
  const [redirect, setRedirect] = useState(false)
  const AUTH_LOCAL_STORAGE = 'Users_Info';
  const [data, setData]= useFetch('./data.json')
  
  useEffect(()=>{
    let authStorage = JSON.parse(localStorage.getItem(AUTH_LOCAL_STORAGE))
    authStorage ? setAuth(authStorage) : null;
  },[])

  function setRating(id, rate){
    const temp=[...data]
    const index = temp.findIndex((item)=>{
     return item.id === id
    })
     temp[index].rating = rate
    setData(temp)
  }
  
  return (
      <BrowserRouter>
        <div className="App"> 
        {auth ? <button onClick={()=>{
          setAuth(null);
          localStorage.setItem(AUTH_LOCAL_STORAGE, JSON.stringify(null));
        }}>log out</button>: ""}
          {auth ? "" : <Link id="home" to='/'>Home</Link>} {auth ? <><Link id="completed" to='/CompletedList'>CompletedList </Link> <Link id="reading" to='/ReadingList'>ReadingList</Link> <Link id="search" to='/BooksList'>Search</Link></> : ""}
          <Switch>
          <Route exact path='/BooksList' render={() => <BooksList redirect={redirect} auth={auth} setAuth={setAuth} data={data} setData={setData}/>} />
          <Route exact path='/ReadingList' render={() => <ReadingList setDetails={setDetails} auth={auth} setRedirect={setRedirect} redirect={redirect}  data={data} setData={setData}/>} />
          <Route exact path='/CompletedList' render={() => <CompletedList setRating={setRating} setDetails={setDetails} auth={auth} setRedirect={setRedirect} redirect={redirect}  data={data} setData={setData}/>} />
          <Route exact path='/Details' render={() => <Details arr={data} setRating={setRating} setData={setData} details={details} redirect={redirect} setRedirect={setRedirect}/>}/>
        </Switch>
        <Route exact path='/' render={()=><Home setAuth={setAuth} auth={auth} AUTH_LOCAL_STORAGE={AUTH_LOCAL_STORAGE}/>} />
        </div>
    </BrowserRouter>
  )
}

export default App