
let fs = require('fs');
let arraynum = fs.readFileSync('data.txt').toString().split(",");

/*sorting array asc by using built-in function*/

let numbers= arraynum.sort();
let file= fs.createWriteStream('output.txt')

for (i=0 ; i< numbers.length; i++)
{
    if(i == numbers.length-1)
    {
        file.write(numbers[i] )
    }
    else{
        file.write(numbers[i] + ',')
    }
}
/*numbers.forEach(
    
    v => file.write(v+','))
file.end()*/

/*while (arraynum --)
{
    if (v = arraynum[arraynum.length-1])
    {
        v => file.write(arraynum)
    }
    else
    {
        v => file.write(arraynum+',')

    }
}
file.end()*/