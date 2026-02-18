async function searchMeal() {
    try {
        const mealRef = document.querySelector("#mealname");
        const meal = mealRef.value
        const mealapiRef = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`);

        const dataformapi = await mealapiRef.json();
        const mealsformapi = dataformapi.meals
        console.log(mealsformapi);

        const mealshowref = document.querySelector("#meal-show");
        mealshowref.innerHTML = "";
        mealsformapi.map((ml) => {
            mealshowref.innerHTML = mealshowref.innerHTML + ` 
                    <div class="card">
                        <img src="${ml.strMealThumb}" class="meal-img"/>
                        <h2>${ml.strMeal}</h2>
                        <h3>${ml.strArea}</h2>
                            <h4>${ml.strIngredient20}</h4>
                    </div>
                     `;
        })
    }
    catch (error) {
        console.log(error);

        alert("somthing went wrong");
    }
}