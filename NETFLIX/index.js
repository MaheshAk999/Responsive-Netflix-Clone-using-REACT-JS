
import ReactDOM from "react-dom/client";
import { lazy,Suspense } from "react";
import {Route,Routes,BrowserRouter,} from 'react-router-dom';
import {det} from './NETFLIX/netflixdata'
import { dynamicRoute } from "./NETFLIX/netflixdata";
const Home=lazy(()=>import('./NETFLIX/Home'))
const Signup=lazy(()=>import('./NETFLIX/Signup'))
const NetflixHome=lazy(()=>import('./NETFLIX/NetflixHome'))
const Content=lazy(()=>import('./NETFLIX/Content'))
function App1()
{
  return (
    <>
    <Suspense fallback={<div align="center" style={{height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
    <div className="spinner-border"></div>   </div>}> 
    <Routes>
      <Route path="/onlyonnetflix" element={<Home />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/" element={<NetflixHome />}/>
      {
          dynamicRoute.map((i,ind)=>{
            return <Route key={ind} path={i} element={<Content details={det[ind]}/>}/>
          })
      }
      <Route path="*" element={<h1> 404 not found</h1>}/>
    </Routes>
    </Suspense>
    </>
  )
}
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<BrowserRouter> <App1 /> </BrowserRouter>)
/*
import reactDOM from 'react-dom/client'
import App1 from './App'
import { createContext } from 'react'
export const UserContext=createContext()
 const App = () => {
  console.log("Main Rendered")
  return (
    <>
    <UserContext.Provider value={{name:'mahesh',age:25}}> 
    <App1 />
    </UserContext.Provider>
    </>
  )
}
const container=reactDOM.createRoot(document.getElementById('root'))
container.render(<App />)
*/
/*
import axios from "axios";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
function App()
{
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const change=(e)=>{
    if(e.target.name=='email')
    {
      setEmail(e.target.value)
    }
    else{
      setPassword(e.target.value)
    }
  }
  const Submit=async()=>{
    const data=  axios.post('http://localhost:8080/login',{email:email,password:password})
    console.log(data)
  }
  return (
    <>
    <input  onChange={change} type="text" placeholder="email" />
    <input onChange={change} type="password" placeholder="password" />
    <button onClick={()=>Submit()}> Submit </button>
    </>
  )
}
const app=ReactDOM.createRoot(document.getElementById('root'))
app.render(<App />)
*/