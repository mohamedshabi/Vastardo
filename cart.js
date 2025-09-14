
var cart = document.querySelector(".cart")

function Showcart(){
   cart.style.right = "0%"
}

function Closecart(){
    cart.style.right = "-80%"
}

function addtocart(button) {
  //Find the parent .productbox of the clicked button
  let productBox = button.closest(".productbox");

  //Clone the whole productbox (copy image, name, price)
  let clone = productBox.cloneNode(true);

  //Remove buttons from the clone (we don’t want "Add to Cart" inside the cart)
  let buttons = clone.querySelectorAll("button");
  buttons.forEach(btn => btn.remove());

  //Add this cloned product into the cart area (.citems)
  document.querySelector(".citems").appendChild(clone);
}
