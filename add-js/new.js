function natnum ( ){
    var N4 =prompt("type a natural num") ;
    var result;
    
    if (N4 >= 0) {     
        result =  N4+' is correct';   
    } 
    
      
     else {     
        while(N4 < 0){
            N4= prompt("type a correct value") ;
        }
        result =  N4+' is correct'; 
    } 
   return result; 

}
document.write('<h3>'+natnum()+'</h3>');
