import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB42868420_.jpg" alt="home image"/>
            <div className="home__container">

                <div className="home__row">
                    <Product 
                    id="0100001"
                    title="The Lean Startup (Eric Ries)"
                    price={29.99} 
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.AC_SY400_.jpg" 
                    />
                    <Product 
                    id="1500001"
                    title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk,5 Litre Glass Bowl"
                    price={239.0} 
                    rating={4}
                    image="https://www.ourshopee.com/ourshopee-img/ourshopee_products/761490635Kenwood-Mixure-800x800.jpg" 
                    />
                </div>
                <div className="home__row">
                    <Product 
                    id="3000001"
                    title="Samsung LC49RG90SSUXEN Watch LED"
                    price={199.99} 
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" 
                    />
                    <Product 
                    id="1000001"
                    title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                    price={98.99} 
                    rating={5}
                    image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$" 
                    />
                    <Product 
                    id="2500001"
                    title="New Apple iPad Pro (12.9 WI-FI, 128GB) Silver (4th Generation)"
                    price={598.99} 
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg" 
                    />
                </div>
                <div className="home__row">
                <Product 
                    id="5000001"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                    price={1094.98}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg" 
                    />
                </div>
            </div>
        </div>
    )
}

export default Home