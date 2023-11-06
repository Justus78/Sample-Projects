var container2 = document.getElementsByClassName("container2")[0];
var container3 = document.getElementsByClassName("container3")[0];
var checkIcon = document.getElementById("checkIcon");
var xIcon = document.getElementById("x-Icon");

var i = 0;

checkIcon.addEventListener("click", function(){
    createNote();
});

xIcon.addEventListener("click", function(){
    typeNote();
});



function typeNote(){
    if(container3.style.display == "none"){
        container3.style.display = "block";
    }else{
        container3.style.display = "none";
    }
}

function createNote(){

    // get the value from the textarea
    var noteText = document.getElementById("text").value;

    // create an element div, 
    var node0 = document.createElement("div");
    // create an h1 element to later add to the div created above
    var node1 = document.createElement("h1");

    // set the h1 value to the value of the note text
    node1.innerHTML = noteText;
    // style the h1 element
    node1.setAttribute("style", "width:250px; height:250px;"+ 
    "font-size:26px; padding:25px; margin-top:10px; overflow:hidden;"+
    "box-shadow: 0px 10px 24px 0pc rgba(0,0,0,0.75)");

    // call functions to randomly select the margin, color and transform attributes
    node1.style.margin = margin();
    node1.style.transform = rotate();
    node1.style.background = color();

    // append the h1 element to the newly created div
    node0.appendChild(node1);
    // add the new div element to the container 2 div
    container2.insertAdjacentElement("beforeend", node0);

    // scales the note on mouse hover
    node0.addEventListener("mouseenter", function(){
        node1.style.transform = "scale(1.1)";        
    })

    // returns the scale to normal when the mouse hover is gone
    node0.addEventListener("mouseleave", function(){
        node1.style.transform = "scale(1)";
    })

    // remove the note by double clicking
    node0.addEventListener("dblclick", function(){
        node0.remove();
    })

    // reset the textarea
    document.getElementById("note-text").value = "";

} // end function



function margin(){
    var random_margin = ["-5px", "1px", "5px", "10px", "15px", "20px"];
    return random_margin[Math.floor(Math.random() * random_margin.length)]; 
} // end function

function rotate(){
    var random_rotate = ["rotate(3deg)","rotate(1deg)","rotate(-1deg)",
                        "rotate(-3deg)","rotate(-5deg)","rotate(-10deg)",];
    return random_rotate[Math.floor(Math.random() * random_rotate.length)];
} // end function

function color(){
    var random_color = ["#c2ff3d", "#ff3de8", "#3dc2ff", 
                        "#04e022", "#bc83e6", "#ebb328"];
    if (i > random_color.length - 1){
        i = 0;
    } // end if
    return random_color[i++];
} // end function