//HTTP requests allow your JavaScript code to communicate with servers (APIs) to get, send, or update data.
// The modern way to do this in ES6+ is using the Fetch API or async/await.
const API = `https://jsonplaceholder.typicode.com/todos/1`;

async function fetchUser() {
  try {
    let response = await fetch(API);
    if (!response.ok) {
      throw new Error("Network error!");
    } else {
      let data = await response.json();
      console.log(data);
    }
  } catch (err) {
    console.error(err);
  }
}
fetchUser();
