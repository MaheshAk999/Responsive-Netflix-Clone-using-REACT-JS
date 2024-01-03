import { Footer } from "./Home"
import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"
function NetflixHome() {
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
    {/* ======================================= Image ================================= */}
    <div className="signupnetflix"> 
    <div className="row" style={{margin:'0px',padding:'12px 0px'}}>
        <div className="col-6">
        <img data-aos="fade-right" className="netflixlogo netflixlogobig" src={require('./assets/png/netflixlogo.png')} alt="Network Issue" />
        <img style={{display:'none'}} data-aos="fade-right" className="netflixlogo netflixlogosmall" src={require('./assets/png/netflixlogo2.png')} alt="Network Issue" />
        </div>
        <div className="col-6 d-flex">
            <select data-aos="fade-left" style={{position:'absolute',right:'3.5cm',margin:'0px',padding:'8px'}}> 
                <option> English </option>
                <option> हिन्दी </option>
                <option> తెలుగు </option>
            </select> 
            <button data-aos="fade-left" className='btn btn-danger' style={{position:'absolute',right:'0.6cm',top:'13px'}}> SIGN IN </button>
        </div> 
    </div>
    <div data-aos="fade-right"  className="netflixhomecentrecontent" align="center">
      <h1 > The biggest Indian hits. The best Indian stories. All streaming here. </h1>  
      <p> Watch anywhere. Cancel anytime. </p> 
      <p> Ready to watch? Enter your email to create or restart your membership.</p> 
      <input type="text" className="netflixhomefirstbutton" placeholder="Email address"/> 
     <button className="btn btn-danger" style={{padding:'9px'}}> <h4 style={{display:'inline'}}> Get Started  &gt; </h4> </button>
     
    </div>
    </div>
        {/* ============================= Border ============================= */}

    <div className="bordernetflixhome" >
    </div>
    {/* ============================== Enjoy on your TV ============================== */}
    <div className="netflixhometv row" style={{margin:'0px',padding:'0px'}} align="center">
    <div data-aos="fade-right" className="col netflixhometv1 first" style={{padding:'3cm 1cm 0cm',minWidth:'6cm'}}>
      <h1> Enjoy on your TV </h1> <br />
      <p> Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
      
      </div>
      
      <div className="col">
      <video data-aos="zoom-in" className="tvnetflixhome" loop autoPlay muted>
    <source src={require('./assets/video/1.m4v')} type="video/webm" />
    Sorry, your browser doesn't support videos.
</video>
      </div>
    </div>
        {/* ============================= Border ============================= */}
    <div className="bordernetflixhome" >
    </div>

    <div className="netflixhometv row" style={{margin:'0px',padding:'0px'}} align="center">
    <div className="col">
    <video  data-aos="zoom-in" className="tvnetflixhome first" loop autoPlay muted>
    <source src={require('./assets/video/2.m4v')} type="video/webm" />
    Sorry, your browser doesn't support videos.
</video>
      </div>
      <div data-aos="fade-left" className="col netflixhometv1 " style={{padding:'3.5cm 2cm 0cm',minWidth:'6cm'}}>
      <h1 > Download your shows to watch offline </h1> <br />
      <p > Save your favourites easily and always have something to watch. </p>
      </div>
    </div>
     {/* ============================= Border ============================= */}
     <div className="bordernetflixhome" >
    </div>
    {/* ============================ Watch EveryWhere ============================= */}
    
    <div className="netflixhometv row" style={{margin:'0px',padding:'0px'}} align="center">
    <div data-aos="fade-right" className="col netflixhometv1 first" style={{padding:'3.5cm 2cm 0cm',minWidth:'6cm'}}>
      <h1> Watch everywhere </h1> <br />
      <p> Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV. </p>
      </div>
    <div className="col">
    <video data-aos="zoom-in" className="tvnetflixhome" loop autoPlay muted>
    <source src={require('./assets/video/2.m4v')} type="video/webm" />
    Sorry, your browser doesn't support videos.
</video>
      </div>
      
    </div>
    {/* =========================== Border ========================== */}
    <div className="bordernetflixhome" >
    </div>
    {/* ============================== Enjoy on your TV ============================== */}
    <div className="netflixhometv row" style={{margin:'0px',padding:'0px'}} align="center">
    <div className="col">
      <video data-aos="zoom-in" className="tvnetflixhome first" loop autoPlay muted>
    <source src={require('./assets/video/1.m4v')} type="video/webm" />
    Sorry, your browser doesn't support videos.
</video>
      </div>
    <div data-aos="fade-left" className="col netflixhometv1 " style={{padding:'3cm 2cm 0cm',minWidth:'6cm'}}>
      <h1 > Create profiles for kids </h1> <br />
      <p> Send children on adventures with their favourite characters in a space made just for them—free with your membership.
</p> 
      </div>  
      </div>
    {/* =========================== Border ========================== */}
    <div className="bordernetflixhome" >
    </div>
    <h1 style={{padding:'1cm 1.5cm 0cm',textAlign:'center'}}> Frequently Asked Questions </h1>
    {/* ================================ Collapse ======================= */}
    <center> 
    <div className="netflixhometv accordion" id="accordionPanelsStayOpenExample" style={{maxWidth:'30cm'}} >
  <div className="accordion-item" style={{color:'#FFFFFF',background:'#000'}}>
    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
      <button style={{color:'#FFFFFF'}} className="accordion-button bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
     <strong>  What is Netflix ? </strong> 
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
      <div className="accordion-body" >
      Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.

You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
      </div>
    </div>
  </div>
  <div className="accordion-item" style={{color:'#FFFFFF',background:'#000'}}>
    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
      <button className="accordion-button collapsed bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo" style={{color:'#FFFFFF'}}>
      <strong>  How much does Netflix cost? </strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div className="accordion-body">
       Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={{color:'#FFFFFF',background:'#000'}}>
    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
      <button style={{color:'#FFFFFF'}} className="accordion-button collapsed bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
     <strong>  Where can I watch? </strong> 
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div className="accordion-body">
        Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
      </div>
    </div>
    
  </div>
  <div className="accordion-item" style={{color:'#FFFFFF',background:'#000'}}>
    <h2 className="accordion-header" id="panelsStayOpen-headingFour">
      <button style={{color:'#FFFFFF'}} className="accordion-button collapsed bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
      <strong>  How to I cancel ? </strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div className="accordion-body">
        Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
      </div>
    </div>
    
  </div>

  <div className="accordion-item" style={{color:'#FFFFFF',background:'#000'}}>
    <h2 className="accordion-header" id="panelsStayOpen-headingFive">
      <button style={{color:'#FFFFFF'}} className="accordion-button collapsed bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
       <strong> What can I watch on Netflix? </strong> 
      </button>
    </h2>
    <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div className="accordion-body">
        Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want. 
      </div>
    </div>
    
  </div>


  <div className="accordion-item" style={{color:'#FFFFFF',background:'#000'}}>
    <h2 className="accordion-header" id="panelsStayOpen-headingSix">
      <button style={{color:'#FFFFFF'}} className="accordion-button collapsed bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
       <strong> Is Netflix good for kids ? </strong> 
      </button>
    </h2>
    <div id="panelsStayOpen-collapseSix" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div className="accordion-body">
        The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.

Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
      </div>
    </div>
    
  </div>


</div>
<div style={{paddingBottom:'1cm'}} className="footertopnetflix"> 
<p style={{fontSize:'20px'}}> Ready to watch? Enter your email to create or restart your membership.</p> 
      <input  className="inputfooter" type="text" placeholder="Email address"/> 
     <button className="btn btn-danger buttonfooternetflixhome" style={{padding:'10px',borderRadius:'2px'}}>  <h4 style={{display:'inline'}}>Get Started &nbsp; &gt; </h4> </button>
     </div>
</center>
{/* =========================== Border ========================== */}
<div className="bordernetflixhome" >
    </div>
{/* ============================== Footer ================================== */}
<Footer />
    </>
  )
}
export default NetflixHome