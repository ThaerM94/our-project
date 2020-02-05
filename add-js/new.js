function mark () {

var exam = prompt ("what is your mark ?")
console.log(exam);
var interview = prompt (" did you pass the interview ?");
console.log(interview);
var age = prompt (" what is your age ");
console.log(age);
var result;
if (exam >= 25 && interview >= 80 && age >= 24  ) {
    result = 'passed'
 } else {result = 'fail'
 
 }
 return result;
}
document.write('<h3>'+mark()+'</h3>');
