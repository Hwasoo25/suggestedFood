function suggestFood() {
    var cuisineSelect = document.getElementById("cuisine-select");
    var selectedCuisine = cuisineSelect.value;
    var suggestionElement = document.getElementById("food-suggestion");

    var suggestions = {
        italian: "Try a delicious bowl of pasta carbonara!",
        french: "Indulge in a classic coq au vin for a French delight.",
        japanese: "Savor some sushi rolls with fresh ingredients.",
        korean: "Enjoy a comforting bowl of bibimbap with flavorful toppings."
    };

    suggestionElement.textContent = suggestions[selectedCuisine] || "No suggestion available for this cuisine.";
}
