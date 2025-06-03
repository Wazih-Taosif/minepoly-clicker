let points = 0
let stoneShops = 0
let potatoShops = 0

//clicking on pickaxe
function changePoint(amount) {
    points = points + amount
    document.getElementById("diamonds").innerText = points
}
//first time purchases..................

//stoneshop
function firstBuyStone() {
    if (points >= 10) {
        document.getElementById("first-buy-stone").style.display = "none"
    document.getElementById("stone-ui").style.display = "flex"
    stoneShops = stoneShops + 1
    }
}



//clicking on stone shop
function clickingStone() {
    if (stoneShops > 0) {
        points = points + 1
        document.getElementById("diamonds").innerText = points
    } else {
        alert("No shops purchased")
    }
}

//clicking on potato shop
function clickingPotato() {
    if (potatoShops > 0) {
    points = points + 10
    document.getElementById("diamonds").innerText = points
    } else {
        alert("No shops purchased")
    }
    
}

//purchasing stone shop
function buyStoneShop() {
    if (points >= 10) {
        changePoint(-10)
        stoneShops = stoneShops + 1
        document.getElementById("stone-shops").innerText = stoneShops
    } 
    else {
        alert("Not enough diamonds")
    }
}

//buying potato shops
function buyPotatoShop() {
    if (points >= 100) {
        changePoint(-100)
        potatoShops += 1
        document.getElementById("potato-shops").innerText = potatoShops
    } else {
        alert("Not enough diamonds")
    }
}