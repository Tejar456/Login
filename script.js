function checkLogin() {
    var username = document.getElementById("form_login").username.value;
    var password = document.getElementById("form_login").password.value;
    if (username == "admin" && password == "123") {
        alert("Berhasil login");
        window.location = "loop.html";
    } else {
        alert("Gagal login");
    }
}

document.getElementById("form_login").addEventListener("submit", function(event) {
    event.preventDefault();
    checkLogin();
});
