//Source array and vars
    var images =[
        {
            id: 'y',
            src:'./y.jpg',
        }, 
        {
            id: 'b',
            src: './b.jpg',
        },
        {
            id:'r',
            src: './r.jpg',
        },
        {
            id:'p',
            src: './p.jpg',
        },
        {
            id: 'g',
            src: './g.jpg',
        }, 
        {
            id:'o',
            src:'./o.jpg',
        }]; 

    var container = document.querySelector('.container');
    var containerB = document.querySelector('.container-b');
    var rNum;

//Sort array    
    var randomImages = images.sort(func);  
    function func(a, b) {
        return 0.5 - Math.random();
    }  

//Generate initial iamges
    for (i=0; i<images.length; i++){
        var elem = document.createElement("img");
        elem.src = randomImages[i].src;
        container.appendChild(elem);     
        elem.classList.add(randomImages[i].id);   
    }

//Sort array for second container
    randomImages = images.sort(func); 
    
//Generate initial iamges for second container
    for (i=0; i<images.length; i++){
        var elem = document.createElement("img");
        elem.src = randomImages[i].src;
        containerB.appendChild(elem);
        elem.classList.add(randomImages[i].id); 
        
        //Flip image at random
        rNum = Math.floor(Math.random() * 10);
        if(rNum > 5){
            elem.classList.add("flip");  
        }
    }

//Switch container to containerB animation
    setInterval(function(){
        container.style.left = "1440px";     
        container.classList.add("anim");

        setInterval(function(){
            // Remove the child
            for (i=0; i<images.length; i++){
                container.removeChild(containerB.childNodes[i]);
            }

            //Random array
            randomImages = images.sort(func); 

            for (i=0; i<images.length; i++){
                var elem = document.createElement("img");
                elem.src = randomImages[i].src;
                container.appendChild(elem);
                elem.classList.add(randomImages[i].id); 

                rNum = Math.floor(Math.random() * 10);
            //Flip image at random
                if(rNum > 5){
                    elem.classList.add("flip");     
                }
            }  
        }, 160000)

    }, 80000)

    setInterval(function(){
        // Remove the child
        for (i=0; i<images.length; i++){
            containerB.removeChild(containerB.childNodes[i]);
        }

        //Random array
        randomImages = images.sort(func); 

        for (i=0; i<images.length; i++){
            var elem = document.createElement("img");
            elem.src = randomImages[i].src;
            containerB.appendChild(elem);
            elem.classList.add(randomImages[i].id);  

        //Flip image at random
            rNum = Math.floor(Math.random() * 10);
            if(rNum > 5){
                elem.classList.add("flip");     
            }
        }  
    }, 160000)