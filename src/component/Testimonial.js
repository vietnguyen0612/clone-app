import React, { useRef } from 'react'
import "./Testimonial.scss"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import auth1 from "../image/testimonial/auth1.jpg"
import auth2 from "../image/testimonial/auth2.png"
import auth3 from "../image/testimonial/auth3.png"

import { GrFormNext } from 'react-icons/gr';
import { GrFormPrevious } from 'react-icons/gr'

export default function Testimonial() {
    const sliderRef = useRef(null);
    
    const settings = {
        infinite: true,
        slidesToShow: 1, // Số sản phẩm hiển thị trong mỗi hàng
        slidesToScroll: 1, // Số sản phẩm di chuyển khi trượt
        centerPadding: '0',
        rows: 1, // Số hàng sản phẩm
        prevArrow: <div className="slick-arrow slick-prev">Trái</div>,
        nextArrow: <div className="slick-arrow slick-next">Phải</div>,
    };
      
    const handlePrev = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    }
    const handleNext = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    }
  return (
    <div className='testimonial'>
        <Slider ref={sliderRef} {...settings}>

            <div className='text-content'>
                <div className="image">
                    <img src={auth1} alt='abc' className="image"/>

                </div>
                <p className='name-country'>
                    John McKenzey, California
                </p>
                <div className='main-testi'>
                    <p >
                    Thank you so much. I really didn’t expect such a quick and positive response! Often when something goes wrong with a product it seems the consumer is the one that gets the “raw end of the deal it seems the consumer is the one that gets the “raw end of the deal.
                    </p>
                </div>
            </div>

            <div className='text-content'>
                <div className="image">
                    <img src={auth3} alt='abc' className="image"/>

                </div>
                <p className='name-country'>
                    John McKenzey, California
                </p>
                <div className='main-testi'>
                    <p >
                    Thank you so much. I really didn’t expect such a quick and positive response! Often when something goes wrong with a product it seems the consumer is the one that gets the “raw end of the deal it seems the consumer is the one that gets the “raw end of the deal.
                    </p>
                </div>
            </div>

            <div className='text-content'>
                <div className="image">
                    <img src={auth2} alt='abc' className="image"/>

                </div>
                <p className='name-country'>
                    John McKenzey, California
                </p>
                <div className='main-testi'>
                    <p >
                    Thank you so much. I really didn’t expect such a quick and positive response! Often when something goes wrong with a product it seems the consumer is the one that gets the “raw end of the deal it seems the consumer is the one that gets the “raw end of the deal.
                    </p>
                </div>
            </div>

        </Slider>

        <div className='prev-next-button'>
            <div className='contain-btn'>
            <GrFormPrevious className='btn' onClick={() => handlePrev()} style={{color : "white", cursor: "pointer"}}/>
            <GrFormNext  className='btn' onClick={() => handleNext()} style={{color : "white", cursor: "pointer"}}/>        

            </div>
        </div>
    </div>
  )
}
