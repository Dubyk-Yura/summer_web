const saveAnimal = () => {
  const name = document.getElementById("name").value;
  const description = document.getElementById("description").value;
  const price = document.getElementById("price").value;
  const type = document.getElementById("type").value;

  const animalInfo = document.createElement("div");
  animalInfo.classList.add("animal-info");

  animalInfo.innerHTML = `
  <h3>${name}</h3>
  <p><strong>Description:</strong> ${description}</p>
  <p><strong>Price:</strong> ${price}</p>
  <p><strong>Type:</strong> ${type}</p>
  <button type="button" class="deleteButton" onclick="deleteAnimal(this.parentElement)">Delete</button>
`;
  document.getElementById("animalList").appendChild(animalInfo);
};

function deleteAnimal(element) {
  element.remove();
}

function toggleAside() {
  const animalAside = document.getElementById("animalAside");
  animalAside.classList.toggle("hidden");
}
