import React from 'react';
import { useState } from 'react';
import Banner from "./Banner.jsx";
import CategorySection from "./Category.jsx";

import Category1 from './assets/Category1.png';
import Category2 from './assets/Category2.png';
import Category3 from './assets/Category3.png';
import Category4 from './assets/Category4.png';
import Category5 from './assets/Category5.png';

import Category6 from './assets/Category6.png';
import Category7 from './assets/Category7.png';
import Category8 from './assets/Category8.png';
import Category9 from './assets/Category9.png';
import Category10 from './assets/Category10.png';

import Category11 from './assets/Mobile.png';
import Category12 from './assets/Watch.png';
import Category13 from './assets/Laptop.png';
import Category14 from './assets/headphone.png';
import Category15 from './assets/Camera.png';
import Category16 from './assets/Adapter.png';
import Category17 from './assets/Lanwire.png';
import Category18 from './assets/Keyboard.png';
import Category19 from './assets/Image9.png';
import Category20 from './assets/Charger.png';

import Image1 from './assets/Image1.png';
import Image2 from './assets/Image2.png';
import Image3 from './assets/Image3.png';

import Image4 from './assets/Image4.png';
import Image5 from './assets/Image5.png';
import Image6 from './assets/Image6.png';

import Image7 from './assets/Image7.png';
import Image8 from './assets/Image8.png';
import Image9 from './assets/Image9.png';

const WomenBannerlist = [
    {
      id:1,
      img:Image1,
      subtitle:"Pre-Loved Fashion for Women",
      title:"Tops and Dresses",
    },
    {
        id:2,
        img:Image2,
        subtitle:"Shop & Sell",
        title:"Accessories and more",
      },
      {
        id:3,
        img:Image3,
        subtitle:"Refresh Your Wardrobe for Less",
        title:"Shoes and Heels",
      } 
  ]
  
  const MenBannerlist = [
    {
      id:1,
      img:Image4,
      subtitle:"Pre-Loved Fashion for Men",
      title:"Shirts,T-shirts and More",
    },
    {
        id:2,
        img:Image5,
        subtitle:"Shop & Sell",
        title:"Accessories and more",
      },
      {
        id:3,
        img:Image6,
        subtitle:"Refresh Your Wardrobe for Less",
        title:"Shoes and Slippers",
      } 
  ]

  const Electroniclist = [
    {
      id:1,
      img:Image8,
      subtitle:"Affordable Study Devices for Every Learner",
      title:"EdTech devices",
    },
    {
        id:2,
        img:Image7,
        subtitle:"Enjoy Endless Reading and Entertainment",
        title:"Reading & Media devices",
      },
      {
        id:3,
        img:Image9,
        subtitle:"Buy and Sell Reliable Networking Equipment",
        title:"Networking hardwares",
      } 
  ]

function Section ()
{
    const [WomenCategories, WomenSetCategories] = useState([
        { id: 1, name: 'Clothing', image: Category1, aosDelay:200, cart: [] },
        { id: 2, name: 'Accessory', image: Category2,aosDelay:350, cart: [] },
        { id: 3, name: 'Makeup', image: Category3,aosDelay:500, cart: [] },
        { id: 4, name: 'Purse', image: Category4,aosDelay:650, cart: [] },
        { id: 5, name: 'Shoes', image: Category5,aosDelay:800, cart: [] },
      ]);
    
      const [MenCategories, MenSetCategories] = useState([
        { id: 1, name: 'Clothing', image: Category6, aosDelay:200, cart: [] },
        { id: 2, name: 'Accessory', image: Category7,aosDelay:350, cart: [] },
        { id: 3, name: 'Shoes', image: Category8,aosDelay:500, cart: [] },
        { id: 4, name: 'Bags,Purse', image: Category9,aosDelay:650, cart: [] },
        { id: 5, name: 'Riding gear', image: Category10,aosDelay:800, cart: [] },
      ]);

      const [ElectronicCategories, ElectronicSetCategories] = useState([
        { id: 1, name: 'SmartPhone', image: Category11, aosDelay:200, cart: [] },
        { id: 2, name: 'SmartWatch', image: Category12,aosDelay:350, cart: [] },
        { id: 3, name: 'Laptop/PC', image: Category13,aosDelay:500, cart: [] },
        { id: 4, name: 'Headphone', image: Category14,aosDelay:650, cart: [] },
        { id: 5, name: 'Camera', image: Category15,aosDelay:800, cart: [] },
        { id: 5, name: 'Adapter,Charger', image: Category16,aosDelay:850, cart: [] },
        { id: 1, name: 'Lanwire', image: Category17,aosDelay:900, cart: [] },
        { id: 4, name: 'Keyboard,Mouse', image: Category18,aosDelay:950, cart: [] },
        { id: 3, name: 'Router', image: Category19,aosDelay:1000, cart: [] },
        { id: 2, name: 'Other item(USB,PB)', image: Category20,aosDelay:1050, cart: [] },

      ]);

   let p=2;                           //choose section     
  return (
    <>
      { p===1 ?
        <div>
          <Banner bannerlist={WomenBannerlist}/>
          <CategorySection categories={WomenCategories}/>
        </div> : 
         p===2 ?
        <div>
          <Banner bannerlist={MenBannerlist}/>
          <CategorySection categories={MenCategories}/>
        </div> :
        <div>
          <Banner bannerlist={Electroniclist}/>
          <CategorySection categories={ElectronicCategories}/>
        </div> 
      }
    </>
  );
}
export default Section;