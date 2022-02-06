let uno = ['the', 'our', `their`,`our`];
let dos = ['great', 'big',`ugly`];
let tres = ['jogger', 'racoon','dog','cat'];

for (let a = 0; a < uno.length; a++) { 
     for (let b = 0; b < dos.length; b++)
      { 
        for (let c = 0; c < tres.length; c++) {
            var variable = `${uno[a]}${dos[b]}${tres[c]}`
            console.log("www." + variable + ".com")
        }
     }
}




