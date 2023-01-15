import React, { useContext } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import trendingData from '../data/movie'

function ItemSilder() {
    const movieData = useContext(trendingData);
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 12
        },
        tablet: {
            breakpoint: { max: 1024, min: 600 },
            items: 8
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 6
        }
    };
    return (
        <div className="imgCont">
            <div className='list-container'>
            <p>Latest & Trending</p>
            <Carousel responsive={responsive} className="movie-card-item">
                {
                    movieData.map((item, index) => {
                        return(
                            <div className="movie-card" key={index}>
                                <img src={item.img} alt={item.name} srcset="" />
                                <span className='details'>
                                    <p><b>{item.name}</b></p>
                                    <p>{item.time}</p>
                                    <p>{item.lang}</p>
                                </span>
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
        </div>
    )
}

export default ItemSilder
