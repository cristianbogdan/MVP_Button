class ButtonModel{
    constructor(disabled, f){ this.disabled= disabled; this.observer=f;  }
    notify(debug){ this.observer && this.observer(); }

    setUnderMouse(mouseIn){
        if(this.disabled)
            return;
        if(!this.mouseIn && mouseIn && !this.mousePressed)
            this.mousePressed=null;
        this.mouseIn=mouseIn;
        this.notify();
    }
    
    setMousePressed(){
        if(this.disabled)
            return;
        if(!this.focus && !this.keyboardPressed)
            this.keyFocus= false;
        this.mousePressed= true;
        this.notify();
    }

    isMouseClick(){
        if(this.disabled)
            return false;
        this.keyboardPressed=false;
        if(this.mousePressed){
            this.mousePressed= false;
            this.notify();
        }
        return this.mousePressed===false && this.mouseIn;
    }
    
    setInFocus(focus){
        if(this.disabled)
            return;
        this.focus= focus;
        this.keyboardPressed=false;
        this.notify();
    }


    isKeyDownClick(keyCode){
        if(this.disabled)
            return false;
        if(![17,18, 91, 93].find(x=>x==keyCode))
            this.keyFocus=true;
        this.keyboardPressed= keyCode==32;
        this.notify();
        return keyCode==13;
    }

    isKeyboardClick(keyCode){
        if(this.disabled)
            return false;
        // we got the focus via the Tab key, so we activate key focus
        if(keyCode==9){
            this.keyFocus=true;
            this.notify();
            return false;
        }
        if(this.keyboardPressed && this.focus && keyCode==32) {
            this.keyboardPressed= false;
            this.mousePressed=false;
            this.notify();
            return true;
        }
        return false;
    }
}
