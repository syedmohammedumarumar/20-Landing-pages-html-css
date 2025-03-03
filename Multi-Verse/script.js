document.addEventListener("DOMContentLoaded", function () {
    const slides = [
      {
        image: "imgs/img-1.png",
        content: {
          title: "OUR VISION",
          heading: "DESIGN",
          text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.",
        },
      },
      {
        image: "imgs/img-2.png",
        content: {
          title: "OUR VISION",
          heading: "ENGINE",
          text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.",
        },
      },
      {
        image: "imgs/img-3.png",
        content: {
          title: "OUR VISION",
          heading: "MOTION",
          text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.",
        },
      },
      // Add more slides here with image and content properties
    ];
  
    let currentSlideIndex = 0;
    const container = document.querySelector(".container");
    const contentTitle = document.querySelector(".content h3");
    const contentHeading = document.querySelector(".content h1");
    const contentText = document.querySelector(".content p");
  
    function changeSlide() {
      // Change the background image of the container
      container.style.backgroundImage = `url(${slides[currentSlideIndex].image})`;
  
      // Update the content based on the current slide
      const currentSlide = slides[currentSlideIndex].content;
      contentTitle.textContent = currentSlide.title;
      contentHeading.textContent = currentSlide.heading;
      contentText.textContent = currentSlide.text;
  
      // Update the currentSlideIndex for the next slide
      currentSlideIndex++;
  
      // Reset the index if it exceeds the number of slides
      if (currentSlideIndex === slides.length) {
        currentSlideIndex = 0;
      }
    }
  
    // Call the function initially
    changeSlide();
  
    // Set an interval to change the slide every 5000 milliseconds (5 seconds)
    setInterval(changeSlide, 4000);
  });
  

  let menuList = document.getElementById('menuList');
  menuList.style.maxHeight= "0px";

function toggleMenu(){
    if(menuList.style.maxHeight == "0px"){
        menuList.style.maxHeight= "300px";
    }
    else{
        menuList.style.maxHeight= "0px";
    }
}