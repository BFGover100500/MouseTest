class myFuckingMouse extends MouseClass {

    onScroll(value) {
        var tmp_value = this.getScrollValue() - value;
/*
        if (this.getScrollValue() > tmp_value) {
            this.ScrollWheelUp = true; this.ScrollWheelDown = false;
        } else {
            this.ScrollWheelUp = false; this.ScrollWheelDown = true;
        }
*/
        this.setScrollValue(tmp_value);
        this.setScrollValue( Math.max(0, Math.min(this.getScrollValue(), 10)) );
    }

    onMouseMove(posX, posY) {
        // move to left or right
        // NOT USED
        /*
        if (this.getMousePosX() > posX) {
            this.isMouseMoveLeft = true; this.isMouseMoveRight = false;
        }
        else if (this.getMousePosX() < posX) {
            this.isMouseMoveLeft = false; this.isMouseMoveRight = true;
        }
        else if (this.getMousePosX() === posX) {
            this.isMouseMoveLeft = false; this.isMouseMoveRight = false;
        }

        // move to top or bottom
        if (this.getMousePosY() < posY) {
            this.isMouseMoveTop = true; this.isMouseMoveBottom = false;
        }
        else if (this.getMousePosY() > posY) {
            this.isMouseMoveTop = false; this.isMouseMoveBottom = true;
        }
        else if (this.getMousePosY() === posY) {
            this.isMouseMoveTop = false; this.isMouseMoveBottom = false;
        }

        this.setMousePosX(posX); this.setMousePosY(posY);
        */
    }

    onMouseEvent(id, mouseEventType)
    {
        switch(id)
        {
            case 0:
                console.log('onMouseEvent, left button event, mouseEventType: ' + mouseEventType);
                this.LeftMouseBtnState = (mouseEventType === 0);
                this.LeftMouseBtnState = !(mouseEventType === 1);
                return;
            case 1:
                console.log('onMouseEvent, scroll button event, mouseEventType: ' + mouseEventType);
                this.ScrollMouseBtnState = !this.ScrollMouseBtnState;
                return;
            case 2:
                console.log('onMouseEvent, right button event, mouseEventType: ' + mouseEventType);
                this.RightMouseBtnState = (mouseEventType === 0);
                this.RightMouseBtnState = !(mouseEventType === 1);
                return;
            default:
                console.log('wtf button');
                return;
        }

    }
}