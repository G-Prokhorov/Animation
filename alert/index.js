let notify = document.getElementById("notification");
let logotg = document.getElementById("logotg");
let text = document.getElementById("text");

let clicked = false;

function show() {
    if (!clicked) {
        clicked = true;
        notify.style.top = "30px";
        setTimeout(() => {
            logotg.style.left = "0";
            text.style.width = "100%";
            setTimeout(() => {
                logotg.style.left = "50%";
                text.style.width = "0%";
                setTimeout(() => {
                    notify.style.top = "-70px";
                    clicked = false;
                }, 850);
            }, 5000);
        }, 700);
    }
}

notify.addEventListener("click", () => {
    open("https://t.me/g_prkhrv");
})