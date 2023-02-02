let numField = document.querySelector("#inputField")

updateValues(10)

let interval = window.setInterval(() => {

    let val = numField.value

    if (val > 0) {

        val--
        numField.value = val
        updateValues(val)
    }


}, 1000)


function updateValues(val) {
    document.querySelectorAll("span").forEach(element => {
        element.textContent = val
    });
}