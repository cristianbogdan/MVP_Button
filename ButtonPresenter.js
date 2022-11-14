function ButtonPresenter(buttonProps, model, children){
    
    if(!model.initialized){
        document.addEventListener("mouseup", function(event){ model.isMouseClick();}, false);
        model.initialized=true;
    }
        
    const {onClick, ...props}= buttonProps;
    props[e("mouseOver")]= function(event) { model.setUnderMouse(true); buttonProps[e("mouseOver")] && buttonProps[e("mouseOver")](event); };
    props[e("mouseLeave")]= function(event) { model.setUnderMouse(false); buttonProps[e("mouseLeave")] && buttonProps[e("mouseLeave")](event);};
    props[e("mouseDown")]= function(event) {model.setMousePressed(); buttonProps[e("mouseDown")] && buttonProps[e("mouseDown")](event);};
    props[e("mouseUp")]= function(event) {
        if(model.isMouseClick())
            onClick && onClick(event);
        buttonProps[e("mouseUp")] && buttonProps[e("mouseUp")](event);
    };
    props.onFocus= function(event){ model.setInFocus(true);  buttonProps.onFocus && buttonProps.onFocus(event);};
    props.onBlur= function(event) { model.setInFocus(false); buttonProps.onBlur && buttonProps.onBlur(event);};
    props[e("keyDown")]= function(event){
        if(model.isKeyDownClick(event.keyCode))
            onClick && onClick(event);
        buttonProps[e("keyDown")] && buttonProps[e("keyDown")](event);
    };
    props[e("keyUp")]= function(event){
        if(model.isKeyboardClick(event.keyCode))
            onClick && onClick(event);
        buttonProps[e("keyUp")] && buttonProps[e("keyUp")](event);
    };

    props.pressed= model.mousePressed || model.keyboardPressed;
    props.label= children;
    props.inFocus= model.focus;
    props.keyFocus= model.keyFocus;

    return MyButtonView(props);
}

// some events have different capitalization in React and Vue
function e(eventName){
    try{
        Vue;
        return "on"+eventName[0].toUpperCase()+eventName.slice(1).toLowerCase();
    }catch(e){
        // react:
        return "on"+eventName[0].toUpperCase()+eventName.slice(1);
    }
}
