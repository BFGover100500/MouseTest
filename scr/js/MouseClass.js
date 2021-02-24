class MouseClass {
    constructor(name) {
        this.MouseName = name;

        this.LeftMouseBtnState = false;
        this.RightMouseBtnState = false;
        this.ScrollMouseBtnState = false;

        this.MousePosX = 0;
        this.MousePosY = 0;

        this.isMouseMoveLeft = false;
        this.isMouseMoveRight = false;
        this.isMouseMoveTop = false;
        this.isMouseMoveBottom = false;

        this.ScrollValue = 5;
        this.ScrollWheelUp = false;
        this.ScrollWheelDown = false;
        this.mouseEventType = {"mouseup":0, "mousedown":1, "click":2}
    }

    getName() { return this.MouseName; }
    getMousePosX() { return this.MousePosX; } setMousePosX(value) { this.MousePosX = value; }
    getMousePosY() { return this.MousePosY; } setMousePosY(value) { this.MousePosY = value; }
    getLMBState() { return this.LeftMouseBtnState; }
    getRMBState() { return this.RightMouseBtnState; }
    getScrollState() { return this.ScrollMouseBtnState; }
    getScrollValue() { return this.ScrollValue; } setScrollValue(value) { this.ScrollValue = value; }
}