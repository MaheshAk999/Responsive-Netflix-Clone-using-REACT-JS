import './netflixstyle.css'
import { useEffect, useState } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
function Signup() {
    const [bool,setBool]=useState(true)
    useEffect(()=>{
      Aos.init({
        duration: 1500,
        easing: 'ease-in-out',
        once: true,
        disable: 'mobile', // Disable animations on mobile devices
      });
    },[])
  return (
    
    <>
    {/* =============================== SignIn ============================= */}
    <div className="signupnetflix" >

        <div className='netflixsignupnav' data-aos="fade-right">
        <img data-aos="fade-right" className="netflixlogo netflixlogobig" src={require('./assets/png/netflixlogo.png')} alt="Network Issue" />
        <img style={{display:'none'}} data-aos="fade-right" className="netflixlogo netflixlogosmall" src={require('./assets/png/netflixlogo2.png')} alt="Network Issue" />
        </div>
        <div className='netflixsignupbar' data-aos="fade-up">
        <h3> Sign In </h3>
                <span className='spansigninshowhide' onClick={()=>setBool(!bool)}> {bool?"SHOW":"HIDE"}</span>

        <br />
        <input type="text" placeholder='Email or phone number'/>  <br /><br />
        <input  placeholder='Password' type={bool?'password':'text'}/>  <br /> <br />

        <button className='btn btn-danger signupbutton'> Sign In </button> <br /> <br />
        <input type='checkbox' className='checkboxsignup'/> <span> Remember Me </span> 
       <span style={{marginLeft:'2cm'}}> Need help?</span>
       <br /> <br />
       <span> New to Netflix ?</span> <span className='newtonetflixsignup'> Sign up now </span>

        </div>
    </div>
    {/* ============================== Footer =============================== */}
    <footer>
           <div >
            <a href="#"> Questions? Call 000-800-919-1694 </a>
            <div className='row' style={{margin:'0px 0px 35px',padding:'0px'}}>
            <div className='col firststcolfooter'>
            
            <a> FAQ </a>
            <a> Cookie Preferences </a>
            
            </div>

            <div className='col'>
            <a> Help Centre </a>
            <a> Corporate Information </a>
            </div>

            <div className='col'>
            <a> Terms of Use </a>
            </div>

            <div className='col fourthcolfooter'>
            <a> Privacy </a>
            </div>
            </div>
           </div>
         </footer>
    </>
  )
}

export default Signup