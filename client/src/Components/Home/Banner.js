import React from 'react'
import Carousel from 'react-material-ui-carousel'
import './Banner.css';
const data = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHOgvcKBZoRIIjdzuXNV5WMW_Du-O04Fraaw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ05Bm-k1X2an46r_TJFo_TXI_atkp9ZXPK6Q&usqp=CAU"
]

const Banner = () => {
    return (
        <>

            <Carousel
                className="carasousel"
                autoPlay={true}
                animation="slide"
                indicators={false}
                navButtonsAlwaysVisible={true}
                cycleNavigation={true}
                navButtonsProps={{
                    style: {
                        background: "#fff",
                        color: "#494949",
                        borderRadius: 0,
                        marginTop: -22,
                        height: "104px",
                    }
                }}>
                {
                    data.map((imag, i) => {
                        return (
                            <>
                                <img src={imag} alt="img" key={i} className="banner_img" />
                                
                            </>
                        )
                        
                    })
                }

            </Carousel>
        </>
    )
}

export default Banner;