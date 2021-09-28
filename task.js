let numbers = [
    5,
    8,
    0,
    1,
    9,
    11,
    15,
    16
];

console.log("Original numbers list: ",numbers)

for(let i = 0 ; i < numbers.length -1 ; i++)
{
    for(let j = 0 ; j < numbers.length-i-1  ; j++)
    {
        
        if(numbers[j] > numbers[j+1])
        {
            let temp = numbers[j];
            numbers[j] = numbers[j+1]
            numbers[j+1] = temp;
        }
    }
}

console.log("numbers list After sorting: ",numbers)


for(let i = 0 ; i < numbers.length -1 ; i++)
{
    for(let j = i+1 ; j < numbers.length ; j++)
    {
        
        if(numbers[i] < numbers[j])
        {
            let temp = numbers[i];
            numbers[i] = numbers[j]
            numbers[j] = temp;
        }
    }
}

console.log("numbers list After Desc sorting: ",numbers)


