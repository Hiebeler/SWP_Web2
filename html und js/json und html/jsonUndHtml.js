let shoppinglist = [
    {name: "Brot", amount: 2},
    {name: "Milch", amount: 1},
    {name: "Eier", amount: 12},
    {name: "Käse", amount: 1},
    {name: "Butter", amount: 1},
    {name: "Kaffee", amount: 1},
    {name: "Zucker", amount: 1},
    {name: "Honig", amount: 1},
    {name: "Mehl", amount: 1},
    {name: "Nudeln", amount: 1},
    {name: "Tomaten", amount: 1},
    {name: "Zwiebeln", amount: 1},
    {name: "Kartoffeln", amount: 1}
];

function loadShoppingList() {
    let html = "";
    shoppinglist.forEach(function (item) {
        html += "<li>" + item.name + " " + item.amount + "</li>";
    });
    console.log(html);
    document.getElementById("content").innerHTML = html;
}

loadShoppingList();