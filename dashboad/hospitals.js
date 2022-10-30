let ele= document.getElementById('cbt');

ele.onclick= function (a) {
    let newdiv= document.createElement('span');
    newdiv.innerText= "Acute Brochitis";
    newdiv.className="newclass"

    let blockdiv= document.getElementsByClassName('aftercbtn');
    blockdiv[0].append(newdiv);

    let nearbyhosp= document.getElementById('nearbyhosp');
    nearbyhosp.style.display= "block";

}
