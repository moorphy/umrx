import React, {useState} from 'react'
import './Slider.css'
import { images } from '../../Helpers/SliderData';
import { BiLeftArrowCircle, BiRightArrowCircle}  from 'react-icons/bi'

function Slider() {
    const [currentImg, setImg] = useState(0);
    return (
        <div className='slider'>
          <div 
            className="sliderInner" 
            style={{backgroundImage: `url(${images[currentImg].img})`}}>
                    <div className="left"><BiLeftArrowCircle onClick={() => {
                        currentImg > 0 && setImg(currentImg - 1);
                        }} />
                        </div>
                    <div className="center">
                    </div>
                    <div className="right"><BiRightArrowCircle onClick={() => {
                        currentImg < images.length -1 && setImg(currentImg + 1);
                        }} /></div>

            </div>
            <p>Photos by Todd Gardiner / <a href="https://www.hieroglyphphotography.com/" >Hieroglyph Photography</a></p>
        </div>
    )
}

export default Slider
 