document.addEventListener('DOMContentLoaded', function (event) {
    var dataText = ['อยากลองหน่อยมั้ย<br>ว่าคุณจะได้รับมันอย่างไร'];

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