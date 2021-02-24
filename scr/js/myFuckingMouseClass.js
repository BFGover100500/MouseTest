class myFuckingMouse extends MouseClass {

    onScroll(value) {
        const tmp_value = this.getScrollValue() - value;

        if (this.getScrollValue() > tmp_value) {
            this.bScrollWheelUp = true; this.bScrollWheelDown = false;
        } else {
            this.bScrollWheelUp = false; this.bScrollWheelDown = true;
        }

        this.setScrollValue(tmp_value);
        this.setScrollValue( Math.max(0, Math.min(this.getScrollValue(), 10)) );
    }

    onMouseMove(posX, posY) {
        // move to left or right
        if (this.getMousePosX() > posX) {
            this.bMouseMoveLeft = true; this.bMouseMoveRight = false;
        }
        else if (this.getMousePosX() < posX) {
            this.bMouseMoveLeft = false; this.bMouseMoveRight = true;
        }
        else if (this.getMousePosX() === posX) {
            this.bMouseMoveLeft = false; this.bMouseMoveRight = false;
        }

        // move to top or bottom
        if (this.getMousePosY() < posY) {
            this.bMouseMoveTop = true; this.bMouseMoveBottom = false;
        }
        else if (this.getMousePosY() > posY) {
            this.bMouseMoveTop = false; this.bMouseMoveBottom = true;
        }
        else if (this.getMousePosY() === posY) {
            this.bMouseMoveTop = false; this.bMouseMoveBottom = false;
        }

        this.setMousePosX(posX); this.setMousePosY(posY);
    }

    onMouseEvent(id, mouseEventType)
    {
        switch(id)
        {
            case 0:
                console.log('onMouseEvent, left button event, mouseEventType: ' + mouseEventType);
                this.bLeftMouseState = (mouseEventType === 0);
                this.bLeftMouseState = !(mouseEventType === 1);
                return;
            case 1:
                console.log('middle button');
                return;
            case 2:
                console.log('onMouseEvent, right button event, mouseEventType: ' + mouseEventType);
                this.bRightMouseState = (mouseEventType === 0);
                this.bRightMouseState = !(mouseEventType === 1);
                return;
            default:
                console.log('wtf button');
                return;
        }

    }
}