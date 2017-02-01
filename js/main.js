// Filling canvas
function fillCanvas(){
    
    // Selecting the canvas
    var canvas = document.querySelector("#myCanvas");
    
    // Preparing the canvas for drawing , scanning its width and height parameters
    var context = canvas.getContext("2d");
    
    context.fillStyle="#FF0000";
    
    context.fillRect(10,10,280,130);
    
}

// Invoking filling
//fillCanvas();


//Filling image in canvas
function fillImg(){
    
    var canvas = document.querySelector("#myCanvas");

    var context = canvas.getContext("2d");
    
    //Drawing lines
    context.moveTo(145 , 0);
    context.lineTo(145 , 250);
    context.stroke();
    
    //Drawing a circle 
    context.beginPath();
    context.arc(225 , 75 , 40 , 0 , 2*Math.PI);
    context.stroke();
    
    // Selecting and drawing the image
    var img = document.querySelector("#myImg");
    context.drawImage(img,5,5);
    
}

fillImg();


//Drag and Drop the image

function allowDrop(ev){
    
    //console.log(ev.target);
    //ev.target.style.border="dashed 5px #D3D3D3";
    ev.preventDefault();
}


// Dragging the element off the target div

function dropLeaved(ev){
    
    //ev.target.style.border = "solid 1px #777777";
    ev.preventDefault();
    
}


//Start dragging the element

function drag(ev){
    
    ev.dataTransfer.setData("id",ev.target.id);
    
}


// Dropping the element in the target

function drop(ev){
    
    ev.preventDefault();
    
    //target of the event
    var destDiv = ev.target;
    
    
    var id= ev.dataTransfer.getData("id");
    
    // source div element
    var sourceDiv = document.querySelector("#"+id).parentNode;
    
    // Adding the element
    destDiv.appendChild(document.querySelector("#"+id));
    
    // Displaying the price of both of divs
    calcPrice(destDiv);
    
    calcPrice(sourceDiv);
}

function calcPrice(div){
    
    //Searching for the elements of the div
    
    var order = div.querySelectorAll("[data-price]");
    
    // Iterating through the elements
    
    var sum=0;
    
    Array.prototype.forEach.call(order, function(item){
    
        var price = item.getAttribute("data-price");   
        
        sum += parseInt(price ,10);
        
        
    });
    
    div.querySelector(".price-div").innerHTML = sum + " Ft";
    
}
