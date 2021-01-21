To solve the challenge, I used Javascript and JSDoc syntax to provide a typing and assertivity. I made tests manually with the variables that are in the index.js folder.  
To calculate the result, I used a loop for iteration.  
I checked if the division would have a remainder left over throught the operator "%" and if so, assigned that remainder to a variable.  
I used the function Math.trunc to get only the entire value of the division operation, but I was careful to ensure that it only took the entire value in cases where it was different from 0.
For cases where the result of the division was a number with decimal places,   
I ensured that it didn’t exceed two decimal places by using the function "toFixed()".  
After the whole calculation process, I assigned the division to the emails in the list.  
I used an iteration loop for that, inserting as key the value of each index of the array in the map and assigning the result of the division to each of them.  
To insert the remainder left over of the division in the object, I created a random number to use as the index of the element.

Running the project  
git clone https://github.com/ClaudiaTrevisan/challengeStone  
Open the index.html document and view in the console of your browser through the option inspect the result of the function.  
In index.js **you can find the function being already called with the variables I used to test it.

In order to change the values or the lists, just edit the variables declared, clear console and refresh the page to see the result.
