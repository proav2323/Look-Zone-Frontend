// bolierplate data
let users = [
  {
    name: "Ansh Verma",
    email: "anshvishesh03@gmail.com",
    password: "anshvishesh2007",
    cartItems: [{}],
    orders: [{}],
    id: "mdkandkasm",
    address: {},
  },
];
let products = [
  {
    id: "smndjnadjnsajndsjan",
    name: "Airpods",
    price: 1499,
    stars: 4.5,
    reviews: [{ userId: "", context: "very good product.", stars: 4.5 }],
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
    stars: 4.5,
    reviews: [{ userId: "", context: "very good product.", stars: 4.5 }],
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
    id: "sdmandjsadn#smjsdbjan",
    name: "Airpods",
    price: 1499,
    stars: 4.5,
    reviews: [{ userId: "", context: "very good product.", stars: 4.5 }],
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
    productId: "sdmandjsadn#smjsdbjan",
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

// checking is user logged in with some token
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

    // to show badge above cart icon if there items in user cart
    if (
      user.cartItems.length !== 0 &&
      user.cartItems.length !== undefined &&
      user.cartItems.length !== null
    ) {
      document.getElementsByClassName("cart-item")[0].style.display = "flex";
      document.getElementsByClassName("cart-item")[0].textContent =
        user.cartItems.length;
    }
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

  document.getElementsByClassName("loader-block")[0].style.display = "none"; // making loader disappear
  document.getElementsByClassName("content-show")[0].style.display = "flex"; // making content appear

  isLoading = false;
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
      window.location.href === `${DOMAIN}/index.html?`
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
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&";
  let charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

// show categoryFilters
function showCategoryFilters() {
  let categoryFilter = document.getElementsByClassName("category-filter")[0];
  let allButton = document.createElement("button");
  allButton.textContent = "All";
  allButton.className = "category-button selected";
  allButton.addEventListener("click", () => {
    applyFilter("all", 0);
  });

  categoryFilter.appendChild(allButton);
  categories.forEach((category, index) => {
    let catButton = document.createElement("button");
    catButton.textContent = category.name;
    catButton.className = "category-button";
    catButton.id = category.id;
    catButton.addEventListener("click", () => {
      applyFilter(category.id);
    });

    categoryFilter.appendChild(catButton);
  });
}

// showing products in content
function showProducts(showProducts) {
  let products = document.getElementsByClassName("products")[0];
  products.textContent = "";
  // for (let i = 0; i < products.children.length; i++) {
  //   products.removeChild(products.children[0]);
  // }
  let noProductText = document.getElementsByClassName("no-products")[0];
  noProductText.style.display = "none";
  if (
    showProducts == null ||
    showProducts == undefined ||
    showProducts.length === 0
  ) {
    noProductText.style.display = "block";
    return;
  }

  showProducts.forEach((product) => {
    let productCard = document.createElement("div");
    productCard.className = "product";

    let productImage = document.createElement("img");
    productImage.className = "product-image";
    productImage.src = product.images[0];

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
    AddToCartButton.textContent = "Add To Cart";
    AddToCartButton.className = "product-button";

    productCard.appendChild(productImage);
    productCard.appendChild(productTitle);
    productCard.appendChild(productDesc);
    productCard.appendChild(AddToCartButton);

    products.appendChild(productCard);
  });
}

// aplly iflters
function applyFilter(filterId) {
  let categoryFilter = document.getElementsByClassName("category-filter")[0];

  if (filterId === "all") {
    for (let i = 0; i < categoryFilter.children.length; i++) {
      categoryFilter.children[i].className = "category-button";
    }
    categoryFilter.children[0].className = "category-button selected";
    showProducts(products);
  } else {
    let index = Array.from(categoryFilter.children).findIndex(
      (element) => element.id === filterId,
    );
    for (let i = 0; i < categoryFilter.children.length; i++) {
      categoryFilter.children[i].className = "category-button";
    }
    categoryFilter.children[index].className = "category-button selected";
    let filteredProducts = products.filter(
      (element) => element.categoryId === filterId,
    );
    showProducts(filteredProducts);
  }
}

// showing coursels
function showCoursels() {
  let coursel = document.getElementsByClassName("coursel")[0];
  courselProducts.forEach((element, index) => {
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

    coursel.appendChild(courselItem);

    courselImage.addEventListener("click", () => {
      window.location.href = `product.html?${product.id}`;
    });

    let rightClick = 1;
    rightButton.addEventListener("click", () => {
      rightCoursel(index, coursel, rightClick);
      rightClick++;
    });
    leftButton.addEventListener("click", () => {
      leftCoursel(index, coursel);
    });
  });
}

function rightCoursel(index, coursel) {
  if (index === courselProducts.length - 1) {
    for (let i = 0; i < coursel.children.length; i++) {
      coursel.children[i].style.zIndex = 1;
    }
    coursel.children[0].style.zIndex = courselProducts.length + 1;
  } else {
    for (let i = 0; i < coursel.children.length; i++) {
      coursel.children[i].style.zIndex = 1;
    }
    coursel.children[index + 1].style.zIndex = courselProducts.length + 1;
  }
}

function leftCoursel(index, coursel, click) {
  if (index === 0) {
    for (let i = 0; i < coursel.children.length; i++) {
      coursel.children[i].style.zIndex = 1;
    }
    coursel.children[coursel.children.length - 1].style.zIndex =
      courselProducts.length + 1;
  } else {
    for (let i = 0; i < coursel.children.length; i++) {
      coursel.children[i].style.zIndex = 1;
    }
    coursel.children[index - 1].style.zIndex = courselProducts.length + 1;
  }
}
