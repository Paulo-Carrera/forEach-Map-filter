// DOUBLE VALUES

const numbers = [1,2,3,4,5]

function doubleValues(arr){
    const doubledArr = [];

    arr.forEach(function(num){
        doubledArr.push(num * 2);
    })

    return doubledArr;
};


//  doubleValues([1,2,3,])
//  (3) [2, 4, 6]



//_________________________________________________________________________________________________________________________
// ONLY EVEN VALUES


function onlyEvenValues(arr){
    const evenValues = [];

    arr.forEach(function(num){
        if(num %2 === 0 ){
            evenValues.push(num);
        }; 
    })

    return evenValues;
}


//  onlyEvenValues([1,2,3,4,5,6,])
//  (3) [2, 4, 6]




//_________________________________________________________________________________________________________________________
// SHOW FIRST AND LAST




// function showFirstAndLast(arr){
//     const firstAndLast = [];

//     arr.forEach(function(str){
//         if (str.length >= 1 ){
//             const firstChar = str[0];
//             const lastChar = str[str.length - 1];
//             firstAndLast.push(firstChar + lastChar);
//         }
//     });

//     return firstAndLast;
// }

const strings = ['hello', 'unicorn', 'bacon'];

// function showFirstAndLast(arr){
//     const firstAndLast = [];

//     for(let str of arr){
//         let firstChar = str[0];
//         let lastChar = str[str.length -1];
//         firstAndLast.push(firstChar, lastChar);
//     }

//     return firstAndLast;
// }


function showFirstAndLast(arr){
    let firstAndLast = [];

    arr.forEach(function(str){
        firstAndLast.push(str[0] + str[ str.length - 1 ]);
    })

    return firstAndLast;
}

//  console.log(showFirstAndLast(strings));

//      (3) ['ho', 'un', 'bn']




//_________________________________________________________________________________________________________________________
// ADD KEY AND VALUE

let arrOfObjs = [
    {name: 'Damian'},
    {name: 'Isaiah'},
    {name: 'Izma'}
]


function addKeyAndValue( arr , key , value ){
    
    arr.forEach(function(obj){
        obj[key] = value ;
    });

}

//  console.log(addKeyAndValue(arrOfObjs, 'type', 'friend'))
//  console.log(arrOfObjs);

//      0:  {name: 'Damian', type: 'friend'}
//      1:  {name: 'Isaiah', type: 'friend'}
//      2:  {name: 'Izma', type: 'friend'}
//      length: 3
//      [[Prototype]]: Array(0)






//_________________________________________________________________________________________________________________________
//  vowelCount


function vowelCount(str){
    let vowels = ['a','e','i','o','u'];

    str = str.toLowerCase();

    let counts = {};


    str.split('').forEach(function(char){
        if(vowels.includes(char)){
            counts[char] = (counts[char] || 0) + 1 ;
        }
    });
    return counts ;
}

const string = 'What is up sir';

//      vowelCount(string)
//      {a: 1, i: 2, u: 1}








/////////////////////   MAP     //////////////////////
//  doubleValues



function doubleValues(arr){
    arr.map(function(num){
        return num * 2 ;
    })
}

//      doubleValues([1,2,3])
//      (3) [2, 4, 6]







//_________________________________________________________________________________________________________________________
//  valTimesIndex



function valTimesIndex(arr){
    let newArr = [];

    arr.map(function(val){
        let indexOfVal = arr.indexOf(val);

        newArr.push(val * indexOfVal);
    })

    return newArr;
}

//  console.log(valTimesIndex([1,24,66,14,3]));

  //    (5) [0, 24, 132, 42, 12]





  //_______________________________________________________________________________________________________________________
  //    extractKey



function extractKey(arr , key){
    let newArr = [];

    arr.map(function(obj){
        let value = obj[key];
        newArr.push(value);
    })

    return newArr;
}

//      console.log(
//          extractKey(
//              [
//                {name: 'Elie'},
//                {name: 'Tim'},
//                {name: 'Matt'},
//                {name: 'Colt'}
//              ],
//              'name'
//            )      
//      )

//      (4) ['Elie', 'Tim', 'Matt', 'Colt']






//_________________________________________________________________________________________________________________________
//  extractFullName



function extractFullName(arr){
    let newArr = [];

    arr.map(function(obj){
        
            newArr.push(`${obj.first} ${obj.last}`);
            
    })

    return newArr;
}




//      console.log(extractFullName([
//          {first: 'Elie', last:"Schoppik"},
//          {first: 'Tim', last:"Garcia"},
//          {first: 'Matt', last:"Lane"},
//          {first: 'Colt', last:"Steele"}
//        ]))

//      (4) ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']







//_________________________________________________________________________________________________________________________
//  filterByValue



function filterByValue(arr, key){
    let newArr = [];

    arr.filter(function(obj){
        if(obj[key] === true ){
            newArr.push(obj);
        }
    })

    return newArr;
}

    //  console.log(filterByValue(
    //      [
    //        {first: 'Elie', last:"Schoppik"},
    //        {first: 'Tim', last:"Garcia", isCatOwner: true},
    //        {first: 'Matt', last:"Lane"},
    //        {first: 'Colt', last:"Steele", isCatOwner: true}
    //      ],
    //      'isCatOwner'
    //      ));
  
//      (2) [{…}, {…}]
//      0: {first: 'Tim', last: 'Garcia', isCatOwner: true}
//      1: {first: 'Colt', last: 'Steele', isCatOwner: true}
//      length: 2
//      [[Prototype]]: Array(0)



//_________________________________________________________________________________________________________________________
//  find



function find(arr, val){
    let newArr = [];

    if(arr.includes(val)){
        newArr.push(val);
    }else{
        return undefined;
    }

    return newArr;
}

//      console.log(find([1,2,3,4,5], 3) )
//      console.log(find([1,2,3,4,5], 10) )

//      [3]
//      app.js:328 undefined



//_________________________________________________________________________________________________________________________
//  findInObj



function findInObj(arr , key , value){
    let arrOfQualifiedObjs = [];

    arr.filter(function(obj){
        if(obj.hasOwnProperty(key)){
            if(key.value = value){
                arrOfQualifiedObjs.push(obj);
            }
        }
    })
    return arrOfQualifiedObjs[0];
}




//      console.log(findInObj(
//          [
//            {first: 'Elie', last:"Schoppik"},
//            {first: 'Tim', last:"Garcia", isCatOwner: true},
//            {first: 'att', last:"Lane"},
//            {first: 'Colt', last:"Steele", isCatOwner: true}
//          ],
//          'isCatOwner',
//          true
//        ))
  
//        {first: 'Tim', last: 'Garcia', isCatOwner: true}


//_________________________________________________________________________________________________________________________
//  removeVowels



function removeVowels(str){
    let newStr = '';

    const vowels = ['a','e','i','o','u'];
    let splitStr = str.toLowerCase().split('');

    splitStr = splitStr.filter(function(char){
        
        return !vowels.includes(char);

        })
        newStr = splitStr.join('');
        return newStr;
    }

    


//      console.log(removeVowels('Elie'))
//      console.log(removeVowels('Paulo'))

//      l
//      pl


//_________________________________________________________________________________________________________________________
//  doubleOddNumbers



function doubleOddNumbers(arr){
    let newArr = [];

    arr.filter(function(num){
        let oddNumbers = [];
        if(num % 2 !== 0){
            oddNumbers.push(num);
        }else{
            return null;
        }
        newArr.push(oddNumbers * 2);
    })

    return newArr;
}

//      console.log(doubleOddNumbers([1,2,3,4,5]));


//      (3) [2, 6, 10]