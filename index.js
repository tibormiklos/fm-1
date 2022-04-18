function getRating() {
    let x = document.querySelector('input[name="rating"]:checked').value;
    document.getElementById("rating-tag").innerHTML = "You selected " + x + " out of 5";
    document.getElementById('rating').style.display = 'none'
    document.getElementById('thankyou').style.display = 'flex'
}