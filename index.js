let numberOfPetals = 10
for(i=0;i<numberOfPetals;i++){
    let petalCont = document.createElement('div');
    petalCont.className="petalCont";
    petalCont.innerHTML="<div class='petal'></div>";
    petalCont.style.transform = 'rotate('+(i*(360/numberOfPetals))+'deg)';
    document.getElementById('flower').appendChild(petalCont);
}
for(i=0;i<numberOfPetals;i++){
    let petalCont = document.createElement('div');
    petalCont.className="petalCont inner";
    petalCont.innerHTML="<div class='petal inner'></div>";

    petalCont.style.transform = 'rotate('+(55+(i*(360/numberOfPetals)))+'deg)';
    document.getElementById('flower').appendChild(petalCont);
}
for(i=0;i<numberOfPetals;i++){
    let petalCont = document.createElement('div');
    petalCont.className="petalCont inner2";
    petalCont.innerHTML="<div class='petal inner2'></div>";
    petalCont.style.transform = 'rotate('+(35+(i*(360/numberOfPetals)))+'deg)';
    document.getElementById('flower').appendChild(petalCont);
}
let code=(i*2*(180/numberOfPetals))