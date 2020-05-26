//Source array and vars
    var images =[
        {
            id: 'y',
            src:'./img/y.jpg',
            prod:'Leave',
            color:'var(--yellow)',
            top:'100px',
            right:'16px',
            href:'',
            srcTr:'./img/y-tr.svg'
        }, 
        {
            id: 'b',
            src: './img/b.jpg',
            prod: null,
            color: null,
            top:'80px',
            right:'24px',
            href:'',
            srcTr:'./img/b-tr.svg'
        },
        {
            id:'r',
            src: './img/r.jpg',
            prod:'Mobile',
            color:'var(--red)',
            top:'40px',
            right:'-34px',
            href:'',
            srcTr:'./img/r-tr.svg'
        },
        {
            id:'p',
            src: './img/p.jpg',
            prod:null,
            color:'var(--pink)',
            top:'80px',
            right:'24px',
            href:'',
            srcTr:'./img/p-tr.svg'
        },
        {
            id: 'g',
            src: './img/g.jpg',
            prod:'Payroll',
            color:'var(--green)',
            top:'100px',
            right:'-40px',
            href:'',
            srcTr:'./img/g-tr.svg'
        }, 
        {
            id:'o',
            src:'./img/o.jpg',
            prod:'Attendance',
            color:'var(--orange)',
            top:'80px',
            right:'0px',
            href:'',
            srcTr:'./img/o-tr.svg'
        }]; 

    var container = document.querySelector('.container');
    var containerB = document.querySelector('.container-b');
    var rNum;

//Sort array    
    var randomImages = images.sort(func);  
    function func(a, b) {
        return 0.5 - Math.random();
    }  

//Generate initial iamges for container
    for (i=0; i<images.length; i++){
        var elemCont = document.createElement("div");
        elemCont.style.position = 'relative';
        container.appendChild(elemCont);

        if (randomImages[i].prod !== null){
            //Create flex container to align link with triangle
            var prodBlock = document.createElement('div');
            prodBlock.classList.add('prod-link-block');
            prodBlock.style.top = randomImages[i].top;
            prodBlock.style.right = randomImages[i].right;
            elemCont.appendChild(prodBlock);

            //Create link
            var link = document.createElement('a');
            link.innerHTML = randomImages[i].prod;
            link.classList.add('prod-link');
            link.style.background = randomImages[i].color;
            link.href = randomImages[i].href;
            prodBlock.appendChild(link);

            //Add svg
            var triangle = document.createElement('img');
            triangle.src = randomImages[i].srcTr;
            triangle.style.height ='12px';
            prodBlock.appendChild(triangle);
        }

        var elem = document.createElement("img");
        elem.src = randomImages[i].src;
        elemCont.appendChild(elem);   
    }

//Sort array for containerB
    randomImages = images.sort(func); 

//Generate initial iamges for the containerB
    for (i=0; i<images.length; i++){
        var elemCont = document.createElement("div");
        elemCont.style.position = 'relative';
        containerB.appendChild(elemCont);

        if (randomImages[i].prod !== null){
            //Create flex container to align link with triangle
            var prodBlock = document.createElement('div');
            prodBlock.classList.add('prod-link-block');
            prodBlock.style.top = randomImages[i].top;
            prodBlock.style.right = randomImages[i].right;
            elemCont.appendChild(prodBlock);

            //Create link
            var link = document.createElement('a');
            link.innerHTML = randomImages[i].prod;
            link.classList.add('prod-link');
            link.style.background = randomImages[i].color;
            link.href = randomImages[i].href;
            prodBlock.appendChild(link);

            //Add svg
            var triangle = document.createElement('img');
            triangle.src = randomImages[i].srcTr;
            triangle.style.height ='12px';
            prodBlock.appendChild(triangle);
        }

        var elem = document.createElement("img");
        elem.src = randomImages[i].src;
        elemCont.appendChild(elem);

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
        // Remove the children
        for (i=0; i<images.length; i++){
            containerB.removeChild(containerB.childNodes[i]);
        }

        //Random array
        randomImages = images.sort(func); 

        for (i=0; i<images.length; i++){
            var elemCont = document.createElement("div");
            elemCont.style.position = 'relative';
            containerB.appendChild(elemCont);

            if (randomImages[i].prod !== null){
                //Create flex container to align link with triangle
                var prodBlock = document.createElement('div');
                prodBlock.classList.add('prod-link-block');
                prodBlock.style.top = randomImages[i].top;
                prodBlock.style.right = randomImages[i].right;
                elemCont.appendChild(prodBlock);

                //Create link
                var link = document.createElement('a');
                link.innerHTML = randomImages[i].prod;
                link.classList.add('prod-link');
                link.style.background = randomImages[i].color;
                link.href = randomImages[i].href;
                prodBlock.appendChild(link);

                //Add svg
                var triangle = document.createElement('img');
                triangle.src = randomImages[i].srcTr;
                triangle.style.height ='12px';
                prodBlock.appendChild(triangle);
            }

            var elem = document.createElement("img");
            elem.src = randomImages[i].src;
            elemCont.appendChild(elem); 

            //Flip image at random
            rNum = Math.floor(Math.random() * 10);
            if(rNum > 5){
                elem.classList.add("flip");     
            }
        }  
    }, 160000)