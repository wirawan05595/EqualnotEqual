document.addEventListener('DOMContentLoaded', function (event) {
    var dataText = ['คุณรู้หรือไม่ ?<br>ไทยติดอันดับ 10 <br>ประเทศที่มีความเหลื่อมล้ำ<br>ด้าน "ความมั่งคั่ง" มากที่สุดในโลก'
        , '<br>เป็นปัญหาเรื้อรัง<br>ที่รักษาไม่หายเป็นเวลานาน'
        , '<br>คนมักพูดกันว่า<br>เหรียญมักมีสองด้านเสมอ', '<br>เเล้วถ้าเปรียบว่า<br>เหรียญนี้จะกำหนด<br>โชคชะตาชีวิตที่คุณจะได้เกิดมา'
        , '<br>อยากลองหน่อยมั้ย<br>ว่าคุณจะได้รับมันอย่างไร'];

    function typeWriter(text, i, fnCallback) {
        if (i < (text.length)) {
            document.querySelector("h2").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
            setTimeout(function () {
                typeWriter(text, i + 1, fnCallback)
            }, 100);
        }
        else if (typeof fnCallback == 'function') {
            setTimeout(fnCallback, 700);
        }
    }
    function StartTextAnimation(i) {
        if (typeof dataText[i] == 'undefined') {
            document.querySelector("h2").innerHTML = ' ';
            document.querySelector(".button").style.opacity = 1;
            //end text
        }

        if (i < dataText[i].length) {
            typeWriter(dataText[i], 0, function () {
                setTimeout(function () {
                    StartTextAnimation(i + 1);
                }, dataText[i].length*40);
            });

        }
    }
    StartTextAnimation(0);
});