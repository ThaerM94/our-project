var exam = prompt ("what is your mark ?")
console.log
var interview = prompt (" did you pass the interview ?");
var age = prompt (" what is your age ");
var result;
if (exam >= 25 && interview >= 80 && age >= 24  ) {
    result = 'passed'
 } else {result = 'fail'
 }
document.write('<h3>'+result+'</h3>');
