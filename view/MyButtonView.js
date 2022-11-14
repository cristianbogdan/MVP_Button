// https://youtu.be/22NC_OURbm0?t=366
function MyButtonView(props){
    const {inFocus, disabled, pressed, keyFocus, label, ...otherProps}= props;
    return <span
             {... otherProps}
             tabindex={disabled?-1:1}
             style={{
                 border:"solid black",
                 "user-select": "none",
                  padding:"5px",
                 "border-radius":"5px",
                 background: pressed?"black":"white",
                 color: disabled?"grey": pressed?"white":"black",
                 outline:"none",
                 "font-family": "Chicago, Verdana, sans-serif",
                 "font-size": "0.7em"
             }}
           >
             <span style={{
                 padding:"2px",
                 "border-radius":"2px",
                 border: (inFocus && keyFocus)?pressed?"dotted white":"dotted grey":(pressed?"solid black":"solid white"),
             }}>
               {label}
             </span>
           </span>;
}
