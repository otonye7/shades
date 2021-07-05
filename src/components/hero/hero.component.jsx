import { HeroContainer } from './hero.styles';
import Laura from  '../../assets/e.jpg'

const Home = () => {
    return (
        <HeroContainer>
            <div className='background-image'>
                 <img src={Laura} alt="" />
            </div>
        </HeroContainer>
        
    )
}

export default Home;