import React from 'react'
import "./News.scss"

import item1 from "../image/news/item1.jpg"
import item2 from "../image/news/item2.jpg"
import item3 from "../image/news/item3.jpg"
import item4 from "../image/news/item4.jpg"
import item5 from "../image/news/item5.jpg"
import item6 from "../image/news/item6.jpg"

export default function News() {
  return (
    <div className='news'>
        <h2 className='tittle'>
        THINK ABOUT IT
        </h2>
        <div className='description'>
            <p > 
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit.
            </p>

        </div>

        <div className='news-contain'>
            <div className='news-content'>
                <div className='image'>
                    <img src={item1} alt='abc' />
                </div>
                <div className='content-n'>
                    <div className='date'>
                        3 September 2014
                    </div>

                    <div className='news-title'>
                        John Doe Nabs Lead in Adaptation of 'Paper Towns'
                    </div>

                    <div className='main-news'>
                    John Doe just added a major role to her quickly growing acting resume. As if teens (and, okay, quite a few adults) needed another reason to idolize the Brit, she just signed on to play the female lead in the film adaptation of The Fault in Our Stars author John Green’s YA book, Paper Towns.
                    </div>
                </div>
            </div>

            <div className='news-content'>
                <div className='image'>
                    <img src={item2} alt='abc' />
                </div>
                <div className='content-n'>
                    <div className='date'>
                        3 September 2014
                    </div>

                    <div className='news-title'>
                        John Doe Nabs Lead in Adaptation of 'Paper Towns'
                    </div>

                    <div className='main-news'>
                    John Doe just added a major role to her quickly growing acting resume. As if teens (and, okay, quite a few adults) needed another reason to idolize the Brit, she just signed on to play the female lead in the film adaptation of The Fault in Our Stars author John Green’s YA book, Paper Towns.
                    </div>
                </div>
            </div>

            <div className='news-content'>
                <div className='image'>
                    <img src={item3} alt='abc' />
                </div>
                <div className='content-n'>
                    <div className='date'>
                        3 September 2014
                    </div>

                    <div className='news-title'>
                        John Doe Nabs Lead in Adaptation of 'Paper Towns'
                    </div>

                    <div className='main-news'>
                    John Doe just added a major role to her quickly growing acting resume. As if teens (and, okay, quite a few adults) needed another reason to idolize the Brit, she just signed on to play the female lead in the film adaptation of The Fault in Our Stars author John Green’s YA book, Paper Towns.
                    </div>
                </div>
            </div>

            <div className='news-content'>
                <div className='image'>
                    <img src={item4} alt='abc' />
                </div>
                <div className='content-n'>
                    <div className='date'>
                        3 September 2014
                    </div>

                    <div className='news-title'>
                        John Doe Nabs Lead in Adaptation of 'Paper Towns'
                    </div>

                    <div className='main-news'>
                    John Doe just added a major role to her quickly growing acting resume. As if teens (and, okay, quite a few adults) needed another reason to idolize the Brit, she just signed on to play the female lead in the film adaptation of The Fault in Our Stars author John Green’s YA book, Paper Towns.
                    </div>
                </div>
            </div>

            <div className='news-content'>
                <div className='image'>
                    <img src={item5} alt='abc' />
                </div>
                <div className='content-n'>
                    <div className='date'>
                        3 September 2014
                    </div>

                    <div className='news-title'>
                        John Doe Nabs Lead in Adaptation of 'Paper Towns'
                    </div>

                    <div className='main-news'>
                    John Doe just added a major role to her quickly growing acting resume. As if teens (and, okay, quite a few adults) needed another reason to idolize the Brit, she just signed on to play the female lead in the film adaptation of The Fault in Our Stars author John Green’s YA book, Paper Towns.
                    </div>
                </div>
            </div>

            <div className='news-content'>
                <div className='image'>
                    <img src={item6} alt='abc' />
                </div>
                <div className='content-n'>
                    <div className='date'>
                        3 September 2014
                    </div>

                    <div className='news-title'>
                        John Doe Nabs Lead in Adaptation of 'Paper Towns'
                    </div>

                    <div className='main-news'>
                    John Doe just added a major role to her quickly growing acting resume. As if teens (and, okay, quite a few adults) needed another reason to idolize the Brit, she just signed on to play the female lead in the film adaptation of The Fault in Our Stars author John Green’s YA book, Paper Towns.
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
