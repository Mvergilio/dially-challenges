function translatePigLatin(str) {
    const END_CONS = "ay";
   const ARR_OF_VOY = ["a","e","i", "o", "u"];
   let holder = "";
   for(let i = 0; i < str.length; i++){
       if(ARR_OF_VOY.includes(str[i]) && str.indexOf(str[i]) == 0){
        return str + "w"+ END_CONS;
       }
    else if(ARR_OF_VOY.includes(str[i]) && str.indexOf(str[i]) > 0){
    holder = str.slice(str.indexOf(str[i]));
    str = str.split("");
    str.splice(str.indexOf(str[i]))
    str = str.join("");
    str = holder + str + END_CONS;
           return str;
   }
}
return str + END_CONS;

    
}
translatePigLatin('algorithm');