const MyButton={
    props:["disabled", "onClick"],
    data(){ return {model: new ButtonModel(this.disabled)}; },
    render(){
        return ButtonPresenter({disabled:this.disabled, onClick:this.onClick}, this.model, this.$slots.default());
    }
};
