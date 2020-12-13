class ImageCarnival{


    constructor(image_carnival_id){
        
        this.id = image_carnival_id;
        this.slideIndex = 0;
        document.querySelector("#" + this.id + " .project_pics").style.display = "block";

    }

    setTimeout(){

        let that = this;

        this.timeout = window.setTimeout(function(){

            that.switchSlides(that);

        }, 15000);

    }

    removeTimeout(){

        window.clearTimeout(this.timeout);

    }

    increment(n){

        let pictures = document.querySelectorAll("#" + this.id + " .project_pics");

        console.log("#" + this.id + " .project_pics");
    
        for(let i = 0; i < pictures.length; i++){
            pictures[i].style.display = "none";
        }
        
        this.slideIndex += n;
        
        if(this.slideIndex < 0){ 
            this.slideIndex = pictures.length - 1; 
        }
        if(this.slideIndex >= pictures.length){ 
            this.slideIndex = 0; 
        }
        
        pictures[this.slideIndex].style.display = "block";
    
        let that = this;

        window.clearTimeout(this.timeout);
        this.timeout = window.setTimeout(function(){

            that.switchSlides(that);

        }, 15000);
        
        
    }
    
    switchSlides(that){
    
        let pictures = document.querySelectorAll("#" + that.id + " .project_pics");

        for(let i = 0; i < pictures.length; i++){
            pictures[i].style.display = "none";
        }
    
        that.slideIndex++;
    
        if(that.slideIndex >= pictures.length){ 
            that.slideIndex = 0; 
        }
    
        pictures[that.slideIndex].style.display = "block";
        that.timeout = window.setTimeout(function(){

            that.switchSlides(that);

        }, 15000);
    
    }

}

let project_id_list = ["project_text_one", "project_text_two", "project_text_three", "project_text_four", "project_text_five", "project_text_six", "project_text_seven", "project_text_eight", "project_text_nine"];
let image_carnival_list = [];
let carnival_index = 0;

function clickOne(){
    carnival_index = 0;
    image_carnival_list[carnival_index].setTimeout;
    openProject(project_id_list[0]);
}

function clickTwo(){
    carnival_index = 1;
    image_carnival_list[carnival_index].setTimeout;
    openProject(project_id_list[1]);
}

function clickThree(){
    carnival_index = 2;
    image_carnival_list[carnival_index].setTimeout;
    openProject(project_id_list[2]);
}

function clickFour(){

    openProject(project_id_list[3]);
}

function clickFive(){
    openProject(project_id_list[4]);
}

function clickSix(){
    openProject(project_id_list[5]);
}

function clickSeven(){
    carnival_index = 3;
    image_carnival_list[carnival_index].setTimeout;
    openProject(project_id_list[6]);
}

function clickEight(){
    carnival_index = 4;
    image_carnival_list[carnival_index].setTimeout;
    openProject(project_id_list[7]);
}

function clickNine(){
    carnival_index = 5;
    image_carnival_list[carnival_index].setTimeout;
    openProject(project_id_list[8]);
}

// Opening and Closing the Modal Box
function openProject(project_id){

    let body = document.querySelector("body");
    let modal_box = document.querySelector(".project_page");
    let project_box = document.querySelector(".project_box");

    setProjectText(project_id);

    modal_box.style.display = "block";
    reflow(project_box);

    modal_box.classList.add("transition_opacity");
    project_box.classList.add("transition_top");

    body.classList.add("project_open");

}

function setProjectText(project_id){

    makeAllNone();

    document.querySelector("#" + project_id).classList.remove("display_none");

}

function makeAllNone(){

    for(let i = 0; i < project_id_list.length; i++){

        let current_project_text = document.querySelector("#" + project_id_list[i]);

        current_project_text.classList.add("display_none");

    }

}

function closeProject(){

    let modal_box = document.querySelector(".project_page");
    let project_box = document.querySelector(".project_box");

    modal_box.classList.remove("transition_opacity");
    project_box.classList.remove("transition_top");
    
    setTimeout(removeProject, 700);

}

function removeProject(){

    let body = document.querySelector("body");
    let modal_box = document.querySelector(".project_page");
    let project_box = document.querySelector(".project_box");
    modal_box.style.display = "none";

    reflow(project_box);

    project_box.removeEventListener("transitionend", removeProject);

    removeTimeout(carnival_index);

    body.classList.remove("project_open");


}

function increment(index, value){

    if(image_carnival_list.length > 0){
        image_carnival_list[index].increment(value);
    }

}

function removeTimeout(index){

    image_carnival_list[index].removeTimeout();

}



function onWindowLoad(){

    let project_one = document.querySelector("#project_one");
    let project_two = document.querySelector("#project_two");
    let project_three = document.querySelector("#project_three");
    let project_four = document.querySelector("#project_four");
    let project_five = document.querySelector("#project_five");
    let project_six = document.querySelector("#project_six");
    let project_seven = document.querySelector("#project_seven");
    let project_eight = document.querySelector("#project_eight");
    let project_nine = document.querySelector("#project_nine");
    let close_project_button = document.querySelector(".close_project");
    

    project_one.onclick = clickOne;
    project_two.onclick = clickTwo;
    project_three.onclick = clickThree;
    project_four.onclick = clickFour;
    project_five.onclick = clickFive;
    project_six.onclick = clickSix;
    project_seven.onclick = clickSeven;
    project_eight.onclick = clickEight;
    project_nine.onclick = clickNine;
    close_project_button.onclick = closeProject;

    image_carnival_list = [new ImageCarnival("image_carnival_one"), 
                            new ImageCarnival("image_carnival_two"), 
                            new ImageCarnival("image_carnival_three"), 
                            new ImageCarnival("image_carnival_four"), 
                            new ImageCarnival("image_carnival_five"), 
                            new ImageCarnival("image_carnival_six")];

}

function reflow(element){

    console.log(element.offsetHeight);

}

window.onload = onWindowLoad;

