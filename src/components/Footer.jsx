import map from '../assets/map.png';

const Footer = () => {
    return ( 
        <>
        
    <div class="location">
        <div class="header">
            <h2>LOCATION</h2>
        </div>
        <div class="map">
            <img src={map} alt="map-image" />
        </div>
        <div class="explore">
            <div class="explore-content">
                <h4>REALTY</h4>
                <ul class="listLinks">
                    <li><p>Apartment</p></li>
                    <li><p>Location</p></li>
                    <li><p>Amenities</p></li>
                    <li><p>Neighborhood</p></li>
                    <li><p>Site Plan</p></li>
                </ul>
            </div>
            <div class="explore-content">
                <h4>INFORMATION</h4>
                <ul class="listLinks">
                    <li><p>Privacy Policy</p></li>
                    <li><p>Terms and Conditions</p></li>
                </ul>
            </div>
            <div class="explore-content">
                <h4>QUICK LINKS</h4>
                <ul class="listLinks">
                    <li><p>Home</p></li>
                    <li><p>Explore</p></li>
                    <li><p>About</p></li>
                    <li><p>Contact</p></li>
                </ul>
            </div>
            <div class="explore-content" id="faq">
                <h4>FAQ</h4>
                <ul class="listLinks">
                    <li><p>How do I pay for an<br /> Apartment?</p></li>
                    <li><p>Can I pay an installments?</p></li>
                    <li><p>Can I see the property in <br />person?</p></li>
                </ul>
            </div>
            <div class="explore-content">
                <h4>CONTACT</h4>
                <ul class="listLinks">
                    <li><p>+234 8037037734</p></li>
                    <li><p>akh@gmail.com</p></li>
                </ul>
            </div>
        </div>
        <div class="footer">
            <p>AKH CONSTRUCTION LIMITED © Copyright 2023</p>
        </div>
    </div>
        </>
     );
}
 
export default Footer;