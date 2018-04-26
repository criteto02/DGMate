var buenas1 = 0;
var buenas2 = 0;
var buenas3 = 0;
var buenas4 = 0;
var buenas5 = 0;
var buenas6 = 0;
var buenas7 = 0;
var buenas8 = 0;
var buenas9 = 0;
var buenas10=0;
//Empieza nivel 1
function ejercicio1(r1) {
	document.getElementById('preg1').value = r1;
	if (r1 == 35) {
		buenas1 = buenas1 + 1;
	}
}

function ejercicio2(r2) {
	document.getElementById('preg2').value = r2;
	if (r2 == 30) {
		buenas1 = buenas1 + 1;
	}
}

function ejercicio3(r3) {
	document.getElementById('preg3').value = r3;
	if (r3 == 22) {
		buenas1 = buenas1 + 1;
	}
}

function ejercicio4(r4) {
	document.getElementById('preg4').value = r4;
	if (r4 == 45) {
		buenas1 = buenas1 + 1;
	}
}

function ejercicio5(r5) {
	document.getElementById('preg5').value = r5;
	if (r5 == 40) {
		buenas1 = buenas1 + 1;
	}
}

function mostrar_result1() {
	document.getElementById("buenas1").innerHTML = buenas1;
	document.getElementById("malas1").innerHTML = 5 - buenas1;
}
//termina nivel 1
//Empieza nivel 2
function ejercicio6(r6) {
	document.getElementById('preg6').value = r6;
	if (r6 == 36) {
		buenas2 = buenas2 + 1;
	}
}

function ejercicio7(r7) {
	document.getElementById('preg7').value = r7;
	if (r7 == 132) {
		buenas2 = buenas2 + 1;
	}
}

function ejercicio8(r8) {
	document.getElementById('preg8').value = r8;
	if (r8 == 156) {
		buenas2 = buenas2 + 1;
	}
}

function ejercicio9(r9) {
	document.getElementById('preg9').value = r9;
	if (r9 == 455) {
		buenas2 = buenas2 + 1;
	}
}

function ejercicio10(r10) {
	document.getElementById('preg10').value = r10;
	if (r10 == 415) {
		buenas2 = buenas2 + 1;
	}
}

function mostrar_result2() {
	document.getElementById("buenas2").innerHTML = buenas2;
	document.getElementById("malas2").innerHTML = 5 - buenas2;
}
//Termina nivel 2
//empieza nivel 3
function ejercicio11(r11) {
	document.getElementById('preg11').value = r11;
	if (r11 == 4) {
		buenas3 = buenas3 + 1;
	}
}

function ejercicio12(r12) {
	document.getElementById('preg12').value = r12;
	if (r12 == 9) {
		buenas3 = buenas3 + 1;
	}
}

function ejercicio13(r13) {
	document.getElementById('preg13').value = r13;
	if (r13 == 25) {
		buenas3 = buenas3 + 1;
	}
}

function ejercicio14(r14) {
	document.getElementById('preg14').value = r14;
	if (r14 == 25) {
		buenas3 = buenas3 + 1;
	}
}

function ejercicio15(r15) {
	document.getElementById('preg15').value = r15;
	if (r15 == 16) {
		buenas3 = buenas3 + 1;
	}
}

function mostrar_result3() {
	document.getElementById("buenas3").innerHTML = buenas3;
	document.getElementById("malas3").innerHTML = 5 - buenas3;
}
//termina nivel 3
//empieza nivel 4
function ejercicio16(r16) {
	document.getElementById('preg16').value = r16;
	if (r16 == 19) {
		buenas4 = buenas4 + 1;
	}
}

function ejercicio17(r17) {
	document.getElementById('preg17').value = r17;
	if (r17 == 52) {
		buenas4 = buenas4 + 1;
	}
}

function ejercicio18(r18) {
	document.getElementById('preg18').value = r18;
	if (r18 == 527) {
		buenas4 = buenas4 + 1;
	}
}

function ejercicio19(r19) {
	document.getElementById('preg19').value = r19;
	if (r19 == 271) {
		buenas4 = buenas4 + 1;
	}
}

function ejercicio20(r20) {
	document.getElementById('preg20').value = r20;
	if (r20 == 324) {
		buenas4 = buenas4 + 1;
	}
}

function mostrar_result4() {
	document.getElementById("buenas4").innerHTML = buenas4;
	document.getElementById("malas4").innerHTML = 5 - buenas4;
}
//termina nivel 4
//Empieza nivel 5
function ejercicio21(r21) {
	document.getElementById('preg21').value = r21;
	if (r21 == ">") {
		buenas5 = buenas5 + 1;
	}
}

function ejercicio22(r22) {
	document.getElementById('preg22').value = r22;
	if (r22 == ">") {
		buenas5 = buenas5 + 1;
	}
}

function ejercicio23(r23) {
	document.getElementById('preg23').value = r23;
	if (r23 == "<") {
		buenas5 = buenas5 + 1;
	}
}

function ejercicio24(r24) {
	document.getElementById('preg24').value = r24;
	if (r24 == "=") {
		buenas5 = buenas5 + 1
	}
}

function ejercicio25(r25) {
	document.getElementById('preg25').value = r25;
	if (r25 == "=") {
		buenas5 = buenas5 + 1;
	}
}

function mostrar_result5() {
	document.getElementById("buenas5").innerHTML = buenas5;
	document.getElementById("malas5").innerHTML = 5 - buenas5;
}
//termina nivel 5
//Empieza nivel 6
function ejercicio26() {
	var r26 = document.getElementById('preg26');
	if (r26.value != "") {
		r26.disabled = true;
	}
}

function nuevo26() {
	var r26 = document.getElementById('preg26');
	r26.disabled = false;
}

function ejercicio27() {
	var r27 = document.getElementById('preg27');
	if (r27.value != "") {
		r27.disabled = true;
	}
}

function nuevo27() {
	var r27 = document.getElementById('preg27');
	r27.disabled = false;
}

function ejercicio28() {
	var r28 = document.getElementById('preg28');
	if (r28.value != "") {
		r28.disabled = true;
	}
}

function nuevo28() {
	var r28 = document.getElementById('preg28');
	r28.disabled = false;
}

function ejercicio29() {
	var r29 = document.getElementById('preg29');
	if (r29.value != "") {
		r29.disabled = true;
	}
}

function nuevo29() {
	var r29 = document.getElementById('preg29');
	r29.disabled = false;
}

function ejercicio30() {
	var r30 = document.getElementById('preg30');
	if (r30.value != "") {
		r30.disabled = true;
	}
}

function nuevo30() {
	var r30 = document.getElementById('preg30');
	r30.disabled = false;

}

function mostrar_result6() {
	var r26 = document.getElementById('preg26');
	var r27 = document.getElementById('preg27');
	var r28 = document.getElementById('preg28');
	var r29 = document.getElementById('preg29');
	var r30 = document.getElementById('preg30');
	if (r26.value == 256) {
		buenas6 = buenas6 + 1;
	}
	if (r27.value == 64) {
		buenas6 = buenas6 + 1;
	}
	if (r28.value == 125) {
		buenas6 = buenas6 + 1;
	}
	if (r29.value == 729) {
		buenas6 = buenas6 + 1;
	}
	if (r30.value == 512) {
		buenas6 = buenas6 + 1;
	}
	document.getElementById("buenas6").innerHTML = buenas6;
	document.getElementById("malas6").innerHTML = 5 - buenas6;
}
//termina nivel 6
//empieza nivel 7
function mostrar_result7() {
	var a1 = document.getElementById('agudo1');
	var a2 = document.getElementById('obtuso2');
	var a3 = document.getElementById('agudo3');
	var a4 = document.getElementById('obtuso4');
	var a5 = document.getElementById('recto5');
	if ( a1.checked) {
		buenas7 = buenas7 + 1;
	}
	if ( a2.checked) {
		buenas7 = buenas7 + 1;
	}
	if ( a3.checked) {
		buenas7 = buenas7 + 1;
	}
	if ( a4.checked) {
		buenas7 = buenas7 + 1;
	}
	if ( a5.checked) {
		buenas7 = buenas7 + 1;
	}
	document.getElementById("buenas7").innerHTML = buenas7;
	document.getElementById("malas7").innerHTML = 5 - buenas7;
}
//Termina nivel 7
//empieza nivel 8
function ejercicio36() {
	var r36 = document.getElementById('preg36');
	if (r36.value != "") {
		r36.disabled = true;
		//r36.style.backgroundColor = "#6c7379";
		r36.style.color = "#ddd";
	}
}

function nuevo36() {
	var r36 = document.getElementById('preg36');
	r36.disabled = false;
	//r36.style.backgroundColor = "#ddd";
	r36.style.color = "#000";
}

function ejercicio37() {
	var r37 = document.getElementById('preg37');
	if (r37.value != "") {
		r37.disabled = true;
		r37.style.backgroundColor = "#6c7379";
		r37.style.color = "#ddd";
	}
}

function nuevo37() {
	var r37 = document.getElementById('preg37');
	r37.disabled = false;
	r37.style.backgroundColor = "#ddd";
	r37.style.color = "#000";
}

function mostrar_result8() {
	var r36 = document.getElementById('preg36');
	var r37 = document.getElementById('preg37');
	var r38 = document.getElementById('preg38');
	var r39 = document.getElementById('preg39');
	var r40 = document.getElementById('preg40');
	if (r36.value == 10) {
		buenas8 = buenas8 + 1;
	}
	if (r37.value == 15) {
		buenas8 = buenas8 + 1;
	}
	if (r38.checked) {
		buenas8 = buenas8 + 1;
	}
	if (r39.checked) {
		buenas8 = buenas8 + 1;
	}
	if (r40.checked) {
		buenas8 = buenas8 + 1;
	}
	document.getElementById("buenas8").innerHTML = buenas8;
	document.getElementById("malas8").innerHTML = 5 - buenas8;
}
//empieza nivel 9
function mostrar_result9(){
   	var r41 = document.getElementById('preg41');
	var r42 = document.getElementById('preg42');
	var r43 = document.getElementById('preg43');
	var r44 = document.getElementById('preg44');
	var r45 = document.getElementById('preg45');
    if(r41.checked){
        buenas9 = buenas9 + 1;
    }
    if(r42.checked){
        buenas9 = buenas9 + 1;
    }
    if(r43.checked){
        buenas9 = buenas9 + 1;
    }
    if(r44.checked){
        buenas9 = buenas9 + 1;
    }
    if(r45.checked){
        buenas9 = buenas9 + 1;
    }
    document.getElementById("buenas9").innerHTML = buenas9;
	document.getElementById("malas9").innerHTML = 5 - buenas9;
}
//nivel 10
function mostrar_result10(){
    var r46 = document.getElementById('preg46');
	var r47 = document.getElementById('preg47');
	var r48 = document.getElementById('preg48');
	var r49 = document.getElementById('preg49');
	var r50 = document.getElementById('preg50');
    if(r46.value == 10){
        buenas10 = buenas10 + 1;
    }
    if(r47.value == 53.3){
        buenas10 = buenas10 +1;
    }
    if(r48.value == 66.6){
        buenas10 = buenas10 + 1;
    }
    if(r49.value == 58.3){
        buenas10 = buenas10 + 1;
    }
    if(r50.value == 16.6){
        buenas10 = buenas10 + 1;
    }
    document.getElementById("buenas10").innerHTML = buenas10;
	document.getElementById("malas10").innerHTML = 5 - buenas10;
}
function ejercicio46(){
  var r46 = document.getElementById('preg46');
	if (r46.value != "") {
        var p = r46.value.indexOf(",");
        if(p == 1){
            alert('Cambiar coma (,) por un punto (.)');
        }else{
            alert('voy aqui');
            r46.disabled = true;   
        }
	}
}
function limpiar() {
    document.getElementById('rt1').value = "";
    document.getElementById('rt2').value = "";
    document.getElementById('rt4').value = "";
    document.getElementById('rt5').value = "";
    document.getElementById('rt7').value = "";
    document.getElementById('rt8').value = "";
    document.getElementById('rt10').value = "";
    document.getElementById('rt11').value = "";
    document.getElementById('rt13').value = "";
    document.getElementById('rt14').value = "";
    document.getElementById('rt16').value = "";
    document.getElementById('rt17').value = "";
    document.getElementById('rt19').value = "";
    document.getElementById('rt20').value = "";
    document.getElementById('rt22').value = "";
    document.getElementById('rt23').value = "";
    document.getElementById('rt25').value = "";
    document.getElementById('rt26').value = "";
    document.getElementById('rt28').value = "";
    document.getElementById('rt29').value = "";
	document.getElementById('preg1').value = "";
	document.getElementById('preg2').value = "";
	document.getElementById('preg3').value = "";
	document.getElementById('preg4').value = "";
	document.getElementById('preg5').value = "";
	document.getElementById('preg6').value = "";
	document.getElementById('preg7').value = "";
	document.getElementById('preg8').value = "";
	document.getElementById('preg9').value = "";
	document.getElementById('preg10').value = "";
	document.getElementById('preg11').value = "";
	document.getElementById('preg12').value = "";
	document.getElementById('preg13').value = "";
	document.getElementById('preg14').value = "";
	document.getElementById('preg15').value = "";
	document.getElementById('preg16').value = "";
	document.getElementById('preg17').value = "";
	document.getElementById('preg18').value = "";
	document.getElementById('preg19').value = "";
	document.getElementById('preg20').value = "";
	document.getElementById('preg21').value = "";
	document.getElementById('preg22').value = "";
	document.getElementById('preg23').value = "";
	document.getElementById('preg24').value = "";
	document.getElementById('preg25').value = "";
	document.getElementById('preg26').value = "";
	document.getElementById('preg27').value = "";
	document.getElementById('preg28').value = "";
	document.getElementById('preg29').value = "";
	document.getElementById('preg30').value = "";
	document.getElementById('preg36').value = "";
	document.getElementById('preg37').value = "";
	document.getElementById('preg38').value = "";
	document.getElementById('preg39').value = "";
	document.getElementById('preg40').value = "";
    document.getElementById('preg41').checked = false;
    document.getElementById('preg42').checked = false;
    document.getElementById('preg43').checked = false;
    document.getElementById('preg44').checked = false;
    document.getElementById('preg45').checked = false;
    document.getElementById('agudo1').checked = false;
	document.getElementById('obtuso2').checked = false;
	document.getElementById('agudo3').checked = false;
	document.getElementById('obtuso4').checked = false;
	document.getElementById('recto5').checked = false;
	buenas1 = 0;
	buenas2 = 0;
	buenas3 = 0;
	buenas4 = 0;
	buenas5 = 0;
	buenas6 = 0;
	buenas7 = 0;
	buenas8 = 0;
    buenas9=0;
    buenas10 =0;
}
