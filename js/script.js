document.querySelector('.grid').addEventListener('contextmenu', function(e) {
    e.preventDefault();

    if (e.target.tagName === 'IMG') { // Check if the images only is clicked
        
        var imgWrapper = document.createElement("div"); // create a div in the memory
        imgWrapper.className = "preview"; // adding class to the dov
        e.target.parentNode.appendChild(imgWrapper); // append the div to the li

        var img = document.createElement("img"), // create an img in the memory
            currentImgSrc = e.target.src; // grab the src of the current targeted img
        img.src = currentImgSrc.substr(0, currentImgSrc.length - 7) + ".jpg"; // set the src for the neweley created img

        imgWrapper.style.left = e.offsetX + 10 + "px"; // set the left position
        imgWrapper.style.top = e.offsetY + 10 + "px"; // set the top position

        imgWrapper.appendChild(img); // append the img to the div

        e.target.addEventListener("mouseout", function handler(d) { // add event handler for the mouseout
            var myNode = d.target.parentNode.querySelector("div.preview"); // get the .preview div
            myNode.parentNode.removeChild(myNode); // remove the div when mouse out the img
            e.target.removeEventListener("mouseout", handler, false); // remove the event handle not to cause a lot of errors
        }, false);
        
        e.target.addEventListener("mousemove", function(f) { // add event listner for the mouse move
            imgWrapper.style.left = f.offsetX + 10 + "px"; // set the left position
            imgWrapper.style.top = f.offsetY + 10 + "px"; // set the top position
        });
  
    } // check to see that I clicked on IMG only
  }, false); // Mouse Over Event