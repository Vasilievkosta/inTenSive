const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString() {
    return colors.filter(f => f === "черный" || f === "красный" || f === "желтый").join("-")
}

console.log(createColorString());
