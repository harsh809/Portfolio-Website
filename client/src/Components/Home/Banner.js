import React from 'react'
import Carousel from 'react-material-ui-carousel'
import './Banner.css';
import '../image/banner.png'
const data = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHOgvcKBZoRIIjdzuXNV5WMW_Du-O04Fraaw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ05Bm-k1X2an46r_TJFo_TXI_atkp9ZXPK6Q&usqp=CAU",
    "https://th.bing.com/th/id/R.45554aca30cb183164f13fb411ca8cda?rik=Wxus2IYafq3Ksg&riu=http%3a%2f%2fwww.ignxttechnologies.com%2fimg%2fportfolio_banner.png&ehk=GfuNI09fRf7jCxZk9%2bRpZ95FH1paa%2bxaPbUwzpt3lW8%3d&risl=&pid=ImgRaw&r=0"
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
                {/* {
                    data.map((imag, i) => {
                        return (
                            <>
                                <img src={imag} alt="img" key={i} className="banner_img" />  
                            </>
                        ) 
                    })
                } */}

               
                    <img src={require(`../image/banner1.png`)} alt="image" className='banner_img' />

            </Carousel>
        </>
    )
}

export default Banner;