// Interactive Test for Algorithms
function interactiveTest(algorithm) {
    console.log(`Testing ${algorithm.name} interactively...`);
    // You can add more interactive elements here if necessary
    const arr = [5, 2, 9, 1, 5, 6];
    console.log(`Original array: ${arr}`);
    const result = algorithm(arr);
    console.log(`Sorted array: ${result}`);
}

// Example: Bubble Sort Algorithm
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                console.log(`Swapped ${arr[j + 1]} and ${arr[j]}: ${arr}`);
            }
        }
    }
    return arr;
}

// List Unfamiliar Data Structures & Sorting Algorithms
const unfamiliarConcepts = [
    { name: "Red-Black Tree", reason: "The balancing rules are complex and require more practice to understand fully." },
    { name: "Radix Sort", reason: "Haven't practiced enough with large datasets to understand its efficiency." }
];

function displayUnfamiliarConcepts() {
    const ul = document.getElementById("unfamiliarConceptsList");
    unfamiliarConcepts.forEach(concept => {
        const li = document.createElement("li");
        li.textContent = `${concept.name}: ${concept.reason}`;
        ul.appendChild(li);
    });
}

// Run this function when the page loads to display the unfamiliar concepts
window.onload = function() {
    displayUnfamiliarConcepts();
};
