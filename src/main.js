let points = 0
let stoneShops = 0
let potatoShops = 0
let costStoneShop = 10
let profitStone = document.getElementById("profit-stone")

//clicking on pickaxe
function changePoint(amount) {
    points = points + amount
    document.getElementById("diamonds").innerText = points.toFixed(2)
}

//first time purchases.............................................................................

//stoneshop first buy
function firstBuyStone() {
    if (points >= 10) {
        document.getElementById("first-buy-stone").style.display = "none"
    document.getElementById("stone-ui").style.display = "flex"
    stoneShops = stoneShops + 1
    changePoint(-10)
    } else {
        alert("Not enough diamonds")
    }
}
//potato shop first buy
function firstBuyPotato() {
    if (points >= 100) {
        document.getElementById("first-buy-potato").style.display = "none"
        document.getElementById("potato-ui").style.display = "flex"
        potatoShops = potatoShops + 1
        changePoint(-100)
    } else {
        alert("Not enough diamonds")
    }
}



//Repitedely buying shops.........................................................................

//buying stone shops
function buyStoneShop() {
    if (points >= costStoneShop) {
        changePoint( - costStoneShop)
        stoneShops = stoneShops + 1
        document.getElementById("stone-shops").innerText = stoneShops
        costStoneShop = stoneShops ** 0.9 + 10
        console.log(stoneShops)
        console.log(costStoneShop)
        document.getElementById("cost-stone").innerHTML = costStoneShop.toFixed(2)
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

// incremented increase of diamonds per stone shops owned
function bigClick() {
    basePoint = stoneShops ** 0.4
    changePoint(basePoint)
    profitStone.innerHTML = basePoint.toFixed(2)
}
function clickingPotato() {
    let base = potatoShops ** 0.25 
    changePoint(base)
}

