// content.js

    const elements = document.querySelectorAll('a, button, [onclick]');

    // Create a black overlay
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'black';
    overlay.style.zIndex = '9999';
    overlay.style.pointerEvents = 'none'; // Allow clicks to pass through
    document.body.appendChild(overlay);

    // Create a mask effect using a pseudo-element
    overlay.style.maskImage = 'radial-gradient(circle, transparent 0px, black 0px)';
    overlay.style.maskSize = '100% 100%'; // Size of the mask (cover the entire screen)
    overlay.style.maskPosition = 'center'; // Initial position of the mask
    overlay.style.maskRepeat = 'no-repeat'; // Prevent the mask from repeating

    // Update mask position on mouse move
    document.addEventListener('mousemove', (e) => {
        //rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,1) 100%);
//        overlay.style.maskImage = `radial-gradient(circle at ${e.clientX}px ${e.clientY}px, transparent 40px, black 40px)`;
        overlay.style.maskImage = `radial-gradient(circle at ${e.clientX}px ${e.clientY}px, rgba(0,0,0,0) 40px, rgba(100,0,0,0.5) 40px, rgba(0,0,0,1) 40px)`;

//        overlay.style.maskPosition = `${e.clientX}px ${e.clientY}px`; // Center the mask over the cursor
    });

   
