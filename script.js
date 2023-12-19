// Function to pop up the title element
function popUpElement() {
    var titleElement = document.getElementById('title');
    var imageElement = document.getElementById('image');
    titleElement.style.opacity = '1'; // Change opacity to make the title visible
    imageElement.style.opacity = '1'; // Change opacity to make the title visible

}

// Call the function when the window finishes loading
window.onload = function () {
    popUpElement();
};

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScroll() {
    const aboutSection = document.getElementById('about');

    if (isInViewport(aboutSection)) {
        aboutSection.classList.add('show');
        // Remove event listener once the section is visible
        window.removeEventListener('scroll', handleScroll);
    }
}

// Listen for scroll events
window.addEventListener('scroll', handleScroll);

// Initial check when the page loads
document.addEventListener('DOMContentLoaded', handleScroll);


// document.getElementById('downloadButton').addEventListener('click', function() {
//     // Path to the file you want to download
//     var fileUrl = '/src/resume.pdf'; // Replace this with the actual file URL
    
//     // Create an anchor element
//     var a = document.createElement('a');
//     a.href = fileUrl;
    
//     // Set the file name for download
//     a.download = '/src/resume.pdf'; // Replace 'your_file_name.pdf' with the desired file name
    
//     // Append the anchor to the body
//     document.body.appendChild(a);
    
//     // Trigger a click on the anchor to initiate download
//     a.click();
    
//     // Clean up: remove the anchor from the body
//     document.body.removeChild(a);
//   });
  