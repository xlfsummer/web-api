var util = {
    reverseStr(str){
        if(typeof str != "string") return;
        return str.split("").reverse().join("");
    }
};
