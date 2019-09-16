

document.addEventListener("DOMContentLoaded", function(){
    

    
    });


    

    let main = document.querySelector('main#main');
    main.remove()

    let newHeader = document.createElement('h1');
    newHeader.innerHTML = "ASIF-KHAN is the champion";
    newHeader.setAttribute('id', 'victory');
    document.body.appendChild(newHeader)  

