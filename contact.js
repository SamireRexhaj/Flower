let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};

const inputs=document.querySelectorAll(".input");

        function focusFunc() {
            let parent=this.parentNode;
            parent.classList.add("focus");
        }
        function blurFunc() {
            let parent=this.parentNode;
            if(this.value == ""){
                parent.classList.remove("focus");

            }
            
        }

        inputs.forEach((input)=> {
            input.addEventListener("focus",focusFunc);
            input.addEventListener("blur",blurFunc);
        });   