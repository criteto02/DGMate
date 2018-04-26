$(document).ready(function () {
   // load()
});
var c = function (id) {
    return document.getElementById(id);
}
//Creación de base de datos 
var bd = openDatabase('dgmate', '1.0', 'base de datos guardar resultados', 2 * 1024 * 1024);
//Eventos click
$('#btnlisto').on('click', function () {
    registrar()
});
$("#conectar").on('click', function () {
    entrar()
});
$("#btnPerfil").on('click', function () {
    EditUser()
});
$('#checkContra').on('change', function () {
    MCambioContra();
});
$("#mC").on('change', function(){
    MostrarContra();
});
//Registrar los usuarios
function registrar() {
    var nick = c('nick').value
    var pass = c('pass').value
    var pass2 = c('pass2').value
    var email = c('email').value
    if (nick == "" || pass == "" || pass2 == "" || email == "") {
        alert('Todos los campos son obligatorios');
        $(".vali").css("border", "1px solid #cc2424");
    } else {
        if (pass.value == pass2.value) {
            //Guardar los datos en web Sql
            bd.transaction(function (tx) {
                tx.executeSql('CREATE TABLE IF NOT EXISTS usuarios (user PRIMARY KEY, pass, email)');
                tx.executeSql('INSERT INTO usuarios (user,pass,email) VALUES (?,?,?)', [nick, pass, email]);
            });
            //guardar en local storage
            localStorage.setItem('name', nick);
            localStorage.setItem('pw', pass);
            localStorage.setItem('email', email)
            $.mobile.changePage("#login", {
                transition: "slideup"
            });
        } else {
            alert('La contraseña no coinciden');
            $(".vali").css("border", "none");
            $(".vali2").css("border", "1px solid #cc2424");
        }
    }
}
//Iniciar sesion
function entrar() {
    var userName = c('user');
    var userPw = c('passuser');
    if (userName.value == "" || userPw.value == "") {
        alert('Todos los campos son obligatorios');
    } else {
        //Traer lo que esta en localStorage
        var storedName = localStorage.getItem('name');
        var storedPw = localStorage.getItem('pw');
        var storedEmail = localStorage.getItem('email');
        if (userName.value == storedName && userPw.value == storedPw || userName.value == storedEmail) {
            $.mobile.changePage("#temas", {
                transition: "slideup"
            });
        } else {
            $(".vali").css("border", "1px solid #cc2424");
            alert('Usuario o contraseña incorrecta');
        }
    }
}
/*function load(){
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw'); 
    if(storedName != null && storedPw != null){
         $.mobile.changePage( "#temas", {transition: "slideup"});
    }else{
       $.mobile.changePage("#portada", {transition:"slideup"});
    }
}*/
function Muser() {
    c("iduser").innerHTML = localStorage.getItem('name');;
}

function EditUser() {
    c("Pnick").value = localStorage.getItem('name');
    c("Pemail").value = localStorage.getItem('email');
    c("Ppass").value = localStorage.getItem('pw');
    c("Ppass").style.display = "none";
    c("txtPp").style.display = "none";
    c("mC").style.display = "none";
    c("mC1").style.display = "none";
}

function MCambioContra() {
    if (c("Ppass").style.display == "none") {
        c("Ppass").style.display = "block";
        c("txtPp").style.display = "block";
        c("mC").style.display = "block";
        c("mC1").style.display = "block";
    } else {
        c("Ppass").style.display = "none";
        c("txtPp").style.display = "none";
        c("mC").style.display = "none";
        c("mC1").style.display = "none";
    }
}

function MostrarContra(){
    /*if($("#Ppass").attr("type","password")){
        $("#Ppass").attr("type","text");
       }else{
           alert("sss");
          $("#Ppass").attr("type","password"); 
       }*/
       $("#Ppass").attr("type","text");
    //$("#Ppass").attr("type","password");
}

















