let celsius = document.getElementById('celsius');
let fahrenheit = document.getElementById('fahrenheit');
let kelvin = document.getElementById('kelvin');
let rankine = document.getElementById('rankine');
let réaumur = document.getElementById('réaumur');
celsius.oninput = function () {
	let f = (parseFloat(celsius.value) * 9) / 5 + 32;
	fahrenheit.value = parseFloat(f.toFixed(2));
	let k = (parseFloat(celsius.value) + 273.15);
	kelvin.value = parseFloat(k.toFixed(2));
	let r = (parseFloat(celsius.value) + 273.15)*1.8;
	rankine.value = parseFloat(r.toFixed(2));
	let re = parseFloat(celsius.value)*0.8;
	réaumur.value = parseFloat(re.toFixed(2));
    }
fahrenheit.oninput = function () {
	let c = ((parseFloat(fahrenheit.value) - 32) * 5) / 9;
	celsius.value = parseFloat(c.toFixed(2));
	let k = (parseFloat(fahrenheit.value) - 32) * 5 / 9 + 273.15;
	kelvin.value = parseFloat(k.toFixed(2));
	let r = (parseFloat(fahrenheit.value) + 459.67);
	rankine.value = parseFloat(r.toFixed(2));
	let re = (parseFloat(fahrenheit.value)-32)*4/9;
	réaumur.value = parseFloat(re.toFixed(2));
    }
kelvin.oninput = function (){ 
	let f = (parseFloat(kelvin.value) - 273.15) * 9 / 5 + 32;
	fahrenheit.value = parseFloat(f.toFixed(2));
	let c = (parseFloat(kelvin.value) - 273.15);
	celsius.value = parseFloat(c.toFixed(2));
	let r = (parseFloat(kelvin.value)*1.8);
	rankine.value = parseFloat(r.toFixed(2));
	let re = (parseFloat(kelvin.value) - 273.15)*0.8;
	réaumur.value = parseFloat(re.toFixed(2));
    }
rankine.oninput = function (){ 
	let f = parseFloat(rankine.value) - 459.67;
	fahrenheit.value = parseFloat(f.toFixed(2));
	let c = (parseFloat(rankine.value) - 491.67)/1.8;
	celsius.value = parseFloat(c.toFixed(2));
	let k = parseFloat(rankine.value)/1.8;
	kelvin.value = parseFloat(k.toFixed(2));
	let re = (parseFloat(rankine.value) -491.67)*4/9;
	réaumur.value = parseFloat(re.toFixed(2));
	}
réaumur.oninput = function (){ 
	let f = parseFloat(réaumur.value)*9/4 +32;
	fahrenheit.value = parseFloat(f.toFixed(2));
	let c = parseFloat(réaumur.value)/0.8;
	celsius.value = parseFloat(c.toFixed(2));
	let k = parseFloat(réaumur.value)*1.25+273.15;
	kelvin.value = parseFloat(k.toFixed(2));
	let r = (parseFloat(réaumur.value)*9/4) +491.67;
	rankine.value = parseFloat(r.toFixed(2));
	}