const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    // const productList = document.querySelector("product-list");
    const product = document.querySelectorAll(".product");
    const pname = document.getElementsByTagName("h2");

    for (let i = 0; product.length > i; i++){
        const match = product[i].getElementsByTagName("h2")[0];
        if (match) {
            if (match.textContent.toUpperCase().indexOf(searchbox) > -1 || match.innerHTML.toUpperCase().indexOf(searchbox) > -1) {
                product[i].style.display = "";
            } else {
                product[i].style.display = "none";
            }
        }

    }
}