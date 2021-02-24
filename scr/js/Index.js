////////////////////////////////////////////////////////////////////////
// Init all buttons, etc.
////////////////////////////////////////////////////////////////////////
// my new and cool mouse
const cNewMouse = new myFuckingMouse('razerX7');

// left mouse button
let leftMouseButtonUp = document.querySelector('#LeftMouseButtonCheckerUp');
let leftMouseButtonDown = document.querySelector('#LeftMouseButtonCheckerDown');

// right mouse button
let rightMouseButtonUp = document.querySelector('#RightMouseButtonCheckerUp');
let rightMouseButtonDown = document.querySelector('#RightMouseButtonCheckerDown');

// scroll mouse button
let scrollMouseButtonUp = document.querySelector('#ScrollWheelButtonCheckerUp');
let scrollMouseButtonDown = document.querySelector('#ScrollWheelButtonCheckerDown');

// scroll mouse button
let mouseMoveButtonLeft = document.querySelector('#СursorMoveToLeft');
let mouseMoveButtonRight = document.querySelector('#СursorMoveToRight');
let mouseMoveButtonUp = document.querySelector('#СursorMoveToTop');
let mouseMoveButtonDown = document.querySelector('#СursorMoveToBottom');

// reset all
let resetCoolStory = document.querySelector('#resetCoolStoryButton');

// print data to console
let printDataButton = document.querySelector('#printData');

window.addEventListener("wheel", event => {
    const delta = Math.sign(event.deltaY);
    cNewMouse.onScroll(delta);
    scrollMouseButtonUp.disabled = cNewMouse.bScrollWheelUp;
    scrollMouseButtonDown.disabled = cNewMouse.bScrollWheelDown;
});

// disable some buttons on page load
window.onload = function onPageInit() {
    leftMouseButtonDown.disabled = true;
    rightMouseButtonDown.disabled = true;
    scrollMouseButtonUp.disabled = true;
    scrollMouseButtonDown.disabled = true;

    mouseMoveButtonLeft.disabled = true;
    mouseMoveButtonRight.disabled = true;
    mouseMoveButtonUp.disabled = true;
    mouseMoveButtonDown.disabled = true;

    console.log('on_page_load');
}

onmousemove = function(e){
    cNewMouse.onMouseMove(e.clientX, e.clientY)

    mouseMoveButtonLeft.disabled = cNewMouse.bMouseMoveLeft;
    mouseMoveButtonRight.disabled = cNewMouse.bMouseMoveRight;
    mouseMoveButtonUp.disabled = cNewMouse.bMouseMoveTop;
    mouseMoveButtonDown.disabled = cNewMouse.bMouseMoveBottom;
}

////////////////////////////////////////////////////////////////////////
// LEFT MOUSE BUTTON
////////////////////////////////////////////////////////////////////////

// disable context menu when right-mouse clicked
leftMouseButtonUp.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

// disable context menu when right-mouse clicked
leftMouseButtonDown.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

leftMouseButtonUp.addEventListener('mouseup', (e) => {
    if (e.button !== 0 ) return;
    cNewMouse.onMouseEvent(e.button, cNewMouse.mouseEventType[e.type] );

    leftMouseButtonUp.disabled = cNewMouse.getLMBState();
    leftMouseButtonDown.disabled = !cNewMouse.getLMBState();
});

leftMouseButtonDown.addEventListener('mousedown', (e) => {
    if (e.button !== 0 ) return;
    cNewMouse.onMouseEvent(e.button, cNewMouse.mouseEventType[e.type]);

    leftMouseButtonUp.disabled = cNewMouse.getLMBState();
    leftMouseButtonDown.disabled = !cNewMouse.getLMBState();
});

////////////////////////////////////////////////////////////////////////
// RIGHT MOUSE BUTTON
////////////////////////////////////////////////////////////////////////

// disable context menu when right-mouse clicked
rightMouseButtonUp.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

// disable context menu when right-mouse clicked
rightMouseButtonDown.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

rightMouseButtonUp.addEventListener('mouseup', (e) => {
    if (e.button !== 2 ) return;

    cNewMouse.onMouseEvent(e.button, cNewMouse.mouseEventType[e.type] );

    rightMouseButtonUp.disabled = cNewMouse.getRMBState();
    rightMouseButtonDown.disabled = !cNewMouse.getRMBState();
});

rightMouseButtonDown.addEventListener('mousedown', (e) => {
    if (e.button !== 2 ) return;

    cNewMouse.onMouseEvent(e.button, cNewMouse.mouseEventType[e.type]);

    rightMouseButtonUp.disabled = cNewMouse.getRMBState();
    rightMouseButtonDown.disabled = !cNewMouse.getRMBState();
});

////////////////////////////////////////////////////////////////////////
// clear console
////////////////////////////////////////////////////////////////////////
resetCoolStory.addEventListener('mouseup', (e) => {
    console.clear();
});

////////////////////////////////////////////////////////////////////////
// print data to console
////////////////////////////////////////////////////////////////////////
printDataButton.addEventListener('mouseup', (e) => {
    flushDataToConsole();
});

function flushDataToConsole() {
    console.info(cNewMouse);
}
