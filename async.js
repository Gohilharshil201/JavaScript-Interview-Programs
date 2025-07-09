//The async Keyword
// NOTE: async is used to declare an asynchronous function. It automatically returns a Promise.

async function getData() {
  return "hello";
}

// getData().then(console.log);

async function greet() {
  return "Hi!";
}
// greet().then(console.log);

// The await Operator
async function fetchData() {
  let res = await fetch(`https://jsonplaceholder.typicode.com/users/2`);
  let user = await res.json();
  console.log(user.name);
}
// fetchData();

// Practice:
// ✅ Create a function that waits 2 seconds before printing “Done”.
async function printAfterDelay() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log(`done`);
}
// printAfterDelay();

async function getUserAndPost() {
  let user = await fetch(`https://jsonplaceholder.typicode.com/users/1`).then(
    (response) => response.json()
  );
  let post = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
  ).then((response) => response.json());
  // console.log(user);
  console.log(post);
}
// getUserAndPost();

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function run() {
  console.log("Waiting...");
  await delay(2000);
  console.log("Done!");
}
// run();

//  Handling Errors - Use try...catch with await
async function fetchUser() {
  try {
    let res = await fetch(`https://jsonplaceholder.typicode.com/users/1`); // Enter wrong API for check error
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}
// fetchUser();

// Handling Independent Promises
// Multiple async tasks that don’t depend on each other.
async function fetchParallel() {
  const [res1, res2] = await Promise.all([
    fetch(`https://jsonplaceholder.typicode.com/posts/1`),
    fetch(`https://jsonplaceholder.typicode.com/posts/2`)
  ]);
  const data1 = await res1.json();
  const data2 = await res2.json();
  console.log(data1);
  console.log(data2);
}
// fetchParallel();

// Await Promise.all()
async function fetchMany() {
  try {
    const urls = [
      "https://jsonplaceholder.typicode.com/posts/1",
      "https://jsonplaceholder.typicode.com/posts/2",
      "https://jsonplaceholder.typicode.com/posts/3"
    ];
    const promise = urls.map((url) => fetch(url));
    const response = await Promise.all(promise);
    const data = await Promise.all(response.map((res) => res.json()));
    console.log(data);
  } catch (error) {
    console.log("Something failed:", error);
  }
}
fetchMany();
