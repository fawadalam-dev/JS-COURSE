function bmi() {
    let weightref = Number(document.querySelector("#weight").value)
    let heightref = Number(document.querySelector("#height").value)

    let resultref = document.querySelector("#result")

    let bmiref = weightref / (heightref * heightref)

    let category = ""

    if (bmiref < 18.5) {
        category = "Underweight";

    } else if (bmiref < 25) {
        category = "Normal"
    } else if (bmiref < 35) {
        category = "Overweight"
    }
    else {
        category = "Obese"
    }
    resultref.innerHTML = `
    <span style="
        font-weight:bold; 
        color:#e63946; 
        font-size:22px; 
        border:2px solid green; 
        padding:10px 15px; 
        border-radius:12px; 
        background-color:#fce4e4;
        box-shadow: 2px 2px 8px rgba(0,0,0,0.2);
        display:inline-block;
    ">
        BMI: ${bmiref.toFixed(2)}
    </span>
    <br><br>
    <span style="
        font-weight:bold; 
        color:#2a9d8f; 
        font-size:20px; 
        border:2px solid red; 
        padding:8px 12px; 
        border-radius:10px;
        background-color:#e0f7fa;
        box-shadow: 2px 2px 6px rgba(0,0,0,0.2);
        display:inline-block;
    ">
        ${category}
    </span>
`;

}
