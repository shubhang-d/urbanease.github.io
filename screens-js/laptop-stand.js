function closeSidebar(){
    document.getElementById("sidebarOverlay").style.visibility='hidden';
}

function openNav(){
    document.getElementById("sidebarOverlay").style.visibility='visible';
}

function scrolltoview(){
    const elem = document.getElementById("sec-1");
    elem.scrollIntoView({behavior: "smooth"});
}

function createCartElement(link, title, price){
    const cartProduct = document.createElement("div");
    cartProduct.classList="cart-product";
    const anotherCartDiv = document.createElement("div");
    anotherCartDiv.classList="another-cart-div";
    cartProduct.append(anotherCartDiv);
    const img = document.createElement("img");
    img.classList="cart-product-image";
    img.src=link;
    img.alt="chair";
    anotherCartDiv.append(img);
    const cartProductdesc = document.createElement("div");
    cartProductdesc.classList="cart-product-desc";
    anotherCartDiv.append(cartProductdesc);
    const cartProductTitle = document.createElement("p");
    cartProductTitle.classList="cart-product-title";
    cartProductTitle.innerText=title;
    cartProductdesc.append(cartProductTitle);
    const cartProductPrice = document.createElement("p");
    cartProductPrice.classList="cart-product-price";
    cartProductPrice.innerText=price;
    cartProductdesc.append(cartProductPrice);

    const cartProductsCards = document.querySelector(".cart-products-cards");
    cartProductsCards.append(cartProduct);

}

let gTotal = 0;

function createTableElement(title, price){
    const tr = document.createElement('tr');
    const td = document.createElement('td')
    td.innerHTML=title;
    tr.append(td);
    const td1 = document.createElement('td')
    td1.innerText=price;
    tr.append(td1);
    // alert(text, price)
    const table = document.querySelector('table');
    // table.insertBefore(tr, table.children['0'].children['3']);
    table.insertBefore(tr, table.children['0']);

}

function updateGrandTotal(price){
    gTotal += parseFloat(price.slice(1));
    const table = document.querySelector("table");
    var nfc = table.children.length - 1;
    table.children[nfc].children['0'].children['1'].innerText="";
    // alert(gTotal);
    table.children[nfc].children['0'].children['1'].innerText="$"+gTotal.toString();
}

function updateCart(link,title,price){
    createCartElement(link,title,price);
    createTableElement(title,price);
    updateGrandTotal(price);
}