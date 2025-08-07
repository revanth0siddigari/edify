var star='<i class="fa-solid fa-star"></i>';
var ad='ADD';
var product1= {
    img:'https://cdn.zeptonow.com/production/tr:w-1280,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/74325fc4-5b13-4bbb-98a8-cd25df7167e6.jpeg',
    price:'₹ 35',
    offprice:'',
    save:'',
    quantity:'1 Pack / 900 -1000 gm',
    name:'Fresh Onion',
    desc:'No Black Spots',
    star:['4.4','(56.0k)']
};
var product2= {
    img:'https://cdn.zeptonow.com/production/tr:w-1280,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/7f62bac8-cfd5-4871-b806-608b16de685c.jpeg',
    price:'₹57',
    offprice:'₹67',
    save:'SAVE ₹10',
    quantity:'200 g',
    name:'Mushroom Button',
    desc:'',
    star:['4.3','(39.2k)']

};
var product3= {
    img:'https://cdn.zeptonow.com/production/tr:w-1280,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/d544e910-2ee7-44ab-b3a4-7a0b48e37de4.jpeg',
    price:'₹ 39',
    offprice:'₹45',
    save:'SAVE ₹6',
    quantity:'1 Pack / 900 -1000 gm',
    name:'Fresh Potato',
    desc:'Sprouts Free',
    star:['4.4','(47.0k)']
};
var product4= {
    img:'https://cdn.zeptonow.com/production/tr:w-1280,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/270711b9-d545-44a6-a984-98e0fae2cd55.jpeg',
    price:'₹ 20',
    offprice:'₹33',
    save:'SAVE ₹13',
    quantity:'500 g',
    name:'Tomato local',
    desc:'Fresh & Ripended',
    star:['4.3','(218.0k)']
};
var product5= {
    img:'https://cdn.zeptonow.com/production/tr:w-1280,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/153b1b68-bcff-48b8-9a85-78005c751cfd.jpeg',
    price:'₹ 32',
    offprice:'',
    save:'',
    quantity:'250 g',
    name:'Beans haricot',
    desc:'no Blemish',
    star:['4.6','(96.0k)']
};
var product6= {
    img:'https://cdn.zeptonow.com/production/tr:w-1280,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/306748be-1d90-49d8-9971-0ce3eae190a8.jpg',
    price:'₹ 14',
    offprice:'₹30',
    save:'SAVE ₹16',
    quantity:'2 pcs',
    name:'Capsicum Green',
    desc:'Crisp & Crunchy',
    star:['4.3','(18.0k)']
};

document.getElementById('p1-ad').innerHTML = ad;
document.getElementById('p1-i').src = product1.img;
document.getElementById('p1-p').innerHTML = product1.price;
document.getElementById('p1-op').innerHTML = product1.offprice;
document.getElementById('p1-save').innerHTML = product1.save;
document.getElementById('p1-q').innerHTML = product1.quantity;
document.getElementById('p1-n').innerHTML = product1.name;
document.getElementById('p1-d').innerHTML = product1.desc;
document.getElementById('p1-star').innerHTML = star;
document.getElementById('p1-sn').innerHTML = product1.star[0];
document.getElementById('p1-nr').innerHTML = product1.star[1];

document.getElementById('p2-ad').innerHTML = ad;
document.getElementById('p2-i').src = product2.img;
document.getElementById('p2-p').innerHTML = product2.price;
document.getElementById('p2-op').innerHTML = product2.offprice;
document.getElementById('p2-save').innerHTML = product2.save;
document.getElementById('p2-q').innerHTML = product2.quantity;
document.getElementById('p2-n').innerHTML = product2.name;
document.getElementById('p2-d').innerHTML = product2.desc;
document.getElementById('p2-star').innerHTML = star;
document.getElementById('p2-sn').innerHTML = product2.star[0];
document.getElementById('p2-nr').innerHTML = product2.star[1];

document.getElementById('p3-ad').innerHTML = ad;
document.getElementById('p3-i').src = product3.img;
document.getElementById('p3-p').innerHTML = product3.price;
document.getElementById('p3-op').innerHTML = product3.offprice;
document.getElementById('p3-save').innerHTML = product3.save;
document.getElementById('p3-q').innerHTML = product3.quantity;
document.getElementById('p3-n').innerHTML = product3.name;
document.getElementById('p3-d').innerHTML = product3.desc;
document.getElementById('p3-star').innerHTML = star;
document.getElementById('p3-sn').innerHTML = product3.star[0];
document.getElementById('p3-nr').innerHTML = product3.star[1];

document.getElementById('p4-ad').innerHTML = ad;
document.getElementById('p4-i').src = product4.img;
document.getElementById('p4-p').innerHTML = product4.price;
document.getElementById('p4-op').innerHTML = product4.offprice;
document.getElementById('p4-save').innerHTML = product4.save;
document.getElementById('p4-q').innerHTML = product4.quantity;
document.getElementById('p4-n').innerHTML = product4.name;
document.getElementById('p4-d').innerHTML = product4.desc;
document.getElementById('p4-star').innerHTML = star;
document.getElementById('p4-sn').innerHTML = product4.star[0];
document.getElementById('p4-nr').innerHTML = product4.star[1];

document.getElementById('p5-ad').innerHTML = ad;
document.getElementById('p5-i').src = product5.img;
document.getElementById('p5-p').innerHTML = product5.price;
document.getElementById('p5-op').innerHTML = product5.offprice;
document.getElementById('p5-save').innerHTML = product5.save;
document.getElementById('p5-q').innerHTML = product5.quantity;
document.getElementById('p5-n').innerHTML = product5.name;
document.getElementById('p5-d').innerHTML = product5.desc;
document.getElementById('p5-star').innerHTML = star;
document.getElementById('p5-sn').innerHTML = product5.star[0];
document.getElementById('p5-nr').innerHTML = product5.star[1];

document.getElementById('p6-ad').innerHTML = ad;
document.getElementById('p6-i').src = product6.img;
document.getElementById('p6-p').innerHTML = product6.price;
document.getElementById('p6-op').innerHTML = product6.offprice;
document.getElementById('p6-save').innerHTML = product6.save;
document.getElementById('p6-q').innerHTML = product6.quantity;
document.getElementById('p6-n').innerHTML = product6.name;
document.getElementById('p6-d').innerHTML = product6.desc;
document.getElementById('p6-star').innerHTML = star;
document.getElementById('p6-sn').innerHTML = product6.star[0];
document.getElementById('p6-nr').innerHTML = product6.star[1];

