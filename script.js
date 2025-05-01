function showPage(pageId) {
  const pages = ["login-page", "books-page", "cart-page", "confirmation-page"];
  pages.forEach(id => {
    const page = document.getElementById(id);
    if (page) {
      page.style.display = (id === pageId) ? "block" : "none";
    }
  });
}


function goToBooks() {
 
  showPage("books-page");
}

function goToCart() {
  showPage("cart-page");
}


function confirmOrder() {
  showPage("confirmation-page");
}


function backToBooks() {
  showPage("books-page");
}

function backToHome() {
  showPage("login-page");
}
