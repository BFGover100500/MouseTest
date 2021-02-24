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

// NOT USED
/*
window.addEventListener("wheel", event => {
    const delta = Math.sign(event.deltaY);
    cNewMouse.onScroll(delta);
    scrollMouseButtonUp.disabled = cNewMouse.ScrollWheelUp;
    scrollMouseButtonDown.disabled = cNewMouse.ScrollWheelDown;
});
*/
// disable some buttons on page load
window.onload = function onPageInit() {
    leftMouseButtonDown.disabled = true;
    rightMouseButtonDown.disabled = true;
    //scrollMouseButtonUp.disabled = true;
    //scrollMouseButtonDown.disabled = true;

    //mouseMoveButtonLeft.disabled = true;
    //mouseMoveButtonRight.disabled = true;
    //mouseMoveButtonUp.disabled = true;
    //mouseMoveButtonDown.disabled = true;

    cNewMouse.setMousePosX(960); cNewMouse.setMousePosY(540);

    console.log('on_page_load');
}
// NOT USED
/*
onmousemove = function(e){
    cNewMouse.onMouseMove(e.clientX, e.clientY)

    mouseMoveButtonLeft.disabled = cNewMouse.isMouseMoveLeft;
    mouseMoveButtonRight.disabled = cNewMouse.isMouseMoveRight;
    mouseMoveButtonUp.disabled = cNewMouse.isMouseMoveTop;
    mouseMoveButtonDown.disabled = cNewMouse.isMouseMoveBottom;
}
*/
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
// SCROLL MOUSE BUTTON
////////////////////////////////////////////////////////////////////////

scrollMouseButtonUp.addEventListener('mouseup', (e) => {
    if (e.button !== 0 ) return;
    cNewMouse.onMouseEvent(e.button, cNewMouse.mouseEventType[e.type] );

    cNewMouse.onScroll(1);
});

scrollMouseButtonDown.addEventListener('mousedown', (e) => {
    if (e.button !== 0 ) return;
    cNewMouse.onMouseEvent(e.button, cNewMouse.mouseEventType[e.type]);

    cNewMouse.onScroll(-1);
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
// buttons move to...
////////////////////////////////////////////////////////////////////////

// LEFT
mouseMoveButtonLeft.addEventListener('mouseup', (e) => {
    const tmp_value = cNewMouse.getMousePosX() - 1;
    if (tmp_value > 0) {
        cNewMouse.setMousePosX(tmp_value);
    }
});

// RIGHT
mouseMoveButtonRight.addEventListener('mouseup', (e) => {
    cNewMouse.setMousePosX(cNewMouse.getMousePosX() + 1);
});

// TOP
mouseMoveButtonUp.addEventListener('mouseup', (e) => {
    const tmp_value = cNewMouse.getMousePosY() - 1;
    if (tmp_value > 0) {
        cNewMouse.getMousePosY(tmp_value);
    }
});

// BOTTOM
mouseMoveButtonDown.addEventListener('mouseup', (e) => {
    cNewMouse.setMousePosY(cNewMouse.getMousePosY() + 1);
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
