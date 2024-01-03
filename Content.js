import { Nav } from './Home'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Footer } from "./Home"
import { useEffect } from 'react'

import { common,morelikethis } from './netflixdata'
function Content(props) {
  const {name,img,year,age,seasons,genre,content,staring,videoFolder,videos,episodescontent,episodesduration}=props.details
  const {comingsooncontent,comingsoonnames}=common[0]
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
    <Nav />
    <div className='banner'>
    <img className='bannerinsidepng' src={require(`./assets/png/banners/${img}`)} alt="Network Issue"/>
    <h2> {name} </h2> <br />
   <p> <span> {year} </span> <span> | </span> <span id="spanagerestriction"> {age} </span> <span>&nbsp; | </span><span> {seasons} </span> <span> | </span> <span>{genre} </span> </p> 
   <p className='bannercontent'> {content} </p>
   <p> <span> Starring : </span> {staring.join(',')} </p>
   <div className='bannerdowncontent' style={{position:'relative'}}>
   <img className='bannerdownpng' src={require('./assets/png/netflixlogo2.png')} alt="Network Issue"/>

    <b> Watch all you want </b>
   <button className='btn btn-danger' style={{position:'absolute',right:'0.5cm',top:'0.5cm'}}> JOIN NOW </button> &nbsp; 
   </div>
    </div>
    <div className='videosnetflixbanner'>
      <h2> Videos </h2>
      <span >| {name} </span>
      <div className='videosnetflixbanner1' >  
      {
        videos.map((i,ind)=>{
          return  <div key={ind}> 
          <video  muted>
        <source  src={require(`./assets/video/${videoFolder}/video${ind+1}.mp4`)} type="video/webm" />
        Sorry, your browser doesn't support videos.
          </video>
          <p style={{textAlign:'center'}}> {i} </p>
          </div> 
        })
         
      }
                </div>
    </div>

    <div className='videosnetflixbanner'>
    <h2> Episodes </h2>
      <span className='episodesnetflixbanner'> | {name} </span>
      <p style={{marginLeft:'0.7cm'}}> Limited Series </p>
      <p style={{marginLeft:'0.7cm'}}> Release year: {year} </p>
      <p className='episodesnetflixbanner' style={{maxWidth:'15cm'}}> {content} </p>
    </div>
    <div style={{display:'flex',overflow:'auto',padding:'0cm 0cm 1cm 0cm',marginLeft:' 0.7cm'}}>
            { 
        episodescontent.map((i,ind)=>{
            return <div className='episodesnetflixbanner1' key={ind} style={{paddingRight:'22px'}}> 
           <a href="https://techwing.org" target='new'>  <img src={require(`./assets/jpg/bannerepisodes/RailwayMan/img${ind+1}.jpg`)} alt="Network Issue" className="poster" /> </a>
            <p style={{paddingTop:'5px'}}> {ind+1}. Episode {ind+1} <span style={{float:'right'}}> {episodesduration[ind]} </span></p>
            <span style={{color:'#a1a1a1'}}> {i} </span>
        </div>
        })
            }   
        </div>
        <div style={{paddingLeft:'0.7cm'}} className='castnetflixbanner'> 
        <p style={{color:'#a1a1a1',fontSize:'25px'}}> Cast </p>
        {
          staring.map((i,ind)=>{
            return         <span key={ind} className='col'> {i} </span> 

          })
        }
       
        </div>




        <div  style={{padding:'0.5cm 0.7cm'}}>
        <h2 > More like this </h2>
        <div className='row' key={1} align="center" style={{margin:'0px',padding:'0px'}}>
            { 
        morelikethis.map((value,index)=>{
            return  <div key={index} className='col morelikethisnetflixbanner' style={{padding:'15px 0px 0px'}}> 
           <a href="https://techwing.org" target='new' >  <img src={require(`./assets/jpg/morelikethis/${index+1}.jpg`)} alt="Network Issue" /> </a>
        </div>
        })
            }   
        </div>
        </div>








        <div className='row comingsoonnetflixbanner' style={{padding:'0cm 0.4cm',margin:'0px'}}>
          <h2> Coming Soon</h2>
          {
              comingsoonnames.map((i,ind)=>{
                return <div className='col' key={ind}>
                <span> {i} </span>
                <p> {comingsooncontent[ind]} </p>
                </div>
              })
            }
          </div> 
        <Footer />
    </>
  )
}

export default Content