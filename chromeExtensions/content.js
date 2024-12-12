// content.js
document.addEventListener('mousemove', (event) => {
    const elements = document.querySelectorAll('a, button, [onclick]');
    elements.forEach(element => {
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