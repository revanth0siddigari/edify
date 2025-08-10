var train1={
    row1:{
        name:'SC VANDE BHARAT (20702)',
        runs:'Runs On: M T W T F S S',
        secdule:'Train Schedule'
    },
    row2:{
        col1:{
            stime:'17:45',
            star:'ONGOLE',
            sdate:'Sun, 10 Aug'
        },
        col2:{
            duration:'05:55'
        },
        col3:{
            dtime:'17:45',
            destination:' SECUNDERABAD JN',
            ddate:'Sun, 10 Aug'
        }
    },
    row3:{
        type1:'AC Chair car(CC)',
        type2:'Exec. Chair Car (EC)'
    },
    row4:{
        col1:{
            date:'Sun, 10 Aug',
            avail:'NOT AVAILABLE'
        },
        col2:{
            date:'Mon, 11 Aug',
            avail:'NOT AVAILABLE'
        },
        icon:'<i class="fa-solid fa-greater-than"></i>'
    },
    row5:{
        desc:'Please check <a href="" class="desc-a">NTES website<a> or <a href="" class="desc-a">NTES app<a> for actual time before boarding'
    },
    row6:{
        update:'Updated 0 Minutes and 49 Seconds ago ',
        icon:'<i class="fa-solid fa-rotate-right"></i>',
        button:'Book Now'
    }
}
var train2={
    row1:{
        name:'MAS CHZ SF EXP (12603)',
        runs:'Runs On: M T W T F S S',
        secdule:'Train Schedule'
    },
    row2:{
        col1:{
            stime:'21:00',
            star:'ONGOLE',
            sdate:'Sun, 10 Aug'
        },
        col2:{
            duration:'08:10'
        },
        col3:{
            dtime:'05:10',
            destination:'  CHARLAPALLI ',
            ddate:'Mon, 11 Aug'
        }
    },
    row3:{
        
        type1:'Sleeper (SL)',
        type2:'AC 3 Tier (3A)',
        type3:'AC 2 Tier (2A)',
        type4:'AC First Class (1A)'
    },
    row4:{
        col1:{
            date:'Sun, 10 Aug',
            avail:'NOT AVAILABLE'
        },
        col2:{
            date:'Mon, 11 Aug',
            avail:'AVAILABLE-0008'
        },
        icon:'<i class="fa-solid fa-greater-than"></i>'
    },
    row5:{
        desc:'Please check <a href="" class="desc-a">NTES website<a> or <a href="" class="desc-a">NTES app<a> for actual time before boarding'
    },
    row6:{
        update:'Updated 13 Minutes and 49 Seconds ago ',
        icon:'<i class="fa-solid fa-rotate-right"></i>',
        button:'Book Now'
    }
}
var train3={
    row1:{
        name:'SABARI EXPRESS (17229)',
        runs:'Runs On: M T W T F S S',
        secdule:'Train Schedule'
    },
    row2:{
        col1:{
            stime:'03:55 ',
            star:'ONGOLE',
            sdate:'Sun, 10 Aug'
        },
        col2:{
            duration:'08:50'
        },
        col3:{
            dtime:'12:45',
            destination:' SECUNDERABAD JN',
            ddate:'Sun, 10 Aug'
        }
    },
    row3:{
        type1:'Sleeper (SL)',
        type2:'AC 3 Tier (3A)',
        type3:'AC 2 Tier (2A)',
        type4:'AC First Class (1A)'
    },
    row4:{
        col1:{
            date:'Sun, 10 Aug',
            avail:'NOT AVAILABLE'
        },
        col2:{
            date:'Mon, 11 Aug',
            avail:'NOT AVAILABLE'
        },
        icon:'<i class="fa-solid fa-greater-than"></i>'
    },
    row5:{
        desc:'Please check <a href="" class="desc-a">NTES website<a> or <a href="" class="desc-a">NTES app<a> for actual time before boarding'
    },
    row6:{
        update:'Updated 0 Minutes and 49 Seconds ago ',
        icon:'<i class="fa-solid fa-rotate-right"></i>',
        button:'Book Now'
    }
}
var train4={
    row1:{
        name:'SC VANDE BHARAT (20702)',
        runs:'Runs On: M T W T F S S',
        secdule:'Train Schedule'
    },
    row2:{
        col1:{
            stime:'17:45',
            star:'ONGOLE',
            sdate:'Sun, 10 Aug'
        },
        col2:{
            duration:'05:55'
        },
        col3:{
            dtime:'17:45',
            destination:' SECUNDERABAD JN',
            ddate:'Sun, 10 Aug'
        }
    },
    row3:{
        type1:'Sleeper (SL)',
        type2:'AC 3 Tier (3A)',
        type3:'AC 2 Tier (2A)',

    },
    row4:{
        col1:{
            date:'Sun, 10 Aug',
            avail:'NOT AVAILABLE'
        },
        col2:{
            date:'Mon, 11 Aug',
            avail:'NOT AVAILABLE'
        },
        icon:'<i class="fa-solid fa-greater-than"></i>'
    },
    row5:{
        desc:'Please check <a href="" class="desc-a">NTES website<a> or <a href="" class="desc-a">NTES app<a> for actual time before boarding'
    },
    row6:{
        update:'Updated 0 Minutes and 49 Seconds ago ',
        icon:'<i class="fa-solid fa-rotate-right"></i>',
        button:'Book Now'
    }
}

document.getElementById("t-n").innerHTML=train1.row1.name;
document.getElementById("t-runs").innerHTML=train1.row1.runs;
document.getElementById("t-secdu").innerHTML=train1.row1.secdule;
document.getElementById("t-stime").innerHTML=train1.row2.col1.stime;
document.getElementById("t-start").innerHTML=train1.row2.col1.star;
document.getElementById("t-date").innerHTML=train1.row2.col1.sdate;
document.getElementById("t-duration").innerHTML=train1.row2.col2.duration;
document.getElementById("t-time").innerHTML=train1.row2.col3.dtime;
document.getElementById("t-dest").innerHTML=train1.row2.col3.destination;
document.getElementById("t-date").innerHTML=train1.row2.col3.ddate;
document.getElementById("t-type1").innerHTML=train1.row3.type1;
document.getElementById("t-type2").innerHTML=train1.row3.type2;
document.getElementById("t-sdate").innerHTML=train1.row4.col1.date;
document.getElementById("t-savail").innerHTML=train1.row4.col1.avail;
document.getElementById("t-ddate").innerHTML=train1.row4.col2.date;
document.getElementById("t-davail").innerHTML=train1.row4.col2.avail;
document.getElementById("t-icon").innerHTML=train1.row4.icon;
document.getElementById("t-desc").innerHTML=train1.row5.desc;
document.getElementById("t-up").innerHTML=train1.row6.update;
document.getElementById("tup-icon").innerHTML=train1.row6.icon;
document.getElementById("t-book").innerHTML=train1.row6.button;

document.getElementById("t-n2").innerHTML=train2.row1.name;
document.getElementById("t-runs2").innerHTML=train2.row1.runs;
document.getElementById("t-secdu2").innerHTML=train2.row1.secdule;
document.getElementById("t-stime2").innerHTML=train2.row2.col1.stime;
document.getElementById("t-start2").innerHTML=train2.row2.col1.star;
document.getElementById("t-date2").innerHTML=train2.row2.col1.sdate;
document.getElementById("t-duration2").innerHTML=train2.row2.col2.duration;
document.getElementById("t-time2").innerHTML=train2.row2.col3.dtime;
document.getElementById("t-dest2").innerHTML=train2.row2.col3.destination;
document.getElementById("t-ddate2").innerHTML=train2.row2.col3.ddate;
document.getElementById("t-type12").innerHTML=train2.row3.type1;
document.getElementById("t-type22").innerHTML=train2.row3.type2;
document.getElementById("t-type32").innerHTML=train2.row3.type3;
document.getElementById("t-type42").innerHTML=train2.row3.type4;
document.getElementById("t-sdate2").innerHTML=train2.row4.col1.date;
document.getElementById("t-savail2").innerHTML=train2.row4.col1.avail;
document.getElementById("t-ddate2").innerHTML=train2.row4.col2.date;
document.getElementById("t-davail2").innerHTML=train2.row4.col2.avail;
document.getElementById("t-icon2").innerHTML=train2.row4.icon;
document.getElementById("t-desc2").innerHTML=train2.row5.desc;
document.getElementById("t-up2").innerHTML=train2.row6.update;
document.getElementById("tup-icon2").innerHTML=train2.row6.icon;
document.getElementById("t-book2").innerHTML=train2.row6.button;

document.getElementById("t-n3").innerHTML=train3.row1.name;
document.getElementById("t-runs3").innerHTML=train3.row1.runs;
document.getElementById("t-secdu3").innerHTML=train3.row1.secdule;
document.getElementById("t-stime3").innerHTML=train3.row2.col1.stime;
document.getElementById("t-start3").innerHTML=train3.row2.col1.star;
document.getElementById("t-date3").innerHTML=train3.row2.col1.sdate;
document.getElementById("t-duration3").innerHTML=train3.row2.col2.duration;
document.getElementById("t-time3").innerHTML=train3.row2.col3.dtime;
document.getElementById("t-dest3").innerHTML=train3.row2.col3.destination;
document.getElementById("t-date3").innerHTML=train3.row2.col3.ddate;
document.getElementById("t-type13").innerHTML=train3.row3.type1;
document.getElementById("t-type23").innerHTML=train3.row3.type2;
document.getElementById("t-type33").innerHTML=train3.row3.type3;
document.getElementById("t-type43").innerHTML=train3.row3.type4;
document.getElementById("t-sdate3").innerHTML=train3.row4.col1.date;
document.getElementById("t-savail3").innerHTML=train3.row4.col1.avail;
document.getElementById("t-ddate3").innerHTML=train3.row4.col2.date;
document.getElementById("t-davail3").innerHTML=train3.row4.col2.avail;
document.getElementById("t-icon3").innerHTML=train3.row4.icon;
document.getElementById("t-desc3").innerHTML=train3.row5.desc;
document.getElementById("t-up3").innerHTML=train3.row6.update;
document.getElementById("tup-icon3").innerHTML=train3.row6.icon;
document.getElementById("t-book3").innerHTML=train3.row6.button;


document.getElementById("t-n4").innerHTML=train4.row1.name;
document.getElementById("t-runs4").innerHTML=train4.row1.runs;
document.getElementById("t-secdu4").innerHTML=train4.row1.secdule;
document.getElementById("t-stime4").innerHTML=train4.row2.col1.stime;
document.getElementById("t-start4").innerHTML=train4.row2.col1.star;
document.getElementById("t-date4").innerHTML=train4.row2.col1.sdate;
document.getElementById("t-duration4").innerHTML=train4.row2.col2.duration;
document.getElementById("t-time4").innerHTML=train4.row2.col3.dtime;
document.getElementById("t-dest4").innerHTML=train4.row2.col3.destination;
document.getElementById("t-date4").innerHTML=train4.row2.col3.ddate;
document.getElementById("t-type14").innerHTML=train4.row3.type1;
document.getElementById("t-type24").innerHTML=train4.row3.type2;
document.getElementById("t-type34").innerHTML=train4.row3.type2;
document.getElementById("t-sdate4").innerHTML=train4.row4.col1.date;
document.getElementById("t-savail4").innerHTML=train4.row4.col1.avail;
document.getElementById("t-ddate4").innerHTML=train4.row4.col2.date;
document.getElementById("t-davail4").innerHTML=train4.row4.col2.avail;
document.getElementById("t-icon4").innerHTML=train4.row4.icon;
document.getElementById("t-desc4").innerHTML=train4.row5.desc;
document.getElementById("t-up4").innerHTML=train4.row6.update;
document.getElementById("tup-icon4").innerHTML=train4.row6.icon;
document.getElementById("t-book4").innerHTML=train4.row6.button;