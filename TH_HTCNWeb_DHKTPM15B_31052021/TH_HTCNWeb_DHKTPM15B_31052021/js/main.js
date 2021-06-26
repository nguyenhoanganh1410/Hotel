var email = 'hoanganh1410tb@gmail.com'
var pass = '14102000k'


function checkMail(){
    var mail = document.getElementById('email').value
    let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(reg.test(mail)){
        document.getElementById('errEmail').innerHTML = '*'
        return true;
    }
    else{
        document.getElementById('errEmail').innerHTML = 'Mail khong dung dinh dang'
        return false;
    }
}

function login(){
    var mail = document.getElementById('email').value
    var password = document.getElementById('pass').value

    if(email===mail && pass === password){
        alert('Dang nhap thanh cong !!');
    }
    else{
        alert('Ten TK hoac MK khong chinh xac')
    }
}