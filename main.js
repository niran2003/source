// intial test
console.log('i am js file');

// code for redirection from 
// login to cards page
// using evenlistner

// const toCardsPage = 
const  toCardsPage = document.getElementsByClassName('login-btn');

toCardsPage[0].addEventListener(('click') , () =>{

    const userName = document.getElementsByClassName('input')[0];
    const userPass = document.getElementsByClassName('input')[1];

    console.log(`userName : ${userName.value} and userPass : ${userPass.value}`);

    const user = userName.value.toLowerCase();
    const pass = userPass.value.toLowerCase();

    if((user == 'mahaveer' && pass == '1mj22cd029') || 
    (user == 'niranjan' && pass == '1mj23cd404') || 
    (user == 'aafsan' && pass == '1mj22cd001') ||
    (user == 'abc' && pass == 'abc@123'))
    {
        alert(`welcome ${user}`);
        alert(`Just a click away, ${user.toLowerCase()}!`);

        window.location.href = "card.html";
    }
    else{
        alert('Opps , wrong Username or Password');
    }
    
});