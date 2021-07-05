import Hero from '../../components/hero/hero.component';
import CarouselComponent from '../../components/carousel/carousel.component';
import FeaturedPress from '../../components/featured-press/featured-press.component';
import FirstGrid from '../../components/first-grid/first-grid.component';
// import { HomeContainer } from './home.styles';


const HomePage = () => {
    return (
        <div>
            <Hero />
            <br />
            <br />
            <FeaturedPress />
            <br />
            <CarouselComponent />
            <br />
            <FirstGrid />
        </div>
    )
}

export default HomePage;