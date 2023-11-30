//Write a JavaScript function that takes in an array of full names
//and returns the most commonly recurring first name.

// names: john smith, john doe, jane smith -> john
// names: john smith, john doe, jane smith, jane doe -> john
// names: John Smith, john doe, jane smith, jane doe -> john
// names: "" => undefined

function getMostCommonFirstName(names){
    //if names is an empty array, return undefined
    if(names.length<1){
        return undefined;
    }
    let frequencyCounter = {};
    //loop through names once
    //seperate the first name
    //set each name to lowercase
    for(let i=0; i<names.length; i++){
        let firstName = names[i].split(' ')[0].toLowerCase();
            //if name is in frequency counter, increment the count
            if(frequencyCounter[firstName]){
                frequencyCounter[firstName]++;
            } else{
                //else, add name to counter, count = 1
                frequencyCounter[firstName] = 1;
            }
    }
    //convert object to array
    let frequencyArray = Object.keys(frequencyCounter).map(name =>[name,frequencyCounter[name]]);
    frequencyArray.sort((a,b)=> b[1]-a[1]);
    return frequencyArray[0][0];
}

module.exports = getMostCommonFirstName;