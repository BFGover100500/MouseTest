class MouseClass {
    constructor(name) {
        this.sMouseName = name;

        this.bLeftMouseState = false;
        this.bRightMouseState = false;

        this.iMousePosX = 0;
        this.iMousePosY = 0;

        this.bMouseMoveLeft = false;
        this.bMouseMoveRight = false;
        this.bMouseMoveTop = false;
        this.bMouseMoveBottom = false;

        this.iScrollValue = 5;
        this.bScrollWheelUp = false;
        this.bScrollWheelDown = false;
        this.mouseEventType = {"mouseup":0, "mousedown":1, "click":2}
    }

    getName() { return this.sMouseName; }
    getMousePosX() { return this.iMousePosX; } setMousePosX(value) { this.iMousePosX = value; }
    getMousePosY() { return this.iMousePosY; } setMousePosY(value) { this.iMousePosY = value; }
    getLMBState() { return this.bLeftMouseState; }
    getRMBState() { return this.bRightMouseState; }
    getScrollValue() { return this.iScrollValue; } setScrollValue(value) { this.iScrollValue = value; }
}