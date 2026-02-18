function grade() {
    const obtmarksref = Number(document.querySelector("#obtmarks").value);
    const totalmarksref = Number(document.querySelector("#totalmarks").value);
    const resultdiv = document.querySelector("#show-result");

    if (totalmarksref === 0) {
        resultdiv.innerHTML = `<span class="percentage">Please enter valid Total Marks!</span>`;
        return;
    }

    const percentage = ((obtmarksref / totalmarksref) * 100).toFixed(2);

    let grade = "";
    if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else if (percentage >= 50) {
        grade = "D";
    } else {
        grade = "Fail";
    }
    resultdiv.innerHTML = `
                <span class="percentage">Percentage: ${percentage}%</span>
                <span class="grade">Grade: ${grade}</span>
            `;
}