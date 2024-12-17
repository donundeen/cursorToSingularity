// content.js

    const elements = document.querySelectorAll('a, button, [onclick]');

    elements.forEach(element => {
        
        element.addEventListener('mousemove', (event) => {
            // Action when mouse enters the element
            console.log("mousemove", event);
            console.log($(event.target).position(), $(event.target).width(), $(event.target).height());
            
            let mouseX = event.pageX;
            let mouseY = event.pageY;
            let elementX = $(event.target).offset().left;
            let elementY = $(event.target).offset().top;
            let elementBottom = elementY + $(event.target).height();
            let elementRight = elementX + $(event.target).width();
            let enteredfrom = false;

            let mouseToTop = Math.abs(mouseY - elementY);
            let mouseToLeft = Math.abs(mouseX - elementX);
            let mouseToRight = Math.abs(mouseX - elementRight);
            let mouseToBottom = Math.abs(mouseY - elementBottom);

            let minDistance = Math.min(mouseToTop, mouseToLeft, mouseToRight, mouseToBottom);

            let myat = "left top";

            if(minDistance == mouseToTop) {
                enteredfrom = "top";
                myat = "center top";
            } else if(minDistance == mouseToLeft) {
                enteredfrom = "left";
                myat = "left center";
            } else if(minDistance == mouseToRight) {
                enteredfrom = "right";
                myat = "right center";
            } else if(minDistance == mouseToBottom) {
                enteredfrom = "bottom";
                myat = "center bottom";
            }



            console.log("mousemove", mouseX, mouseY);
            console.log($(event.target).offset());
            console.log($(event.target).width(), $(event.target).height());

            $(event.target).position({
                of: event,
                my: myat,
                at: myat,
                within: $(document.body),
                
                using: function(pos) {
                    console.log("using", pos);
                    if(enteredfrom == "top") {
                        pos.top += 10;
                    } else if(enteredfrom == "left") {
                        pos.left += 10;
                    } else if(enteredfrom == "right") {
                        pos.left -= 10;
                    } else if(enteredfrom == "bottom") {
                        pos.top -= 10;
                    }
   
                    $(event.target).css(pos);
                }
                
            });

        });
        

    });
