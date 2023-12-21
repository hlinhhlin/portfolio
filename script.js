// Function to pop up the title element
function popUpElement() {
    var titleElement = document.getElementById('title');
    var imageElement = document.getElementById('image');
    titleElement.style.opacity = '1'; // Change opacity to make the title visible
    imageElement.style.opacity = '1'; 

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
    const aboutInfoElement = document.getElementById('about-info');
    const aboutTextElement = document.getElementById('about-text');
    const timelineExElement = document.getElementById('timeline-experience');
    const timelineEdElement = document.getElementById('timeline-education');
    const skillContainer = document.getElementById('skill-container');
    const projectContainer = document.getElementById('project-container');
    const cerContainer = document.getElementById('cer-container');
    const activityContainer = document.getElementById('activity-container');

    const isInfoInView = isInViewport(aboutInfoElement);
    const isTextInView = isInViewport(aboutTextElement);
    const isTimelineExInView = isInViewport(timelineExElement);
    const isTimelineEdInView = isInViewport(timelineEdElement);
    const isSkillInView = isInViewport(skillContainer);
    const isProjectInView = isInViewport(projectContainer);
    const isCerInView = isInViewport(cerContainer);
    const isActivityInView = isInViewport(activityContainer);

    if (isInfoInView) {
        aboutInfoElement.classList.add('show');
    }
    if (isTextInView) {
        aboutTextElement.classList.add('show');
    }
    if (isTimelineExInView) {
        timelineExElement.classList.add('show');
    }
    if (isTimelineEdInView) {
        timelineEdElement.classList.add('show');
    }    
    if (isProjectInView) {
        projectContainer.classList.add('show');
    }
    if (isCerInView) {
        cerContainer.classList.add('show');
    }
    if (isSkillInView) {
        skillContainer.classList.add('show');
    }
    if (isActivityInView) {
        activityContainer.classList.add('show');
    }
}

window.addEventListener('scroll', handleScroll);

document.addEventListener('DOMContentLoaded', handleScroll);
