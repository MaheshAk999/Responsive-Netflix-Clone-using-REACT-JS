import './netflixstyle.css'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useNavigate } from 'react-router-dom'
import { popularnetflixnames,footer1,footer2,footer3,footer4,action,family,hindi,horror,indiancomedies,korean,newreleases } from './netflixdata'
export const Footer=()=>{
    
    return <footer>
    <div>
     <a href="#"> Read about Netflix TV shows and movies and watch bonus videos on Tudum.com. </a> <br /> <br /> <br />
     <a href="#"> Questions? Contact us. </a>
     <div className='row' style={{margin:'0px 0px 35px',padding:'0px'}}>

     <div className='col'>
     {
         footer1.map((i,ind)=>{
             return <a key={ind} href="#"> {i} </a>
         })
     }
     <select > 
         <option> English </option>
         <option> हिन्दी </option>
         <option> తెలుగు </option>
     </select>  
     <a href=""> Netflix </a>
     </div>

     <div className='col'>
     {
         footer2.map((i,ind)=>{
             return <a key={ind} href="#"> {i} </a>
         })
     }
     </div>

     <div className='col' >
     {
         footer3.map((i,ind)=>{
             return <a key={ind} href="#"> {i} </a>
         })
     }
     </div>

     <div className='col '>
     {
         footer4.map((i,ind)=>{
             return <a key={ind} href="#"> {i} </a>
         })
     }
     </div>
     </div>
    </div>
  </footer>
}
export const Nav=()=>{
    const navigate=useNavigate()
    
    return  <div className="row navbarhome p-3" style={{margin:'0px'}}>
    <div className="col-6">
    <img data-aos="fade-right" className="netflixlogo netflixlogobig" src={require('./assets/png/netflixlogo.png')} alt="Network Issue" />
    <img style={{display:'none'}} data-aos="fade-right" className="netflixlogo netflixlogosmall" src={require('./assets/png/netflixlogo2.png')} alt="Network Issue" />
    </div>
    <div  className="col-6 d-flex" >
        <span data-aos="fade-left" style={{color:'white',display:'none'}} className="navbarhomecontent"> UNLIMITED TV SHOWS & MOVIES</span>
        <button data-aos="fade-left" className='btn btn-danger joinnownetflix' style={{position:'absolute',right:'3cm'}}> JOIN NOW </button> &nbsp; 
        <button data-aos="fade-left" className='btn btn-outline-light' style={{position:'absolute',right:'0.5cm'}} onClick={()=>navigate('/signup')}> SIGN IN </button>
    </div>  
    </div>
}
const Home=()=>{
    const navigate=useNavigate()
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
        {/* ============================== Nav Bar ================================== */}

        <Nav />
                 {/* ============================== Navbar Down Content ================================== */}

        <div data-aos="fade-right" className="netflixhomenavdown">
            <h1> Only on Netflix </h1>
            <span> Netflix is the home of amazing original programming that you can’t find anywhere else. Movies, TV shows, specials and more, all tailored specifically to you. </span>
        </div>

         {/* ============================== Popular on Netflix ================================== */}
        <div className="popularonnetflix" >
        <p style={{fontSize:'20px',paddingLeft:'10px'}} data-aos="flip-up"> Popular on Netflix </p>
        <div className="popularone">
            { 
        popularnetflixnames.map((i,ind)=>{
            return <div key={ind} className="posters-title"> 
             <img src={require(`./assets/jpg/popular/netflix${ind+1}.jpg`)} onClick={()=>{
                let a=i.replace(/ /g, '%20')
                navigate(`/${a}`)}} alt="Network Issue" className="poster" />
            <p style={{paddingTop:'5px'}}> {i} </p>
        </div>
        })
            }   
        </div>
        </div> 
          {/* ============================== Action & Adventure ================================== */}

          <div className="popularonnetflix">
        <p style={{fontSize:'20px',paddingLeft:'10px'}} data-aos="flip-up"> Action & Adventure Films </p>
        <div className="popularone">
            { 
        action.map((i,ind)=>{
            return <div key={ind} className="posters-title"> 
             <img src={require(`./assets/jpg/action/action${ind+1}.jpg`)} alt="Network Issue" className="poster" /> 
            <p style={{paddingTop:'5px'}}> {i} </p>
        </div>
        })
            }   
        </div>
        </div> 

                {/* ==============================  Famaily Features ================================== */}
                <div className="popularonnetflix">
        <p style={{fontSize:'20px',paddingLeft:'10px'}} data-aos="flip-up"> Family Features  </p>
        <div className="popularone">
            { 
        family.map((i,ind)=>{
            return <div key={ind} className="posters-title"> 
             <img src={require(`./assets/jpg/family/f${ind+1}.jpg`)} alt="Network Issue" className="poster" /> 
            <p style={{paddingTop:'5px'}}> {i} </p>
        </div>
        })
            }   
        </div>
        </div> 
             {/* ============================== Hindi films & shows ================================== */}

             <div className="popularonnetflix">
        <p style={{fontSize:'20px',paddingLeft:'10px'}} data-aos="flip-up"> Hindi films & Shows </p>
        <div className="popularone">
            { 
        hindi.map((i,ind)=>{
            return <div key={ind} className="posters-title"> 
          <img src={require(`./assets/jpg/hindifilms&shows/h${ind+1}.jpg`)} alt="Network Issue" className="poster" /> 
            <p style={{paddingTop:'5px'}}> {i} </p>
        </div>
        })
            }   
        </div>
        </div> 
         {/* ============================== Horror ================================== */}

         <div className="popularonnetflix">
        <p style={{fontSize:'20px',paddingLeft:'10px'}} data-aos="flip-up"> Horror </p>
        <div className="popularone">
            { 
        horror.map((i,ind)=>{
            return <div key={ind} className="posters-title"> 
         <img src={require(`./assets/jpg/horror/hr${ind+1}.jpg`)} alt="Network Issue" className="poster" /> 
            <p style={{paddingTop:'5px'}}> {i} </p>
        </div>
        })
            }   
        </div>
        </div> 
         {/* ============================== Indian Comedies ================================== */}

         <div className="popularonnetflix">
        <p style={{fontSize:'20px',paddingLeft:'10px'}} data-aos="flip-up">Indian comedies </p>
        <div className="popularone">
            { 
        indiancomedies.map((i,ind)=>{
            return <div key={ind} className="posters-title"> 
     <img src={require(`./assets/jpg/indiancomedies/indc${ind+1}.jpg`)} alt="Network Issue" className="poster" /> 
            <p style={{paddingTop:'5px'}}> {i} </p>
        </div>
        })
            }   
        </div>
        </div> 
         {/* ============================== K drama ================================== */}

         <div className="popularonnetflix">
        <p style={{fontSize:'20px',paddingLeft:'10px'}} data-aos="flip-up"> Korean Drama </p>
        <div className="popularone">
            { 
        korean.map((i,ind)=>{
            return <div key={ind} className="posters-title"> 
         <img src={require(`./assets/jpg/kdrama/k${ind+1}.jpg`)} alt="Network Issue" className="poster" /> 
            <p style={{paddingTop:'5px'}}> {i} </p>
        </div>
        })
            }   
        </div>
        </div> 
         {/* ============================== New releases ================================== */}

         <div className="popularonnetflix">
        <p style={{fontSize:'20px',paddingLeft:'10px'}} data-aos="flip-up"> New releases </p>
        <div className="popularone">
            { 
        newreleases.map((i,ind)=>{
            return <div key={ind} className="posters-title"> 
          <img src={require(`./assets/jpg/newreleases/new${ind+1}.jpg`)} alt="Network Issue" className="poster" /> 
            <p style={{paddingTop:'5px'}}> {i} </p>
        </div>
        })
            }   
        </div>
        </div> 
         {/* ============================== There's even more ================================== */}
        <div align="center" className='netflixevenmore'>
        <p  style={{fontWeight:'600',fontSize:'27px'}}> There’s even more to watch. </p>
        <p  > Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals and more. Watch as much as you want, anytime you want.</p>
        <button  className="btn btn-danger" style={{width:'5cm',fontSize:'22px'}}> JOIN NOW </button>
        </div> 
         {/* ============================== Footer ================================== */}
         <Footer />
        </>
    )
}
export default Home;