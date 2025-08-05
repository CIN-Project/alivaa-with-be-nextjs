"use client"

import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'

function GalleryList() {
  return (
    <>
<div className="container-md mt-2 mb-4"> 
 <Gallery withCaption>
  
<div className="row g-0">
<div className="col-lg-4 col-md-4 mb-4 col-sm-4 col-xs-6 ">
    <Item
    caption="img 1" className="col-md-4"
      original="/images/gallery/pictures/25.jpg"
      thumbnail="/images/gallery/pictures/25.jpg"
      width="1024"
      height="768"    
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="/images/gallery/pictures/25.jpg" className="img-fluid" />
        
      )}
      
    </Item>     
    </div>

    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-6 ">
    <Item
    caption="img 1" className="col-md-4"
      original="/images/gallery/pictures/7.jpg"
      thumbnail="/images/gallery/pictures/7.jpg"
      width="1024"
      height="768"    
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="/images/gallery/pictures/7.jpg" className="img-fluid" />
        
      )}
      
    </Item>     
    </div>
    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-6 ">
    <Item
    caption="img 1" className="col-md-4"
      original="/images/gallery/pictures/8.jpg"
      thumbnail="/images/gallery/pictures/8.jpg"
      width="1024"
      height="768"    
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="/images/gallery/pictures/8.jpg" className="img-fluid" />
        
      )}
      
    </Item>     
    </div>
    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-6 ">
    <Item
    caption="img 3" 
      original="/images/gallery/pictures/14.jpg"
      thumbnail="/images/gallery/pictures/14.jpg"
      width="1024"
      height="768"    
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="/images/gallery/pictures/14.jpg" className="img-fluid" />
        
      )}
      
    </Item>     
    </div>

    
    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-6 ">
    <Item
    caption="img 4" 
      original="/images/gallery/pictures/9.jpg"
      thumbnail="/images/gallery/pictures/9.jpg"
      width="1024"
      height="768"    
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="/images/gallery/pictures/9.jpg" className="img-fluid" />
        
      )}
      
    </Item>     
    </div>


    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-6 ">
    <Item
    caption="img 5" 
      original="/images/gallery/pictures/19.jpg"
      thumbnail="/images/gallery/pictures/19.jpg"
      width="1024"
      height="768"    
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="/images/gallery/pictures/19.jpg" className="img-fluid" />
        
      )}
      
    </Item>     
    </div>
    </div>


  </Gallery>



    </div>






    </>
  )

}

export default GalleryList;
