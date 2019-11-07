document.getElementById('convert').onclick = Convert;
document.getElementById('clear').onclick = Clean;



function Convert(){
	let centimeters = document.getElementById('centimeters');
	let meters = document.getElementById('meters');
    let kilometers = document.getElementById('kilometers');
    let yards = document.getElementById('yards');
	let inches = document.getElementById('inches');
    let feet = document.getElementById('feet');
    let miles = document.getElementById('miles');

	let cent = centimeters.value;
	let met = meters.value;
    let kil = kilometers.value;
    let yar = yards.value;
	let inc = inches.value;
    let fe = feet.value;
    let mil = miles.value;


	if(cent == "" && met == "" && kil=="" && yar=="" && inc=="" && fe==""){
		fe = parseFloat(mil)*5280;
        met = parseFloat(mil)/0.00062137;
        inc = parseFloat(mil)*63360;
        cent = parseFloat(mil)/0.0000062137;
        yar = parseFloat(mil)*1760;
        kil = parseFloat(mil)/0.62137;
		centimeters.value = parseFloat(cent).toFixed(1);
        meters.value = parseFloat(met).toFixed(1);
        kilometers.value = parseFloat(kil).toFixed(1);
        yards.value = parseFloat(yar).toFixed(1);
        feet.value = parseFloat(fe).toFixed(1);
        inches.value = parseFloat(inc).toFixed(1);
	}

	miles.addEventListener('change',()=>{
		mil = miles.value;
		fe = parseFloat(mil)*5280;
        met = parseFloat(mil)/0.00062137;
        inc = parseFloat(mil)*63360;
        cent = parseFloat(mil)/0.0000062137;
        yar = parseFloat(mil)*1760;
        kil = parseFloat(mil)/0.62137;
		centimeters.value = parseFloat(cent).toFixed(1);
        meters.value = parseFloat(met).toFixed(1);
        kilometers.value = parseFloat(kil).toFixed(1);
        yards.value = parseFloat(yar).toFixed(1);
        feet.value = parseFloat(fe).toFixed(1);
        inches.value = parseFloat(inc).toFixed(1);
	});
}

function Clean(){
	document.getElementById('feet').value = "";
	document.getElementById('meters').value = "";
    document.getElementById('centimeters').value = "";
    document.getElementById('kilometers').value = "";
    document.getElementById('inches').value = "";
    document.getElementById('yards').value = "";
    document.getElementById('miles').value = "";
}