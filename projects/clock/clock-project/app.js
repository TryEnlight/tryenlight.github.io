function moveHands() {
    with(new Date()) {
        h = 30 * (getHours() % 12 + getMinutes() / 60);
        m = 6 * getMinutes();
        s = 6 * getSeconds();
        document.getElementById('seconds').style.cssText = "-webkit-transform:rotate(" + s + "deg);";
        document.getElementById('minutes').style.cssText = "-webkit-transform:rotate(" + m + "deg);";
        document.getElementById('hours').style.cssText = "-webkit-transform:rotate(" + h + "deg);";

        setTimeout(moveHands, 1000);
    }
}

window.onload = moveHands;