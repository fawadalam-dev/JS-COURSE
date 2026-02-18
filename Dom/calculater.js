function calculate() {
    let firstref = Number(document.querySelector("#firstnumber").value);
    let secondref = Number(document.querySelector("#secondnumber").value);
    let resultref = document.querySelector("#calculate");

    let add = firstref + secondref;
    let sub = firstref - secondref;
    let mul = firstref * secondref;
    let div = firstref / secondref;

    resultref.innerHTML = `
                <span class="add">Addition: ${add}</span>
                <span class="sub">Subtraction: ${sub}</span>
                <span class="mul">Multiplication: ${mul}</span>
                <span class="div">Division: ${div}</span>
            `;
}