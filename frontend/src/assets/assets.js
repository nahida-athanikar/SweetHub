import menu_1 from './menu_1.jpg'
import menu_2 from './menu_2.jpg'
import menu_3 from './menu_3.jpg'
import menu_4 from './menu_4.jpg'
import menu_5 from './menu_5.jpg'

import sweet_1 from './sweet_1.jpg'
import sweet_2 from './sweet_2.jpg'
import sweet_3 from './sweet_3.jpg'
import sweet_4 from './sweet_4.jpg' 
import sweet_5 from './sweet_5.jpg' 
import sweet_6 from './sweet_6.jpg' 
import sweet_7 from './sweet_7.jpg' 
import sweet_8 from './sweet_8.jpg' 
import sweet_9 from './sweet_9.jpg' 
import sweet_10 from './sweet_10.jpg'  
import sweet_11 from './sweet_11.jpg'  
import sweet_12 from './sweet_12.jpg'  
import sweet_13 from './sweet_13.jpg'  
import sweet_14 from './sweet_14.jpg'   
import sweet_15 from './sweet_15.jpg'    


// COMMON ICONS (same as before)
import add_icon_white from './add_icon_white.png'
import add_icon_green from './add_icon_green.png'
import remove_icon_red from './remove_icon_red.png'
import rating_starts from './rating_starts.png'
import app_store from './app_store.png'
import play_store from './play_store.png'
import linkedin_icon from './linkedin_icon.png'
import facebook_icon from './facebook_icon.png'
import twitter_icon from './twitter_icon.png'

export const assets = {
  linkedin_icon,
  facebook_icon,
  twitter_icon,
  app_store,
  play_store,
  add_icon_white,
  add_icon_green,
  remove_icon_red,
  rating_starts
}


export const menu_list = [
  {
    menu_name: "Indian Sweets",
    menu_image: menu_1
  },
  {
    menu_name: "Milk Sweets",
    menu_image: menu_2
  },
  {
    menu_name: "Dry Fruit Sweets",
    menu_image: menu_3
  },
  {
    menu_name: "Chocolate Sweets",
    menu_image: menu_4
  },
  {
    menu_name: "Cakes & Bakery",
    menu_image: menu_5
  }
];


// SWEETS LIST (Backend doc ke according)
export const sweet_list = [
  // 🍬 INDIAN SWEETS
  {
    _id: "1",
    name: "Motichoor Laddu",
    image: sweet_1,
    price: 450,
    description: "Soft and delicious laddu made with pure ghee",
    category: "Indian Sweets"
  },
  {
    _id: "2",
    name: "Besan Laddu",
    image: sweet_2,
    price: 420,
    description: "Traditional Indian sweet made from roasted besan",
    category: "Indian Sweets"
  },
  {
    _id: "3",
    name: "Gulab Jamun",
    image: sweet_3,
    price: 380,
    description: "Soft milk-solid balls soaked in sugar syrup",
    category: "Indian Sweets"
  },

  // 🥛 MILK SWEETS
  {
    _id: "4",
    name: "Milk Peda",
    image: sweet_4,
    price: 460,
    description: "Rich and creamy peda made from fresh milk",
    category: "Milk Sweets"
  },
  {
    _id: "5",
    name: "Kaju Katli",
    image: sweet_5,
    price: 480,
    description: "Fresh milk sweet with a soft grainy texture",
    category: "Milk Sweets"
  },
  {
    _id: "6",
    name: "Rasgulla",
    image: sweet_6,
    price: 360,
    description: "Spongy white balls soaked in light sugar syrup",
    category: "Milk Sweets"
  },

  // 🥜 DRY FRUIT SWEETS
  {
    _id: "7",
    name: "Kaju Katli green",
    image: sweet_7,
    price: 950,
    description: "Premium cashew sweet with silver coating",
    category: "Dry Fruit Sweets"
  },
  {
    _id: "8",
    name: "Badam Barfi",
    image: sweet_8,
    price: 880,
    description: "Healthy laddu made from mixed dry fruits",
    category: "Dry Fruit Sweets"
  },
  {
    _id: "9",
    name: "Dry Fruit Laddu", 
    image: sweet_9,
    price: 920,
    description: "Almond-based sweet with rich flavor",
    category: "Dry Fruit Sweets"
  },

  // 🍫 CHOCOLATE SWEETS
  {
    _id: "10",
    name: "Chocolate Barfi",
    image: sweet_10,
    price: 520,
    description: "Fusion barfi with rich chocolate taste",
    category: "Chocolate Sweets"
  },
  {
    _id: "11",
    name: "Chocolate Laddu",
    image: sweet_11,
    price: 500,
    description: "Modern chocolate-flavored laddu",
    category: "Chocolate Sweets"
  },
  {
    _id: "12",
    name: "Choco Fudge Sweet",
    image: sweet_12,
    price: 560,
    description: "Soft chocolate fudge with desi twist",
    category: "Chocolate Sweets"
  },

  // 🎂 CAKES & BAKERY
  {
    _id: "13",
    name: "Chocolate Pastry",
    image: sweet_13,
    price: 90,
    description: "Soft pastry with chocolate cream layers",
    category: "Cakes & Bakery"
  },
  {
    _id: "14",
    name: "White Forest Cake",
    image: sweet_14,
    price: 750,
    description: "Classic white forest cake with fresh cream",
    category: "Cakes & Bakery"
  },
  {
    _id: "15",
    name: "Pineapple Cake",
    image: sweet_15,
    price: 680,
    description: "Fresh pineapple-flavored cream cake",
    category: "Cakes & Bakery"
  }
];
