1. It will return 3 because the for loop at 6 will stop increasing i once i reaches prices.length which in this case is 3
2. It will return 150 because the last time it was assigned it was assigned to the last value of prices times 1 - discount which is equal to 150
3. It will return 150 because the last time it was assigned a value it was given discountedPrice rounded to the hundredth place which since discountedPrice is 150, which we know from 2. it rounds to 150
4. It will return an array equal to the input array minus the discount on each individual item rounded to the 100th place since that is what the code does for each item inside that for loop; it applies the discount, rounds it then put it's into the return array and goes on to the next element.
5. It will return an error because i isn't defined out of the for loop since it is a let and it is being called outside of that scope.
6. It will return an error because discountedPrice isn't defined outside of the inside of the for loop since it is a let and it is being called outside of that scope.
7. It will return 150 because the last time it was assigned a value it was given discountedPrice rounded to the hundredth place which since discountedPrice is 150, which we know from 2. it rounds to 150 also it's called within it's scope
8. It will be the same as 4. since although the variable types changed everything is within it's scope and no constants are being assigned
9. It will return an error because before it gets to that line it will crash at line 7 for trying to modify a constant but if it did make it to line 11 it would return 3
10. It will return an error because length wasn't defined as an actual variable anywhere
11. It will return the same thing as 8 since the only difference between it and 8 is that it doesn't round which doesn't matter here since the values are too big to be affected by the rounding to the hundredth place
12. 
    A. student.name
    B. student["Grad Year"]
    C. student.greeting()
    D. student["Favorite Teacher"].name
    E. student.courseLoad[0] 
13. 
    A. '32' Because the + was taken to mean append and not add arithmetically
    B. 1 Because the string was mapped to it's int equivalent since you can't really subtract strings
    C. 3 Because null is mapped to zero when confronted with an int
    D. '3null' Because null is mapped to the string 'null' when confronted with a string
    E. 4 Because true/false will map to 1/0 when dealing with numbers because that it's numerical representation
    F. 0 Because in this case the operation is arithmetic which assigns both null and false to 0.
    G. 3undefined Because numerical values are converted to strings when added to strings
    H. NaN Because you can't subtract with a string nor can you add to Undefined so NaN is the response
14. 
    A. true Because '2' gets converted to number and 2 > 1 is obviously true
    B. false Because we are comparing strings and in terms of characters 2 comes before 1
    C. true Because again when doing comparisons between numbers and strings strings get converted to numbers and 2 = 2
    D. false Because the === operator takes type into account and a string isn't a number
    E. false Because true gets converted to 1 which isn't equal to 2 when comparing values
    F. true Because Boolean(2) is equal true along with Boolean() of pretty much anything that isn't 0 or empty or null or the like, and true and true are the same type and the same value
15. The == does type conversions to make the comparison make sense, ie. it will turn '2' into 2 or vise versa, but the === doesn't, if your comparing to different types it will return false even if they seem equal.
16. See part2-question16.js
17. It would return [2, 4, 6] Because once the value is passed on to the modifyArray a new array is made where it's values are to the callback function applied to the array values which in this case causes them to double so therefore that new array's values are equal to the original array's values but doubled. And since that new array is returned that is the result of that function.
18. See part2-question18.js
19. It instantly outputs 1 then 4 then 3 then after a second it outputs 2