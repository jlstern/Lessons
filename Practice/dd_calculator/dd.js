// Set hero index
var ind = 0;
var heroId = document.getElementById("heroselect");
heroId.addEventListener("change", function(){ // toggles hero select
	ind = heroId.selectedIndex;
	displayPortrait();
	calculateTotals()
});
// Set resolve level (index = actual resolve level)
var resolve = 0;
var resolveId = document.getElementById("resolveselect");
resolveId.addEventListener("change", function(){
	resolve = resolveId.selectedIndex;
	checkWeaponArmor();
	calculateTotals()
});
// Set weapon level (index 0 = level 1)
var weapon = 0;
var weaponId = document.getElementById("weaponselect");
weaponId.addEventListener("change", function(){
	weapon = weaponId.selectedIndex;
	checkWeaponArmor();
	calculateTotals()
});
// Set armor level (index 0 = level 1)
var armor = 0;
var armorId = document.getElementById("armorselect");
armorId.addEventListener("change", function(){
	armor = armorId.selectedIndex;
	checkWeaponArmor();
	calculateTotals()
});
// Set weapons and armor so they can only be one higher than resolve
function checkWeaponArmor(){
	if (resolve < weapon) {
		weaponId.selectedIndex = resolve;
		weapon = resolve
	};
	if (resolve < armor) {
		armorId.selectedIndex = resolve;
		armor = resolve
	};
};
// Set dungeon type
var dungeon = 0;
var dungeonId = document.getElementById("dungeonselect");
dungeonId.addEventListener("change", function(){
	dungeon = dungeonId.selectedIndex;
	if (dungeon > 3) {//If Hamlet or DD is selected, automatically sets difficulty level
		diffId.selectedIndex = 3;
		diffIndex = 3;
	};
	if (dungeon <=3 && diffIndex === 3) {//If Darkest difficulty is selected and dungeon changed, will lower difficulty to champion
		diffId.selectedIndex = 2;
		diffIndex = 2;
	}
	calculateTotals();
});
// Set dungeon difficulty level (index 0 = level 1, 1=3, 2=5, 3=6)
var diffIndex = 0;
var diffId = document.getElementById("diffselect");
diffId.addEventListener("change", function(){
	diffIndex = diffId.selectedIndex;
	if (dungeon > 3) {//If Hamlet or DD is selected, cannot change this dropdown
		diffId.selectedIndex = 3;
		diffIndex = 3;
	};
	calculateTotals();
});
// Display hero portrait
var portrait = document.getElementById("portrait").src;
function displayPortrait(){
	if (ind === 0){portrait = "https://hydra-media.cursecdn.com/darkestdungeon.gamepedia.com/6/6d/Abomination_Combo.png"}
	if (ind === 1){portrait = "https://hydra-media.cursecdn.com/darkestdungeon.gamepedia.com/2/23/Antiquarian.png"}
	if (ind === 2){portrait = "https://hydra-media.cursecdn.com/darkestdungeon.gamepedia.com/f/ff/Arbalest.png?version=e3cf423b0fa9171a40e65587e5e66c68"}
	if (ind === 3){portrait = "https://hydra-media.cursecdn.com/darkestdungeon.gamepedia.com/1/13/BountyHunter.png?version=b1e9fdffe117690ea4cfaabd6e836080"}
	if (ind === 4){portrait = "https://hydra-media.cursecdn.com/darkestdungeon.gamepedia.com/e/eb/Crusader.png?version=a326322f466b74e10eafcea3af9a4295"}
	if (ind === 5){portrait = "https://hydra-media.cursecdn.com/darkestdungeon.gamepedia.com/0/03/Grave_Robber.png?version=75ee3069b4efce2678a757e47639c0aa"}
	if (ind === 6){portrait = "https://hydra-media.cursecdn.com/darkestdungeon.gamepedia.com/c/cf/Hellion.png?version=f86032b8831fc6b90a552188617a2d93"}
	if (ind === 7){portrait = "https://hydra-media.cursecdn.com/darkestdungeon.gamepedia.com/6/67/Hwyman.png?version=28c808fe37bb08936943997b14ffb4a4"}
	if (ind === 8){portrait = "https://hydra-media.cursecdn.com/darkestdungeon.gamepedia.com/d/d6/Hound_Master.png?version=9108e946296c2e0154e8b94b44336c01"}
	if (ind === 9){portrait = "https://hydra-media.cursecdn.com/darkestdungeon.gamepedia.com/e/e0/Jester.png?version=941452223e0219814729b6636217cba7"}
	if (ind === 10){portrait = "https://hydra-media.cursecdn.com/darkestdungeon.gamepedia.com/d/d9/Leper.png?version=23c7222ab3ad28f81a333150464c11af"}
	if (ind === 11){portrait = "https://hydra-media.cursecdn.com/darkestdungeon.gamepedia.com/4/42/Man-At-Arms.png?version=f899c15c738027d2ce61ec32a428a109"}
	if (ind === 12){portrait = "https://hydra-media.cursecdn.com/darkestdungeon.gamepedia.com/e/e8/Occultist.png?version=227462609c29cedbad6e91e700696846"}
	if (ind === 13){portrait = "https://hydra-media.cursecdn.com/darkestdungeon.gamepedia.com/1/17/Plague_Doctor.png?version=68611893ccdb0a19be2e211241ab0fde"}
	if (ind === 14){portrait = "https://hydra-media.cursecdn.com/darkestdungeon.gamepedia.com/1/14/Vestal.png?version=c9223757703a199cc794eb625fc2b654"};
	document.getElementById("portrait").src = portrait;
	document.getElementById("heroclass").textContent = hero[ind].name;
};
// Calculate all stat variables 
function calculateTotals(){
	document.getElementById("heroresolve").textContent = resolveTitle[resolve];
	document.getElementById("maxHP").textContent = hero[ind].hp[armor];
	var acc = 0;
	if (acc >= 0) {acc = "+" + acc
	};
	document.getElementById("accMod").textContent = acc;
	document.getElementById("dodge").textContent = hero[ind].dodge[armor];
	document.getElementById("critMod").textContent = hero[ind].crit[weapon] + "%";
	document.getElementById("prot").textContent = 0 + "%";
	var minDmgCalc = hero[ind].minDmg[weapon];
	var maxDmgCalc = hero[ind].maxDmg[weapon];
	document.getElementById("dmgRang").textContent = minDmgCalc + " - " + maxDmgCalc;
	document.getElementById("speed").textContent = hero[ind].speed[weapon];
	document.getElementById("dmgAvg").textContent = (minDmgCalc + maxDmgCalc) * 0.5;
	var rMod = resolve * 10;
	document.getElementById("stun").textContent = hero[ind].stun + rMod + "%";
	document.getElementById("move").textContent = hero[ind].move + rMod + "%";
	document.getElementById("blight").textContent = hero[ind].blight + rMod + "%";
	document.getElementById("bleed").textContent = hero[ind].bleed + rMod + "%";
	document.getElementById("disease").textContent = hero[ind].disease + rMod + "%";
	document.getElementById("debuff").textContent = hero[ind].debuff + rMod + "%";
	document.getElementById("death").textContent = 67 + "%";
	document.getElementById("trap").textContent = hero[ind].trap + rMod + "%";
	var difficulty = 1;
	if (diffIndex === 1) {difficulty = 3
	} else if (diffIndex === 2) {difficulty = 5
	} else if (diffIndex === 3) {difficulty = 6
	};
	var stress = 0;
	if (difficulty > resolve) {stress = 25 * (difficulty - resolve)
	};
	if (stress >= 0) {stress = "+" + stress
	};
	document.getElementById("stress").textContent = stress + "%";
	var virtue = 25;
	if (difficulty > resolve && difficulty - resolve !== 6) {virtue -= (5 * (difficulty - resolve))
	} else if (difficulty - resolve === 6) {virtue -= 33
	};
	if (virtue < 1) {virtue = 1
	} else if (virtue > 60) {virtue = 60
	};
	document.getElementById("virtue").textContent = virtue + "%";
	var scouting = 0;
	document.getElementById("scouting").textContent = "+" + scouting + "%"
};
// List all hero arrays
var resolveTitle = ["Seeker", "Apprentice", "Adventurer", "Veteran", "Master", "Champion", "Legendary"];
var hero = [
	{
		index: 0,
		name: "Abomination",
		hp: [26, 33, 40, 47, 54],
		dodge: [7.5, 12.5, 17.5, 22.5, 27.5],
		speed: [7, 7, 8, 8, 9],
		crit: [2.5, 3, 3.5, 4, 4.5],
		minDmg: [6, 7, 8, 10, 11],
		maxDmg: [11, 13, 15, 18, 20],
		stun: 40,
		move: 40,
		blight: 60,
		bleed: 30,
		disease: 20,
		debuff: 20,
		trap: 10,
		religious: "No",
		provisions: "None",
		speEffect: "Cannot be used with religious classes"
	},
	{
		index: 1,
		name: "Antiquarian",
		hp: [17, 24, 31, 38, 45],
		dodge: [10, 15, 20, 25, 30],
		speed: [5, 7, 7, 8, 8, 9],
		crit: [2.5, 3, 3.5, 4, 4.5],
		minDmg: [3, 4, 4, 5, 5],
		maxDmg: [5, 6, 7, 8, 9],
		stun: 20,
		move: 20,
		blight: 20,
		bleed: 20,
		disease: 20,
		debuff: 20,
		trap: 10,
		religious: "No",
		provisions: "None",
		speEffect: "Increases maximum gold stacks; able to find artifacts"
	},
	{
		index: 2,
		name: "Arbalest",
		hp: [27, 34, 41, 48, 55],
		dodge: [0, 5, 10, 15, 20],
		speed: [3, 3, 4, 5, 5],
		crit: [7.5, 8, 8.5, 9, 9.5],
		minDmg: [4, 5, 6, 6, 7],
		maxDmg: [9, 11, 13, 14, 16],
		stun: 40,
		move: 40,
		blight: 30,
		bleed: 30,
		disease: 30,
		debuff: 30,
		trap: 10,
		religious: "No",
		provisions: "Bandage",
		speEffect: "None"
	},
	{
		index: 3,
		name: "Bounty Hunter",
		hp: [25, 30, 35, 40, 45],
		dodge: [5, 10, 15, 20, 25],
		speed: [5, 5, 6, 6, 7],
		crit: [5, 5.5, 6, 6.5, 7],
		minDmg: [5, 6, 7, 7, 8],
		maxDmg: [10, 12, 13, 15, 16],
		stun: 40,
		move: 40,
		blight: 30,
		bleed: 30,
		disease: 20,
		debuff: 30,
		trap: 40,
		religious: "No",
		provisions: "None",
		speEffect: "None"
	},
	{
		index: 4,
		name: "Crusader",
		hp: [33, 40, 47, 54, 61],
		dodge: [5, 10, 15, 20, 25],
		speed: [1, 1, 2, 2, 3],
		crit: [5, 5.5, 6, 6.5, 7],
		minDmg: [6, 7, 8, 9, 10],
		maxDmg: [12, 14, 16, 17, 19],
		stun: 40,
		move: 40,
		blight: 30,
		bleed: 30,
		disease: 30,
		debuff: 30,
		trap: 10,
		religious: "Yes",
		provisions: "Holy Water",
		speEffect: "None"
	},
	{
		index: 5,
		name: "Grave Robber",
		hp: [20, 24, 28, 32, 36],
		dodge: [10, 15, 20, 25, 30],
		speed: [8, 8, 9, 9, 10],
		crit: [5, 5.5, 6, 6.5, 7],
		minDmg: [4, 5, 6, 6, 7],
		maxDmg: [9, 11, 13, 14, 16],
		stun: 20,
		move: 20,
		blight: 50,
		bleed: 30,
		disease: 30,
		debuff: 30,
		trap: 50,
		religious: "No",
		provisions: "Shovel",
		speEffect: "None"
	},
	{
		index: 6,
		name: "Hellion",
		hp: [26, 31, 36, 41, 46],
		dodge: [10, 15, 20, 25, 30],
		speed: [4, 4, 5, 5, 6],
		crit: [2.5, 3, 3.5, 4, 4.5],
		minDmg: [6, 7, 8, 9, 10],
		maxDmg: [12, 14, 16, 17, 19],
		stun: 40,
		move: 40,
		blight: 40,
		bleed: 40,
		disease: 30,
		debuff: 30,
		trap: 20,
		religious: "No",
		provisions: "None",
		speEffect: "None"
	},
	{
		index: 7,
		name: "Highwayman",
		hp: [23, 28, 33, 38, 43],
		dodge: [10, 15, 20, 25, 30],
		speed: [5, 5, 6, 6, 7],
		crit: [5, 5.5, 6, 6.5, 7],
		minDmg: [5, 6, 7, 8, 9],
		maxDmg: [10, 12, 13, 15, 16],
		stun: 30,
		move: 30,
		blight: 30,
		bleed: 30,
		disease: 30,
		debuff: 30,
		trap: 40,
		religious: "No",
		provisions: "None",
		speEffect: "None"
	},
	{
		index: 8,
		name: "Houndmaster",
		hp: [21, 28, 35, 42, 49],
		dodge: [10, 15, 20, 25, 30],
		speed: [6, 6, 7, 7, 8],
		crit: [5, 5.5, 6, 6.5, 7],
		minDmg: [4, 5, 6, 6, 7],
		maxDmg: [7, 8, 10, 11, 13],
		stun: 40,
		move: 40,
		blight: 40,
		bleed: 40,
		disease: 30,
		debuff: 30,
		trap: 40,
		religious: "No",
		provisions: "Dog Treats x2",
		speEffect: "None"
	},
	{
		index: 9,
		name: "Jester",
		hp: [19, 23, 27, 31, 35],
		dodge: [15, 20, 25, 30, 35],
		speed: [7, 7, 8, 8, 9],
		crit: [7.5, 8, 8.5, 9, 9.5],
		minDmg: [4, 5, 6, 6, 7],
		maxDmg: [7, 8, 10, 11, 13],
		stun: 20,
		move: 20,
		blight: 40,
		bleed: 30,
		disease: 20,
		debuff: 40,
		trap: 30,
		religious: "No",
		provisions: "Medicinal Herbs",
		speEffect: "None"
	},
	{
		index: 10,
		name: "Leper",
		hp: [35, 42, 49, 56, 63],
		dodge: [0, 5, 10, 15, 20],
		speed: [2, 2, 3, 3, 4],
		crit: [2.5, 3, 3.5, 4, 4.5],
		minDmg: [8, 9, 10, 12, 13],
		maxDmg: [16, 18, 21, 23, 26],
		stun: 60,
		move: 50,
		blight: 40,
		bleed: 10,
		disease: 20,
		debuff: 40,
		trap: 10,
		religious: "Yes",
		provisions: "Medicinal Herbs",
		speEffect: "None"
	},
	{
		index: 11,
		name: "Man-At-Arms",
		hp: [31, 38, 45, 52, 59],
		dodge: [5, 10, 15, 20, 25],
		speed: [3, 3, 4, 4, 5],
		crit: [3.8, 4.3, 4.8, 5.3, 5.8],
		minDmg: [5, 6, 7, 7, 8],
		maxDmg: [10, 12, 13, 15, 16],
		stun: 50,
		move: 50,
		blight: 30,
		bleed: 40,
		disease: 30,
		debuff: 30,
		trap: 10,
		religious: "No",
		provisions: "None",
		speEffect: "None"
	},
	{
		index: 12,
		name: "Occultist",
		hp: [19, 23, 27, 31, 35],
		dodge: [10, 15, 20, 25, 30],
		speed: [6, 6, 7, 7, 8],
		crit: [7.5, 8, 8.5, 9, 9.5],
		minDmg: [4, 5, 6, 6, 7],
		maxDmg: [7, 8, 10, 11, 13],
		stun: 20,
		move: 20,
		blight: 30,
		bleed: 40,
		disease: 40,
		debuff: 60,
		trap: 10,
		religious: "No",
		provisions: "None",
		speEffect: "None"
	},
	{
		index: 13,
		name: "Plague Doctor",
		hp: [22, 26, 30, 34, 38],
		dodge: [5, 10, 15, 20, 25],
		speed: [7, 7, 8, 8, 9],
		crit: [2.5, 3, 3.5, 4, 4.5],
		minDmg: [4, 5, 6, 6, 7],
		maxDmg: [7, 8, 10, 11, 13],
		stun: 20,
		move: 20,
		blight: 60,
		bleed: 20,
		disease: 50,
		debuff: 50,
		trap: 20,
		religious: "No",
		provisions: "Antivenom",
		speEffect: "None"
	},
	{
		index: 14,
		name: "Vestal",
		hp: [24, 29, 34, 39, 44],
		dodge: [0, 5, 10, 15, 20],
		speed: [4, 4, 5, 5, 6],
		crit: [2.5, 3, 3.5, 4, 4.5],
		minDmg: [4, 5, 6, 6, 7],
		maxDmg: [9, 11, 13, 14, 16],
		stun: 30,
		move: 30,
		blight: 30,
		bleed: 30,
		disease: 30,
		debuff: 30,
		trap: 10,
		religious: "Yes",
		provisions: "None",
		speEffect: "None"
	}
];
// Initial calculation
displayPortrait();
calculateTotals();