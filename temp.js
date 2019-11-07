document.getElementById('convert').onclick = Convert;
document.getElementById('clear').onclick = Clean;



function Convert(){
	let celsius = document.getElementById('celsius');
	let fahrenheit = document.getElementById('fahrenheit');
	let kelvin = document.getElementById('kelvin');

	let cel = celsius.value;
	let fah = fahrenheit.value;
	let kel = kelvin.value;

	if(cel == "" && fah == ""){
		cel = parseFloat(kel) - 273.15;
		fah = (parseFloat(kel) - 273.15) * 1.8 + 32 ;
		document.getElementById('fahrenheit').value = parseFloat(fah).toFixed(1);
		document.getElementById('celsius').value = parseFloat(cel).toFixed(1);
	}
	
	if(cel == "" && kel == ""){
		cel = ((parseFloat(fah) - 32) * 5) / 9;
		kel = ((parseFloat(fah) - 32) * 5) / 9 +273.15;
		document.getElementById('celsius').value = parseFloat(cel).toFixed(1);
		document.getElementById('kelvin').value = parseFloat(kel).toFixed(1);
	}

	if(fah == "" && kel == ""){
		fah = parseFloat(cel) * 1.8 + 32;
		kel = parseFloat(cel) + 273.15;
		document.getElementById('fahrenheit').value = parseFloat(fah).toFixed(1);
		document.getElementById('kelvin').value = parseFloat(kel).toFixed(1);
	}

	celsius.addEventListener('change',()=>{
		cel = celsius.value;
		fah = parseFloat(cel) * 1.8 + 32;
		kel = parseFloat(cel) + 273.15;
		document.getElementById('fahrenheit').value = parseFloat(fah).toFixed(1);
		document.getElementById('kelvin').value = parseFloat(kel).toFixed(1);
	});
	
	fahrenheit.addEventListener('change',()=>{
		fah = fahrenheit.value;
		cel = ((parseFloat(fah) - 32) * 5) / 9;
		kel = ((parseFloat(fah) - 32) * 5) / 9 +273.15;
		document.getElementById('celsius').value = parseFloat(cel).toFixed(1);
		document.getElementById('kelvin').value = parseFloat(kel).toFixed(1);
	});

	kelvin.addEventListener('change',()=>{
		kel = kelvin.value;
		cel = parseFloat(kel) - 273.15;
		fah = (parseFloat(kel) - 273.15) * 1.8 + 32 ;
		document.getElementById('fahrenheit').value = parseFloat(fah).toFixed(1);
		document.getElementById('celsius').value = parseFloat(cel).toFixed(1);
	});
}

function Clean(){
	document.getElementById('celsius').value = "";
	document.getElementById('fahrenheit').value = "";
	document.getElementById('kelvin').value = "";
}