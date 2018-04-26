var t = function(id){
    return document.getElementById(id);
}
function ejemplo1(){
    var n = t('rt1');
     t('s1').href="#correcta1"; 
     var e = 10 + 15;
    if(n.value != ""){
        if(n.value == e){
            t('cc1').innerHTML = "¡ PERFECTO !";
            t('btnrt1').style.display = "block";
        }else{
            t('cc1').innerHTML = "La repuesta correcta es: " + e;
            t('btnrt1').style.display = "block";
        } 
    }else{
        t('cc1').innerHTML = "Digite su respuesta";
        t('btnrt1').style.display = "none";
    }
}
function ejemplo2(){
    var n = t('rt2');
     t('s2').href="#correcta2"; 
    if(n.value != ""){
        var e = 19 +11;
        if(n.value == e){
            t('cc2').innerHTML = "¡ PERFECTO !";
            t('btnrt2').style.display = "block";
        }else{
            t('cc2').innerHTML = "La repuesta correcta es: "+ e;
            t('btnrt2').style.display = "block";
        } 
    }else{
        t('cc2').innerHTML = "Digite su respuesta";
        t('btnrt2').style.display = "none";
    }
}
function ejemplo4(){
    var n = t('rt4');
     t('s4').href="#correcta4"; 
    if(n.value != ""){
        var w = 3 * 9;
        if(n.value == w){
            t('cc4').innerHTML = "¡ PERFECTO !";
            t('btnrt4').style.display = "block";
        }else{
            t('cc4').innerHTML = "La repuesta correcta es: " + w;
            t('btnrt4').style.display = "block";
        } 
    }else{
        t('cc4').innerHTML = "Digite su respuesta";
        t('btnrt4').style.display = "none";
    }
}
function ejemplo5(){
    var n = t('rt5');
     t('s5').href="#correcta5"; 
    if(n.value != ""){
        var w = 2 * 44;
        if(n.value == w){
            t('cc5').innerHTML = "¡ PERFECTO !";
            t('btnrt5').style.display = "block";
        }else{
            t('cc5').innerHTML = "La repuesta correcta es: " + w;
            t('btnrt5').style.display = "block";
        } 
    }else{
        t('cc5').innerHTML = "Digite su respuesta";
        t('btnrt5').style.display = "none";
    }
}
function ejemplo7(){
    var n = t('rt7');
     t('s7').href="#correcta7"; 
    if(n.value != ""){
        var w = 10/2;
        if(n.value == w){
            t('cc7').innerHTML = "¡ PERFECTO !";
            t('btnrt7').style.display = "block";
        }else{
            t('cc7').innerHTML = "La repuesta correcta es: " + w;
            t('btnrt7').style.display = "block";
        } 
    }else{
        t('cc7').innerHTML = "Digite su respuesta";
        t('btnrt7').style.display = "none";
    }
}
function ejemplo8(){
    var n = t('rt8');
     t('s8').href="#correcta8"; 
    if(n.value != ""){
        var w = 222/2;
        if(n.value == w){
            t('cc8').innerHTML = "¡ PERFECTO !";
            t('btnrt8').style.display = "block";
        }else{
            t('cc8').innerHTML = "La repuesta correcta es: " + w;
            t('btnrt8').style.display = "block";
        } 
    }else{
        t('cc8').innerHTML = "Digite su respuesta";
        t('btnrt8').style.display = "none";
    }
}
function ejemplo10(){
    var n = t('rt10');
     t('s10').href="#correcta10"; 
    if(n.value != ""){
        var w = 20-14;
        if(n.value == w){
            t('cc10').innerHTML = "¡ PERFECTO !";
            t('btnrt10').style.display = "block";
        }else{
            t('cc10').innerHTML = "La repuesta correcta es: " + w;
            t('btnrt10').style.display = "block";
        } 
    }else{
        t('cc10').innerHTML = "Digite su respuesta";
        t('btnrt10').style.display = "none";
    }
}
function ejemplo11(){
    var n = t('rt11');
     t('s11').href="#correcta11"; 
    if(n.value != ""){
        var w = 15-7;
        if(n.value == w){
            t('cc11').innerHTML = "¡ PERFECTO !";
            t('btnrt11').style.display = "block";
        }else{
            t('cc11').innerHTML = "La repuesta correcta es: " + w;
            t('btnrt11').style.display = "block";
        } 
    }else{
        t('cc11').innerHTML = "Digite su respuesta";
        t('btnrt11').style.display = "none";
    }
}
function ejemplo13(){
    var n = t('rt13');
     t('s13').href="#correcta13"; 
    if(n.value != ""){
        if(n.value == ">"){
            t('cc13').innerHTML = "¡ PERFECTO !";
            t('btnrt13').style.display = "block";
        }else{
            t('cc13').innerHTML = "La repuesta correcta es: >";
            t('btnrt13').style.display = "block";
        } 
    }else{
        t('cc13').innerHTML = "Digite su respuesta";
        t('btnrt13').style.display = "none";
    }
}
function ejemplo13m(mostrar){
    t('rt13').value = mostrar;
}
function ejemplo14(){
    var n = t('rt14');
     t('s14').href="#correcta14"; 
    if(n.value != ""){
        if(n.value == "<"){
            t('cc14').innerHTML = "¡ PERFECTO !";
            t('btnrt14').style.display = "block";
        }else{
            t('cc14').innerHTML = "La repuesta correcta es: <";
            t('btnrt14').style.display = "block";
        } 
    }else{
        t('cc14').innerHTML = "Digite su respuesta";
        t('btnrt14').style.display = "none";
    }
}
function ejemplo14m(mostrar1){
    t('rt14').value = mostrar1;
}
function ejemplo16(){
    var n = t('rt16');
     t('s16').href="#correcta16"; 
    if(n.value != ""){
        var w = 4 * 4 * 4 ;
        if(n.value == w){
            t('cc16').innerHTML = "¡ PERFECTO !";
            t('btnrt16').style.display = "block";
        }else{
            t('cc16').innerHTML = "La repuesta correcta es: "+ w;
            t('btnrt16').style.display = "block";
        } 
    }else{
        t('cc16').innerHTML = "Digite su respuesta";
        t('btnrt16').style.display = "none";
    }
}
function ejemplo17(){
    var n = t('rt17');
     t('s17').href="#correcta17"; 
    if(n.value != ""){
        var w = 2 * 2 * 2 ;
        if(n.value == w){
            t('cc17').innerHTML = "¡ PERFECTO !";
            t('btnrt17').style.display = "block";
        }else{
            t('cc17').innerHTML = "La repuesta correcta es: "+ w;
            t('btnrt17').style.display = "block";
        } 
    }else{
        t('cc17').innerHTML = "Digite su respuesta";
        t('btnrt17').style.display = "none";
    }
}
function ejemplo19(){
     t('s19').href="#correcta19"; 
        if(obt1.checked){
            t('cc19').innerHTML = "¡ PERFECTO !";
            t('btnrt19').style.display = "block";
        }else{
            t('cc19').innerHTML = "La repuesta correcta es: Obtuso";
            t('btnrt19').style.display = "block";
        } 
}
function ejemplo20(){
     t('s20').href="#correcta20"; 
        if(rect2.checked){
            t('cc20').innerHTML = "¡ PERFECTO !";
            t('btnrt20').style.display = "block";
        }else{
            t('cc20').innerHTML = "La repuesta correcta es: Obtuso";
            t('btnrt20').style.display = "block";
        }    
}
function ejemplo22(){
     t('s22').href="#correcta22"; 
        if(g4.checked){
            t('cc22').innerHTML = "¡ PERFECTO !";
            t('btnrt22').style.display = "block";
        }else{
            t('cc22').innerHTML = "La repuesta correcta es: Rául";
            t('btnrt22').style.display = "block";
        }    
}
function ejemplo23(){
     t('s23').href="#correcta23"; 
        if(g6.checked){
            t('cc23').innerHTML = "¡ PERFECTO !";
            t('btnrt23').style.display = "block";
        }else{
            t('cc23').innerHTML = "La repuesta correcta es: Paula";
            t('btnrt23').style.display = "block";
        }    
}
function ejemplo25(){
     t('s25').href="#correcta25"; 
        if(pol3.checked){
            t('cc25').innerHTML = "¡ PERFECTO !";
            t('btnrt25').style.display = "block";
        }else{
            t('cc25').innerHTML = "La repuesta correcta es: Pentágono";
            t('btnrt25').style.display = "block";
        }    
}
function ejemplo26(){
     t('s26').href="#correcta26"; 
        if(pol6.checked){
            t('cc26').innerHTML = "¡ PERFECTO !";
            t('btnrt26').style.display = "block";
        }else{
            t('cc26').innerHTML = "La repuesta correcta es: Heptágono";
            t('btnrt26').style.display = "block";
        }    
}
function ejemplo28(){
    var n = t('rt28');
     t('s28').href="#correcta28"; 
    if(n.value != ""){
        var w = 7 / 35 *100;
        if(n.value == w){
            t('cc28').innerHTML = "¡ PERFECTO !";
            t('btnrt28').style.display = "block";
        }else{
            t('cc28').innerHTML = "La repuesta correcta es: " + w + "%";
            t('btnrt28').style.display = "block";
        } 
    }else{
        t('cc28').innerHTML = "Digite su respuesta";
        t('btnrt28').style.display = "none";
    }
}
function ejemplo29(){
    var n = t('rt29');
     t('s29').href="#correcta29"; 
    if(n.value != ""){
        var w = 8 / 20 *100;
        if(n.value == w){
            t('cc29').innerHTML = "¡ PERFECTO !";
            t('btnrt29').style.display = "block";
        }else{
            t('cc29').innerHTML = "La repuesta correcta es: " + w + "%";
            t('btnrt29').style.display = "block";
        } 
    }else{
        t('cc29').innerHTML = "Digite su respuesta";
        t('btnrt29').style.display = "none";
    }
}
