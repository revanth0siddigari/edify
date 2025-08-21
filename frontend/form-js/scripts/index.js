function submit(){
    document.getElementById("d_name").innerHTML=document.getElementById("Name").value;
    document.getElementById("d-email").innerHTML=document.getElementById("email").value;
    document.getElementById("d-ph").innerHTML=document.getElementById("ph").value;
    document.getElementById("d-city").innerHTML=document.getElementById("city").value;
}
function reset(){
    document.getElementById("d_name").innerHTML='';
    document.getElementById("d-email").innerHTML='';
    document.getElementById("d-ph").innerHTML='';
    document.getElementById("d-city").innerHTML='';
}
 Name.addEventListener('input', function(){
    d_name.textContent = Name.value;
 });