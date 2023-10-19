import React, { useRef } from 'react'
import './Product.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bag1 from '../image/bags/thumb1.jpg'
import bag2 from '../image/bags/thumb2.jpg'
import bag3 from '../image/bags/thumb3.jpg'
import bag4 from '../image/bags/thumb4.jpg'
import bag5 from '../image/bags/thumb5.jpg'
import bag6 from '../image/bags/thumb6.jpg'
import bag7 from '../image/bags/thumb7.jpg'
import bag8 from '../image/bags/thumb8.jpg'
import bag9 from '../image/bags/thumb9.jpg'
import bag10 from '../image/bags/thumb10.jpg'
import bag12 from '../image/bags/thumb12.jpg'
import bag13 from '../image/bags/thumb13.jpg'
import bag14 from '../image/bags/thumb14.jpg'

import band1 from "../image/barnds/brand1.png"
import band2 from "../image/barnds/brand2.png"
import band3 from "../image/barnds/brand3.png"
import band4 from "../image/barnds/brand4.png"

import { AiOutlineBars } from 'react-icons/ai';
import { BiCart } from 'react-icons/bi';
import { GrFormNext } from 'react-icons/gr';
import { GrFormPrevious } from 'react-icons/gr';
import { IoSearchCircleOutline } from 'react-icons/io5';
import { AiOutlinePlusCircle } from 'react-icons/ai';
export default function Product() {

    const bags = [
        {
            id: 1,
            image: bag1,
            oldPrice: 68,
            newPrice: 30,
            name: "Eastpak Padded Pak'R",
            description: "Backpack"
        },
        {
            id: 2,
            image: bag2,
            oldPrice: 68,
            newPrice: 30,
            name: "Eastpak Padded Pak'R",
            description: "Backpack"
        },
        {
            id: 3,
            image: bag3,
            oldPrice: 68,
            newPrice: 30,
            name: "Eastpak Padded Pak'R",
            description: "Backpack"
        },
        {
            id: 4,
            image: bag4,
            oldPrice: 68,
            newPrice: 30,
            name: "Eastpak Padded Pak'R",
            description: "Backpack"
        },
        {
            id: 5,
            image: bag5,
            oldPrice: 68,
            newPrice: 30,
            name: "Eastpak Padded Pak'R",
            description: "Backpack"
        },
        {
            id: 6,
            image: bag6,
            oldPrice: 68,
            newPrice: 30,
            name: "Eastpak Padded Pak'R",
            description: "Backpack"
        },
        {
            id: 7,
            image: bag7,
            oldPrice: 68,
            newPrice: 30,
            name: "Eastpak Padded Pak'R",
            description: "Backpack"
        },
        {
            id: 8,
            image: bag8,
            oldPrice: 68,
            newPrice: 30,
            name: "Eastpak Padded Pak'R",
            description: "Backpack"
        },
        {
            id: 9,
            image: bag9,
            oldPrice: 68,
            newPrice: 30,
            name: "Eastpak Padded Pak'R",
            description: "Backpack"
        },
        {
            id: 10,
            image: bag10,
            oldPrice: 68,
            newPrice: 30,
            name: "Eastpak Padded Pak'R",
            description: "Backpack"
        },
        {   
            id: 12,
            image: bag12,
            oldPrice: 68,
            newPrice: 30,
            name: "Eastpak Padded Pak'R",
            description: "Backpack"
        },
        {
            id: 13,
            image: bag13,
            oldPrice: 68,
            newPrice: 30,
            name: "Eastpak Padded Pak'R",
            description: "Backpack"
        },
        {
            id: 14,
            image: bag14,
            oldPrice: 68,
            newPrice: 30,
            name: "Eastpak Padded Pak'R",
            description: "Backpack"
        },
    ]

    const sliderRef = useRef(null);
    
    const settings = {
        infinite: true,
        slidesToShow: 4, // Số sản phẩm hiển thị trong mỗi hàng
        slidesToScroll: 1, // Số sản phẩm di chuyển khi trượt
        rows: 2, // Số hàng sản phẩm
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
    <div className='product-component' id='product'>
        <h1 className='text'>WE MAKE YOU AWESOME</h1> 

        <div className='tab-bar'>
            <div>
                <AiOutlineBars style={{ fontSize: '32px',cursor: "pointer", borderRight: "1px solid #ccc", paddingRight: "10px"}} />
                <BiCart style={{ fontSize: '32px',cursor: "pointer", paddingLeft: "10px"}}/>
            </div>
            <div>
                
                <GrFormPrevious  style={{ fontSize: '40px', cursor: "pointer"}} onClick={() => handlePrev()}/>
                <GrFormNext  style={{ fontSize: '40px',cursor: "pointer"}} onClick={() => handleNext()}/>
                
            </div>

        </div>

        <div className='slider'>
            <Slider ref={sliderRef} {...settings}>

                {
                    bags.map((item, index) => {
                        return(
                            <div className="product-slider">
                                <div className='image'>
                                    <img src={item.image} alt='cặp'/>
                                </div>
                                <div className='description'>
                                    <div className='prices'>
                                        <div className='price old-price'>
                                            ${item.oldPrice}
                                        </div>
                                        <div className='price new-price'>
                                            ${item.newPrice}
                                        </div>
                                    </div>
                                    <div className='product-name'>
                                        <div className='name'>
                                            {item.name}
                                        </div>
                                        <div className='band'>
                                            {item.description}
                                        </div>
                                    </div>
                                </div>

                                <div className='search-add-product'>
                                    <IoSearchCircleOutline className='search-icon' />
                                    <AiOutlinePlusCircle  className='add-icon'/> 
                                </div>
                            </div>
                        )
                    })

                    
                }
                
                

            </Slider>
        </div>

        <div className="bands" id='band'>
            <img className='band' src={band1} alt='thuong hieu' />
            <img className='band' src={band2} alt='thuong hieu' />
            <img className='band' src={band3} alt='thuong hieu' />
            <img className='band' src={band4} alt='thuong hieu' />
        </div>
    </div>
  )
}
