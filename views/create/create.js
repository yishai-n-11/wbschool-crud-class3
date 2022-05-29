const form = document.getElementById("f");
document.addEventListener("submit", (e) => {
  e.preventDefault();
  const jsonData = {};
  const data = new FormData(form);
  for (let [key, value] of data.entries()) {
    jsonData[key] = value;
  }
  fetch("http://localhost:3434/api/students", {
    method: "POST",
    body: JSON.stringify(jsonData),
  });
});
