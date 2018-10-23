document.querySelector('.grid').addEventListener('mouseover', function(e) {
    if (e.target.tagName === 'IMG') { // Check if the images only is clicked
        
        var imgWrapper = document.createElement("div"); // create a div in the memory
        imgWrapper.className = "preview"; // adding class to the dov
        e.target.parentNode.appendChild(imgWrapper); // append the div to the li

        var img = document.createElement("img"), // create an img in the memory
            currentImgSrc = e.target.src; // grab the src of the current targeted img
        img.src = currentImgSrc.substr(0, currentImgSrc.length - 7) + ".jpg"; // set the src for the neweley created img

        imgWrapper.appendChild(img); // append the img to the div
  
    } // check to see that I clicked on IMG only
  }, false); // Mouse Over Event