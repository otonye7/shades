import Hero from '../../components/hero/hero.component';
import CarouselComponent from '../../components/carousel/carousel.component';
import FeaturedPress from '../../components/featured-press/featured-press.component';
import FirstGrid from '../../components/first-grid/first-grid.component';
import BestSeller from '../../components/best-seller/best-seller.component';
import CardOne from '../../components/card-one/card-one.component';
import NewArrival from '../../components/new-arrival/new-arrival.component';
import CardTwo from '../../components/card-two/card-two.component';
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
            <br />
            <br />
            <br />
            <BestSeller />
            <br />
            <CardOne />
            <br />
            <br />
            <NewArrival />
            <br />
            <br />
            <CardTwo />
        </div>
    )
}

export default HomePage;