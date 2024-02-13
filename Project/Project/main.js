let navbarcollapsetag = document.getElementsByClassName("navbar-collapse")[0];
console.log(navbarcollapsetag);
let anchertag = Array.from(navbarcollapsetag.getElementsByTagName("a"));
anchertag.forEach(function (element, index, arr) {
    element.addEventListener("click", () => {
        navbarcollapsetag.classList.remove("show");
    })
})

// Function to print the resume section
// function printResume() {
//     var printContents = document.getElementById("resumeSection").innerHTML;
//     var originalContents = document.body.innerHTML;
//     document.body.innerHTML = printContents;
//     window.print();
//     document.body.innerHTML = originalContents;
// }

// // Add a click event listener to the print button
// var printButton = document.getElementById("printButton");
// if (printButton) {
//     printButton.addEventListener("click", function () {
//         printResume();
//     });
// }
// const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
// const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))