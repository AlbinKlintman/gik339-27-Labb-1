// Hämta alla nödvändiga element
const colorField = document.getElementById('color'); // Färg-inputfält
const contentField = document.getElementById('content'); // Innehåll-inputfält
const divStyleCheckbox = document.getElementById('divStyle'); // Checkbox
const removeButton = document.getElementById('removeButton'); // Ta bort-knappen
const dynamicDisplay = document.getElementById('dynamicDisplay'); // Div-elementet för innehåll

// Sätt initialt innehåll och färg vid sidstart (om det behövs)
window.addEventListener('load', function () {
  updateDynamicContent(); // Sätt initialt innehåll
  updateDynamicStyle(); // Sätt initial stil
});

contentField.addEventListener("blur", function (e) {
  const fieldName = e.target.name; // Hämta name-attributet
  console.log("Name-attribut:", fieldName);
  console.log("Innehållsfält värde:", contentField.value);
});

// Eventlyssnare för innehållsfältet - loggar när användaren skriver i innehållsfältet
contentField.addEventListener("input", function (e) {
  console.log("Inmatning på content-fält:", e.target.value); // Loggar när användaren skriver i content-fältet
});

// Eventlyssnare för färgfältet - loggar när användaren skriver i färgfältet
colorField.addEventListener("input", function (e) {
  console.log("Inmatning på color-fält:", e.target.value); // Loggar när användaren skriver i color-fältet
});



divStyleCheckbox.addEventListener("change", function () {
  updateDynamicStyle();
  console.log(
    "Checkbox ändrad - Bakgrundsfärgen uppdaterades till:",
    colorField.value
  );
});


// Eventlyssnare för knappen - tar bort div-elementet vid klick
removeButton.addEventListener('click', function () {
  dynamicDisplay.remove(); // Tar bort div-elementet
  console.log('Div-elementet har tagits bort'); // Logga att elementet har tagits bort
});

// Funktion för att uppdatera innehållet i dynamicDisplay-diven
function updateDynamicContent() {
  dynamicDisplay.innerHTML = contentField.value; // Uppdatera innehållet i div-elementet
}

// Funktion för att uppdatera stilen på dynamicDisplay-diven
function updateDynamicStyle() {
  if (divStyleCheckbox.checked) {
    dynamicDisplay.style.backgroundColor = colorField.value; // Använd färgen från input
    dynamicDisplay.classList.add('new-element'); // Lägg till klassen "new-element" för stilen
  } else {
    dynamicDisplay.style.backgroundColor = ''; // Ta bort bakgrundsfärgen om checkboxen är avmarkerad
    dynamicDisplay.classList.remove('new-element'); // Ta bort klassen "new-element"
  }
}

function handleInput(e) {
  console.log("Event triggered av:", e.target);
  const fieldName = e.target.name;
  if (fieldName === "content") {
    dynamicDisplay.innerHTML = e.target.value; // Uppdaterar div-elementet med nytt värde
    console.log("Div-elementet uppdaterat med värde:", e.target.value);
  }
}

contentField.addEventListener("blur", handleInput);
colorField.addEventListener("blur", handleInput);


