import puppies from '../images/puppies.webp';
import cow from '../images/cow.jpg';
import finals from '../images/finals.jpg';
import '../styles/Index.css';

const Index = () => {
    return (
        <div>
            <h1>This is the home page!</h1>
            <p>Use the navigation bar above to find the clock and the stopwatch.</p>

            <div id="christmas-animals">
                <img src={puppies} alt="sleeping puppies"/> 
                <img src={cow} alt="cow with christmas hat"/>
            </div>
            <div id="finals-meme">
                <img src={finals} alt="Buddy the elf"/>
            </div>

            <h2>Happy holidays!</h2>
        </div>
    );
};

export default Index