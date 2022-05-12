console.log("Character Sets in Regular Expression");

//Regular Expression
/*Character Sets in Regular Expression
1> Basic function
2> Meta character symbol
3> character set
*/

// const regularExpression = /^t/i;

//LOOK AT INTO CHARACTER SET - []
let regularExpression = /s[traz]njay/; //can be a 't', 'r', 'a', 'z'
regularExpression = /s[b-z]njay/; //can be any character from 'b' to 'z'
regularExpression = /s[a-z]njay/; //can be any character from 'a' to 'z'

regularExpression = /s[^traz]njay/; //cannot be 't', 'r', 'a' or 'z'
regularExpression = /s[^b-z]njay/; //cannot be 'b' to 'z'

regularExpression = /s[^bak]nja[yYp]/; //cannot be'b', 'a' or 'k' &&& can be 'y', 'Y' or 'p'
regularExpression = /s[a-zA-Z]nja[xyz0-9][0-9]/;//we can have many characters ser as we want. 
regularExpression = /s[a-z]nja[xyz0-9][0-9]/i;

//QUANTIFIRES - {}
regularExpression = /sa{2}njay/; // a can occur exacly 2 times.
regularExpression = /sa{0,2}njay/; // a can occur exacly 0 to 2 (0, 1, or 2) times.

//GROUPINGS - () - WE CAN USE PARENTHISIS FOR GROUPING
regularExpression = /(sanjay){2}/; // a can occur exacly 2 times.
regularExpression = /(jay){2}([0-9]r){3}/; // a can occur exacly 2 times.


let string = "This is sanjay paul";
    string = "jayjay1r2r3r";

let result = regularExpression.exec(string);
console.log("The result from exec is : ", result);

if (regularExpression.test(string)) {
    console.log(`The string "${string} is matches the expression "${regularExpression.source}"`);
} else {
    console.log(`The string "${string} is does not match the expression "${regularExpression.source}"`);

}