(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},65:function(e,t,c){},67:function(e,t,c){"use strict";c.r(t);var a=c(2),s=c(3),n=c.n(s),i=c(24),r=c.n(i),o=(c(48),c(38)),l=c(12),j=(c(49),c(50),c(39)),d=c.n(j),u=c(40),h=c.n(u),m=c(19),b=Object(s.createContext)(),O=function(e){var t=e.reducer,c=e.initialState,n=e.children;return Object(a.jsx)(b.Provider,{value:Object(s.useReducer)(t,c),children:n})},g=function(){return Object(s.useContext)(b)},p=c(33),_=(p.a.initializeApp({apiKey:"AIzaSyCG3o2G8Sd_r21Bm9onzifGdETT4yg1ICc",authDomain:"challenge-98c8b.firebaseapp.com",projectId:"challenge-98c8b",storageBucket:"challenge-98c8b.appspot.com",messagingSenderId:"149382413457",appId:"1:149382413457:web:8f151c40e5f64f492bd330",measurementId:"G-XNZCMV1EMX"}).firestore(),p.a.auth());var x=function(){var e=g(),t=Object(l.a)(e,2),c=t[0],s=c.basket,n=c.user;return t[1],Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)(m.b,{to:"/",children:Object(a.jsx)("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png",alt:"amazon logo"})}),Object(a.jsxs)("div",{className:"header__search",children:[Object(a.jsx)("input",{type:"text",className:"header__searchInput"}),Object(a.jsx)(d.a,{className:"header__searchIcon"})]}),Object(a.jsxs)("div",{className:"header__nav",children:[Object(a.jsx)(m.b,{to:!n&&"/login",children:Object(a.jsxs)("div",{onClick:function(){n&&_.signOut()},className:"header__option",children:[Object(a.jsx)("span",{className:"header__optionLineOne",children:"Hello Guest"}),Object(a.jsx)("span",{className:"header__optionLineTwo",children:n?"Sign Out":"Sign In"})]})}),Object(a.jsxs)("div",{className:"header__option",children:[Object(a.jsx)("span",{className:"header__optionLineOne",children:"Returns"}),Object(a.jsx)("span",{className:"header__optionLineTwo",children:"& Orders"})]}),Object(a.jsxs)("div",{className:"header__option",children:[Object(a.jsx)("span",{className:"header__optionLineOne",children:"Your"}),Object(a.jsx)("span",{className:"header__optionLineTwo",children:"Prime"})]}),Object(a.jsx)(m.b,{to:"/checkout",children:Object(a.jsxs)("div",{className:"header__optionBasket",children:[Object(a.jsx)(h.a,{}),Object(a.jsx)("span",{className:"header__optionLineTwo header__basketCount",children:null===s||void 0===s?void 0:s.length})]})})]})]})},v=(c(59),c(60),c(27)),f=c.n(v);var N=function(e){var t=e.id,c=e.title,s=e.image,n=e.price,i=e.rating,r=g(),o=Object(l.a)(r,2),j=(o[0].basket,o[1]);return Object(a.jsxs)("div",{className:"product",children:[Object(a.jsxs)("div",{className:"product__info",children:[Object(a.jsx)("p",{className:"product__title",children:c}),Object(a.jsxs)("p",{className:"product__price",children:[Object(a.jsx)("small",{children:"$"}),Object(a.jsx)("strong",{children:n})]}),Object(a.jsx)("div",{className:"product__rating",children:Array(i).fill().map((function(e,t){return Object(a.jsx)(f.a,{className:"star"})}))})]}),Object(a.jsx)("img",{src:s,alt:"product image"}),Object(a.jsx)("button",{onClick:function(){j({type:"ADD_TO_BASKET",item:{id:t,title:c,image:s,price:n,rating:i}})},children:"Add to Basket"})]})};var S=function(){return Object(a.jsxs)("div",{className:"home",children:[Object(a.jsx)("img",{className:"home__image",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB42868420_.jpg",alt:"home image"}),Object(a.jsxs)("div",{className:"home__container",children:[Object(a.jsxs)("div",{className:"home__row",children:[Object(a.jsx)(N,{id:"0100001",title:"The Lean Startup (Eric Ries)",price:29.99,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.AC_SY400_.jpg"}),Object(a.jsx)(N,{id:"1500001",title:"Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk,5 Litre Glass Bowl",price:239,rating:4,image:"https://www.ourshopee.com/ourshopee-img/ourshopee_products/761490635Kenwood-Mixure-800x800.jpg"})]}),Object(a.jsxs)("div",{className:"home__row",children:[Object(a.jsx)(N,{id:"3000001",title:"Samsung LC49RG90SSUXEN Watch LED",price:199.99,rating:3,image:"https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"}),Object(a.jsx)(N,{id:"1000001",title:"Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",price:98.99,rating:5,image:"https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"}),Object(a.jsx)(N,{id:"2500001",title:"New Apple iPad Pro (12.9 WI-FI, 128GB) Silver (4th Generation)",price:598.99,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"})]}),Object(a.jsx)("div",{className:"home__row",children:Object(a.jsx)(N,{id:"5000001",title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",price:1094.98,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"})})]})]})},k=c(9);c(61),c(62);var C=function(e){var t=e.id,c=e.image,s=e.title,n=e.price,i=e.rating,r=g(),o=Object(l.a)(r,2),j=(o[0].basket,o[1]);return Object(a.jsxs)("div",{className:"checkoutProduct",children:[Object(a.jsx)("img",{className:"checkoutProduct__image",src:c,alt:"product image"}),Object(a.jsxs)("div",{className:"checkoutProduct__info",children:[Object(a.jsx)("p",{className:"checkoutProduct__title",children:s}),Object(a.jsxs)("p",{className:"checkoutProduct__price",children:[Object(a.jsx)("small",{children:"$"}),Object(a.jsx)("strong",{children:n})]}),Object(a.jsx)("div",{className:"checkoutProduct__rating",children:Array(i).fill().map((function(e,t){return Object(a.jsx)(f.a,{className:"star"})}))}),Object(a.jsx)("button",{onClick:function(){j({type:"REMOVE_FROM_BASKET",id:t})},children:"Remove product"})]})]})},E=(c(63),c(41)),A=c.n(E),w=c(34),y=c(21),T=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},I=function(e,t){switch(t.type){case"ADD_TO_BASKET":return Object(y.a)(Object(y.a)({},e),{},{basket:[].concat(Object(w.a)(e.basket),[t.item])});case"REMOVE_FROM_BASKET":var c=e.basket.findIndex((function(e){return e.id===t.id})),a=Object(w.a)(e.basket);return c>=0?a.splice(c,1):console.warn("Cant reamove (id:".concat(t.id,")")),Object(y.a)(Object(y.a)({},e),{},{basket:a});case"SET_USER":return Object(y.a)(Object(y.a)({},e),{},{user:t.user});default:return e}};var P=function(){var e=g(),t=Object(l.a)(e,2),c=t[0].basket;return t[1],Object(a.jsxs)("div",{className:"subtotal",children:[Object(a.jsx)(A.a,{renderText:function(e){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("p",{children:["Subtotal (",c.length," items): ",Object(a.jsx)("strong",{children:e})]}),Object(a.jsxs)("small",{className:"subtotal__gift",children:[Object(a.jsx)("input",{type:"checkbox"}),"This order contains a gift"]})]})},decimalScale:2,value:T(c),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(a.jsx)("button",{children:"Proceed to Checkout"})]})};var B=function(){var e=g(),t=Object(l.a)(e,2),c=t[0],s=c.basket,n=c.user;return t[1],Object(a.jsxs)("div",{className:"checkout",children:[Object(a.jsxs)("div",{className:"checkout__left",children:[Object(a.jsx)("img",{className:"checkout__ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:"ad image"}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("h3",{children:["Hello, ",null===n||void 0===n?void 0:n.email]}),Object(a.jsx)("h2",{className:"checkout__title",children:"Your shopping Basket"}),s.map((function(e){return Object(a.jsx)(C,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))]})]}),Object(a.jsx)("div",{className:"checkout__right",children:Object(a.jsx)(P,{})})]})};c(65);var L=function(){var e=Object(k.f)(),t=Object(s.useState)(""),c=Object(l.a)(t,2),n=c[0],i=c[1],r=Object(s.useState)(""),o=Object(l.a)(r,2),j=o[0],d=o[1];return Object(a.jsxs)("div",{className:"login",children:[Object(a.jsx)(m.b,{to:"/",children:Object(a.jsx)("img",{className:"login__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",alt:"amazon logo"})}),Object(a.jsxs)("div",{className:"login__container",children:[Object(a.jsx)("h1",{children:"Sign-in"}),Object(a.jsxs)("form",{children:[Object(a.jsx)("h5",{children:"E-mail"}),Object(a.jsx)("input",{type:"text",value:n,onChange:function(e){return i(e.target.value)}}),Object(a.jsx)("h5",{children:"Password"}),Object(a.jsx)("input",{type:"password",value:j,onChange:function(e){return d(e.target.value)}}),Object(a.jsx)("button",{type:"submit",onClick:function(t){t.preventDefault(),_.signInWithEmailAndPassword(n,j).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__signInButton",children:"Sign In"})]}),Object(a.jsx)("p",{children:"By signing-in you agree to Enrique's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice."}),Object(a.jsx)("button",{onClick:function(t){t.preventDefault(),_.createUserWithEmailAndPassword(n,j).then((function(t){console.log(t),t&&e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__registerButton",children:"Create your amazon account"})]})]})};var z=function(){var e=g(),t=Object(l.a)(e,2);Object(o.a)(t[0]);var c=t[1];return Object(s.useEffect)((function(){_.onAuthStateChanged((function(e){console.log("THE USER IS >>>",e),c(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),Object(a.jsx)(m.a,{children:Object(a.jsx)("div",{className:"app",children:Object(a.jsxs)(k.c,{children:[Object(a.jsx)(k.a,{path:"/login",children:Object(a.jsx)(L,{})}),Object(a.jsxs)(k.a,{path:"/checkout",children:[Object(a.jsx)(x,{}),Object(a.jsx)(B,{})]}),Object(a.jsxs)(k.a,{path:"/",children:[Object(a.jsx)(x,{}),Object(a.jsx)(S,{})]})]})})})},G=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,79)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),a(e),s(e),n(e),i(e)}))};r.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(O,{initialState:{basket:[],user:null},reducer:I,children:Object(a.jsx)(z,{})})}),document.getElementById("root")),G()}},[[67,1,2]]]);
//# sourceMappingURL=main.383bf4d6.chunk.js.map