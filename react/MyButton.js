function MyButton(props){
    const [model, ]= React.useState(function createModel(){return new ButtonModel(props.disabled, function onModelChange(){refresh({});});});
    const [, refresh]= React.useState();
    return ButtonPresenter(props, model, props.children);
}
