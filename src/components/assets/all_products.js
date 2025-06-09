import p1_img from "../assets/Kids/p1_img.jpg";
import p2_img from "../assets/Kids/p2_img.jpg";
import p3_img from "../assets/Kids/p3_img.jpg";
import p4_img from "../assets/Kids/p4_img.jpg";
import p5_img from "../assets/Kids/p5_img.jpg";
import p6_img from "../assets/Kids/p6_img.jpg";
import p7_img from "../assets/Kids/p7_img.jpg";
import p8_img from "../assets/Kids/p8_img.jpg";
import p9_img from "../assets/Kids/p9_img.jpg";
import p10_img from "../assets/Kids/p10_img.jpg";
import p11_img from "../assets/Kids/p11_img.jpg";
import p12_img from "../assets/Kids/p12_img.jpg";
import p13_img from "../assets/Kids/p13_img.jpg";
import p14_img from "../assets/Kids/p14_img.jpg";
import p15_img from "../assets/Kids/p15_img.jpg";
import p16_img from "../assets/Kids/p16_img.jpg";
import p17_img from "../assets/Kids/p17_img.jpg";
import p18_img from "../assets/Kids/p18_img.jpg";
import p19_img from "../assets/Kids/p19_img.jpg";
import p20_img from "../assets/Kids/p20_img.jpg";
import p21_img from "../assets/Kids/p21_img.jpg";
import p22_img from "../assets/Kids/p22_img.jpg";
import p23_img from "../assets/Kids/p23_img.jpg";
import p24_img from "../assets/Kids/p24_img.jpg";
import p25_img from "../assets/Kids/p25_img.jpg";
import p26_img from "../assets/Kids/p26_img.jpg";
import p27_img from "../assets/Kids/p27_img.jpg";
import p28_img from "../assets/Kids/p28_img.jpg";
import p29_img from "../assets/Kids/p29_img.jpg";
import p30_img from "../assets/Kids/p30_img.jpg";
import p31_img from "../assets/Kids/p31_img.jpg";
import p32_img from "../assets/Kids/p32_img.jpg";
import p33_img from "../assets/Kids/p33_img.jpg";
import p34_img from "../assets/Kids/p34_img.jpg";
import p35_img from "../assets/Kids/p35_img.jpg";
import p36_img from "../assets/Kids/p36_img.jpg";


let all_products = [
  // Men (1 - 12)
  { id: 1, name: "Men's Polo Tee", category: "Men", image: p1_img, new_price: 28, old_price: 39 },
  { id: 2, name: "Men's Slim Jeans", category: "Men", image: p2_img, new_price: 38, old_price: 52 },
  { id: 3, name: "Men's Leather Jacket", category: "Men", image: p3_img, new_price: 85, old_price: 110 },
  { id: 4, name: "Men's Formal Shirt", category: "Men", image: p4_img, new_price: 33, old_price: 47 },
  { id: 5, name: "Men's Zipper Hoodie", category: "Men", image: p5_img, new_price: 50, old_price: 70 },
  { id: 6, name: "Men's Cargo Shorts", category: "Men", image: p6_img, new_price: 22, old_price: 31 },
  { id: 7, name: "Men's Classic Blazer", category: "Men", image: p7_img, new_price: 80, old_price: 105 },
  { id: 8, name: "Men's Wool Sweater", category: "Men", image: p8_img, new_price: 55, old_price: 75 },
  { id: 9, name: "Men's Joggers", category: "Men", image: p9_img, new_price: 32, old_price: 42 },
  { id: 10, name: "Men's Ethnic Kurta", category: "Men", image: p10_img, new_price: 45, old_price: 65 },
  { id: 11, name: "Men's Cotton Vest", category: "Men", image: p11_img, new_price: 18, old_price: 26 },
  { id: 12, name: "Men's Baseball Cap", category: "Men", image: p12_img, new_price: 14, old_price: 22 },

  // Women (13 - 24)
  { id: 13, name: "Women's Crop Tee", category: "Women", image: p13_img, new_price: 30, old_price: 44 },
  { id: 14, name: "Women's High Waist Jeans", category: "Women", image: p14_img, new_price: 40, old_price: 55 },
  { id: 15, name: "Women's Denim Jacket", category: "Women", image: p15_img, new_price: 70, old_price: 95 },
  { id: 16, name: "Women's Sleeveless Top", category: "Women", image: p16_img, new_price: 26, old_price: 36 },
  { id: 17, name: "Women's Pullover Hoodie", category: "Women", image: p17_img, new_price: 50, old_price: 68 },
  { id: 18, name: "Women's Lounge Shorts", category: "Women", image: p18_img, new_price: 25, old_price: 34 },
  { id: 19, name: "Women's Floral Dress", category: "Women", image: p19_img, new_price: 75, old_price: 95 },
  { id: 20, name: "Women's Knit Sweater", category: "Women", image: p20_img, new_price: 55, old_price: 74 },
  { id: 21, name: "Women's Yoga Pants", category: "Women", image: p21_img, new_price: 36, old_price: 48 },
  { id: 22, name: "Women's Printed Kurti", category: "Women", image: p22_img, new_price: 40, old_price: 58 },
  { id: 23, name: "Women's Maxi Skirt", category: "Women", image: p23_img, new_price: 28, old_price: 36 },
  { id: 24, name: "Women's Sun Hat", category: "Women", image: p24_img, new_price: 20, old_price: 30 },

  // Kids (25 - 36) — unchanged
  { id: 25, name: "Kid's T-Shirt", category: "Kid", image: p25_img, new_price: 20, old_price: 30 },
  { id: 26, name: "Kid's Jeans", category: "Kid", image: p26_img, new_price: 25, old_price: 35 },
  { id: 27, name: "Kid's Jacket", category: "Kid", image: p27_img, new_price: 40, old_price: 55 },
  { id: 28, name: "Kid's Shirt", category: "Kid", image: p28_img, new_price: 22, old_price: 32 },
  { id: 29, name: "Kid's Hoodie", category: "Kid", image: p29_img, new_price: 30, old_price: 42 },
  { id: 30, name: "Kid's Shorts", category: "Kid", image: p30_img, new_price: 18, old_price: 26 },
  { id: 31, name: "Kid's Blazer", category: "Kid", image: p31_img, new_price: 45, old_price: 60 },
  { id: 32, name: "Kid's Sweater", category: "Kid", image: p32_img, new_price: 28, old_price: 38 },
  { id: 33, name: "Kid's Track Pants", category: "Kid", image: p33_img, new_price: 24, old_price: 34 },
  { id: 34, name: "Kid's Kurta", category: "Kid", image: p34_img, new_price: 26, old_price: 36 },
  { id: 35, name: "Kid's Vest", category: "Kid", image: p35_img, new_price: 16, old_price: 24 },
  { id: 36, name: "Kid's Cap", category: "Kid", image: p36_img, new_price: 12, old_price: 20 }
];

export default all_products;
