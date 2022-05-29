const btn = document.getElementById("readBtn");
const serverAddress = "http://localhost:3434/api/students";
btn.addEventListener("click", () => {
  fetch(serverAddress, { method: "get" })
    .then((res) => res.json())
    .then((res) => {
      console.log("students in server: ", res);
    });
});
