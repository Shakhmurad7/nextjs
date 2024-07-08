import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";

import './css/index.css'
import Cart from "./CartTop/cart";

import ContentUser from "./contentUser/content";
import Contact from "./Contact/contact";
import Swipers from "./Swiper/swiper";
import CartBox from "./cartBox/CartBox";

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

        {/* CartTop */}
        <div className="container" >
            <Cart/>
        </div>
          
        {/* ---contentUser--- */}
            <ContentUser/>

        {/* ----Swiper---- */}
        <div style={{padding:'50px 0px'}} >
                 <Swipers/>
        </div>

        {/* ---Contact----    */}
            <Contact/>

        {/* ----CartBox---- */}
            <CartBox/>


        {/* footer */}  
        <div className="container" > 

            <div className="footer-container" >
                    <div className="footer-content">
                        <div className="footer-content-text-item">Company</div>
                        <div className="footer-content-text">
                            <li>About</li>
                            <li>Press</li>
                            <li>Blog</li>
                            <li>Careers</li>
                            <li>Security</li>
                            <li>Driver Centre</li>
                        </div>
                    </div>
                    <div className="footer-content">
                        <div className="footer-content-text-item">Information</div>
                        <div className="footer-content-text">
                            <li>Our Story</li>
                            <li>Recipes</li>
                            <li>Nutrition</li>
                            <li>Resources</li>
                            <li>Newsletter</li>
                            <li>Contact</li>
                        </div>
                    </div>
              
                    <div className="footer-content">
                        <div className="footer-content-text-item">Company</div>
                        <div className="footer-content-text">
                            <li>Customer service</li>
                            <li>Recommend a restaurant</li>
                            <li>Signup a restaurant</li>
                            <li>Jobs</li>
                            <li>Press</li>
                            <li>Terms of use</li>
                        </div>
                    </div>
                    <div className="footer-content">
                        <div className="footer-content-text-item">Subscribe Now</div>
                        <div className="footer-content-input">
                            <input placeholder="Your email"/>
                            <div className="icon-user" ><FaRegUser /></div>
                            <p>Subscribe Now</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
      
                <div className="footer-bottom-right">© 2019 Mass Impressions. Designed by Tran Mau Tri Tam for Mass Impressions. All rights reserved.</div>
                <div className="footer-bottom-left">
                  <p>Terms of Service</p>
                  <p>Privacy Policy</p>
                </div>
  
            </div>


    </>
  );
}
