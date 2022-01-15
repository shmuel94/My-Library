import Register from "./Register"
import LogIn from "./LogIn"
const Home = ({auth,setAuth,AUTH_LOCAL_STORAGE})=> {
  return (
    <div>
      <h4>Home</h4>
      <Register auth={auth} setAuth = {setAuth} AUTH_LOCAL_STORAGE={AUTH_LOCAL_STORAGE} /> <br/>
      <LogIn auth={auth} setAuth = {setAuth} AUTH_LOCAL_STORAGE={AUTH_LOCAL_STORAGE}/>
    </div>
  )
}
export default Home;