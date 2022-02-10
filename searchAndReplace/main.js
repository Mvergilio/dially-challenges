function myReplace(str, before, after){
    str = str.split(" ");
    let beforeFirstLetter = before.slice(0,1);
    let afterFirstLetter = "";
if(beforeFirstLetter == beforeFirstLetter.toUpperCase()){
     afterFirstLetter = after.slice(0,1).toUpperCase();
    after = after.split("");
    after.splice(0,1,afterFirstLetter)
    after = after.join("");
}else{
    afterFirstLetter = after.slice(0,1).toLowerCase();
    after = after.split("");
    after.splice(0,1,afterFirstLetter);
    after = after.join("");
}
str = str.map((Element)=>{
    if(Element == before){
        Element = Element.replace(before, after)
    }
    return Element;
}).join(" ");

return str;

}
myReplace("This has a Spellngi error.", "Spellngi", "spelling")