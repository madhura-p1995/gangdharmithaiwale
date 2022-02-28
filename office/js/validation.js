var myform = document.getElementsByName('myform')[0];

myform.addEventListener('submit',validateForm);

function validateForm(e){

    var name = this.name.value;
    var pattern = /^[a-z\sA-Z]+$/;

    if(name == ''){

        err.innerHTML = 'please enter your name';
        e.preventDefault();

    }else if(pattern.test(name) == false){

        err.innerHTML = 'please enter valid name';
        e.preventDefault();

    }else{
        err.innerHTML = '';
    }

    //pincode validation

    var pincode = this.pincode.value;
    var pattern = /^[0-9]{6}$/;

    if(pincode == ''){

        err2.innerHTML = 'please enter your pincode';
        e.preventDefault();

    }else if(pattern.test(pincode) == false){

        err2.innerHTML = 'please enter valid pincode';
        e.preventDefault();

    }else{
        err2.innerHTML = '';
    }

    //password validation

    var pass = this.pass.value;
    var cpass = this.cpass.value;
    var pattern = /^[0-9]{6}$/;

    var capital = false;
    var special = false;
    var numbers = false;

    if(pass.match(/[A-Z]+/)){
        capital = true;
    }

    if(pass.match(/\W/)){
        special = true;
    }

    if(pass.match(/[0-9]+/)){
        numbers = true;
    }

    if(pass == ''){
        err3.innerHTML = 'please enter your password';
        e.preventDefault();
    }
    else if(pass.length < 5){
        err3.innerHTML = 'please enter minimum 5 characters';
        e.preventDefault();
    }
    else if(capital && special && numbers){
        err3.innerHTML = 'password is strong';

        if(cpass == ''){
            document.getElementsByName('cpass')[0].removeAttribute('disabled');
            err4.innerHTML = 'dont leave this field blank';
            e.preventDefault();
        }else{
            err4.innerHTML = '';
        }

    }
    else{
        err3.innerHTML = 'password is weak, please enter combination of number, capital and special character';
        e.preventDefault();
    }

    
    

}