import './Home.css';
import diagonalArrow from '../assets/diagonal-arrows.png'

function Home(){
    return (
        <div className='home'>
            <section className='intro'>
                <div className='intro-text'>
                    <h1>CapBA</h1>
                    <p>Modern technology applying AI in detecting uncommon behavior and stranger around your house and notify directly to you</p>
                </div>
            </section>
            <section className='concept'>
                <div className='concept-1'>
                    <div className='concept-1-text'>
                        <h1>Prioritize the level of concern by yourself</h1>
                        <div className='concept-1-text-1'><span><img src={diagonalArrow}/>Scale up importance level to your family</span></div>
                        <div className='concept-1-text-2'><span>Skyrocket security level on your neighbor appearance<img src={diagonalArrow}/></span></div>
                    </div>
                    <div className='concept-1-video'>
                        video here
                    </div>
                </div>
                <div className='concept-2'>
                    <div className='concept-2-text'>
                        
                    </div>
                    <div className='concept-2-video'>
                        video here
                    </div>
                </div>
                <div className='concept-3'>
                    <div className='concept-3-text'>
                        
                    </div>
                    <div className='concept-3-video'>
                        video here
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;
