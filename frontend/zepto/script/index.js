var star = '<i class="fa-solid fa-star"></i>';
var ad = 'ADD';
var products = {
  product1: {
    img: 'https://cdn.zeptonow.com/production/tr:w-1280,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/74325fc4-5b13-4bbb-98a8-cd25df7167e6.jpeg',
    price: '₹ 35',
    offprice: '',
    save: '',
    quantity: '1 Pack / 900 -1000 gm',
    name: 'Fresh Onion',
    desc: 'No Black Spots',
    star: ['4.4', '(56.0k)'],
    category: 'Fresh Fruits'
  },
  product2: {
    img: 'https://cdn.zeptonow.com/production/tr:w-1280,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/7f62bac8-cfd5-4871-b806-608b16de685c.jpeg',
    price: '₹57',
    offprice: '₹67',
    save: 'SAVE ₹10',
    quantity: '200 g',
    name: 'Mushroom Button',
    desc: '',
    star: ['4.3', '(39.2k)'],
    category: 'Fresh Vegetables'
  },
  product3: {
    img: 'https://cdn.zeptonow.com/production/tr:w-1280,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/d544e910-2ee7-44ab-b3a4-7a0b48e37de4.jpeg',
    price: '₹ 39',
    offprice: '₹45',
    save: 'SAVE ₹6',
    quantity: '1 Pack / 900 -1000 gm',
    name: 'Fresh Potato',
    desc: 'Sprouts Free',
    star: ['4.4', '(47.0k)'],
    category: 'Flowers & Leaves'
  },
  product4: {
    img: 'https://cdn.zeptonow.com/production/tr:w-1280,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/270711b9-d545-44a6-a984-98e0fae2cd55.jpeg',
    price: '₹ 20',
    offprice: '₹33',
    save: 'SAVE ₹13',
    quantity: '500 g',
    name: 'Tomato local',
    desc: 'Fresh & Ripended',
    star: ['4.3', '(218.0k)'],
    category: 'Leafy, Herbs & Seasonings'
  },
  product5: {
    img: 'https://cdn.zeptonow.com/production/tr:w-1280,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/153b1b68-bcff-48b8-9a85-78005c751cfd.jpeg',
    price: '₹ 32',
    offprice: '',
    save: '',
    quantity: '250 g',
    name: 'Beans haricot',
    desc: 'no Blemish',
    star: ['4.6', '(96.0k)'],
    category: 'Organics & Hydroponics'
  },
  product6: {
    img: 'https://cdn.zeptonow.com/production/tr:w-1280,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/306748be-1d90-49d8-9971-0ce3eae190a8.jpg',
    price: '₹ 14',
    offprice: '₹30',
    save: 'SAVE ₹16',
    quantity: '2 pcs',
    name: 'Capsicum Green',
    desc: 'Crisp & Crunchy',
    star: ['4.3', '(18.0k)'],
    category: 'Plants & Gardening'
  },
  product7: {
    img: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-1280,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/0eed17d4-7713-41b1-a215-70243d3bfb23/Broccoli.jpeg',
    price: '₹ 60',
    offprice: '₹75',
    save: 'SAVE ₹15',
    quantity: '1 Pack / 500 gm',
    name: 'Fresh Broccoli',
    desc: 'Organic & Crisp',
    star: ['4.5', '(40.0k)'],
    category: 'Cuts & Sprouts'
  }
};


document.getElementById('p1-ad').innerHTML = ad;
document.getElementById('p1-i').src = products.product1.img;
document.getElementById('p1-p').innerHTML = products.product1.price;
document.getElementById('p1-op').innerHTML = products.product1.offprice;
document.getElementById('p1-save').innerHTML = products.product1.save;
document.getElementById('p1-q').innerHTML = products.product1.quantity;
document.getElementById('p1-n').innerHTML = products.product1.name;
document.getElementById('p1-d').innerHTML = products.product1.desc;
document.getElementById('p1-star').innerHTML = star;
document.getElementById('p1-sn').innerHTML = products.product1.star[0];
document.getElementById('p1-nr').innerHTML = products.product1.star[1];

document.getElementById('p2-ad').innerHTML = ad;
document.getElementById('p2-i').src = products.product2.img;
document.getElementById('p2-p').innerHTML = products.product2.price;
document.getElementById('p2-op').innerHTML = products.product2.offprice;
document.getElementById('p2-save').innerHTML = products.product2.save;
document.getElementById('p2-q').innerHTML = products.product2.quantity;
document.getElementById('p2-n').innerHTML = products.product2.name;
document.getElementById('p2-d').innerHTML = products.product2.desc;
document.getElementById('p2-star').innerHTML = star;
document.getElementById('p2-sn').innerHTML = products.product2.star[0];
document.getElementById('p2-nr').innerHTML = products.product2.star[1];

document.getElementById('p3-ad').innerHTML = ad;
document.getElementById('p3-i').src = products.product3.img;
document.getElementById('p3-p').innerHTML = products.product3.price;
document.getElementById('p3-op').innerHTML = products.product3.offprice;
document.getElementById('p3-save').innerHTML = products.product3.save;
document.getElementById('p3-q').innerHTML = products.product3.quantity;
document.getElementById('p3-n').innerHTML = products.product3.name;
document.getElementById('p3-d').innerHTML = products.product3.desc;
document.getElementById('p3-star').innerHTML = star;
document.getElementById('p3-sn').innerHTML = products.product3.star[0];
document.getElementById('p3-nr').innerHTML = products.product3.star[1];

document.getElementById('p4-ad').innerHTML = ad;
document.getElementById('p4-i').src = products.product4.img;
document.getElementById('p4-p').innerHTML = products.product4.price;
document.getElementById('p4-op').innerHTML = products.product4.offprice;
document.getElementById('p4-save').innerHTML = products.product4.save;
document.getElementById('p4-q').innerHTML = products.product4.quantity;
document.getElementById('p4-n').innerHTML = products.product4.name;
document.getElementById('p4-d').innerHTML = products.product4.desc;
document.getElementById('p4-star').innerHTML = star;
document.getElementById('p4-sn').innerHTML = products.product4.star[0];
document.getElementById('p4-nr').innerHTML = products.product4.star[1];

document.getElementById('p5-ad').innerHTML = ad;
document.getElementById('p5-i').src = products.product5.img;
document.getElementById('p5-p').innerHTML = products.product5.price;
document.getElementById('p5-op').innerHTML = products.product5.offprice;
document.getElementById('p5-save').innerHTML = products.product5.save;
document.getElementById('p5-q').innerHTML = products.product5.quantity;
document.getElementById('p5-n').innerHTML = products.product5.name;
document.getElementById('p5-d').innerHTML = products.product5.desc;
document.getElementById('p5-star').innerHTML = star;
document.getElementById('p5-sn').innerHTML = products.product5.star[0];
document.getElementById('p5-nr').innerHTML = products.product5.star[1];

document.getElementById('p6-ad').innerHTML = ad;
document.getElementById('p6-i').src = products.product6.img;
document.getElementById('p6-p').innerHTML = products.product6.price;
document.getElementById('p6-op').innerHTML = products.product6.offprice;
document.getElementById('p6-save').innerHTML = products.product6.save;
document.getElementById('p6-q').innerHTML = products.product6.quantity;
document.getElementById('p6-n').innerHTML = products.product6.name;
document.getElementById('p6-d').innerHTML = products.product6.desc;
document.getElementById('p6-star').innerHTML = star;
document.getElementById('p6-sn').innerHTML = products.product6.star[0];
document.getElementById('p6-nr').innerHTML = products.product6.star[1];

document.getElementById('p7-ad').innerHTML = ad;
document.getElementById('p7-i').src = products.product7.img;
document.getElementById('p7-p').innerHTML = products.product7.price;
document.getElementById('p7-op').innerHTML = products.product7.offprice;
document.getElementById('p7-save').innerHTML = products.product7.save;
document.getElementById('p7-q').innerHTML = products.product7.quantity;
document.getElementById('p7-n').innerHTML = products.product7.name;
document.getElementById('p7-d').innerHTML = products.product7.desc;
document.getElementById('p7-star').innerHTML = star;
document.getElementById('p7-sn').innerHTML = products.product7.star[0];
document.getElementById('p7-nr').innerHTML = products.product7.star[1];


const groceries = [
    { name: "Coriander Leaves", price: 10, unit: "100g", rating: 4.5, category: "Fresh Vegetables" },
    { name: "Indian Cucumber", price: 67, unit: "500g", rating: 4.2, category: "Fresh Vegetables" },
    { name: "Fresh Onion", price: 45, unit: "900-1000g", rating: 4.5, category: "Fresh Vegetables" },
    { name: "Mushroom Button", price: 62, unit: "200g", rating: 4.5, category: "Fresh Vegetables" },
    { name: "Chilli Green", price: 26, unit: "100g", rating: 4.6, category: "Fresh Vegetables" },
    { name: "Tomato Local", price: 48, unit: "500g", rating: 4.4, category: "Fresh Vegetables" },
    { name: "Residue Free Chilli Green", price: 31, unit: "100g", rating: 4.6, category: "Fresh Vegetables" },
    { name: "Spinach", price: 36, unit: "250g", rating: 4.3, category: "Leafy, Herbs & Seasonings" },
    { name: "Banana Robusta", price: 41, unit: "4pcs", rating: 4.3, category: "Fresh Fruits" },
    { name: "Snacky Avocado", price: 50, unit: "1 piece", rating: 4.2, category: "Fresh Fruits" },
    { name: "Banana Elaichi", price: 82, unit: "500g", rating: 4.4, category: "Fresh Fruits" },
    { name: "Papaya", price: 56, unit: "600g-1.2kg", rating: 3.9, category: "Fresh Fruits" },
    { name: "Avocado", price: 50, unit: "1 piece", rating: 4.2, category: "Exotics & Premium" },
    { name: "Dragon Fruit", price: 120, unit: "1 piece", rating: 4.6, category: "Exotics & Premium" },
    { name: "Quinoa", price: 150, unit: "500g", rating: 4.8, category: "Exotics & Premium" },
    { name: "Rose", price: 30, unit: "1 bunch", rating: 4.1, category: "Flowers & Leaves" },
    { name: "Jasmine", price: 40, unit: "1 bunch", rating: 4.0, category: "Flowers & Leaves" },
    { name: "Sunflower", price: 35, unit: "1 bunch", rating: 4.3, category: "Flowers & Leaves" },
    { name: "Marigold", price: 25, unit: "1 bunch", rating: 4.2, category: "Flowers & Leaves" },
    { name: "Basil", price: 20, unit: "100g", rating: 4.3, category: "Leafy, Herbs & Seasonings" },
    { name: "Mint", price: 18, unit: "100g", rating: 4.5, category: "Leafy, Herbs & Seasonings" },
    { name: "Thyme", price: 22, unit: "100g", rating: 4.6, category: "Leafy, Herbs & Seasonings" },
    { name: "Parsley", price: 19, unit: "100g", rating: 4.4, category: "Leafy, Herbs & Seasonings" },
    { name: "Organic Tomato", price: 60, unit: "500g", rating: 4.7, category: "Organics & Hydroponics" },
    { name: "Organic Carrot", price: 55, unit: "500g", rating: 4.5, category: "Organics & Hydroponics" },
    { name: "Hydroponic Lettuce", price: 80, unit: "1 head", rating: 4.8, category: "Organics & Hydroponics" },
    { name: "Organic Kale", price: 70, unit: "500g", rating: 4.6, category: "Organics & Hydroponics" },
    { name: "Aloe Vera", price: 150, unit: "1 plant", rating: 4.7, category: "Plants & Gardening" },
    { name: "Snake Plant", price: 120, unit: "1 plant", rating: 4.5, category: "Plants & Gardening" },
    { name: "Money Plant", price: 100, unit: "1 plant", rating: 4.4, category: "Plants & Gardening" },
    { name: "Cactus", price: 90, unit: "1 plant", rating: 4.3, category: "Plants & Gardening" },
    { name: "Moong Sprouts", price: 25, unit: "100g", rating: 4.6, category: "Cuts & Sprouts" },
    { name: "Alfalfa Sprouts", price: 28, unit: "100g", rating: 4.7, category: "Cuts & Sprouts" },
    { name: "Carrot Sticks", price: 30, unit: "200g", rating: 4.5, category: "Cuts & Sprouts" },
    { name: "Cucumber Slices", price: 28, unit: "200g", rating: 4.4, category: "Cuts & Sprouts" },
    { name: "Tomato Cherry", price: 45, unit: "250g", rating: 4.3, category: "Fresh Vegetables" },
    { name: "Green Peas", price: 55, unit: "500g", rating: 4.2, category: "Fresh Vegetables" },
    { name: "Baby Corn", price: 70, unit: "250g", rating: 4.4, category: "Fresh Vegetables" },
    { name: "Bell Pepper", price: 60, unit: "250g", rating: 4.5, category: "Fresh Vegetables" },
    { name: "Pomegranate", price: 80, unit: "1 piece", rating: 4.7, category: "Fresh Fruits" },
    { name: "Guava", price: 55, unit: "1 piece", rating: 4.4, category: "Fresh Fruits" },
    { name: "Lychee", price: 90, unit: "500g", rating: 4.6, category: "Fresh Fruits" },
    { name: "Strawberry", price: 110, unit: "250g", rating: 4.8, category: "Fresh Fruits" },
    { name: "Cashew Nuts", price: 250, unit: "200g", rating: 4.9, category: "Exotics & Premium" },
    { name: "Almonds", price: 220, unit: "200g", rating: 4.8, category: "Exotics & Premium" },
    { name: "Walnuts", price: 300, unit: "200g", rating: 4.7, category: "Exotics & Premium" },
    { name: "Lavender", price: 50, unit: "1 bunch", rating: 4.4, category: "Flowers & Leaves" },
    { name: "Lotus", price: 70, unit: "1 bunch", rating: 4.3, category: "Flowers & Leaves" },
    { name: "Daisy", price: 45, unit: "1 bunch", rating: 4.1, category: "Flowers & Leaves" },
    { name: "Cilantro", price: 30, unit: "100g", rating: 4.5, category: "Leafy, Herbs & Seasonings" },
    { name: "Dill", price: 35, unit: "100g", rating: 4.6, category: "Leafy, Herbs & Seasonings" },
    { name: "Chives", price: 40, unit: "100g", rating: 4.4, category: "Leafy, Herbs & Seasonings" },
    { name: "Organic Broccoli", price: 90, unit: "500g", rating: 4.7, category: "Organics & Hydroponics" },
    { name: "Organic Zucchini", price: 85, unit: "500g", rating: 4.6, category: "Organics & Hydroponics" },
    { name: "Hydroponic Basil", price: 95, unit: "1 pack", rating: 4.8, category: "Organics & Hydroponics" },
    { name: "Fiddle Leaf Fig", price: 180, unit: "1 plant", rating: 4.5, category: "Plants & Gardening" },
    { name: "Peace Lily", price: 150, unit: "1 plant", rating: 4.6, category: "Plants & Gardening" },
    { name: "Rubber Plant", price: 135, unit: "1 plant", rating: 4.4, category: "Plants & Gardening" },
    { name: "Radish Sprouts", price: 40, unit: "100g", rating: 4.5, category: "Cuts & Sprouts" },
    { name: "Cabbage Sprouts", price: 42, unit: "100g", rating: 4.3, category: "Cuts & Sprouts" },
    { name: "Beetroot Sticks", price: 45, unit: "200g", rating: 4.4, category: "Cuts & Sprouts" },
    { name: "Zucchini Slices", price: 50, unit: "200g", rating: 4.2, category: "Cuts & Sprouts" },
    { name: "Lettuce", price: 30, unit: "1 head", rating: 4.3, category: "Fresh Vegetables" },
    { name: "Cauliflower", price: 60, unit: "1 piece", rating: 4.4, category: "Fresh Vegetables" },
    { name: "Green Beans", price: 55, unit: "250g", rating: 4.2, category: "Fresh Vegetables" },
    { name: "Sweet Corn", price: 75, unit: "250g", rating: 4.5, category: "Fresh Vegetables" },
    { name: "Kiwi", price: 70, unit: "1 piece", rating: 4.4, category: "Fresh Fruits" },
    { name: "Blueberry", price: 120, unit: "100g", rating: 4.8, category: "Fresh Fruits" },
    { name: "Raspberry", price: 130, unit: "100g", rating: 4.7, category: "Fresh Fruits" },
    { name: "Blackberry", price: 125, unit: "100g", rating: 4.6, category: "Fresh Fruits" },
    { name: "Pistachios", price: 280, unit: "200g", rating: 4.9, category: "Exotics & Premium" },
    { name: "Macadamia Nuts", price: 320, unit: "200g", rating: 4.8, category: "Exotics & Premium" },
    { name: "Calendula", price: 40, unit: "1 bunch", rating: 4.3, category: "Flowers & Leaves" },
    { name: "Chrysanthemum", price: 35, unit: "1 bunch", rating: 4.2, category: "Flowers & Leaves" },
    { name: "Rosemary", price: 25, unit: "100g", rating: 4.5, category: "Leafy, Herbs & Seasonings" },
    { name: "Sage", price: 28, unit: "100g", rating: 4.4, category: "Leafy, Herbs & Seasonings" },
    { name: "Organic Spinach", price: 65, unit: "250g", rating: 4.7, category: "Organics & Hydroponics" },
    { name: "Organic Lettuce", price: 70, unit: "250g", rating: 4.8, category: "Organics & Hydroponics" },
    { name: "Spider Plant", price: 120, unit: "1 plant", rating: 4.5, category: "Plants & Gardening" },
    { name: "Fern", price: 130, unit: "1 plant", rating: 4.6, category: "Plants & Gardening" },
    { name: "Turnip Sprouts", price: 35, unit: "100g", rating: 4.3, category: "Cuts & Sprouts" },
    { name: "Pea Shoots", price: 40, unit: "100g", rating: 4.4, category: "Cuts & Sprouts" }
];



function category(ucategory) {
    document.getElementById('p1').classList.remove('vis');
    document.getElementById('p2').classList.remove('vis');
    document.getElementById('p3').classList.remove('vis');
    document.getElementById('p4').classList.remove('vis');
    document.getElementById('p5').classList.remove('vis');
    document.getElementById('p6').classList.remove('vis');
    document.getElementById('p7').classList.remove('vis');
    console.clear();
    if (ucategory === 'All') {
        document.getElementById('p1').classList.add('vis');
        document.getElementById('p2').classList.add('vis');
        document.getElementById('p3').classList.add('vis');
        document.getElementById('p4').classList.add('vis');
        document.getElementById('p5').classList.add('vis');
        document.getElementById('p6').classList.add('vis');
        document.getElementById('p7').classList.add('vis');
        console.log(groceries);
    }
    else {
        for (var i = 0; i < groceries.length; i++) {
            if (groceries[i].category === ucategory) {
                console.log(groceries[i]);
            }
            if(products.product1.category===ucategory){
                document.getElementById('p1').classList.add('vis');
            }
            if(products.product2.category===ucategory){
                document.getElementById('p2').classList.add('vis');
            }
            if(products.product3.category===ucategory){
                document.getElementById('p3').classList.add('vis');
            }
            if(products.product4.category===ucategory){
                document.getElementById('p4').classList.add('vis');
            }
            if(products.product5.category===ucategory){
                document.getElementById('p5').classList.add('vis');
            }
            if(products.product6.category===ucategory){
                document.getElementById('p6').classList.add('vis');
            }
            if(products.product7.category===ucategory){
                document.getElementById('p7').classList.add('vis');
            }
            
        }
    }
}