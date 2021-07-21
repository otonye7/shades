import { useState } from 'react';
import { FaqContainer } from './faq.styles';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';


const Faq = () => {
    const [toggle, setToggle] = useState(false)
    const [secondToggle, setSecondToggle] = useState(false)
    const [thirdToggle, setThirdToggle] = useState(false)
    const [fourthToggle, setFourthToggle] = useState(false)

    const isToggle = () => {
        setToggle(!toggle)
    }

    const isSecondToggle = () => {
        setSecondToggle(!secondToggle)
    }

    const isThirdToggle = () => {
        setThirdToggle(!thirdToggle)
    }

    const isFourthToggle = () => {
        setFourthToggle(!fourthToggle)
    }

    return (
        <FaqContainer>

            <div className='container'>
                <div className='icon'>
                    <li className='text'>Where do you ship?</li>
                    <KeyboardArrowDownIcon className='arrow' onClick={isToggle} />
                </div>
                <div className='border'></div>
            </div>
            {
                toggle
                    ?
                    <div className='listcontainer'>
                        <ul className='list'>Free Standard Shipping to the following countries:</ul>
                        <ul className='list'>North America: Canada, United States of America.</ul>
                        <ul className='list'>Europe: Ukraine, Belgium, Croatia, Czech Republic, Denmark, Estonia, Finland, France, Germany, Gibraltar, Greece, Hungary, Ireland, Italy, Latvia, Lithuania, Luxembourg, Malta, Netherlands, Poland, Portugal, Serbia, Slovakia, Slovenia, Spain, Sweden, Switzerland, United Kingdom.</ul>
                        <ul className='list'>Asia: Hong Kong, India, Indonesia, Israel, Japan, Malaysia, Saudi Arabia, Singapore, South Korea, Thailand, United Arab Emirates</ul>
                        <ul className='list'>More countries: Nigeria, Brazil, New Zealand, Russia, Turkey. Didn’t see your country? Don’t worry. Please email support@s0h0quest.co for more information.</ul>
                    </div>
                    :
                    null
            }



            <div className='container'>
                <div className='icon'>
                    <li className='text'>How long will it take arrive?</li>
                    <KeyboardArrowDownIcon onClick={isSecondToggle} />
                </div>
                <div className='border'></div>
            </div>
            {
                secondToggle ?
                    <div className=''>
                        <ul className='list'>2-5 business days for standard shipping to the United States and Canada, or 9-22 business days for standard International shipping. Can’t wait to receive them? Sure, Priority Shipping and Priority Express Shipping are also available! Please refer to our full Shipping Policy terms here for more details.</ul>
                    </div>
                    :
                    null
            }

            <div className='container'>
                <div className='icon'>
                    <li className='text'>Do S0H0QUEST sunglasses come with a warranty?</li>
                    <KeyboardArrowDownIcon onClick={isThirdToggle} />
                </div>
                <div className='border'></div>
            </div>
            {
                thirdToggle ?
                    <div className=''>
                        <ul className='list'>Yes! From date of purchase, we offer a 1-year warranty that covers manufacturing defects. If you would like to make a warranty claim, email support@s0h0quest.co with your order number, a description of the issue and photographs of the affected product.</ul>
                    </div>
                    :
                    null
            }

            <div className='container'>
                <div className='icon'>
                    <li className='text'>What is your return policy?</li>
                    <KeyboardArrowDownIcon onClick={isFourthToggle} />
                </div>
                <div className='border'></div>
            </div>
            {
                fourthToggle ?
                    <div className=''>
                        <ul className='list'>If for any reason you are not fully satisfied with your order, we gladly offer a 14-day Exchange or Return, starting the day you receive your order. Please refer to our full Return Policy terms here for more details.</ul>
                    </div>
                    :
                    null
            }


        </FaqContainer>

    )
}

export default Faq;