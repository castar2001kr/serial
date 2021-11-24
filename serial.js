var fs=require('fs');

fs.open('/dev/')

var isOn = false;

setInterval(function(){
    if ( !isOn ) { // OFF면
        setLED(1);
    } else { // ON이면
        setLED(0);
    }

    isOn = !isOn;
}, 1000);

function setLED(flag) {
    // TODO: 뭔가 데이터를 장치로 보내는 코드가 있을꺼임
}

