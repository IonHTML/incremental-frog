var frogs = 10;
var lastUpdate = Date.now();
var second = 1000;

var gen1 = {
    cost: 10,
    amount: 0,
    mult: 1
};

var gen2 = {
    cost: 100,
    amount: 0,
    mult: 1
};

var gen3 = {
    cost: 5000,
    amount: 0,
    mult: 1
};

var gen4 = {
    cost: 15000,
    amount: 0,
    mult: 1
};

var gen5 = {
    cost: 50000,
    amount: 0,
    mult: 1
};

var gen6 = {
    cost: 100000,
    amount: 0,
    mult: 1
};

var prestige1 = {
    cost: 100000,
    mult: 1,
    amount: 0
};

var tickspeed = {
    cost: 1000,
    tickupgrade: 500,
    amount: 0
}

function buyGenerator1() {
    if (frogs >= gen1.cost) {
        frogs -= gen1.cost;
        gen1.amount += 1;
        gen1.cost = Math.round(gen1.cost * 1.2);
        gen1.mult += 0.15;

        document.getElementById("frogs").innerHTML = "You have " + format(frogs) + " frogs.";
        document.getElementById("generator1").innerHTML = "Buy Gen 1 | Cost: " + format(gen1.cost) + " | Amount: " + format(gen1.amount) + " | Mult: " + format(gen1.mult) + "x";
    }
}

function buyGenerator2() {
    if (frogs >= gen2.cost) {
        frogs -= gen2.cost;
        gen2.amount += 1;
        gen2.cost = Math.round(gen2.cost * 1.2);
        gen2.mult += 0.15;

        document.getElementById("frogs").innerHTML = "You have " + format(frogs) + " frogs.";
        document.getElementById("generator2").innerHTML = "Buy Gen 2 | Cost: " + format(gen2.cost) + " | Amount: " + format(gen2.amount) + " | Mult: " + format(gen2.mult) + "x";
    }
}

function buyGenerator3() {
    if (frogs >= gen3.cost) {
        frogs -= gen3.cost;
        gen3.amount += 1;
        gen3.cost = Math.round(gen3.cost * 1.2);
        gen3.mult += 0.15;

        document.getElementById("frogs").innerHTML = "You have " + format(frogs) + " frogs.";
        document.getElementById("generator3").innerHTML = "Buy Gen 3 | Cost: " + format(gen3.cost) + " | Amount: " + format(gen3.amount) + " | Mult: " + format(gen3.mult) + "x";
    }
}

function buyGenerator4() {
    if (frogs >= gen4.cost) {
        frogs -= gen4.cost;
        gen4.amount += 1;
        gen4.cost = Math.round(gen4.cost * 1.2);
        gen4.mult += 0.15;

        document.getElementById("frogs").innerHTML = "You have " + format(frogs) + " frogs.";
        document.getElementById("generator4").innerHTML = "Buy Gen 4 | Cost: " + format(gen4.cost) + " | Amount: " + format(gen4.amount) + " | Mult: " + format(gen4.mult) + "x";
    }
}

function buyGenerator5() {
    if (frogs >= gen5.cost) {
        frogs -= gen5.cost;
        gen5.amount += 1;
        gen5.cost = Math.round(gen5.cost * 1.2);
        gen5.mult += 0.15;

        document.getElementById("frogs").innerHTML = "You have " + format(frogs) + " frogs.";
        document.getElementById("generator5").innerHTML = "Buy Gen 5 | Cost: " + format(gen5.cost) + " | Amount: " + format(gen5.amount) + " | Mult: " + format(gen5.mult) + "x";
    }
}

function buyGenerator6() {
    if (frogs >= gen6.cost) {
        frogs -= gen6.cost;
        gen6.amount += 1;
        gen6.cost = Math.round(gen6.cost * 1.2);
        gen6.mult += 0.15;

        document.getElementById("frogs").innerHTML = "You have " + format(frogs) + " frogs.";
        document.getElementById("generator6").innerHTML = "Buy Gen 6 | Cost: " + format(gen6.cost) + " | Amount: " + format(gen6.amount) + " | Mult: " + format(gen6.mult) + "x";
    }
}

function format(amount) {
    var power = Math.floor(Math.log10(amount));
    var mantissa = amount / Math.pow(10, power);
    if (power < 3) return amount.toFixed(2);
    return mantissa.toFixed(2) + "e" + power;
}

function buyTickspeed() {
    if (frogs >= tickspeed.cost){
        tickspeed.amount += 1;
        tickspeed.cost *= 10;
        second -= tickspeed.tickupgrade;
        
        document.getElementById("frogs").innerHTML = "You have " + format(frogs) + " frogs.";
        document.getElementById("fps-counter").innerHTML = "You are getting " + format(fps) + " frogs per " + second + " ms"
        document.getElementById("tickspeed").innerHTML = "Buy Tickspeed Upgrade | Cost: " + format(tickspeed.cost) + " | Reduces 10 ms"
        
        return second
    }
}

function buyPrestige() {
    if (frogs >= prestige1.cost) {
        frogs -= prestige1.cost
        prestige1.amount += 1;
        prestige1.mult *= 2
        prestige1.cost *= Math.round(prestige1.cost * 0.5)
        gen1.amount = 0;
        gen2.amount = 0;
        gen3.amount = 0;
        gen4.amount = 0;
        gen5.amount = 0;
        gen6.amount = 0;
        gen1.cost = 10;
        gen2.cost = 100;
        gen3.cost = 5000;
        gen4.cost = 10000;
        gen5.cost = 50000;
        gen6.cost = 100000;
        gen1.mult = 1;
        gen2.mult = 1;
        gen3.mult = 1;
        gen4.mult = 1;
        gen5.mult = 1;
        gen6.mult = 1;
        frogs = 10;

        document.getElementById("frogs").innerHTML = "You have " + format(frogs) + " frogs.";
        document.getElementById("prestige").innerHTML = "Prestige | Cost: " + format(prestige1.cost) + "| Mult: " + format(prestige1.mult) + "x";
        document.getElementById("generator1").innerHTML = "Buy Gen 1 | Cost: " + format(gen1.cost) + " | Amount: " + format(gen1.amount) + " | Mult: " + format(gen1.mult) + "x";
        document.getElementById("generator2").innerHTML = "Buy Gen 2 | Cost: " + format(gen2.cost) + " | Amount: " + format(gen2.amount) + " | Mult: " + format(gen2.mult) + "x";
        document.getElementById("generator3").innerHTML = "Buy Gen 3 | Cost: " + format(gen3.cost) + " | Amount: " + format(gen3.amount) + " | Mult: " + format(gen3.mult) + "x";
        document.getElementById("generator4").innerHTML = "Buy Gen 4 | Cost: " + format(gen4.cost) + " | Amount: " + format(gen4.amount) + " | Mult: " + format(gen4.mult) + "x";
        document.getElementById("generator5").innerHTML = "Buy Gen 5 | Cost: " + format(gen5.cost) + " | Amount: " + format(gen4.amount) + " | Mult: " + format(gen5.mult) + "x";
        document.getElementById("generator6").innerHTML = "Buy Gen 6 | Cost: " + format(gen6.cost) + " | Amount: " + format(gen4.amount) + " | Mult: " + format(gen6.mult) + "x";
    }
}

function save() {
    save = {
        sfrogs: frogs,
        sgen1: gen1,
        sgen2: gen2,
        sgen3: gen3,
        sgen4: gen4,
        sgen5: gen5,
        sgen6: gen6,
        sprestige1: prestige1,
        stickspeed: tickspeed
    }

    localStorage.setItem("save", JSON.stringify(save));
}

function load() {
    var savegame = JSON.parse(localStorage.getItem("save"));

    if (typeof savegame.sfrogs !== "undefined") frogs = savegame.sfrogs;
    if (typeof savegame.sgen1 !== "undefined") gen1 = savegame.sgen1;
    if (typeof savegame.sgen2 !== "undefined") gen2 = savegame.sgen2;
    if (typeof savegame.sgen3 !== "undefined") gen3 = savegame.sgen3;
    if (typeof savegame.sgen4 !== "undefined") gen4 = savegame.sgen4;
    if (typeof savegame.sgen5 !== "undefined") gen5 = savegame.sgen5;
    if (typeof savegame.sgen6 !== "undefined") gen6 = savegame.sgen6;
    if (typeof savegame.sprestige1 !== "undefined") prestige1 = savegame.sprestige1;
    if (typeof savegame.stickspeed !== "undefined") tickspeed = savegame.stickspeed;
}

function deleteSave() {
    localStorage.removeItem("save")
}

setInterval(function () {
    frogs = Math.round(frogs + gen1.amount * prestige1.mult * gen1.mult);
    fps = Math.round(gen1.amount * prestige1.mult * gen1.mult)                                  
    gen5.amount = gen5.amount + gen6.amount * prestige1.mult * gen6.mult;
    gen4.amount = gen4.amount + gen5.amount * prestige1.mult * gen5.mult;
    gen3.amount = gen3.amount + gen4.amount * prestige1.mult * gen4.mult;
    gen2.amount = gen2.amount + gen3.amount * prestige1.mult * gen3.mult;
    gen1.amount = gen1.amount + gen2.amount * prestige1.mult * gen2.mult;
    document.getElementById("frogs").innerHTML = "You have " + format(frogs) + " frogs.";
    document.getElementById("fps-counter").innerHTML = "You are getting " + format(fps) + " frogs per " + second + " ms"
    document.getElementById("prestige").innerHTML = "Prestige | Cost: " + format(prestige1.cost) + "| Mult: " + format(prestige1.mult) + "x";
    document.getElementById("generator1").innerHTML = "Buy Gen 1 | Cost: " + format(gen1.cost) + " | Amount: " + format(gen1.amount) + " | Mult: " + format(gen1.mult) + "x";
    document.getElementById("generator2").innerHTML = "Buy Gen 2 | Cost: " + format(gen2.cost) + " | Amount: " + format(gen2.amount) + " | Mult: " + format(gen2.mult) + "x";
    document.getElementById("generator3").innerHTML = "Buy Gen 3 | Cost: " + format(gen3.cost) + " | Amount: " + format(gen3.amount) + " | Mult: " + format(gen3.mult) + "x";
    document.getElementById("generator4").innerHTML = "Buy Gen 4 | Cost: " + format(gen4.cost) + " | Amount: " + format(gen4.amount) + " | Mult: " + format(gen4.mult) + "x";
    document.getElementById("generator5").innerHTML = "Buy Gen 5 | Cost: " + format(gen5.cost) + " | Amount: " + format(gen5.amount) + " | Mult: " + format(gen5.mult) + "x";
    document.getElementById("generator6").innerHTML = "Buy Gen 6 | Cost: " + format(gen6.cost) + " | Amount: " + format(gen6.amount) + " | Mult: " + format(gen6.mult) + "x";
    document.getElementById("tickspeed").innerHTML = "Buy Tickspeed Upgrade | Cost: " + format(tickspeed.cost) + " | Reduces 10 ms"
}, second);
