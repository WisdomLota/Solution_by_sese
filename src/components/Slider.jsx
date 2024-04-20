import slide_one from '../assets/slide_1.png';
import slide_two from '../assets/slide_2.png';
import slide_three from '../assets/slide_3.png';
import slide_four from '../assets/slide_4.png';
import '../helpers/slideMover';
import '../styles/slider.css';


const Slider = () => {
    return ( 
        <>
        <div class="slider">
        <div class="slides">
            <input type="radio" name="rad-btn" id="radio1" />
            <input type="radio" name="rad-btn" id="radio2" />
            <input type="radio" name="rad-btn" id="radio3" />
            <input type="radio" name="rad-btn" id="radio4" />

            <div class="slide first">
                <img src={slide_one} alt="ship" />
            </div>
            <div class="slide">
                <img src={slide_two} alt="beach-view" />
            </div>
            <div class="slide">
                <img src={slide_three} alt="icecold" />
            </div>
            <div class="slide">
                <img src={slide_four} alt="camera" />
            </div>

            <div class="navigation-auto">
                <div class="auto-btn1"></div>
                <div class="auto-btn2"></div>
                <div class="auto-btn3"></div>
                <div class="auto-btn4"></div>
            </div>
        </div>

        <div class="navigation-manual">
            <label for="radio1" class="manual-btn"></label>
            <label for="radio2" class="manual-btn"></label>
            <label for="radio3" class="manual-btn"></label>
            <label for="radio4" class="manual-btn"></label>
        </div>
    </div>
        </>
     );
}
 
export default Slider;