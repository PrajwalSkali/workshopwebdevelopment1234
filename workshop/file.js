function validform(){                       
    alert("i am in validate form");
    let val=true;
    let namevalue=document.forname.nameName.value;
    let numbervalue=12345678900;
    let pass ;
    let pass2;                 
    let genderselected = document.querySelector('input[name=gender]:checked');                             
    console.log('genderSelected',genderSelected)
    if (namevalue.length<5){
        alert('i m in if condiction');
        val = false;        
}
if (numbervalue.length < 10 || numbervalue.length > 10) {
    val = false;
}

if (selected) {
    if (selected.value === 'male') {
        alert('You have selected Male');
    } else if (selected.value === 'female') {
        alert('You have selected Female');
    }
} else {
    alert('Please select a gender');
    val = false;
}
function resetclear(){   
  document.forname.nameName.value='namevalue';  
}
}