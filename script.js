// bolierplate data
let users = [
  {
    name: "Ansh Verma",
    email: "anshvishesh03@gmail.com",
    password: "anshvishesh2007",
    cart: {
      productId: ["smndjnadjnsajndsjan"],
      id: "snajdnajsdbas",
      qty: 1,
      price: 1499,
    },
    orders: [
      {
        cart: {
          productId: ["smndjnadjnsajndsjan"],
          id: "snajdnajsdbas",
          qty: 1,
          price: 1499,
        },
        id: "msnajdbsabdhab",
        address: "",
        payment: 1499,
      },
    ],
    id: "mdkandkasm",
    address: {},
  },
];
let products = [
  {
    id: "smndjnadjnsajndsjan",
    name: "Airpods",
    price: 1499,
    stars: 0,
    reviews: [],
    description: "",
    categoryId: "smnajdbsdbsahbd",
    images: [
      "https://as2.ftcdn.net/jpg/02/88/75/63/1000_F_288756334_ZbfCC1iZuFh0GWlu0DOp7SA5NZ9vWtFw.jpg",
      "https://t4.ftcdn.net/jpg/03/01/97/89/360_F_301978961_hgdYKF55dQkG7nUmXT5DHm0r5PgNWKz3.jpg",
      "https://media.istockphoto.com/id/1204039347/photo/apple-airpods-on-a-white-background.jpg?s=612x612&w=0&k=20&c=2__4hfynkvBt7PA0UE7N5JxSTuaGRFVKaXJUuoQlBzk=",
      "https://static.vecteezy.com/system/resources/thumbnails/034/087/793/small/iconic-airpods-pro-from-apple-inc-on-a-clean-white-backdrop-ai-generated-photo.jpg",
      "https://media.istockphoto.com/id/1208634643/photo/apple-airpods-pro-on-a-white-background.jpg?s=612x612&w=0&k=20&c=TRA9JwDgw_6mv7PV8CRkYfw5oAJ4SVVC14ximky_dr0=",
    ],
  },
  {
    id: "asdsjhdsjindajbdsdjsj",
    name: "Airpods",
    price: 1499,
    stars: 5,
    reviews: [
      { userId: "mdkandkasm", context: "very good product.", stars: 5 },
    ],
    description: "",
    categoryId: "smnajdbsdbsahbd",
    images: [
      "https://as2.ftcdn.net/jpg/02/88/75/63/1000_F_288756334_ZbfCC1iZuFh0GWlu0DOp7SA5NZ9vWtFw.jpg",
      "https://t4.ftcdn.net/jpg/03/01/97/89/360_F_301978961_hgdYKF55dQkG7nUmXT5DHm0r5PgNWKz3.jpg",
      "https://media.istockphoto.com/id/1204039347/photo/apple-airpods-on-a-white-background.jpg?s=612x612&w=0&k=20&c=2__4hfynkvBt7PA0UE7N5JxSTuaGRFVKaXJUuoQlBzk=",
      "https://static.vecteezy.com/system/resources/thumbnails/034/087/793/small/iconic-airpods-pro-from-apple-inc-on-a-clean-white-backdrop-ai-generated-photo.jpg",
      "https://media.istockphoto.com/id/1208634643/photo/apple-airpods-pro-on-a-white-background.jpg?s=612x612&w=0&k=20&c=TRA9JwDgw_6mv7PV8CRkYfw5oAJ4SVVC14ximky_dr0=",
    ],
  },
  {
    id: "sdmandjsadnsmjsdbjan",
    name: "Airpods",
    price: 1499,
    stars: 4,
    reviews: [
      { userId: "mdkandkasm", context: "very good product.", stars: 4 },
    ],
    description: "",
    categoryId: "smnajdbsdbsahbd",
    images: [
      "https://as2.ftcdn.net/jpg/02/88/75/63/1000_F_288756334_ZbfCC1iZuFh0GWlu0DOp7SA5NZ9vWtFw.jpg",
      "https://t4.ftcdn.net/jpg/03/01/97/89/360_F_301978961_hgdYKF55dQkG7nUmXT5DHm0r5PgNWKz3.jpg",
      "https://media.istockphoto.com/id/1204039347/photo/apple-airpods-on-a-white-background.jpg?s=612x612&w=0&k=20&c=2__4hfynkvBt7PA0UE7N5JxSTuaGRFVKaXJUuoQlBzk=",
      "https://static.vecteezy.com/system/resources/thumbnails/034/087/793/small/iconic-airpods-pro-from-apple-inc-on-a-clean-white-backdrop-ai-generated-photo.jpg",
      "https://media.istockphoto.com/id/1208634643/photo/apple-airpods-pro-on-a-white-background.jpg?s=612x612&w=0&k=20&c=TRA9JwDgw_6mv7PV8CRkYfw5oAJ4SVVC14ximky_dr0=",
    ],
  },
];
let admins = [
  {
    id: "mdkandkas",
    canEdit: true,
  },
];
let courselProducts = [
  {
    productId: "sdmandjsadnsmjsdbjan",
    id: "sdnajdsandasndasn",
    heading: "first slide",
    subText: "first and this is product is so good you should give it a try",
  },
  {
    productId: "asdsjhdsjindajbdsdjsj",
    id: "akjdsjdnjdnsajndn",
    heading: "second slide",
    subText: "second",
  },
  {
    productId: "smndjnadjnsajndsjan",
    id: "andjsndjnsjdnasjn",
    heading: "third slide",
    subText: "third",
  },
]; // show products on coursels
const DOMAIN = window.location.origin; // domain of our url
const categories = [
  { name: "Electronics", id: "smnajdbsdbsahbd" },
  { name: "Clothes", id: "smnaajdbabsajbdahhdasb" },
  { name: "Watches", id: "smnjdbajdbajbdjab" },
  { name: "organizers", id: "sjdbhasbdhbashdashbd" },
]; // filters (categories) admin can create more

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

// checking is user logged in with some token
showLoader();
if (userToken !== null && userToken !== undefined) {
  user = users.find((element) => element.id == userToken); // checking if we can find user with this token
  auth();
} else {
  showUi(); // to show content
}

// showing an element and removing an element
function showRemove(show, remove) {
  document.getElementsByClassName(remove)[0].style.display = "none";
  document.getElementsByClassName(show)[0].style.display = "flex";
}

// showing website content
function showUi() {
  if (isLoggedIn == true) {
    if (
      window.location.href === `${DOMAIN}/auth.html` ||
      window.location.href === `${DOMAIN}/auth.html?`
    ) {
      window.location.href = `${DOMAIN}`;
    }
    if (
      admins.find((element) => element.id == user.id) !== null &&
      admins.find((element) => element.id == user.id) !== undefined
    ) {
      // to show admin dashboard if user is admin
      document.getElementsByClassName("admin")[0].style.display = "inline";
    }
    showCartBadge();
  }
  if (
    window.location.href === `${DOMAIN}/` ||
    window.location.href === `${DOMAIN}` ||
    window.location.href === `${DOMAIN}?` ||
    window.location.href === `${DOMAIN}/index.html/` ||
    window.location.href === `${DOMAIN}/index.html?`
  ) {
    showProducts(products);
    showCoursels();
    showCategoryFilters();
  }

  if (window.location.href.startsWith(`${DOMAIN}/product.html`) === true) {
    showProductDetails();
  }

  hideLoader();

  isLoading = false;
}
function showLoader() {
  document.getElementsByClassName("loader-block")[0].style.display = "flex"; // making loader appear
  document.getElementsByClassName("content-show")[0].style.display = "none"; // making content appear
}

function hideLoader() {
  document.getElementsByClassName("loader-block")[0].style.display = "none"; // making loader disappear
  document.getElementsByClassName("content-show")[0].style.display = "flex"; // making content appear
}
// change cart badge
function showCartBadge() {
  if (user != null && user != undefined) {
    // to show badge above cart icon if there items in user cart
    if (
      user.cart.productId.length !== 0 &&
      user.cart.productId.length !== undefined &&
      user.cart.productId.length !== null
    ) {
      document.getElementsByClassName("cart-item")[0].style.display = "flex";
      document.getElementsByClassName("cart-item")[0].textContent =
        user.cart.productId.length;
    }
  }
}
// authentication
function auth() {
  // to check if we found the user
  if (user !== null && user !== undefined) {
    isLoggedIn = true;
    if (
      window.location.href === `${DOMAIN}/` ||
      window.location.href === `${DOMAIN}` ||
      window.location.href === `${DOMAIN}?` ||
      window.location.href === `${DOMAIN}/index.html/` ||
      window.location.href === `${DOMAIN}/index.html?` ||
      window.location.href.startsWith(`${DOMAIN}/product.html`) === true
    )
      showRemove("user-info", "auth");
  }

  showUi(); // to show content
}

// show dropdown
function dropdown(classname) {
  if (dropdownOpen == true) {
    document.getElementsByClassName(classname)[0].style.display = "none";
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
function login() {
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
  let user = users.find((element) => element.email === email.value); // finding user
  let mainError = document.getElementsByClassName("main")[0]; // main error of form
  mainError.style.display = "none"; // removing error
  // is no user found showing no user found error
  if (user == null || user == undefined) {
    mainError.textContent = "No user found with this email";
    mainError.style.display = "block";
    hideButtonLoader("short", "text"); // hiding button loader
    return;
  }

  // if wrong password showing wrong password error
  if (user.password !== password.value) {
    mainError.textContent = "enetered wrong password";
    mainError.style.display = "block";
    hideButtonLoader("short", "text"); // hiding button loader
    return;
  }

  localStorage.setItem("token", user.id); // adding token in local storage
  hideButtonLoader("short", "text"); // hiding button loader
  window.location.href = `${DOMAIN}/`; // redirctiong to home page
}

// sign up user
function signUp() {
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let name = document.getElementById("name");
  let errorEmail = document.getElementsByClassName("error-email")[0];
  let errorPassword = document.getElementsByClassName("error-password")[0];
  let errorName = document.getElementsByClassName("error-name")[0];
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
  let user = users.find((element) => element.email === email.value); // findind user
  let mainError = document.getElementsByClassName("main")[0]; // main form error
  mainError.style.display = "none"; // removing error
  // checking if user found with this email
  if (user != null && user != undefined) {
    mainError.textContent = "user found with this email. Login"; // main error
    mainError.style.display = "block"; // main error styling
    return;
  }
  showButtonLoader("short", "text"); // showing loader
  let newUser = {
    email: email.value,
    password: password.value,
    name: name.value,
    cartItems: [],
    orders: [],
    address: {},
    id: generateId(8),
  }; // new user
  users.push(newUser); // ading new user
  localStorage.setItem("token", newUser.id); //  setting it to local storage
  hideButtonLoader("short", "text"); // hiding loader
  window.location.href = `${DOMAIN}/`; // redirctiong to home page
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
  let allButton = createCategory({ name: "All", id: "all" }); // creating all button

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
  if (products.children.length > 0) {
    products.textContent = ""; // removing already added products cards
  }
  let noProductText = document.getElementsByClassName("no-products")[0]; // no products found text
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

  // mapping show products array
  showProducts.forEach((product) => {
    let productCard = createProduct(product); // creating product card
    products.appendChild(productCard); // appedning product card
  });
  hideProductLoader();
}

// showing coursels
function showCoursels() {
  let coursel = document.getElementsByClassName("coursel")[0]; // coursel parent div
  // maping coursel items
  courselProducts.forEach((element, index) => {
    let courselItem = createCoursel(element, index, coursel); // creating coursel item
    coursel.appendChild(courselItem); // adding coursel item in parent div
    setTimeout(
      () => {
        rightCoursel(index, coursel);
      },
      3000 + (index + 1) * 1000,
    );
  });
}

function rightCoursel(index, coursel) {
  // doing z-index of all slides 1
  for (let i = 0; i < coursel.children.length; i++) {
    coursel.children[i].style.zIndex = 1; // putting all slides z-index 1
  }

  // checking if user on last coursel slide
  if (index === courselProducts.length - 1) {
    coursel.children[0].style.zIndex = courselProducts.length + 1; // making selected slide z-index more than everyone's
  } else {
    coursel.children[index + 1].style.zIndex = courselProducts.length + 1;
  }
  setTimeout(
    () => {
      leftCoursel(index, coursel);
    },
    3000 + (index + 1) * 1000,
  );
}

function leftCoursel(index, coursel, click) {
  // doing z-index of all slides 1
  for (let i = 0; i < coursel.children.length; i++) {
    coursel.children[i].style.zIndex = 1; // putting all slides z-index 1
  }

  // checking if user is on first slided
  if (index === 0) {
    coursel.children[coursel.children.length - 1].style.zIndex =
      courselProducts.length + 1;
  } else {
    coursel.children[index - 1].style.zIndex = courselProducts.length + 1;
  }
}

// aplly iflters
function applyFilter(filterId) {
  showProductLoader();
  let categoryFilter = document.getElementsByClassName("category-filter")[0];
  // removing selected class from every category button
  for (let i = 0; i < categoryFilter.children.length; i++) {
    categoryFilter.children[i].className = "category-button"; // setting class ro categorory button
  }
  if (filterId === "all") {
    categoryFilter.children[0].className = "category-button selected"; // making all object selected
    showProducts(products); // getting and showing products
  } else {
    let index = Array.from(categoryFilter.children).findIndex(
      (element) => element.id === filterId,
    ); // finding clicked element
    categoryFilter.children[index].className = "category-button selected"; // adding selected class
    let filteredProducts = products.filter(
      (element) => element.categoryId === filterId,
    ); // finding filtreed array
    showProducts(filteredProducts); // showing filtered products
  }
  hideProductLoader();
}

// creating category
function createCategory(category) {
  let catButton = document.createElement("button"); // careting button
  catButton.textContent = category.name; // adding category name
  catButton.className =
    category.id === "all" ? "category-button selected" : "category-button"; // adding class
  catButton.id = category.id; // seeting id
  catButton.addEventListener("click", () => {
    applyFilter(category.id); // applying filters
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
    window.location.href = `/product.html?id=${product.id}`;
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
    let cartItem = user.cart.productId.find((item) => item === product.id);
    if (cartItem != null && cartItem != undefined) {
      AddToCartButton.textContent = "Added";
    } else {
      AddToCartButton.textContent = "Add To Cart";
    }
  } else {
    AddToCartButton.textContent = "Add To Cart";
  }
  AddToCartButton.className = "product-button";

  AddToCartButton.addEventListener("click", () => {
    let cartItem = user.cart.productId.find((item) => item === product.id);
    if (user != null && user != undefined) {
      if (cartItem != null && cartItem != undefined) {
      } else {
        addToCart(product.id);
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
function createCoursel(element, index, coursel) {
  let courselItem = document.createElement("div");
  courselItem.className = "coursel-item";

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
  leftButton.className = "coursel-button left";

  let leftIcon = document.createElement("i");
  leftIcon.className = "fa-solid fa-arrow-left";

  leftButton.appendChild(leftIcon);

  let rightButton = document.createElement("button");
  rightButton.className = "coursel-button right";

  let rightIcon = document.createElement("i");
  rightIcon.className = "fa-solid fa-arrow-right";

  rightButton.appendChild(rightIcon);

  let product = products.find((product) => element.productId === product.id);
  let courselImage = document.createElement("img");
  courselImage.className = "coursel-image";
  courselImage.src = product.images[0];

  courselItem.appendChild(courselImage);
  courselItem.appendChild(leftButton);
  courselItem.appendChild(rightButton);
  courselItem.appendChild(courselText);

  courselItem.style.zIndex = index + 1;

  courselImage.addEventListener("click", () => {
    window.location.href = `/product.html?id=${product.id}`;
  });

  let rightClick = 1;
  rightButton.addEventListener("click", () => {
    rightCoursel(index, coursel, rightClick);
    rightClick++;
  });
  leftButton.addEventListener("click", () => {
    leftCoursel(index, coursel);
  });

  return courselItem;
}

// get product with id
function getProduct(id) {
  return products.find((product) => (product.id = id));
}

// show product details
function showProductDetails() {
  showLoader();
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const ID = urlParams.get("id");
  const product = products.find((product) => product.id === ID);
  if (product !== null && product !== undefined) {
    document.getElementsByClassName("no-product")[0].style.display = "none";
    console.log(product);
    createProductDetails(product);
    hideLoader();
  } else {
    document.getElementsByClassName("no-product")[0].style.display = "block";
    hideLoader();
  }
}

// creating a product deatils page
function createProductDetails(product) {
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
    let cartItem = user.cart.productId.find((item) => item === product.id);
    if (cartItem != null && cartItem != undefined) {
      AddToCartButton.textContent = "Added";
    } else {
      AddToCartButton.textContent = "Add To Cart";
    }
  } else {
    AddToCartButton.textContent = "Add To Cart";
  }

  AddToCartButton.addEventListener("click", () => {
    let cartItem = user.cart.productId.find((item) => item === product.id);
    if (user != null && user != undefined) {
      if (cartItem != null && cartItem != undefined) {
      } else {
        addToCart(product.id);
        AddToCartButton.textContent = "Added";
      }
    } else {
      window.location.href = "/auth.html";
    }
  });
  showReview(product);
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
  ratingText.textContent = `${starss}`;
  ratingText.className = "rating-text";

  ratingDiv.appendChild(ratingText);
}

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
function addToCart(productId) {
  user.cart.productId.push(productId);
  showCartBadge(); // updating cart badge
}

// showing product loader
function showProductLoader() {
  let productLoader = document.getElementsByClassName("products-loading")[0];
  productLoader.style.display = "flex";
}

// hiding product loader
function hideProductLoader() {
  let productLoader = document.getElementsByClassName("products-loading")[0];
  productLoader.style.display = "none";
}

function redirectHome() {
  window.location.href = `${DOMAIN}`;
}

// logout user
function logout() {
  localStorage.removeItem("token");
  isLoggedIn = false;
  window.location.href = `${DOMAIN}/auth.html`;
}

function showReview(product) {
  userReviewedTisProduct = false;
  if (product.reviews.length === 0) {
    let reviewsText = document.getElementsByClassName("reviews-text")[0];
    reviewsText.textContent = "No Reviews";
  } else {
    let reviewsText = document.getElementsByClassName("reviews-text")[0];
    reviewsText.textContent = "Reviews";
  }
  let addReview = document.getElementsByClassName("add-review")[0];
  if (user != null && user != undefined) {
    let checkReview = product.reviews.find(
      (review) => review.userId === user.id,
    );
    if (checkReview !== undefined) {
      userReviewedTisProduct = true;
    }
    let userName = document.getElementsByClassName("username")[0];
    userName.textContent = user.name;
    let addReviewButton =
      document.getElementsByClassName("add-review-button")[0];
    addReviewButton.addEventListener("click", () => {
      addUserReview();
    });
    let userBuyedThisProduct = false;
    user.orders.forEach((order) => {
      order.cart.productId.forEach((id) => {
        if (id === product.id) {
          userBuyedThisProduct = true;
        }
      });
    });
    if (userBuyedThisProduct === true && userReviewedTisProduct === false) {
      addReview.style.display = "flex";
    } else {
      addReview.style.display = "none";
    }
  } else {
    addReview.style.display = "none";
  }

  let otherReviews = document.getElementsByClassName("others-reviews")[0];
  otherReviews.textContent = "";
  product.reviews.forEach((review) => {
    let reviewDiv = document.createElement("div");
    reviewDiv.className = "review";

    let userProfile = document.createElement("div");
    userProfile.className = "userprofile";

    let userIcon = document.createElement("i");
    userIcon.className = "fa-solid fa-user";

    let username = document.createElement("span");
    let reviewUser = users.find((user) => user.id === review.userId);
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

function addUserReview() {
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

    let product = products.find((element) => (element.id = ID));
    let review = product.reviews.find((review) => review.userId === user.id);
    if (review === undefined) {
      product.reviews.push({
        userId: user.id,
        context: reviewContext,
        stars: starsSelectedReview,
      });
    }
    let newStars = 0;
    product.reviews.forEach((review) => {
      newStars += review.stars;
    });

    product.stars = newStars / product.reviews.length;
    showProductDetails();
  } else {
    return;
  }
}

function changeStars(number) {
  starsSelectedReview = number;
  let ratingDiv = document.getElementsByClassName("select-rating")[0];
  ratingDiv.textContent = "";
  createRatingButtons(ratingDiv, number);
}
