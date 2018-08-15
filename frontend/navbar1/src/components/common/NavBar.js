import React, {Component} from "react";

class NavBar extends Component {
  
    render() { 
        return ( 
            
            <div class="nav-container">
            <div class="overlay-container container cf">
                <div class="menu">
                    <li><a class="link1" href="http://blendingpoint.com/">Home</a></li>
                    <li><a class="link2" href="http://blendingpoint.com/about/">About</a></li>
                
                    <li><a class="link4" href="http://blendingpoint.com/hire-us/">Hire Us</a></li>
                </div>
                <div class="contact">
                    <div class="contact-inner dati">
                        <div class="mini-title">Blend</div>
                        <p>
                            Via Marco Perennio 25/b <br/>
                            52100 Arezzo, Italy<br/>
                            <a href="mailto:ask@blendingpoint.com">ask@blendingpoint.com</a><br/>
                            Ph: +39 0575 29 94 84
                        </p>
                    </div>
                    <div class="contact-inner social">
                        <div class="mini-title">Get In touch</div>
                        <li><a target="_blank" href="https://www.behance.net/blendingpoint">Behance</a></li>
                        <li><a target="_blank" href="https://www.instagram.com/blendingpoint/">Instagram</a></li>
                        <li><a target="_blank" href="https://vimeo.com/blendingpoint">Vimeo</a></li>
                        <li><a target="_blank" href="https://open.spotify.com/user/ocebfw4o6ygyvsfwc5tr8z7ma">Spotify</a></li>
                        <li><a target="_blank" href="https://www.facebook.com/blendcreativeagency">Facebook</a></li>
                    </div>
                </div>
                
                <div class="main-progress-bar">
                    <div class="main-progress"></div>
                </div>
                
                
            </div>
        </div>
         )

    }
}
 
export default NavBar;