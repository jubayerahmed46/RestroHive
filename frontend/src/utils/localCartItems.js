function getData() {
  let data = localStorage.getItem("cart-items");
  if (!data) {
    data = JSON.stringify([]);
    localStorage.setItem("cart-items", data);
  }
  return JSON.parse(data);
}

/**
 * Take the input
 * get array data above
 * push input data (e.g., id)
 * store new array to the localstorage
 */

function setData(id) {
  const getAllData = getData();
  getAllData.push(id);
  localStorage.setItem("cart-items", JSON.stringify(getAllData));
}

export { getData, setData };
