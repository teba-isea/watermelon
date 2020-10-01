import React from 'react';
import Image from "./Image"
import PropTypes from "prop-types"

const Gallery = ({images,error}) => {

  if(error) return null

  return ( 

    <div className="gallery flex flex-center">
      {images.map(image => (<Image key={image.key} image={image}/>))}
    </div>
   );
}

Gallery.propTypes = {
  images : PropTypes.object.isRequired,
  error : PropTypes.bool.isRequired
}
 
export default Gallery;