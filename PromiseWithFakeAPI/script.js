const Api = "https://jsonplaceholder.typicode.com/users/2";

const fetchUser = () => {
  return new Promise((resolve, reject) => {
    // resolve("data successfully fetch.")
    setTimeout(() => {
      fetch(Api)
        .then((res) => {
          if (!res.ok) throw new Error("Network error");
          return res.json();
        })
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    }, 1000);
  });
};

const loadUser = () => {
  const output = document.getElementById("output");
  output.innerHTML = "⏳ Loading user info...";

  fetchUser()
    .then((user) => {
      output.innerHTML = `<p>
      <strong>Name :</strong>${user.name}
    </p>
        <p>
      <strong>Email :</strong>${user.email}
    </p>
        <p>
      <strong>City :</strong>${user.address.city}
    </p>`;
    })
    .catch((err) => {
      output.innerHTML = `<p style="color:red">❌ Error: ${err.message}</p>`;
    });
};
