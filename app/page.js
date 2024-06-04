import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

import './css/index.css'

export default  async function Home() {

  return (
    <>
      <div className="home-page" >
        <div className="container" >

          {/* ---header---- */}
          <div className="header">
            <div className="header-left">
              <div className="header-icon" >
                <FaFacebookF />
              </div>
              <div className="header-icon" > 
                <FaTwitter />
              </div>
            </div>

            <div className="header-center">
              <h2>MITRAVEL</h2>
            </div>
            <div className="header-right">
                <div className="header-menu">
                  <IoIosMenu />
                </div>
            </div>
          </div>


          <div className="home-nav">
            <div className="nav-block">
              <p>NEW BOOK</p>
            </div>

            <h2>Mother Earth Hosts Our Travels</h2>
            <p className="nav-text" >There are not many cities that have experienced such social and political extremes in recent history as Amsterdam. In the 20th century alone, Amsterdam faced the atrocities of war for the first time in 400 years, became the radical center of 1960s social movements and witnessed a complete </p>

            <div className="nav-button">
              <p>BUY THE BOOK</p>
            </div>
          </div>

          <div className="home-search" >
            <input placeholder="Search stories" />
            <div className="search-icon"><CiSearch /></div>
          </div>


        </div>


      </div>
    </>
  );
}
