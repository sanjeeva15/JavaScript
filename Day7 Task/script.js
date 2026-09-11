// TASK 1 - PRODUCT API OPERATIONS

const fakeStoreAPI = "https://fakestoreapi.com/products";

function displayProductOperations(productData) {
  console.log("\n========== TASK 1 - PRODUCT API ==========");

  console.log("\nProduct Details:");

  productData.forEach((productItem) => {
    console.log(
      `Title: ${productItem.title} | Price: $${productItem.price} | Category: ${productItem.category}`,
    );
  });

  // map()
  const titlePriceData = productData.map((productItem) => ({
    title: productItem.title,
    price: productItem.price,
  }));

  console.log("\nTitle and Price Array:");
  console.log(titlePriceData);

  // filter()
  const productsAbove100 = productData.filter(
    (productItem) => productItem.price > 100,
  );

  console.log("\nProducts Above $100:");

  productsAbove100.forEach((expensiveItem) => {
    console.log(`${expensiveItem.title} - $${expensiveItem.price}`);
  });

  // find()
  const firstElectronicsItem = productData.find(
    (electronicsItem) => electronicsItem.category === "electronics",
  );

  console.log("\nFirst Electronics Product:");

  console.log(firstElectronicsItem);

  // reduce()
  const completeProductValue = productData.reduce(
    (runningTotal, currentProduct) => runningTotal + currentProduct.price,
    0,
  );

  console.log(`\nTotal Price: $${completeProductValue.toFixed(2)}`);

  // sort()
  const descendingPriceProducts = [...productData].sort(
    (higherProduct, lowerProduct) => lowerProduct.price - higherProduct.price,
  );

  console.log("\nHighest Price to Lowest:");

  descendingPriceProducts.forEach((sortedProduct) => {
    console.log(`${sortedProduct.title} - $${sortedProduct.price}`);
  });
}

// TASK 2 - PRODUCT CATEGORY DASHBOARD

function createCategoryDashboard(categoryProductData) {
  console.log("\n\n===== PRODUCT DASHBOARD =====");

  const productCountValue = categoryProductData.length;

  const electronicsCountValue = categoryProductData.filter(
    (electronicProduct) => electronicProduct.category === "electronics",
  ).length;

  const jeweleryCountValue = categoryProductData.filter(
    (jeweleryProduct) => jeweleryProduct.category === "jewelery",
  ).length;

  const mensClothingCountValue = categoryProductData.filter(
    (mensProduct) => mensProduct.category === "men's clothing",
  ).length;

  const womensClothingCountValue = categoryProductData.filter(
    (womensProduct) => womensProduct.category === "women's clothing",
  ).length;

  const priceListValues = categoryProductData.map(
    (priceProduct) => priceProduct.price,
  );

  const maximumPriceValue = Math.max(...priceListValues);

  const minimumPriceValue = Math.min(...priceListValues);

  const combinedPriceValue = categoryProductData.reduce(
    (priceTotal, dashboardProduct) => priceTotal + dashboardProduct.price,
    0,
  );

  const averagePriceValue = combinedPriceValue / productCountValue;

  console.log(`\nTotal Products: ${productCountValue}`);

  console.log(`\nElectronics: ${electronicsCountValue}`);
  console.log(`Jewelery: ${jeweleryCountValue}`);
  console.log(`Men's Clothing: ${mensClothingCountValue}`);
  console.log(`Women's Clothing: ${womensClothingCountValue}`);

  console.log(`\nHighest Price: $${maximumPriceValue.toFixed(2)}`);

  console.log(`Lowest Price: $${minimumPriceValue.toFixed(2)}`);

  console.log(`Average Price: $${averagePriceValue.toFixed(2)}`);
}

// TASK 3 - USER & POST API

function processUserPostAPI() {
  const userDataAPI = "https://jsonplaceholder.typicode.com/users";

  const postDataAPI = "https://jsonplaceholder.typicode.com/posts";

  console.log("\n\n========== TASK 3 - USERS & POSTS ==========");

  fetch(userDataAPI)
    .then((userResponseData) => userResponseData.json())

    .then((userCollectionData) => {
      // Display all user names
      console.log("\nAll User Names:");

      userCollectionData.forEach((singleUserData) => {
        console.log(singleUserData.name);
      });

      // Display user name + email
      console.log("\nUser Name + Email:");

      userCollectionData.forEach((userContactData) => {
        console.log(`${userContactData.name} - ${userContactData.email}`);
      });

      // Find user ID 5
      const selectedUserFive = userCollectionData.find(
        (fiveUserData) => fiveUserData.id === 5,
      );

      console.log("\nUser with ID 5:");

      console.log(selectedUserFive);

      // Filter city
      const selectedCityName = "Gwenborough";

      const cityFilteredUsers = userCollectionData.filter(
        (cityUserData) => cityUserData.address.city === selectedCityName,
      );

      console.log(`\nUsers from ${selectedCityName}:`);

      cityFilteredUsers.forEach((cityResultUser) => {
        console.log(cityResultUser.name);
      });

      // Fetch posts
      return fetch(postDataAPI);
    })

    .then((postResponseData) => postResponseData.json())

    .then((postCollectionData) => {
      // Posts by user ID 1
      const userOnePostCollection = postCollectionData.filter(
        (userPostData) => userPostData.userId === 1,
      );

      console.log("\nPosts written by User ID 1:");

      userOnePostCollection.forEach((userOnePost) => {
        console.log(`Post ${userOnePost.id}: ${userOnePost.title}`);
      });

      // Count posts
      console.log(`\nUser ID 1 Post Count: ${userOnePostCollection.length}`);

      // First post with title > 50 characters
      const firstLongTitlePost = postCollectionData.find(
        (longTitleData) => longTitleData.title.length > 50,
      );

      console.log("\nFirst Post with Title > 50 Characters:");

      console.log(firstLongTitlePost);
    })

    .catch((userPostError) => {
      console.log("\nUser/Post API Error:", userPostError);
    })

    .finally(() => {
      console.log("\nUser & Post API Completed.");
    });
}

// TASK 4 - API SEARCH

function searchProductsByCategoryPrice(searchProductData) {
  console.log("\n\n========== TASK 4 - PRODUCT SEARCH ==========");

  const enteredCategoryValue = prompt("Enter product category:");

  const enteredMaximumPrice = prompt("Enter maximum price:");

  const cleanedCategoryValue = enteredCategoryValue.toLowerCase().trim();

  const maximumAllowedPrice = Number(enteredMaximumPrice);

  const matchingSearchProducts = searchProductData.filter(
    (searchItem) =>
      searchItem.category.toLowerCase() === cleanedCategoryValue &&
      searchItem.price <= maximumAllowedPrice,
  );

  console.log(
    `\nProducts in "${cleanedCategoryValue}" with price <= $${maximumAllowedPrice}:`,
  );

  if (matchingSearchProducts.length === 0) {
    console.log("No matching products found.");
  } else {
    matchingSearchProducts.forEach((matchingSearchItem) => {
      console.log(`${matchingSearchItem.title} - $${matchingSearchItem.price}`);
    });
  }
}

// TASK 5 - API SHOPPING CART

function createShoppingCart(cartProductData) {
  console.log("\n\n========== TASK 5 - SHOPPING CART ==========");

  console.log("\nAvailable Products:");

  cartProductData.forEach((availableCartProduct) => {
    console.log(
      `ID: ${availableCartProduct.id} | ${availableCartProduct.title} | $${availableCartProduct.price}`,
    );
  });

  const enteredCartIDs = prompt(
    "\nEnter product IDs separated by commas (Example: 1,2,3):",
  );

  const convertedCartIDs = enteredCartIDs
    .split(",")
    .map((cartIDText) => Number(cartIDText.trim()));

  // Add products to cart
  const selectedCartProducts = cartProductData.filter((cartProduct) =>
    convertedCartIDs.includes(cartProduct.id),
  );

  console.log("\n===== CART =====");

  if (selectedCartProducts.length === 0) {
    console.log("Cart is empty.");

    return;
  }

  selectedCartProducts.forEach((chosenCartProduct, cartProductIndex) => {
    console.log(
      `\nProduct ${cartProductIndex + 1}: ${chosenCartProduct.title}`,
    );

    console.log(`Price: $${chosenCartProduct.price}`);
  });

  // reduce()
  const shoppingCartTotal = selectedCartProducts.reduce(
    (cartRunningTotal, cartCurrentProduct) =>
      cartRunningTotal + cartCurrentProduct.price,
    0,
  );

  let appliedDiscountPercentage = 0;

  if (shoppingCartTotal > 200) {
    appliedDiscountPercentage = 20;
  } else if (shoppingCartTotal > 100) {
    appliedDiscountPercentage = 10;
  }

  const calculatedDiscountAmount =
    shoppingCartTotal * (appliedDiscountPercentage / 100);

  const finalShoppingAmount = shoppingCartTotal - calculatedDiscountAmount;

  console.log(`\nTotal: $${shoppingCartTotal.toFixed(2)}`);

  console.log(`Discount: ${appliedDiscountPercentage}%`);

  console.log(`Final Amount: $${finalShoppingAmount.toFixed(2)}`);
}

// TASK 6 - FAKESTORE PRODUCT REPORT

function generateFakeStoreReport(reportProductData) {
  console.log("\n\n========== PRODUCT REPORT ==========");

  // Total products
  const reportTotalProducts = reportProductData.length;

  console.log(`\nTotal Products: ${reportTotalProducts}`);

  // map()
  const reportProductNames = reportProductData.map(
    (reportNameItem) => reportNameItem.title,
  );

  console.log("\nProduct Names:");

  reportProductNames.forEach((reportSingleName) => {
    console.log(`- ${reportSingleName}`);
  });

  // filter()
  const reportExpensiveProducts = reportProductData.filter(
    (reportExpensiveItem) => reportExpensiveItem.price > 100,
  );

  console.log("\nProducts Above $100:");

  reportExpensiveProducts.forEach((reportExpensiveResult) => {
    console.log(
      `- ${reportExpensiveResult.title} - $${reportExpensiveResult.price}`,
    );
  });

  // find()
  const reportElectronicsProduct = reportProductData.find(
    (reportElectronicItem) => reportElectronicItem.category === "electronics",
  );

  console.log("\nElectronics Product:");

  if (reportElectronicsProduct) {
    console.log(
      `${reportElectronicsProduct.title} - $${reportElectronicsProduct.price}`,
    );
  }

  // reduce()
  const reportTotalProductValue = reportProductData.reduce(
    (reportRunningValue, reportCurrentItem) =>
      reportRunningValue + reportCurrentItem.price,
    0,
  );

  console.log(`\nTotal Product Value: $${reportTotalProductValue.toFixed(2)}`);

  // some()
  const reportAnyAbove500 = reportProductData.some(
    (reportFiveHundredItem) => reportFiveHundredItem.price > 500,
  );

  console.log(`\nAny Product Above $500: ${reportAnyAbove500}`);

  // every()
  const reportAllAboveOne = reportProductData.every(
    (reportOneDollarItem) => reportOneDollarItem.price > 1,
  );

  console.log(`All Products Above $1: ${reportAllAboveOne}`);

  // sort()
  const reportSortedProducts = [...reportProductData].sort(
    (reportHighItem, reportLowItem) =>
      reportLowItem.price - reportHighItem.price,
  );

  console.log("\nHighest → Lowest:");

  reportSortedProducts.forEach((reportSortedItem) => {
    console.log(`${reportSortedItem.title} - $${reportSortedItem.price}`);
  });
}

// MAIN FAKESTORE FETCH

fetch(fakeStoreAPI)
  .then((fakeStoreResponse) => {
    if (!fakeStoreResponse.ok) {
      throw new Error("Failed to fetch FakeStore products");
    }

    return fakeStoreResponse.json();
  })

  .then((fakeStoreProductList) => {
    // TASK 1
    displayProductOperations(fakeStoreProductList);

    // TASK 2
    createCategoryDashboard(fakeStoreProductList);

    // TASK 4
    searchProductsByCategoryPrice(fakeStoreProductList);

    // TASK 5
    createShoppingCart(fakeStoreProductList);

    // TASK 6
    generateFakeStoreReport(fakeStoreProductList);
  })

  .catch((fakeStoreFetchError) => {
    console.log("\nFakeStore API Error:", fakeStoreFetchError.message);
  })

  .finally(() => {
    console.log("\n========== FAKESTORE API COMPLETED ==========");
  });

// RUN TASK 3

processUserPostAPI();
