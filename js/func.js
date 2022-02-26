//alert("hello world");
const example = () => {
  const formInput = document.getElementById("example").value;
  document.getElementById("paragraph").innerText = formInput;
};
document.getElementById("action").addEventListener("click", example);
