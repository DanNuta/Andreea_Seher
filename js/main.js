const header_images = document.querySelector(".img_header_animation");
const images_animation = Array.from(header_images.children)


images_animation.forEach((item, i) =>{

    let angle = Math.random() * 90 - 45;
    let x = Math.random() * 40 - 20;
    let y = Math.random()* 40 - 20;

    if(item.classList.contains("active")){

    }else{
        item.style.transform = `translate(${x}px, ${y}px) rotate(${angle}deg)`

    }

    let nextElement = header_images.querySelector(".active");
   

    console.log(nextElement, i, "Next")

    // setTimeout(() => {
    //     curentElement.remove("active")
    //     nextElement.classList.add("active");
        
    // }, 2000);

})


