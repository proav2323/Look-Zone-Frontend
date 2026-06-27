let products = []; // products data
let courselProducts = []; // show products on coursels
let categories = []; // filters (categories) admin can create more

const DOMAIN = window.location.origin; // domain of our url
const API_BASE_URL = "https://look-zone-backend.onrender.com"; // domain of our backedn server

// variables
let isLoggedIn = false; // varaible to see is user logged in
let isLoading = true; // varible to show show user user loader
let userToken = localStorage.getItem("token"); // to get user token from local storgae
let dropdownOpen = false; // to check if dropdown is open or closed
let user = null; // login user
let isAdmin = false; // if user is admin
let isUserLoggingIn = true; // to show login page in auth html
let showingPassword = false; // to check is user seeing his entered password
let filter = ""; // selected filter
let selectedImage = ""; // selected image filter
let starsSelectedReview = 0; // selcted stars for add review
let userReviewedTisProduct = false; // checki g if user has reveiwed this product
let isSideDropdownOpen = false; // checking if users has opened side dropdown
let isDarkMode =
  localStorage.getItem("mode") !== null
    ? localStorage.getItem("mode")
    : "light";

start();

// starting the application
async function start() {
  // checking is user logged in with some token
  showLoader();
  if (userToken !== null && userToken !== undefined) {
    user = null;
    isLoggedIn = false;
    try {
      await auth();
    } catch (err) {
      showToast(err.message);
      console.log(err.message);
    }
  } else {
    user = null;
    isLoggedIn = false;
    showUi(); // to show content
  }
}

// showing an element and removing an element
function showRemove(show, remove) {
  document.getElementsByClassName(remove)[0].style.display = "none";
  document.getElementsByClassName(show)[0].style.display = "flex";
}

// showing website content
async function showUi() {
  if (isLoggedIn == true) {
    if (
      window.location.href === `${DOMAIN}/auth.html` ||
      window.location.href === `${DOMAIN}/auth.html?`
    ) {
      window.location.href = `${DOMAIN}`;
    }
    if (
      user.isAdmin === true ||
      user.canEdit === true ||
      user.canView === true
    ) {
      // to show admin dashboard if user is admin
      document.getElementsByClassName("admin")[0].style.display = "inline";
    }
    showCartBadge();
  }
  if (isLoggedIn === false) {
    if (
      window.location.href === `${DOMAIN}/cart.html` ||
      window.location.href === `${DOMAIN}/cart.html?`
    ) {
      showToast("you need to login first");
      window.location.href = `${DOMAIN}`;
    }
    if (
      window.location.href === `${DOMAIN}/yourOrders.html` ||
      window.location.href === `${DOMAIN}/yourOrders.html?`
    ) {
      showToast("you need to login first");
      window.location.href = `${DOMAIN}`;
    }
    if (
      window.location.href === `${DOMAIN}/address.html` ||
      window.location.href === `${DOMAIN}/address.html?`
    ) {
      showToast("you need to login first");
      window.location.href = `${DOMAIN}`;
    }
  }
  // checking user on home-page
  if (
    window.location.href === `${DOMAIN}/` ||
    window.location.href === `${DOMAIN}` ||
    window.location.href === `${DOMAIN}?` ||
    window.location.href === `${DOMAIN}/index.html/` ||
    window.location.href === `${DOMAIN}/index.html?`
  ) {
    products = await getAllProducts();
    courselProducts = await getAllCourselProducts();
    categories = await getAllCategories();
    showProducts(products);
    await showCoursels();
    showCategoryFilters();
  }
  // checking user on cart page
  if (window.location.href.startsWith(`${DOMAIN}/cart.html`)) {
    await createCartPage();
  }
  // checking user on orders page
  if (window.location.href.startsWith(`${DOMAIN}/yourOrders.html`)) {
    createOrdersPage();
  }
  // checking user on product page
  if (window.location.href.startsWith(`${DOMAIN}/product.html`) === true) {
    await showProductDetails();
  }

  if (window.location.href.startsWith(`${DOMAIN}/search.html`) === true) {
    await showSearch();
  }

  if (window.location.href.startsWith(`${DOMAIN}/address.html`) === true) {
    showAddress();
  }
  hideLoader();

  isLoading = false;
}

// getting all the products
async function getAllProducts() {
  let products = [];
  try {
    let res = await fetch(`${API_BASE_URL}/products/`, { method: "GET" });

    if (!res.ok && res.status === 500) {
      showToast("an error occured");
    } else if (!res.ok) {
      let text = await res.text();
      showToast(text);
    } else {
      products = await res.json();
    }
  } catch (err) {
    showToast(err.message);
  }

  return products;
}

// get coursel prodycts
async function getAllCourselProducts() {
  let products = [];
  try {
    let res = await fetch(`${API_BASE_URL}/coursels/`, { method: "GET" });

    if (!res.ok && res.status === 500) {
      showToast("an error occured");
    } else if (!res.ok) {
      let text = await res.text();
      showToast(text);
    } else {
      products = await res.json();
    }
  } catch (err) {
    showToast(err.message);
  }

  return products;
}
// get product by id
async function getProductById(id) {
  let product = null;
  try {
    let res = await fetch(`${API_BASE_URL}/products/product/${id}`, {
      method: "GET",
    });

    if (!res.ok && res.status === 500) {
      showToast("an error occured");
    } else {
      product = await res.json();
    }
  } catch (err) {
    showToast(err.message);
  }

  return product;
}

// get all categories
async function getAllCategories() {
  let categories = [];
  try {
    let res = await fetch(`${API_BASE_URL}/categories/`, { method: "GET" });

    if (!res.ok && res.status === 500) {
      showToast("an error occured");
    } else if (!res.ok) {
      let text = await res.text();
      showToast(text);
    } else {
      categories = await res.json();
    }
  } catch (err) {
    showToast(err.message);
  }

  return categories;
}

// get category products
async function getCategoryProducts(id) {
  let products = [];
  try {
    let res = await fetch(`${API_BASE_URL}/products/category/${id}`, {
      method: "GET",
    });

    if (!res.ok && res.status === 500) {
      showToast("an error occured");
    } else if (!res.ok) {
      let text = await res.text();
      showToast(text);
    } else {
      products = await res.json();
    }
  } catch (err) {
    showToast(err.message);
  }

  return products;
}

// get searched products
async function getSearchedProducts(search) {
  let products = [];
  try {
    let res = await fetch(`${API_BASE_URL}/products/search?search=${search}`, {
      method: "GET",
    });

    if (!res.ok && res.status === 500) {
      showToast("an error occured");
    } else if (!res.ok) {
      let text = await res.text();
      showToast(text);
    } else {
      products = await res.json();
    }
  } catch (err) {
    showToast(err.message);
  }

  return products;
}

// get usre by id
async function getUserById(id) {
  let user = null;
  console.log(id);
  try {
    let res = await fetch(`${API_BASE_URL}/auth/user/${id}`, {
      method: "GET",
    });

    if (!res.ok && res.status === 500) {
      showToast("an error occured");
    } else if (!res.ok) {
      let text = await res.text();
      showToast(text);
    } else {
      user = await res.json();
    }
  } catch (err) {
    showToast(err);
  }

  return user;
}

// get order by id
async function getOrderById(id) {
  if (!userToken) {
    return;
  }
  let order = null;
  try {
    let res = await fetch(`${API_BASE_URL}/orders/order/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });

    if (!res.ok && res.status === 500) {
      showToast("an error occured");
    } else if (!res.ok) {
      let text = await res.text();
      showToast(text);
    } else {
      order = await res.json();
    }
  } catch (err) {
    showToast(err);
  }

  return order;
}

// adding user review
async function addUserReview() {
  if (!userToken) {
    return;
  }
  showLoader();
  let reviewContext = document.getElementsByClassName("review-input")[0].value;
  if (
    reviewContext !== "" &&
    reviewContext != undefined &&
    reviewContext != null &&
    starsSelectedReview !== 0
  ) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const ID = urlParams.get("id");
    try {
      let res = await fetch(`${API_BASE_URL}/reviews/add/${ID}`, {
        method: "POST",
        body: JSON.stringify({
          context: reviewContext,
          stars: starsSelectedReview,
        }),
        headers: {
          Authorization: `Bearer ${userToken}`,
          "Content-Type": "application/json",
        },
      });
      if (!res.ok && res.status === 500) {
        hideLoader();
        showToast("an error occured");
      } else if (!res.ok) {
        let text = await res.text();
        hideLoader();
        showToast(text);
      } else {
        hideLoader();
        showToast("review added");
      }
    } catch (err) {
      hideLoader();
      showToast(err.message);
    }
    await showProductDetails();
    hideLoader();
  } else {
    hideLoader();
    return;
  }
}

// show loader
function showLoader() {
  document.getElementsByClassName("loader-block")[0].style.display = "flex"; // making loader appear
  document.getElementsByClassName("content-show")[0].style.display = "none"; // making content appear
}
// hide loader
function hideLoader() {
  document.getElementsByClassName("loader-block")[0].style.display = "none"; // making loader disappear
  document.getElementsByClassName("content-show")[0].style.display = "flex"; // making content appear
}
// change cart badge
function showCartBadge() {
  document.getElementsByClassName("cart-item")[0].style.display = "none";
  if (user != null && user != undefined) {
    // to show badge above cart icon if there items in user cart
    if (
      user.cart.products.length !== 0 &&
      user.cart.products.length !== undefined &&
      user.cart.products.length !== null
    ) {
      document.getElementsByClassName("cart-item")[0].style.display = "flex";
      let qty = 0;
      user.cart.products.forEach((item) => {
        qty += item.qty;
      });
      document.getElementsByClassName("cart-item")[0].textContent = `${qty}`;
    }
  }
}
// authentication
async function auth() {
  showMode();
  try {
    let res = await fetch(`${API_BASE_URL}/auth`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    if (!res.ok) {
      showToast("something went wrong. please try again later");
    } else {
      user = await res.json();
      isLoggedIn = true;
    }
  } catch (err) {
    showToast(err);
  }

  // to check if we found the user
  if (user !== null && user !== undefined) {
    isLoggedIn = true;
    // changing navbar according to user login status
    if (
      window.location.href === `${DOMAIN}/` ||
      window.location.href === `${DOMAIN}` ||
      window.location.href === `${DOMAIN}?` ||
      window.location.href === `${DOMAIN}/index.html/` ||
      window.location.href === `${DOMAIN}/index.html?` ||
      window.location.href.startsWith(`${DOMAIN}/product.html`) === true ||
      window.location.href.startsWith(`${DOMAIN}/cart.html`) === true ||
      window.location.href.startsWith(`${DOMAIN}/yourOrders.html`) === true ||
      window.location.href.startsWith(`${DOMAIN}/search.html`) === true ||
      window.location.href.startsWith(`${DOMAIN}/address.html`) === true
    ) {
      showRemove("user-info", "auth");
      changeUi();
    }
  }

  await showUi(); // to show content
}

// show dropdown
function dropdown(classname) {
  if (dropdownOpen == true) {
    document.getElementsByClassName(classname)[0].style.display = "none";
    if (isSideDropdownOpen === true) {
      showSideDropdown();
    }
    dropdownOpen = false;
  } else {
    document.getElementsByClassName(classname)[0].style.display =
      "inline-block";
    dropdownOpen = true;
  }
}

// redirtect user to login page
function goToLogin() {
  window.location.href = "auth.html";
}

// changing sign-up and login
function changeForm() {
  // checking if user is in login/sign up page
  if (isUserLoggingIn === false) {
    // setting user to login page
    document.getElementsByClassName("name")[0].style.display = "none";
    document.getElementsByClassName("form-change")[0].textContent =
      "new? Create Account";
    document.getElementsByClassName("text")[0].textContent = "Login";
    document.getElementsByClassName("greeting")[0].textContent = "Welcome Back";
    document.getElementsByClassName("forgot-password")[0].style.display =
      "inline-block";
    isUserLoggingIn = true;
  } else {
    // setting user to sign up page
    document.getElementsByClassName("name")[0].style.display = "flex";
    document.getElementsByClassName("form-change")[0].textContent =
      "Have Account? Login";
    document.getElementsByClassName("text")[0].textContent = "Sign Up";
    document.getElementsByClassName("greeting")[0].textContent = "Welcome";
    document.getElementsByClassName("forgot-password")[0].style.display =
      "none";
    isUserLoggingIn = false;
  }
}

// showing password and hiding password
function togglePassword() {
  if (showingPassword === true) {
    // hiding password
    document.getElementById("password").type = "password";
    document.getElementsByClassName("show")[0].style.display = "inline-block";
    document.getElementsByClassName("hide")[0].style.display = "none";
    showingPassword = false;
  } else {
    // showing password
    document.getElementById("password").type = "text";
    document.getElementsByClassName("show")[0].style.display = "none";
    document.getElementsByClassName("hide")[0].style.display = "inline-block";
    showingPassword = true;
  }
}

// login user
async function login() {
  let email = document.getElementById("email"); // email input
  let password = document.getElementById("password"); // password input
  let errorEmail = document.getElementsByClassName("error-email")[0]; // email error
  let errorPassword = document.getElementsByClassName("error-password")[0]; // password error
  // checking if there null value in any field
  if (validateEmail() !== true || validatePassword() !== true) {
    validateEmail();
    validatePassword();
    return;
  }
  showButtonLoader("short", "text"); // showing loader on button
  let mainError = document.getElementsByClassName("main")[0]; // main error of form
  mainError.style.display = "none"; // removing error

  try {
    let data = { email: email.value, password: password.value };
    let res = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json", // Missing this causes Express to skip parsing
      },
    });

    if (!res.ok && res.status === 500) {
      mainError.textContent = "internal server error. please try again later";
      mainError.style.display = "block";
      hideButtonLoader("short", "text"); // hiding button loader
    } else if (!res.ok) {
      mainError.textContent = await res.text();
      mainError.style.display = "block";
      hideButtonLoader("short", "text"); // hiding button loader
    } else {
      let data = await res.text();
      localStorage.setItem("token", data); // adding token in local storage
      hideButtonLoader("short", "text"); // hiding button loader
      window.location.href = `${DOMAIN}/`; // redirctiong to home page
    }
  } catch (err) {
    mainError.textContent = err.message;
    mainError.style.display = "block";
    hideButtonLoader("short", "text"); // hiding button loader
  }
}

// sign up user
async function signUp() {
  showButtonLoader("short", "text");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let name = document.getElementById("name");
  let errorEmail = document.getElementsByClassName("error-email")[0];
  let errorPassword = document.getElementsByClassName("error-password")[0];
  let errorName = document.getElementsByClassName("error-name")[0];
  let mainError = document.getElementsByClassName("main")[0]; // main error of form
  mainError.style.display = "none"; // removing error
  // all filds are filled
  if (
    validateEmail() !== true ||
    validatePassword() !== true ||
    validateName() !== true
  ) {
    validateEmail();
    validateName();
    validatePassword();
    return;
  }
  try {
    let data = {
      email: email.value,
      password: password.value,
      name: name.value,
    };
    let res = await fetch(`${API_BASE_URL}/auth/signup`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json", // Missing this causes Express to skip parsing
      },
    });

    if (!res.ok && res.status === 500) {
      mainError.textContent = "internal server error. please try again later";
      mainError.style.display = "block";
      hideButtonLoader("short", "text"); // hiding button loader
    } else if (!res.ok) {
      mainError.textContent = await res.text();
      mainError.style.display = "block";
      hideButtonLoader("short", "text"); // hiding button loader
    } else {
      let data = await res.text();
      localStorage.setItem("token", data); // adding token in local storage
      hideButtonLoader("short", "text"); // hiding button loader
      window.location.href = `${DOMAIN}/`; // redirctiong to home page
    }
  } catch (err) {
    mainError.textContent = err.message;
    mainError.style.display = "block";
    hideButtonLoader("short", "text"); // hiding button loader
  }
}

// validate email
function validateEmail() {
  let email = document.getElementById("email"); // email input
  let errorEmail = document.getElementsByClassName("error-email")[0]; // email error
  // checking email vlaue has somehting
  if (email.value == "" || email.value == null || email.value == undefined) {
    errorEmail.style.display = "block"; // email error
    errorEmail.textContent = "Please enter your email"; // email error text
    document.getElementsByClassName("email")[0].style.border = "1px red solid"; // error styling
    return false;
  } else if (email.validity.typeMismatch) {
    errorEmail.style.display = "block";
    errorEmail.textContent = "Please enter valid email";
    document.getElementsByClassName("email")[0].style.border = "1px red solid";
    return false;
  } else {
    errorEmail.style.display = "none";
    document.getElementsByClassName("email")[0].style.border =
      "1px rgb(0, 0, 0) solid";
    return true;
  }
}

// validate password
function validatePassword() {
  let password = document.getElementById("password"); // password input
  let errorPassword = document.getElementsByClassName("error-password")[0]; // password name
  // checking password empty
  if (
    password.value == "" ||
    password.value == null ||
    password.value == undefined
  ) {
    errorPassword.style.display = "block"; // password error
    errorPassword.textContent = "Please enter your password"; // error text
    document.getElementsByClassName("password")[0].style.border =
      "1px red solid"; // error styling
    return false;
    // checking password of min length
  } else if (password.value.length < 8) {
    errorPassword.style.display = "block"; // error
    errorPassword.textContent = "Please enter password greater than 8 digits"; // error text
    document.getElementsByClassName("password")[0].style.border =
      "1px red solid"; // error styling
    return false;
  } else {
    errorPassword.style.display = "none"; // no error
    document.getElementsByClassName("password")[0].style.border =
      "1px rgb(0, 0, 0) solid"; // no error styling
    return true;
  }
}

// validate name
function validateName() {
  let name = document.getElementById("name"); // name input
  let errorName = document.getElementsByClassName("error-name")[0]; // name error
  // checking if name has no value
  if (name.value == "" || name.value == null || name.value == undefined) {
    errorName.style.display = "block"; // error
    errorName.textContent = "Please enter your name"; // error text
    document.getElementsByClassName("name")[0].style.border = "1px red solid"; // error styling
    return false;
  } else {
    errorName.style.display = "none"; // no error
    document.getElementsByClassName("name")[0].style.border =
      "1px rgb(0, 0, 0) solid"; // no error styling
    return true;
  }
}

// loader on button
function showButtonLoader(classname, buttonClassnameText) {
  document.getElementsByClassName(classname)[0].style.display = "inline";
  document.getElementsByClassName(buttonClassnameText)[0].textContent = "";
}

// hiding loader on button
function hideButtonLoader(classname, buttonClassnameText) {
  document.getElementsByClassName(classname)[0].style.display = "none";
  document.getElementsByClassName(buttonClassnameText)[0].textContent =
    isUserLoggingIn ? "Login" : "Sign Up";
}

// generating random ids
function generateId(length) {
  let result = "";
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

// show categoryFilters
function showCategoryFilters() {
  let categoryFilter = document.getElementsByClassName("category-filter")[0]; // getting cateyory parent div
  let allButton = createCategory({ name: "All", _id: "all" }); // creating all button

  categoryFilter.appendChild(allButton); // adding in parent div
  // maping to add all other categries
  categories.forEach((category) => {
    let catButton = createCategory(category);
    categoryFilter.appendChild(catButton); // appending in parent div
  });
}

// showing products in content
function showProducts(showProducts) {
  showProductLoader();
  let products = document.getElementsByClassName("products")[0];
  let noProductText = document.getElementsByClassName("no-products")[0]; // no products found text
  noProductText.textContent = "";

  if (products.children.length > 0) {
    products.textContent = ""; // removing already added products cards
  }
  // mapping show products array
  showProducts.forEach((product) => {
    let productCard = createProduct(product); // creating product card
    products.appendChild(productCard); // appedning product card
  });

  noProductText.textContent = "No products Found";
  noProductText.style.display = "none"; // display to none
  // checking if show products is no empty
  if (
    showProducts == null ||
    showProducts == undefined ||
    showProducts.length === 0
  ) {
    hideProductLoader();
    noProductText.style.display = "block"; // displaying no product found text
    return;
  }
  hideProductLoader();
}

// showing coursels
async function showCoursels() {
  let coursel = document.getElementsByClassName("coursel")[0]; // coursel parent div
  coursel.style.display = "flex";
  if (courselProducts.length === 0) {
    coursel.style.display = "none";
    return;
  }
  let index = 0; // index for interval
  // maping coursel items
  courselProducts.forEach(async (element, i) => {
    let courselItem = await createCoursel(element, i, coursel); // creating coursel item
    coursel.appendChild(courselItem); // adding coursel item in parent div
  });
  index = courselProducts.length - 1; // current index of coursel item for interval
  // adding event listener for keydown to change coursel
  document.addEventListener("keydown", (ev) => {
    // right arrow key pressed
    if (ev.key === "ArrowRight") {
      rightCoursel(index, coursel); // right coursel function
      // checking if user is on last coursel slide
      if (index >= courselProducts.length - 1) {
        index = 0;
      } else {
        index++;
      }
    } else if (ev.key === "ArrowLeft") {
      leftCoursel(index, coursel);
      if (index <= 0) {
        index = courselProducts.length - 1;
      } else {
        index--;
      }
    }
  });
  // automatix changing coursel slides after 5 seconds
  setInterval(() => {
    rightCoursel(index, coursel);
    if (index == courselProducts.length - 1) {
      index = 0;
    } else {
      index++;
    }
  }, 5000);
}

// right coursel function
function rightCoursel(index, coursel) {
  // setting all coiursel zIndex = 1
  for (let i = 0; i < courselProducts.length; i++) {
    coursel.children[i].style.zIndex = 1;
  }
  // checking if user on last coursel slide
  if (index === courselProducts.length - 1) {
    coursel.children[0].classList.add("active"); // making selected slide z-index more than everyone's
    coursel.children[0].style.zIndex = 100;
    coursel.children[index].classList.remove("active");
    document.getElementById(`${index}-right`).classList.remove("active");
    document.getElementById(`0-right`).classList.add("active");
    document.getElementById(`${index}-left`).classList.remove("active");
    document.getElementById(`0-left`).classList.add("active");
  } else {
    coursel.children[index + 1].classList.add("active");
    coursel.children[index + 1].style.zIndex = 100;
    coursel.children[index].classList.remove("active");
    document.getElementById(`${index}-right`).classList.remove("active");
    document.getElementById(`${index + 1}-right`).classList.add("active");
    document.getElementById(`${index}-left`).classList.remove("active");
    document.getElementById(`${index + 1}-left`).classList.add("active");
  }
}

// left coursel function
function leftCoursel(index, coursel) {
  // setting all coiursel zIndex = 1
  for (let i = 0; i < courselProducts.length; i++) {
    coursel.children[i].style.zIndex = 1;
  }
  // checking if user is on first slided
  if (index === 0) {
    coursel.children[coursel.children.length - 1].classList.add("active"); // making selected slide z-index more than everyone's
    coursel.children[coursel.children.length - 1].style.zIndex = 100;
    coursel.children[0].classList.remove("active");
    document.getElementById(`${0}-right`).classList.remove("active");
    document
      .getElementById(`${coursel.children.length - 1}-right`)
      .classList.add("active");
    document.getElementById(`${0}-left`).classList.remove("active");
    document
      .getElementById(`${coursel.children.length - 1}-left`)
      .classList.add("active");
  } else {
    coursel.children[index - 1].classList.add("active"); // making selected slide z-index more than everyone's
    coursel.children[index - 1].style.zIndex = 100;
    coursel.children[index].classList.remove("active");
    document.getElementById(`${index}-right`).classList.remove("active");
    document.getElementById(`${index - 1}-right`).classList.add("active");
    document.getElementById(`${index}-left`).classList.remove("active");
    document.getElementById(`${index - 1}-left`).classList.add("active");
  }
}

// aplly iflters
async function applyFilter(filterId) {
  let categoryFilter = document.getElementsByClassName("category-filter")[0];
  // removing selected class from every category button
  for (let i = 0; i < categoryFilter.children.length; i++) {
    categoryFilter.children[i].className = "category-button"; // setting class ro categorory button
  }
  if (filterId === "all") {
    categoryFilter.children[0].className = "category-button selected"; // making all object selected
    showProducts(products); // getting and showing products
  } else {
    let index = categories.findIndex((elem) => elem._id === filterId);
    categoryFilter.children[index + 1].className = "category-button selected"; // adding selected class
    let showProdcuts = await getCategoryProducts(filterId);
    showProducts(showProdcuts); // showing filtered products
  }
}

// creating category
function createCategory(category) {
  let catButton = document.createElement("button"); // careting button
  catButton.textContent = category.name; // adding category name
  catButton.className =
    category._id === "all" ? "category-button selected" : "category-button"; // adding class
  catButton.id = category._id; // seeting id
  catButton.addEventListener("click", async () => {
    let products = document.getElementsByClassName("products")[0];
    let noProductText = document.getElementsByClassName("no-products")[0]; // no products found text
    noProductText.textContent = "";

    if (products.children.length > 0) {
      products.textContent = ""; // removing already added products cards
    }
    showProductLoader();
    await applyFilter(category._id); // applying filters
    hideProductLoader();
  });

  return catButton;
}

// creating product card
function createProduct(product) {
  let productCard = document.createElement("div");
  productCard.className = "product";

  let productImage = document.createElement("img");
  productImage.className = "product-image";
  productImage.src = product.images[0];

  productImage.addEventListener("click", () => {
    window.location.href = `/product.html?id=${product._id}`;
  });

  let productTitle = document.createElement("span");
  productTitle.className = "product-title";
  productTitle.textContent = product.name;

  let productDesc = document.createElement("span");
  productDesc.className = "product-desc";
  let description = product.description.slice(0, 47);
  if (product.description.length > 47) {
    description = description + "...";
  }
  productDesc.textContent = description;

  let AddToCartButton = document.createElement("button");
  if (user != null && user != undefined) {
    let cartItem = user.cart.products.find((item) => item.id === product._id);
    if (cartItem != null && cartItem != undefined) {
      AddToCartButton.textContent = "Added";
    } else {
      AddToCartButton.textContent = "Add To Cart";
    }
  } else {
    AddToCartButton.textContent = "Add To Cart";
  }
  AddToCartButton.className = "product-button";

  AddToCartButton.addEventListener("click", async () => {
    if (user != null && user != undefined) {
      let cartItem = user.cart.products.find((item) => item.id === product._id);
      if (cartItem != null && cartItem != undefined) {
      } else {
        await addToCart(product._id);
        AddToCartButton.textContent = "Added";
      }
    } else {
      window.location.href = "/auth.html";
    }
  });

  productCard.appendChild(productImage);
  productCard.appendChild(productTitle);
  productCard.appendChild(productDesc);
  productCard.appendChild(AddToCartButton);

  return productCard;
}

// creating coursels
async function createCoursel(element, index, coursel) {
  let courselItem = document.createElement("div");
  courselItem.className =
    index === courselProducts.length - 1
      ? "active coursel-item"
      : "coursel-item";

  let courselText = document.createElement("div");
  courselText.className = "coursel-text";

  let courselMainText = document.createElement("span");
  courselMainText.textContent = element.heading;
  courselMainText.className = "coursel-main-text";

  let subTextTrim = element.subText.slice(0, 40);
  if (element.subText.length > 40) {
    subTextTrim = element.subText.slice(0, 40) + "...";
  }
  let courselSubText = document.createElement("span");
  courselSubText.textContent = subTextTrim;
  courselSubText.className = "coursel-sub-text";

  courselText.appendChild(courselMainText);
  courselText.appendChild(courselSubText);

  let leftButton = document.createElement("button");
  leftButton.id = `${index}-left`;
  leftButton.className =
    index === courselProducts.length - 1
      ? "active coursel-button left"
      : "coursel-button left";

  let leftIcon = document.createElement("i");
  leftIcon.className = "fa-solid fa-arrow-left";

  leftButton.appendChild(leftIcon);

  let rightButton = document.createElement("button");
  rightButton.id = `${index}-right`;
  rightButton.className =
    index === courselProducts.length - 1
      ? "active coursel-button right"
      : "coursel-button right";

  let rightIcon = document.createElement("i");
  rightIcon.className = "fa-solid fa-arrow-right";

  rightButton.appendChild(rightIcon);

  courselItem.appendChild(leftButton);
  courselItem.appendChild(rightButton);
  courselItem.appendChild(courselText);

  let product = await getProductById(element.productId);
  let courselImage = document.createElement("img");
  courselImage.className = "coursel-image";
  courselImage.src = product.images[0];

  courselItem.appendChild(courselImage);

  courselItem.style.zIndex = index + 1;

  courselImage.addEventListener("click", () => {
    window.location.href = `/product.html?id=${product._id}`;
  });

  let rightClick = 1;
  rightButton.addEventListener("click", () => {
    rightCoursel(index, coursel);
    rightClick++;
  });
  leftButton.addEventListener("click", () => {
    leftCoursel(index, coursel);
  });

  return courselItem;
}

// show product details
async function showProductDetails() {
  showLoader();
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const ID = urlParams.get("id");
  const product = await getProductById(ID);
  if (product !== null && product !== undefined) {
    document.getElementsByClassName("no-product")[0].style.display = "none";
    await createProductDetails(product);
    hideLoader();
  } else {
    document.getElementsByClassName("no-product")[0].style.display = "block";
    hideLoader();
  }
}

// creating a product deatils page
async function createProductDetails(product) {
  let productMainImage = document.getElementsByClassName(
    "product-selected-image",
  )[0];

  selectedImage = product.images[0];
  productMainImage.src = selectedImage;

  let productSmallImages = document.getElementsByClassName(
    "product-small-images",
  )[0];

  product.images.forEach((image) => {
    let smallImage = document.createElement("img");
    smallImage.className =
      selectedImage === image
        ? "product-small-image selected-image"
        : "product-small-image";
    smallImage.src = image;
    smallImage.id = image;

    smallImage.addEventListener("click", () => {
      changeProducctMainImages(image);
    });

    productSmallImages.appendChild(smallImage);
  });
  let AddToCartButton = document.getElementsByClassName("add-to-cart")[0];
  if (user != null && user != undefined) {
    let cartItem = user.cart.products.find((item) => item.id === product._id);
    if (cartItem != null && cartItem != undefined) {
      AddToCartButton.textContent = "Added";
    } else {
      AddToCartButton.textContent = "Add To Cart";
    }
  } else {
    AddToCartButton.textContent = "Add To Cart";
  }

  AddToCartButton.addEventListener("click", () => {
    let cartItem = user.cart.products.find((item) => item.id === product._id);
    if (user != null && user != undefined) {
      if (cartItem != null && cartItem != undefined) {
      } else {
        addToCart(product._id);
        AddToCartButton.textContent = "Added";
      }
    } else {
      window.location.href = "/auth.html";
    }
  });
  await showReview(product);
  let productTitle = document.getElementsByClassName("product-title")[0];
  productTitle.textContent = product.name;

  let productDesc = document.getElementsByClassName("product-description")[0];
  productDesc.textContent = product.description;

  let realPrice = document.getElementsByClassName("real-price")[0];
  let originalPrice = document.getElementsByClassName("original-price")[0];

  realPrice.textContent = `$${product.price}`;
  originalPrice.textContent = `$${product.price + 200}`;
  let rating = document.getElementsByClassName("rating")[0];

  createRating(rating, product.stars);
}

// create rating view
function createRating(ratingDiv, starss) {
  ratingDiv.textContent = "";
  let stars = starss;
  for (let i = 0; i < 5; i++) {
    let starIcon = document.createElement("i");
    if (i < stars) {
      if (stars - i === 0.5) {
        starIcon.className = "fa-solid fa-star-half-stroke star";
      } else {
        starIcon.className = "fa-solid fa-star star";
      }
    } else {
      starIcon.className = "fa-regular fa-star star";
    }

    ratingDiv.appendChild(starIcon);
  }

  let ratingText = document.createElement("span");
  ratingText.textContent = `${Math.round(starss)}`;
  ratingText.className = "rating-text";

  ratingDiv.appendChild(ratingText);
}

// creating rating buttons for user to add review
function createRatingButtons(ratingDiv, starss) {
  ratingDiv.textContent = "";
  let stars = starss;
  for (let i = 1; i <= 5; i++) {
    let starIconDiv = document.createElement("div");
    starIconDiv.className = "star-button-div";
    let starIcon = document.createElement("i");
    starIcon.id = `${i}`;
    if (i <= stars) {
      starIcon.className = "fa-solid fa-star star btn";
    } else {
      starIcon.className = "fa-regular fa-star star btn";
    }
    starIconDiv.appendChild(starIcon);
    starIconDiv.addEventListener("click", () => {
      changeStars(i);
    });
    ratingDiv.appendChild(starIconDiv);
  }

  let ratingText = document.createElement("span");
  ratingText.textContent = `${starss}`;
  ratingText.className = "rating-text";

  ratingDiv.appendChild(ratingText);
}

// changing product main image when user click on small image
function changeProducctMainImages(image) {
  let productMainImage = document.getElementsByClassName(
    "product-selected-image",
  )[0];

  selectedImage = image;
  productMainImage.src = selectedImage;

  let productSmallImages = document.getElementsByClassName(
    "product-small-images",
  )[0];

  let index = Array.from(productSmallImages.children).findIndex(
    (element) => element.id === image,
  ); // finding clicked element

  for (let i = 0; i < productSmallImages.children.length; i++) {
    productSmallImages.children[i].className = "product-small-image";
  }

  if (index >= 0) {
    productSmallImages.children[index].className =
      "product-small-image selected-image";
  }
}

// add to cart
async function addToCart(productId) {
  if (user) {
    try {
      let res = await fetch(`${API_BASE_URL}/cart/add/${productId}`, {
        method: "POST",
        headers: { Authorization: `Bearer ${userToken}` },
      });

      if (res.ok) {
        let data = await res.json();
        user = data;
        showCartBadge(); // updating cart badge
        showToast("item added");
      } else {
        showToast("an error occured");
      }
    } catch (err) {
      showToast(err.message);
    }
  }
}

// showing product loader
function showProductLoader() {
  document.getElementsByClassName("products")[0].style.display = "none";
  let productLoader = document.getElementsByClassName("products-loading")[0];
  productLoader.style.display = "flex";
}

// hiding product loader
function hideProductLoader() {
  document.getElementsByClassName("products")[0].style.display = "flex";
  let productLoader = document.getElementsByClassName("products-loading")[0];
  productLoader.style.display = "none";
}

// redirecting user to home page
function redirectHome() {
  window.location.href = `${DOMAIN}`;
}

// logout user
function logout() {
  localStorage.removeItem("token");
  isLoggedIn = false;
  window.location.href = `${DOMAIN}/auth.html`;
}

// showing reviews of product
async function showReview(product) {
  userReviewedTisProduct = false;
  if (product.reviews.length === 0) {
    let reviewsText = document.getElementsByClassName("reviews-text")[0];
    reviewsText.textContent = "No Reviews";
  } else {
    let reviewsText = document.getElementsByClassName("reviews-text")[0];
    reviewsText.textContent = "Reviews";
  }
  if (user != null && user != undefined) {
    user.orders.forEach(async (id) => {
      let order = await getOrderById(id);
      order.cart.products.forEach((item) => {
        if (item.id === product._id) {
          showAddReview(product);
          return;
        }
      });
    });
    let userName = document.getElementsByClassName("username")[0];
    userName.textContent = user.name;
    let addReviewButton =
      document.getElementsByClassName("add-review-button")[0];
    addReviewButton.addEventListener("click", () => {
      addUserReview();
    });
  } else {
  }

  let otherReviews = document.getElementsByClassName("others-reviews")[0];
  otherReviews.textContent = "";
  product.reviews.forEach(async (review) => {
    let reviewDiv = document.createElement("div");
    reviewDiv.className = "review";

    let userProfile = document.createElement("div");
    userProfile.className = "userprofile";

    let userIcon = document.createElement("i");
    userIcon.className = "fa-solid fa-user";

    let username = document.createElement("span");
    let reviewUser = await getUserById(review.userId);
    username.textContent = reviewUser.name;
    username.className = "username";

    userProfile.appendChild(userIcon);
    userProfile.appendChild(username);

    let reviewDetails = document.createElement("div");
    reviewDetails.className = "review-details";

    let ratingDiv = document.createElement("div");
    ratingDiv.className = "rating review-rating";

    createRating(ratingDiv, review.stars);

    let reviewText = document.createElement("div");
    reviewText.className = "review-text";
    reviewText.textContent = review.context;

    reviewDetails.appendChild(ratingDiv);
    reviewDetails.appendChild(reviewText);
    reviewDiv.appendChild(userProfile);
    reviewDiv.appendChild(reviewDetails);
    otherReviews.appendChild(reviewDiv);
  });
}

function showAddReview(product) {
  let addReview = document.getElementsByClassName("add-review")[0];
  addReview.style.display = "none";
  let checkReview = product.reviews.find(
    (review) => review.userId === user._id,
  );
  if (!checkReview) {
    addReview.style.display = "flex";
  }
}

// changing stars when user click on star button
function changeStars(number) {
  starsSelectedReview = number;
  let ratingDiv = document.getElementsByClassName("select-rating")[0];
  ratingDiv.textContent = "";
  createRatingButtons(ratingDiv, number);
}

// going to cart
function goToCart() {
  if (user !== null && user !== undefined) {
    window.location.href = `${DOMAIN}/cart.html`;
  }
}

// creating cart page
async function createCartPage() {
  showCartBadge();
  let yourCartText = document.getElementsByClassName("cart-text")[0];
  let placeOrderBtn = document.getElementsByClassName("place-order")[0];
  let totalPrice = document.getElementsByClassName("red")[0];
  let cartDiv = document.getElementsByClassName("cart-div")[0];
  let cartItemDivs = document.getElementsByClassName("cart-item-div");
  let length = cartItemDivs.length;
  for (let i = 0; i < length; i++) {
    cartDiv.removeChild(cartItemDivs[0]);
  }
  placeOrderBtn.style.display = "block";
  totalPrice.style.display = "block";
  if (user.cart.products.length > 0) {
    yourCartText.textContent = "Your Cart";
    totalPrice.textContent = `Total Price: $${user.cart.totalPrice}`;
    showSmallLoader("cart-div");
    user.cart.products.forEach(async (item, index) => {
      showLoader();
      let cartProduct = await getProductById(item.id);
      let cartItem = document.createElement("div");
      cartItem.className = "cart-item-div";

      let cartImageDiv = document.createElement("div");
      cartImageDiv.className = "product-image-div";

      let cartImage = document.createElement("img");
      cartImage.className = "product-image img";
      cartImage.src = cartProduct.images[0];

      cartImage.addEventListener("click", () => {
        window.location.href = `${DOMAIN}/product.html?id=${item.id}`;
      });

      cartImageDiv.appendChild(cartImage);

      let cartItemDetails = document.createElement("div");
      cartItemDetails.className = "cart-item-details";

      let textDiv = document.createElement("div");

      let productTitle = document.createElement("span");
      productTitle.className = "product-title cart-title";
      productTitle.textContent = cartProduct.name;

      let productPrice = document.createElement("span");
      productPrice.className = "real-price";
      productPrice.style.display = "block";
      productPrice.style.margin = "10px";
      productPrice.textContent = `$${item.price}`;
      textDiv.appendChild(productTitle);
      textDiv.appendChild(productPrice);

      let cartActions = document.createElement("div");
      cartActions.className = "cart-actions";

      let addQtyButton = document.createElement("button");
      addQtyButton.className = "add cart-btn";
      addQtyButton.textContent = "+";

      let qtyText = document.createElement("span");
      qtyText.className = "cart-qty";
      qtyText.textContent = `${item.qty}`;

      let subQtyButton = document.createElement("button");
      subQtyButton.className = "sub cart-btn";
      subQtyButton.textContent = "-";

      let removeButton = document.createElement("button");
      removeButton.className = "remove cart-btn";
      removeButton.textContent = "x";

      addQtyButton.addEventListener("click", () => {
        addQty(item.id, qtyText, totalPrice);
      });
      subQtyButton.addEventListener("click", () => {
        lessQty(item.id, qtyText, totalPrice);
      });
      removeButton.addEventListener("click", () => {
        removeQty(item.id);
      });

      cartActions.appendChild(addQtyButton);
      cartActions.appendChild(qtyText);
      cartActions.appendChild(subQtyButton);
      cartActions.appendChild(removeButton);

      cartItemDetails.appendChild(textDiv);
      cartItemDetails.appendChild(cartActions);
      cartItem.appendChild(cartImageDiv);
      cartItem.appendChild(cartItemDetails);
      cartDiv.appendChild(cartItem);
      hideLoader();
      if (index === user.cart.products.length - 1) {
        hideSmallLoader("cart-div");
      }
    });
  } else {
    yourCartText.textContent = "No Item In The Cart";
    placeOrderBtn.style.display = "none";
    totalPrice.style.display = "none";
  }
}

// adding quantity of product in cart
async function addQty(productid, text, totalPrice) {
  if (!userToken) {
    return;
  }
  showLoader();
  try {
    let res = await fetch(`${API_BASE_URL}/cart/increase/${productid}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });

    if (!res.ok && res.status === 500) {
      showToast("internal error occured", "red");
      hideLoader();
    } else if (!res.ok) {
      let data = await res.text();
      showToast(data, "red");
      hideLoader();
    } else {
      user = await res.json();
      totalPrice.textContent = `Total Price: $${getTotalPrice()}`;
      showCartBadge();

      await createCartPage();
      hideLoader();
    }
  } catch (err) {
    showToast(err.message, "red");
    hideLoader();
  }
}

// getting total price of cart
function getTotalPrice() {
  let totalPrice = 0;
  user.cart.products.forEach((item) => {
    totalPrice = totalPrice + item.price * item.qty;
  });
  user.cart.totalPrice = totalPrice;
  return totalPrice;
}

// lessing quantity of product in cart
async function lessQty(productid, text, totalPrice) {
  if (!userToken) {
    return;
  }
  showLoader();
  try {
    let res = await fetch(`${API_BASE_URL}/cart/decrease/${productid}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });

    if (!res.ok && res.status === 500) {
      showToast("internal error occured", "red");
      hideLoader();
    } else if (!res.ok) {
      let data = await res.text();
      showToast(data, "red");
      hideLoader();
    } else {
      user = await res.json();
      totalPrice.textContent = `Total Price: $${getTotalPrice()}`;
      showCartBadge();

      await createCartPage();
      hideLoader();
    }
  } catch (err) {
    showToast(err.message, "red");
    hideLoader();
  }
}

// removing product from cart
async function removeQty(productId) {
  if (!userToken) {
    return;
  }
  showLoader();
  try {
    let res = await fetch(`${API_BASE_URL}/cart/delete/${productId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });

    if (!res.ok && res.status === 500) {
      showToast("internal error occured", "red");
      hideLoader();
    } else if (!res.ok) {
      let data = await res.text();
      showToast(data, "red");
      hideLoader();
    } else {
      user = await res.json();
      showCartBadge();
      await createCartPage();
      hideLoader();
    }
  } catch (err) {
    showToast(err.message, "red");
    hideLoader();
  }
}

// showing toast message
function showToast(message, color) {
  let toastDiv = document.getElementsByClassName("toast")[0];
  let toastSpan = document.getElementsByClassName("msg")[0];
  let toastBtn = document.getElementsByClassName("close-toast")[0];

  toastBtn.addEventListener("click", () => {
    hideToast();
  });
  toastSpan.textContent = message;
  toastDiv.style.backgroundColor =
    color !== undefined && color !== null ? color : "red";
  toastDiv.classList.add("show-toast");

  setTimeout(hideToast, 8000); // hiding toast after 8 seconds
}

// hiding toast message
function hideToast() {
  let toastDiv = document.getElementsByClassName("toast")[0];
  toastDiv.classList.remove("show-toast");
}

// go to your orders page
function goToOrders() {
  window.location.href = "/yourOrders.html";
}

// create orders page
function createOrdersPage() {
  showLoader();
  ordersTitle = document.getElementsByClassName("orders-title")[0];
  if (user.orders.length === 0) {
    ordersTitle.textContent = "No Orders Yet";
    return;
  }

  ordersTitle.textContent = "Your Orders";
  ordersTable = document.getElementsByClassName("orders")[0];
  ordersTr = document.getElementsByClassName("orders-td");
  let length = ordersTr.length;
  for (let i = 0; i < length; i++) {
    ordersTable.removeChild(ordersTr[0]);
  }
  user.orders.forEach(async (id, index) => {
    showSmallLoader("orders-container");
    let order = await getOrderById(id);
    ordersTr = document.createElement("tr");
    ordersTr.className = "orders-td";

    orderId = document.createElement("th");
    orderId.className = "order-td";
    orderId.textContent = `${order._id}`;
    orderDate = document.createElement("th");
    orderPrice = document.createElement("th");
    orderDate.className = "order-td mobile-d";
    orderDate.textContent = `${new Date(order.date).toDateString()}`;

    orderPrice.className = "order-td red mobile-d";
    orderPrice.textContent = `$${order.payment}`;

    orderStatus = document.createElement("th");
    orderStatus.className = "order-td";
    orderStatus.textContent = `${order.status}`;

    if (order.status === "delivered") {
      orderStatus.style.color = "green";
    } else if (order.status === "cancelled") {
      orderStatus.style.color = "red";
    } else if (order.status === "shipped") {
      orderStatus.style.color = "orange";
    } else {
      orderStatus.style.color = "blue";
    }

    ordersTr.appendChild(orderId);
    ordersTr.appendChild(orderDate);
    ordersTr.appendChild(orderPrice);
    ordersTr.appendChild(orderStatus);

    ordersTable.appendChild(ordersTr);

    ordersTr.addEventListener("click", () => {
      showOrderDetails(order);
    });
    if (index === user.orders.length - 1) {
      hideSmallLoader("orders-container", "inline-block");
      ordersTable.style.width = "100%";
    }
  });
  hideLoader();
}

// showing order details when user click on order card
function showOrderDetails(order) {
  closeOrderDetails();
  let cartDiv = document.getElementsByClassName("order-products")[0];
  cartDiv.className = "order-products";
  cartDiv.textContent = "Products: ";
  let orderDeatils = document.getElementsByClassName("order-details")[0];
  orderDeatils.style.display = "flex";
  let orderIdText = document.getElementsByClassName("order-id")[0];
  orderIdText.textContent = `orderId: ${order._id}`;
  let orderDateText = document.getElementsByClassName("order-date-text")[0];
  orderDateText.textContent = `${new Date(order.date).toDateString()}`;
  let orderPaymentText = document.getElementsByClassName("order-price-text")[0];
  orderPaymentText.textContent = `$${order.payment}`;
  let orderStatusText = document.getElementsByClassName("order-status-text")[0];
  orderStatusText.textContent = `${order.status}`;
  let productActions = document.getElementsByClassName("product-actions")[0];

  let lenght = productActions.children.length;
  for (let i = 0; i < lenght; i++) {
    productActions.removeChild(productActions.children[0]);
  }

  if (order.status === "delivered") {
    orderStatusText.style.color = "green";
  } else if (order.status === "cancelled") {
    orderStatusText.style.color = "red";
  } else if (order.status === "shipped") {
    orderStatusText.style.color = "orange";
  } else {
    orderStatusText.style.color = "blue";
  }

  let orderAddressText =
    document.getElementsByClassName("order-address-text")[0];
  orderAddressText.textContent = `${order.address.street}, ${order.address.city}, ${order.address.state}, ${order.address.zip}, ${order.address.country}`;

  order.cart.products.forEach(async (item) => {
    let cartProduct = await getProductById(item.id);
    let cartItem = document.createElement("div");
    cartItem.className = "cart-item-div";

    let cartImageDiv = document.createElement("div");
    cartImageDiv.className = "product-image-div";

    let cartImage = document.createElement("img");
    cartImage.className = "product-image img";
    cartImage.src = cartProduct.images[0];

    cartImage.addEventListener("click", () => {
      window.location.href = `${DOMAIN}/product.html?id=${item.id}`;
    });

    cartImageDiv.appendChild(cartImage);

    let cartItemDetails = document.createElement("div");
    cartItemDetails.className = "cart-item-details";

    let textDiv = document.createElement("div");

    let productTitle = document.createElement("span");
    productTitle.className = "product-title cart-title";
    productTitle.textContent = cartProduct.name;

    let productDesc = document.createElement("span");
    productDesc.className = "product-description cart-title";
    productDesc.style.width = "100%";
    productDesc.textContent =
      cartProduct.description.length > 25
        ? `${cartProduct.description.slice(0, 25)}...`
        : cartProduct.description;

    if (window.screen.width <= 870) {
      productDesc.style.display = "none";
    }

    let productPrice = document.createElement("span");
    productPrice.className = "real-price";
    productPrice.style.display = "block";
    productPrice.style.margin = "10px";
    productPrice.textContent = `$${item.price}`;
    textDiv.appendChild(productTitle);
    textDiv.appendChild(productDesc);
    textDiv.appendChild(productPrice);

    let cartActions = document.createElement("div");
    cartActions.className = "cart-actions";

    let qtyText = document.createElement("span");
    qtyText.className = "cart-qty";
    qtyText.style.margin = "0px 10px";
    qtyText.style.color = "var(--dark-text-color)";
    qtyText.textContent = `${item.qty}`;

    cartActions.appendChild(qtyText);

    cartItemDetails.appendChild(textDiv);
    cartItemDetails.appendChild(cartActions);
    cartItem.appendChild(cartImageDiv);
    cartItem.appendChild(cartItemDetails);
    cartDiv.appendChild(cartItem);
  });

  let returnBtn = document.createElement("button");
  let cancelBtn = document.createElement("button");
  returnBtn.className = "btnn return";
  cancelBtn.className = "btnn cancel";
  cancelBtn.textContent = "Cancel";
  returnBtn.textContent = "Return";
  if (order.status === "delivered") {
    returnBtn.style.display = "block";
  } else {
    returnBtn.style.display = "none";
  }

  if (order.status === "processing" || order.status === "ordered") {
    cancelBtn.style.display = "block";
  } else {
    cancelBtn.style.display = "none";
  }

  returnBtn.addEventListener("click", () => {
    returnOrder(order._id);
  });
  cancelBtn.addEventListener("click", () => {
    cancelOrder(order._id);
  });

  productActions.appendChild(returnBtn);
  productActions.appendChild(cancelBtn);
}

// returning order
async function returnOrder(orderId) {
  if (!userToken) {
    return;
  }
  showLoader();
  try {
    let res = await fetch(`${API_BASE_URL}/orders/return/${orderId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });

    if (!res.ok && res.status === 500) {
      hideLoader();
      showToast("an internal error occured");
    } else if (!res.ok) {
      let errText = await res.text();
      hideLoader();
      showToast(errText);
    } else {
      hideLoader();
      showToast("order added for return");
      closeOrderDetails();
      createOrdersPage();
    }
  } catch (err) {
    hideLoader();
    showToast(err.message);
  }
}

// canceling order
async function cancelOrder(orderId) {
  if (!userToken) {
    return;
  }
  showLoader();
  try {
    let res = await fetch(`${API_BASE_URL}/orders/cancel/${orderId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });

    if (!res.ok && res.status === 500) {
      hideLoader();
      showToast("an internal error occured");
    } else if (!res.ok) {
      let errText = await res.text();
      hideLoader();
      showToast(errText);
    } else {
      hideLoader();
      showToast("order cancelled");
      closeOrderDetails();
      createOrdersPage();
    }
  } catch (err) {
    hideLoader();
    showToast(err.message);
  }
}

// closing order details
function closeOrderDetails() {
  orderDeatils = document.getElementsByClassName("order-details")[0];
  orderDeatils.style.display = "none";
}

// show light/dark mode
function showMode() {
  const root = document.documentElement;
  if (isDarkMode === "light") {
    root.style.setProperty("--dark-bg-primary", "#ffffff");
    root.style.setProperty("--dark-text-color", "black");
    root.style.setProperty("--dark-bg-secondary", "#c6c6c6");
  } else {
    root.style.setProperty("--dark-bg-primary", "#121212");
    root.style.setProperty("--dark-text-color", "white");
    root.style.setProperty("--dark-bg-secondary", "#444444");
  }
}

// chnage mode
function changeUi() {
  const modeText = document.getElementsByClassName("mode-text")[0];
  const darkIcon = document.getElementsByClassName("dark-icon")[0];
  const LightIcon = document.getElementsByClassName("light-icon")[0];

  if (isDarkMode === "light") {
    modeText.textContent = "Dark Mode";
    LightIcon.style.display = "none";
    darkIcon.style.display = "inline";
  } else {
    modeText.textContent = "Light Mode";
    LightIcon.style.display = "inline";
    darkIcon.style.display = "none";
  }
}

// toglle mode
function toggleMode() {
  if (isDarkMode === "light") {
    localStorage.removeItem("mode");
    localStorage.setItem("mode", "dark");
    isDarkMode = "dark";
  } else {
    localStorage.removeItem("mode");
    localStorage.setItem("mode", "light");
    isDarkMode = "light";
  }
  showMode();
  changeUi();
}

// go to search
function goToSearch(search) {
  window.location.href = `${DOMAIN}/search.html?search=${search}`;
}

// seaerch input chnage event
function searchInputChange() {
  let searchInput = document.getElementsByClassName("search");

  for (let i = 0; i < searchInput.length; i++) {
    searchInput[i].addEventListener("keydown", (e) => {
      if (
        e.key === "Enter" &&
        searchInput[i].value !== null &&
        searchInput[i].value !== undefined &&
        searchInput[i].value !== ""
      ) {
        goToSearch(searchInput[i].value);
      }
    });
  }
}

// shoiwnf search
async function showSearch() {
  showProductLoader();
  const SEARCH = new URLSearchParams(window.location.search).get("search");
  if (SEARCH === "" || SEARCH == undefined || SEARCH == null) {
    window.location.href = `${DOMAIN}/`;
    return;
  }

  let searchProducts = await getSearchedProducts(SEARCH);
  let searchInput = document.getElementsByClassName("search");
  for (let i = 0; i < searchInput.length; i++) {
    searchInput[i].value = `${SEARCH}`;
  }

  let searchText = document.getElementsByClassName("search-text")[0];
  let productsDiv = document.getElementsByClassName("products")[0];

  if (searchProducts.length !== 0) {
    searchText.textContent = `your searched products`;
    searchProducts.forEach((product) => {
      let productCard = createProduct(product);
      productsDiv.appendChild(productCard);
    });
  } else {
    searchText.textContent = "No products found";
  }
  hideProductLoader();
}

// go to address
function goToAddress() {
  window.location.href = `${DOMAIN}/address.html`;
}

// show address
function showAddress() {
  let addressDiv = document.getElementsByClassName("address-div")[0];
  addressDiv.style.display = "flex";
  let addressText = document.getElementsByClassName("address-text")[0];

  if (user.address.addressMade === false) {
    addressText.textContent = "You have no Saved address";
    addressText.style.display = "block";
    showEditAddress();
    return;
  }

  addressText.textContent = `Your Address: ${user.address.street}, ${user.address.city}, ${user.address.state}, ${user.address.country}, ${user.address.zip}`;
}

// show edit address
function showEditAddress() {
  closeEditAddress();
  let editAddressf = document.getElementsByClassName("edit-address")[0];
  editAddressf.style.display = "flex";

  let editText = document.getElementsByClassName("edit-text")[0];
  let inputDiv = document.getElementsByClassName("address-input-div")[0];
  let saveBtnCreated = document.getElementsByClassName("address-btn")[0];

  let streetInput = document.getElementById("street");
  let stateInput = document.getElementById("state");
  let cityInput = document.getElementById("city");
  let zipInput = document.getElementById("zip");
  let countryInput = document.getElementById("country");

  if (saveBtnCreated) {
    inputDiv.removeChild(saveBtnCreated);
  }

  let saveBtn = document.createElement("button");
  saveBtn.className = "address-btn";

  if (user.address.addressMade === false) {
    editText.textContent = "Add Address";
    saveBtn.textContent = "Add";
  } else {
    streetInput.value = `${user.address.street}`;
    stateInput.value = `${user.address.state}`;
    cityInput.value = `${user.address.city}`;
    zipInput.value = `${user.address.zip}`;
    countryInput.value = `${user.address.country}`;

    editText.textContent = "Edit Address";
    saveBtn.textContent = "Edit";
  }

  saveBtn.addEventListener("click", editAddress);

  inputDiv.appendChild(saveBtn);
}

// closing edit address toast
function closeEditAddress() {
  let editAddress = document.getElementsByClassName("edit-address")[0];
  editAddress.style.display = "none";
}

// editing address backend
async function editAddress() {
  showLoader();
  let streetInput = document.getElementById("street").value;
  let stateInput = document.getElementById("state").value;
  let cityInput = document.getElementById("city").value;
  let zipInput = document.getElementById("zip").value;
  let countryInput = document.getElementById("country").value;

  if (
    streetInput === "" ||
    stateInput == "" ||
    cityInput == "" ||
    zipInput == "" ||
    countryInput == ""
  ) {
    showToast("please fill the fields", "red");
    return;
  }
  try {
    let res = await fetch(`${API_BASE_URL}/auth/update/${user._id}`, {
      method: "PUT",
      body: JSON.stringify({
        street: streetInput,
        zip: zipInput,
        state: stateInput,
        country: countryInput,
        city: cityInput,
      }),
      headers: {
        Authorization: `Bearer ${userToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!res.ok && res.status === 500) {
      showToast("internal error occured", "red");
      hideLoader();
    } else if (!res.ok) {
      let error = await res.text();
      showToast(error, "red");
      hideLoader();
    } else {
      let newUser = await getUserById(user._id);
      user = newUser;
      hideLoader();
      showToast("address updated", "green");
      closeEditAddress();
      showAddress();
    }
  } catch (err) {
    showToast(err.message, "red");
    hideLoader();
  }
}

// placing order
async function placeOrder() {
  if (!userToken) {
    return;
  }
  showLoader();
  try {
    let res = await fetch(`${API_BASE_URL}/orders/place/`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });

    if (!res.ok && res.status === 500) {
      showToast("internal error occured", "red");
      hideLoader();
    } else if (!res.ok) {
      let data = await res.text();
      showToast(data, "red");
      hideLoader();
    } else {
      let newUser = await getUserById(user._id);
      user = newUser;
      createCartPage();
      hideLoader();
      showToast("order placed");
    }
  } catch (err) {
    showToast(err.message, "red");
    hideLoader();
  }
}

function showSmallLoader(classname) {
  document.getElementsByClassName(classname)[0].style.display = "none";
  let productLoader = document.getElementsByClassName("products-loading")[0];
  productLoader.style.display = "flex";
}

function hideSmallLoader(classname, style) {
  document.getElementsByClassName(classname)[0].style.display = style
    ? style
    : "flex";
  let productLoader = document.getElementsByClassName("products-loading")[0];
  productLoader.style.display = "none";
}
