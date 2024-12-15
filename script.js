document.getElementById("bmi-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
    const gender = document.getElementById("gender").value;
    const height = parseFloat(document.getElementById("height").value);

    if (isNaN(height) || height <= 0) {
        alert("Masukkan tinggi badan yang valid.");
        return;
    }

    const results = calculateIdealWeight(gender, height);
    displayResults(results);
});

function calculateIdealWeight(gender, height) {
    const robinson = height - 100 - ((gender === "male") ? 4.5 : 4.0);
    const miller = height - 100 - ((gender === "male") ? 5.0 : 5.5);
    const devine = height - 100;
    const hamwi = height - 100 - ((gender === "male") ? 4.0 : 4.5);
    const boerMin = height - 100 - 10;
    const boerMax = height - 100 - 5;

    return { robinson, miller, devine, hamwi, boerMin, boerMax };
}

function displayResults(results) {
    const rows = `
        <tr><td>Robinson (1983)</td><td>${results.robinson.toFixed(2)} kg</td></tr>
        <tr><td>Miller (1983)</td><td>${results.miller.toFixed(2)} kg</td></tr>
        <tr><td>Devine (1974)</td><td>${results.devine.toFixed(2)} kg</td></tr>
        <tr><td>Hamwi (1964)</td><td>${results.hamwi.toFixed(2)} kg</td></tr>
        <tr><td>Boer (1982)</td><td>${results.boerMin.toFixed(2)} - ${results.boerMax.toFixed(2)} kg</td></tr>
    `;
    document.querySelector("tbody").innerHTML = rows;
}
