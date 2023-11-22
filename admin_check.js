function check_pass() {
    let inp = admin_pass.value;
    fetch('data.json')
    .then((res) => {
        return res.json();
    })
    .then( (obj) => {
        let act = obj['adminpass'];
        // console.log(act);
        // console.log(inp);
        // console.log((act==inp));
        if(act==inp) {
            window.location="http://localhost:3000/admin_home.html";
        }
        else {
            alert('Wrong Passwrord, Try Again')
        }
    });
}