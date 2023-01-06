let count = 0;//global variable

const value = document.querySelector("#value");

const btns = document.querySelectorAll(".btn");

//console.log(value);

//console.log(btns,btns.length);

btns.forEach(function (btn) {

    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        //console.log(styles);
        if (styles.contains("increase")) {
            count++;
        }
        else if (styles.contains("decrease")) {
            count--;
        }
        else {
            count = 0;
        }

        if (count > 0) {
            value.style.color = "green";
        }
        if (count < 0) {
            value.style.color = "red";
        }
        if (count === 0) {
            value.style.color = "blue";
        }

        value.textContent = count;

    });
    
});