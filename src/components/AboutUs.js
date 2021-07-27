import React from "react";
import author from "../images/room-1.jpeg";
import Title from "./Title";


const AboutUs = () => {
        return (<>
        	<link href="/docs/5.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
  <div class="b-example-divider"></div>

  <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-8 col-sm-7 col-lg-6">
      	<div class="aboutusimg">
        <img src="https://www.luxurytravelmagazine.com/files/610/7/2257/01--The-Royal-Infinity-Villa---Porto-Zante-Villas-and-Spa_reg.jpg" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes"  loading="lazy"/>
      </div>
      </div>
      <div class="col-lg-6 col-md-10">
        <h1 class="display-5 fw-bold lh-1 mb-3" id="aboutushead"><Title  title="About Us"/></h1>
        <p class="lead" style={{paddingRight: "3rem"}}>The past months have shown us that many of our privileges cannot be taken for granted. Explore the world of Vals' legends and myths with hiking routes that tell a story, take a lonely swim at night or just enjoy our extravagant fine dining. There are many attractive specials and experiences to discover.

<br/><br/>Welcome to our hideaway!</p>
        </div>
      </div>
  </div>
  </>
	)
}

export default AboutUs;