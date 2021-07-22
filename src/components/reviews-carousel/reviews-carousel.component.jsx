import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Card from '@material-ui/core/Card';
import LightWeight from '../../assets/cleaning.jpg';
import { CardsContainer } from './reviews-carousel.styles';
import Durable from '../../assets/yellow.png';
import Antislip from '../../assets/square.png';
import Antiscratch from '../../assets/cosmic.png';



const CardComponent = () => {

    return (
        <CardsContainer>
            <Carousel autoPlay={true} showThumbs={false} infiniteLoop={true} showIndicators={false}>
                <div className='container'>
                    <Card className='root'>
                        <img src={LightWeight} alt="" />
                        <h4 className='text'>Light Weight</h4>
                    </Card>
                    <Card className='root-two'>
                        <img src={Durable} alt="" />
                        <h4 className='text'>Light Weight</h4>
                    </Card>
                    <Card className='root-three'>
                        <img src={Antiscratch} alt="" />
                        <h4 className='text'>Light Weight</h4>
                    </Card>
                    <Card className='root-four'>
                        <img src={Antislip} alt="" />
                        <h4 className='text'>Light Weight</h4>
                    </Card>

                </div>
            </Carousel>
        </CardsContainer>
    );
}

export default CardComponent





