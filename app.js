// https://icanhazdadjoke.com/

document.getElementById('btn').addEventListener('click',joke )

async function joke() {
    let config={
        Headers:{
            Accept:"application/json",
        },
    };

    let a=await fetch("https://icanhazdadjoke.com/",config);
    let b=await a.json();
    document.getElementById('content').innerHTML=b.joke;

    
}
