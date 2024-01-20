let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let ampm = document.getElementById('ampm');



setInterval(function () {
    
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    
    // setup am and pm
        if(h >= 12){
        var am = 'PM';
        }else{
            am = 'AM';
        }

    
    //adding 0 infront of single digit
    
    if ( h < 10){
        hours.innerHTML = '0' + h;
    }else{
        hours.innerHTML = h;  
    }
    if ( m < 10){
        minutes.innerHTML = '0' + m;
    }else{
        minutes.innerHTML = m;
    }
    if ( s < 10){
        seconds.innerHTML = '0' + s;
    }else{
        seconds.innerHTML = s;
    }
    ampm.innerHTML = am;

    //hours convert to 24 to 12
        if (h > 10) {
            h = h - 12; 
        }
});





