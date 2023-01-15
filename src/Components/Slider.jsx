import Carousel from 'react-bootstrap/Carousel';
import React from 'react'

function Slider() {
    return (
        <div className="slider">
            <Carousel className='imgSlider'>
                <Carousel.Item className='imgSlide'>
                    <img className="d-block w-100" src="https://shifu.hotstarext.com/SOURCE/VOD/cd-2023-01-09/blackpanther2_desk-0b44d206-9566-4903-8045-4830395333d4.jpg" alt="First slide"/>
                </Carousel.Item>
                <Carousel.Item className='imgSlide'>
                    <img className="d-block w-100" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8455/1448455-h-33490f89a937" alt="Second slide"/>
                </Carousel.Item>
                <Carousel.Item className='imgSlide'>
                    <img className="d-block w-100" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8184/1448184-h-d30187864602" alt="Third Slide"/>
                </Carousel.Item>
                <Carousel.Item className='imgSlide'>
                    <img className="d-block w-100" src="https://shifu.hotstarext.com/SOURCE/VOD/cd-2022-12-27/ah_desk-a06eea16-4f08-40da-9b9c-4a4795b8d207.jpg" alt="Fourth Slide"/>
                </Carousel.Item>
                <Carousel.Item className='imgSlide'>
                    <img className="d-block w-100" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4292/754292-h" alt="Fifth Slide"/>
                </Carousel.Item>
                <Carousel.Item className='imgSlide'>
                    <img className="d-block w-100" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5419/1445419-h-af35b771bce5" alt="Fifth Slide"/>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slider

