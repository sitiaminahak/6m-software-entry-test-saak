
/*
    Task 1:
    - Link the file `external.js` to this file.
    - To test if the linking works, open q5-output.html in the browser and it should show "Hello World!"
*/

// Task 1: Add code here
import print from "./external.js";
// Do not change the code below
document.querySelector("#test").innerHTML = print();

/* comment for q5, based on the W3 note, Modules only work with the HTTP(s) protocol. I can't test this using file://
A web-page opened via the file:// protocol cannot use import / export. 
For document.querySelector("#test").innerHTML = print();, is this a typo error? Should be "test" instead of "#test"? Thanks!
*/
