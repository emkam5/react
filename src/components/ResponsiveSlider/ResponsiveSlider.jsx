import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s from './ResponsiveSlider.module.css';

function ResponsiveSlider() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className={s.mg50}>
            <div className="slider-container">
                <Slider {...settings}>
                    <div className={s.slide}>
                        <img src="https://i.pinimg.com/564x/0c/2d/81/0c2d81722226c2b17effe48e8b931930.jpg" alt="" />
                    </div>
                    <div className={s.slide}>
                        <img src="https://i.pinimg.com/736x/67/6d/08/676d08cd995975671ee9353b9485a3d7.jpg" alt="" />
                    </div>
                    <div className={s.slide}>
                        <img src="https://i.pinimg.com/564x/31/e6/da/31e6da166bafc67ccb05d608cfcb5045.jpg" alt="" />
                    </div>
                    <div className={s.slide}>
                        <img src="https://i.pinimg.com/564x/56/d4/e1/56d4e1a27a8cb7cfd2458f29706ceb90.jpg" alt="" />
                    </div>
                    <div className={s.slide}>
                        <img src="https://i.pinimg.com/736x/ba/9a/3b/ba9a3b61889818666f7c9a8bcd23a045.jpg" alt="" />
                    </div>
                    <div className={s.slide}>
                        <img src="https://i.pinimg.com/736x/fd/7c/51/fd7c512d36f85475b0b66a941fe12fa2.jpg" alt="" />
                    </div>
                    <div className={s.slide}>
                        <img src="https://i.pinimg.com/736x/25/2f/25/252f25783cc0e9edc8a1c0466d76de00.jpg" alt="" />
                    </div>
                    <div className={s.slide}>
                        <img src="https://i.pinimg.com/564x/27/bf/3b/27bf3b333253799e6f94a727fe72ace0.jpg" alt="" />
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default ResponsiveSlider;