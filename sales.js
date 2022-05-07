
document.getElementById("addButton1").onclick = function() {
    let add = document.getElementById("price");
    console.log(add);
    document.getElementById("cartTotal").innerHTML = add;
}