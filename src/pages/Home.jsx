import realty_preview from '../assets/realty-preview.png';
import ConstructionUpdate from '../components/ConstructionUpdate';

const Home = () => {
    return ( 
    <>
    <div class="contain-words" id="contain-words">
            <div class="background" id="background">
            <h2 id="real">AKHCON REALITY</h2>
            <h2 class="live">KATAMPE</h2>
            <hr />
            <h2 class="live" id="live">LIVE SMART</h2>
            <button>EXPLORE</button>
        </div>
    </div>



    <div class="reality">
      <h1><b>REALTY</b></h1>
      <div class="flex">
        <div class="content">
          <div class="rooms">
            <p>4 BEDROOM TERRACE HOUSE</p>
            <hr />
            <div class="lists">
              <div class="list1">
                <ul>
                  <li>Spacious</li>
                  <li>Home Automation</li>
                  <li>Pre wired AC</li>
                </ul>
              </div>
              <div class="list2">
                <ul>
                  <li>Maid room</li>
                  <li>Dedicated laundry space</li>
                  <li>Home security</li>
                </ul>
              </div>
            </div>
            <div class="para">
              <p>
                All houses are delivered without <br />
                internal furnishing
              </p>
              <hr />
            </div>
          </div>
          <div class="btn">
            <button>I'M INTERESTED</button>
          </div>
        </div>
        <div >
          <img class="img" src={realty_preview} />
        </div>
      </div>
    </div>


    <ConstructionUpdate />
    </>
     );
}
 
export default Home;