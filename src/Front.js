import React from "react";
import Mainpage1 from './Mainpage1'
import Header from "./Header";

function Front() {

    return (
        
       <>
       <Header/>

<body>
            {/*
    <header>
        
        <nav b-dkv7otyr4f="" class="navbar navbar-expand-sm navbar-toggleable-sm navbar-light border-bottom box-shadow mb-3">
            <div b-dkv7otyr4f="" class="container-fluid">
                <a class="navbar-brand" href="/"><img src="/images/resort.jpg" className="width:40px" /></a>
                <button b-dkv7otyr4f="" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span b-dkv7otyr4f="" class="navbar-toggler-icon"></span>
                </button>
                <div b-dkv7otyr4f="" class="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                    <ul b-dkv7otyr4f="" class="navbar-nav flex-grow-1">
                        <li b-dkv7otyr4f="" class="nav-item">
                            <a class="nav-link" href="/">Home</a> 
                        </li>
                        <li b-dkv7otyr4f="" class="nav-item">
                            <a class="nav-link" href="/Home/Privacy">Privacy</a>
                        </li>
                        <li b-dkv7otyr4f="" class="nav-item dropdown">
                            <a b-dkv7otyr4f="" class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Content Management
                            </a>
                            <ul b-dkv7otyr4f="" class="dropdown-menu">
                                <li b-dkv7otyr4f=""><a class="dropdown-item" href="/Villa">Villa</a></li>
                                    
                                
                                
                                <li b-dkv7otyr4f=""><a class="dropdown-item" href="/VillaNumber">VillaNumber</a></li>
                                <li b-dkv7otyr4f=""><hr b-dkv7otyr4f="" class="dropdown-divider"/></li>
                                <li b-dkv7otyr4f=""><a class="dropdown-item" href="/Amenity">Amenity</a></li>
                                <li b-dkv7otyr4f=""><a class="dropdown-item" href="/Booking?status=Approved">Booking</a></li>
                                
                            </ul>
                        </li>
                        
                    </ul>
                    	

<ul class="navbar-nav">
		<li class="nav-item">
			<a class="nav-link" href="/Register">Register</a>
		</li>
		<li class="nav-item">
			<a class="nav-link" href="/Login">Login</a>
		</li>
</ul>
                </div>
            </div>
        </nav>
</header>*/}
  
           <div b-dkv7otyr4f="" class="">



            </div>
            <div id="carouselExampleIndicators" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="slide2.jpg.png" height="600" width="600" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="slide1.jpg.png" height="600" width="600" class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            
                <Mainpage1 />
           
        </body>
       </>
        


    );
};

export default Front;
