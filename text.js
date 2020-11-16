document.addEventListener('DOMContentLoaded', function (event) {
    var dataText = ['คุณรู้หรือไม่ ?<br>ไทยติดอันดับ 10 <br>'];
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
            document.querySelector("h2").style.visibility = 'hidden';
            document.querySelector(".button").style.visibility = 'visible';
            document.querySelector("#coin").style.visibility = 'visible';
            document.queryCommandValue
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