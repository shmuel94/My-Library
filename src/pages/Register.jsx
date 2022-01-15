import { useState } from 'react'
import axios from 'axios'
import { Redirect } from "react-router-dom";


export default function Register ({auth , setAuth, AUTH_LOCAL_STORAGE }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [disable, setDisable] = useState(false)
  const API_KEY = 'AIzaSyCRjVEgHtpGNM0PNEVSv9-oIYkQRSH60t4'
  const URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`
  const isValid = () => {
    return email.length && password.length
  }
  const RegisterUser = () => {
    // console.log({email, password});
    axios
      .post(URL, {
        email,
        password
      })
      .then(res => {
        console.log(res),
          localStorage.setItem(AUTH_LOCAL_STORAGE, JSON.stringify(res))
        setAuth(res), setError(false)
      })
      .catch(err => {
        console.log(err), setError(true)
      })
  }

  if(auth){
    return <Redirect to="/BooksList"/>
  }

  return (
    <div>
      <h3 id='reg'>Register</h3>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (isValid) {
            RegisterUser()
          }
        }}
      >
        <input
          onChange={e => {
            setEmail(e.target.value), setDisable(isValid())
          }}
          type='email'
          placeholder='enter email'
        />
        <br />
        <input
          onChange={e => {
            setPassword(e.target.value), setDisable(isValid())
          }}
          type='password'
          placeholder='enter password'
        />
        <br />
        {error ? (
          <h4><iframe style={{backgroundColor: "rgba(255, 255, 255, 0.4)"}} src="https://giphy.com/embed/93LTXywyTGaYUWy9tJ" width="150" height="130" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/stickers/fail-spiderman-spider-man-93LTXywyTGaYUWy9tJ"></a></p></h4>
        ) : (
          ""
        )}
        <input disabled={!disable} type='submit' value='sign up' />
        <h5> new user? register here</h5>
      </form>
    </div>
  )
}
