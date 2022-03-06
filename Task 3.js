let a = +prompt()
switch (a%10===1 || a%10===3 || a%10===5 || a%10===7 || a%10===9) {
    case true:console.log("Yes")
        
        break;

    default:console.log("No")
        break;
}