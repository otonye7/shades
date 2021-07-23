import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { CarouselContainer } from './carousel.styles';


const CarouselComponent = () => {
    return (
        <CarouselContainer>
            <Carousel autoPlay={true} showThumbs={false} infiniteLoop={true} showIndicators={false}>

                <div className='first'>
                    <h2 className='text'>HIGH QUALITY AND GOOD LOOKING SUNGLASSES FOR WHOLE FAMILY</h2>
                    <br />
                    <h2 className='logo-text'>enRoute</h2>
                </div>

                <div className='first'>
                    <h2 className='text'>HIGH END SUNGLASSES LOW PRICES</h2>
                    <br />
                    <h2 className='logo-text'>FASHION</h2>
                </div>

                <div className='first'>
                    <h2 className='text'>THE CANADIAN SUNGLASSES PAIR YOU NEED TO KNOW</h2>
                    <br />
                    <h2 className='logo-text'>FLARE</h2>
                </div>

                <div className='first'>
                    <h2 className='text'>HOT NEW TRAVEL PRODUCTS</h2>
                    <br />
                    <h2 className='logo-text'>DRIFT</h2>
                </div>

                <div className='first'>
                    <h2 className='text'>STYLISH AND PRACTICAL</h2>
                    <br />
                    <h2 className='logo-text'>NICHE</h2>
                </div>

                <div className='first'>
                    <h2 className='text'>THE BOLDEST NEON PIECES TO ROCK THIS SUMMER</h2>
                    <br />
                    <h2 className='logo-text'>ELLE</h2>
                </div>

            </Carousel>
        </CarouselContainer>
    )
}

export default CarouselComponent