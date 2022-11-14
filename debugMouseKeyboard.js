const div=document.createElement("div");
div.innerHTML=`
  <div> &nbsp; </div>
  <div> &nbsp; </div>
  <div> &nbsp; </div>
  <div>Mouse: <span id="mouse"></span></div>
  <div style="overflow-x: auto; white-space: nowrap;">Keys: <span id="keyboard" ></span></div>
 `;  
document.body.append(div);

let keys=[];
function renderKeys(kz){
    keys=kz;
    document.body.querySelector("#keyboard").innerText= keys.map(k=>k.startsWith("Key")?k.slice(3):k).join(", ");
}
document.addEventListener("mousedown", ()=> document.body.querySelector("#mouse").innerText="pressed");
document.addEventListener("mouseup", ()=> document.body.querySelector("#mouse").innerText="");
document.addEventListener("keydown", e=> renderKeys([...keys, e.code]));
document.addEventListener("keyup", e=> renderKeys(keys.filter(x=>x!=e.code)));
document.addEventListener("visibilitychange", ()=> renderKeys([]));
document.addEventListener("focusout", e=> e.relatedTarget==null && renderKeys([]));
