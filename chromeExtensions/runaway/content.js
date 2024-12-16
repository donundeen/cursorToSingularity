// content.js

    console.log('DOMContentLoaded');
    const elements = document.querySelectorAll('a, button, [onclick]');
    elements.forEach(element => {
        element.addEventListener('mouseover', (event) => {
            // Action when mouse enters the element
            console.log('mouseover:', event.clientX, event.clientY);
            // Get the bounding rectangle
            const rect = element.getBoundingClientRect();
            console.log(rect.top, rect.left, rect.x, rect.y);
            console.log($(element).position(), $(element).offset(), element.style.top, element.style.left, element.top, element.left, element.x, element.y);
            // Access the absolute position
            offsetx = $(element).position().top.toString() + 'px';
            offsety = $(element).position().left.toString() + 'px';
            console.log(offsetx, offsety);
            element.style.position = 'absolute';
            element.style.top = offsety;
            element.style.left = offsetx;
            console.log( element.style.left, element.style.top,);

            return;

            const absoluteX = rect.left + window.scrollX; // X position relative to the document
            const absoluteY = rect.top + window.scrollY;  // Y position relative to the document
            console.log('absoluteX:', absoluteX, 'absoluteY:', absoluteY, "window.scrollX:", window.scrollX, "window.scrollY:", window.scrollY);
            // Set the left and top properties to match the current position
//            element.style.position = 'fixed'; 
            element.style.left = element.style.left- 20+"px";
            element.style.top = element.style.top- 20+"px";
            console.log(element.style);
            return;
            element.style.left = (rect.left + window.scrollX) - 20+ 'px'; // Set left to current left position + scroll
            element.style.top = (rect.top + window.scrollY) - 20+ 'px';   // Set top to current top pos

            element.dataset.origstyle = element.style;
            element.style.opacity = '0.7'; // Example: change opacity on hover
            let mousex = event.clientX;
            let mousey = event.clientY;
        //    element.top
            let elementx = element.offsetLeft;
            let elementy = element.offsetTop;
            let elementw = element.offsetWidth;
            let elementh = element.offsetHeight;
            element.style.position = 'absolute';
            element.style.top = elementy + 'px';
            element.style.left = elementx + 'px';

            /*
            // should rect move up, down, right or left? whichever is the shortest distance
            let distanceUp =Math.abs(elementy - mousey)+ 5;
            let distanceDown = Math.abs(mousey - (elementy + elementh))+ 5;
            let distanceLeft = Math.abs(elementx - mousex)+ 5;
            let distanceRight = Math.abs(mousex - (elementx + elementw))+ 5;
            let shortestDistance = Math.min(distanceUp, distanceDown, distanceLeft, distanceRight);
            console.log("distanceUp:", distanceUp, "distanceDown:", distanceDown, "distanceLeft:", distanceLeft, "distanceRight:", distanceRight, "shortestDistance:", shortestDistance);
            if (shortestDistance == distanceUp) {
                element.style.transform = `translate(0, ${shortestDistance}px)`;
            } else if (shortestDistance == distanceDown) {
                element.style.transform = `translate(0, -${shortestDistance}px)`;
            } else if (shortestDistance == distanceLeft) {
                element.style.transform = `translate(${shortestDistance}px, 0)`;
            } else if (shortestDistance == distanceRight) {
                element.style.transform = `translate(-${shortestDistance}px, 0)`;
            }
                */
             
            /*
            const rect = element.getBoundingClientRect();
            const elementCenterX = rect.left + rect.width / 2;
            const elementCenterY = rect.top + rect.height / 2;

            const distanceX = event.clientX - elementCenterX;
            const distanceY = event.clientY - elementCenterY;
            const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

            if (distance < 100) { // Adjust the distance threshold as needed
                const offsetX = (distanceX / distance) * 10; // Move away from cursor
                const offsetY = (distanceY / distance) * 10; // Move away from cursor
                let transform = `translate(${offsetX}px, ${offsetY}px)`;
                console.log('transform:', transform);
                element.style.transform = transform;
            } else {
                console.log('resetting transform', distance, event.clientX, event.clientY, elementCenterX, elementCenterY);
                element.style.transform = ''; // Reset position
            }
                */
        });

        element.addEventListener('mouseout', () => {

        //    element.style.position = 'relative';
       //     element.style = element.dataset.origstyle;
            console.log('mouseout', element.style.position);

        });
    });

/*
document.addEventListener('mousemove', (event) => {
    const elements = document.querySelectorAll('a, button, [onclick]');
    console.log('mousemove', elements);
    elements.forEach(element => {
        element.style.position = 'absolute';
        
        
        
        const rect = element.getBoundingClientRect();
        const elementCenterX = rect.left + rect.width / 2;
        const elementCenterY = rect.top + rect.height / 2;

        const distanceX = event.clientX - elementCenterX;
        const distanceY = event.clientY - elementCenterY;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

        if (distance < 100) { // Adjust the distance threshold as needed
            const offsetX = (distanceX / distance) * 10; // Move away from cursor
            const offsetY = (distanceY / distance) * 10; // Move away from cursor
            element.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        } else {
            element.style.transform = ''; // Reset position
        }
        
    });
    
});
*/