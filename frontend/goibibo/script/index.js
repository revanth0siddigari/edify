var flight1={
     flight_d:{
        location:'Hyderabad to Mumbai ',
        date:' 8 Aug'
    },
    flight_brand:{
        flight_l:'https://imgak.goibibo.com/flights-gi-assets/dt/common/icons/AI.png?v=19',
        flight_name:'Air India',
        flight_num:'AI 2534',
        flight_type:'Airbus A320 N'
    },
    flight_t:{
        flight_boarding:{
            btime:'12:15',
            bday:'fri',
            bdate:'8 Aug 25',
            badd:'Hyderabad India'
        },
        flight_dur:'01h 50m',
        flight_departure:{
            btime:'14:15',
            bday:'fri',
            bdate:'8 Aug 25',
            bterm:'Terminal T2',
            badd:'Mumbai India'
        }
    },
    flight_bag:{
        flight_bagg_type:'Adult',
        flight_checkIn:'15 kg',
        flight_cabin:'7kg'
    }
}

document.getElementById('f-loc').innerHTML = flight1.flight_d.location;
document.getElementById('f-date').innerHTML = flight1.flight_d.date;
document.getElementById('f-im').innerHTML = product1.price;
document.getElementById('f-n').innerHTML = product1.offprice;
document.getElementById('f-num').innerHTML = product1.save;
document.getElementById('f-type').innerHTML = product1.quantity;
document.getElementById('b-day').innerHTML = product1.name;
document.getElementById('b-date').innerHTML = product1.desc;
document.getElementById('b-add').innerHTML = star;
document.getElementById('f-du').innerHTML = product1.star[0];
document.getElementById('d-day').innerHTML = product1.star[1];
document.getElementById('d-date').innerHTML = product1.star[1];
document.getElementById('d-add').innerHTML = product1.star[1];
document.getElementById('f-bag').innerHTML = product1.star[1];
document.getElementById('f-check').innerHTML = product1.star[1];
document.getElementById('f-cabin').innerHTML = product1.star[1];