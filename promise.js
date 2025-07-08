// Note: please uncomment all console.log() for
// NOTE: Promise simple example.
// let myPromise = new Promise((resolve, reject) => {
//   let success = true;
//   if (success) {
//     resolve("task done!");
//   } else {
//     reject("task failed! try again.");
//   }
// });
// console.log(myPromise);

// NOTE: Create a Promise that resolves if a number is even, otherwise rejects.
function isEven(number) {
  return new Promise((resolve, reject) => {
    if (number % 2 == 0) {
      resolve("Number is even");
    } else {
      reject("Number is odd");
    }
  });
}
// console.log(checkEvenNumber(30));
// isEven(30).then(console.log()).catch(console.log(console.error));

// Create a Promise that checks if a word contains more than 5 letters.
const wordCount = (str) => {
  return new Promise((resolve, reject) => {
    if (str.length < 0) return;
    if (str.length > 5) {
      resolve("word contains more than 5 letters.");
    } else {
      reject("word contains less than 5 letters.");
    }
  });
};
// console.log(wordCount("Javascript"));

// NOTE: Promise with object.
// const inventory = {
//   sunglasses: 1900,
//   pants: 1088,
//   bags: 1344
// };

// // Write your code below:
// const myExecutor = (resolve, reject) => {
//   if (inventory.sunglasses > 0) {
//     resolve("Sunglasses order processed.");
//   } else {
//     reject("That item is sold out.");
//   }
// };

// const orderSunglasses = () => {
//   return new Promise(myExecutor);
// };
// const orderPromise = orderSunglasses();
// console.log(orderPromise);

// NOTE: setTimeout()
// console.log("This is the first line of code in app.js.");
// const usingSTO = () => {
//   console.log("This line of code will log to the console last.");
// };
// setTimeout(usingSTO, 3000);
// console.log("This is the last line of code in app.js.");

const pizzaOrder = (isOrderConfirm) => {
  return new Promise((resolve, reject) => {
    if (isOrderConfirm) {
      setTimeout(() => {
        resolve("Your order successfully recevied. Thank you!");
      }, 2000);
    } else {
      setTimeout(() => {
        reject("order failed.");
      }, 3000);
    }
  });
};
// NOTE: the immediate output from console.log(pizzaOrder(true)) showing a pending Promise
// console.log(pizzaOrder(true));
// pizzaOrder(true).then(console.log); //Working

const largeNumber = () => {
  return new Promise((resolve, reject) => {
    let num = 5;
    if (num > 1) {
      resolve("🎉 Greter");
    } else {
      reject("👎 smaller");
    }
  });
};

// largeNumber()
//   .then(
//     (result) => console.log("success:", result)
//     // (err) => console.log("failure:", err)
//   )
//   .catch((err) => console.log("failure:", err));

// let failedPromise = new Promise((_, reject) => {
//   reject("Oops, something went wrong!");
// });
// failedPromise
//   .then((data) => console.log("Data:", data))
//   .catch((error) => console.error("Caught error:", error));

// Chaining Multiple Promises
const fnOne = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Your pizza will be delivered to your home");
    }, 1000);
  });
};
const fnTwo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Please open the door!");
    }, 1000);
  });
};

// fnOne()
//   .then((fnOne) => {
//     console.log("Notification:", fnOne);
//     return fnTwo();
//   })
//   .then((fnTwo) => {
//     console.log("Notification:", fnTwo);
//   });

const task1 = new Promise((resolve) => {
  setTimeout(() => resolve("A"), 1000);
});

const task2 = new Promise((resolve) => {
  setTimeout(() => resolve("B"));
}, 2000);

Promise.all([task1, task2])
  .then((result) => {
    console.log("All done:", result);
  })
  .catch((err) => {
    console.log("One failed:", err);
  });
