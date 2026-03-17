// sidebar toggle

document.getElementById("toggleBtn").onclick = function () {
    let sidebar = document.getElementById("sidebar")

    if (sidebar.style.display === "none") {
        sidebar.style.display = "block"
    } else {
        sidebar.style.display = "none"
    }
}


// dark mode

document.getElementById("darkMode").onclick = function () {
    document.body.classList.toggle("dark")
}


// table search

document.getElementById("search").addEventListener("keyup", function () {

    let filter = this.value.toLowerCase()
    let rows = document.querySelectorAll("#userTable tr")

    rows.forEach((row, index) => {

        if (index === 0) return

        let text = row.innerText.toLowerCase()

        row.style.display = text.includes(filter) ? "" : "none"

    })

})