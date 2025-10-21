// -----------------------------validation for input box-------------------------------------------------------------

// Select all elements with class 'quantity__input'
const inputs = document.querySelectorAll('.quantity__input,.quantity__button');

// Loop through each input element and set the onkeypress attribute
inputs.forEach(input => {
    input.setAttribute('onkeypress', 'return event.charCode >= 48 && event.charCode <= 57');
});

// -------------------------Dawn Theme: Dropdown Menu - hover to open----------------------------------------------------------------

const inlineMenu = document.querySelector(".list-menu--inline");

      const detailsItems = inlineMenu.querySelectorAll("details");

   

      detailsItems.forEach(item => {

        const ulElement = item.querySelector("ul");

    

        item.addEventListener("mouseover", () => {

          item.setAttribute("open", true);

    

          ulElement.addEventListener("mouseleave", () => {

            item.removeAttribute("open");

          });


          item.addEventListener("mouseleave", () => {

            item.removeAttribute("open");

          });

        });

      });

//----------------------------------- How to disable View source and inspect element-----------------------------------------------------------


    // // Disable right-click
    // document.addEventListener('contextmenu', function(e) {
    //     e.preventDefault();
    // }, false);

    // // Disable specific key combinations
    // document.addEventListener('keydown', function(e) {
    //     // Disable F12
    //     if (e.keyCode == 123) {
    //         e.preventDefault();
    //     }

    //     // Disable Ctrl+Shift+I
    //     if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
    //         e.preventDefault();
    //     }

    //     // Disable Ctrl+Shift+J
    //     if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
    //         e.preventDefault();
    //     }

    //     // Disable Ctrl+U
    //     if (e.ctrlKey && e.keyCode == 85) {
    //         e.preventDefault();
    //     }

    //     // Disable Ctrl+Shift+C (Chrome DevTools)
    //     if (e.ctrlKey && e.shiftKey && e.keyCode == 67) {
    //         e.preventDefault();
    //     }
    // }, false);










      