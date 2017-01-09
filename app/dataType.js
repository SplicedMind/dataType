module.exports = {
 
   dataTypes: function(arg) {
     switch(typeof(arg))
     {
      //Checks if argument is a string
      case 'string':
         return arg.length;
         break;
      //Check if argument is an object
      case 'object':
         //Check if the object is an array
         if(arg instanceof(Array))
         {  
            //Check if the arry lenght is greater than or equal to 3
            if(arg.length >= 3)
            {
               return arg[2];
            }
            //Return undefined if the array lenght is less than 3
            else
            {
               return undefined;
            }           
         }
         //Check if the object is null
         else if(isNaN(1 + arg) === false)
         {
            return 'no value';
         }
         break;
      //Check if the argument is undefined
      case 'undefined':
         return 'no value';
         break;
      //Check if the argument is boolean
      case 'boolean':
         return arg;
         break;
      //Check if the argument is a number
      case 'number':
         //Check if the number is greater than 100 
         if(arg > 100)
         {
            return 'more than 100';
         }
         //Check if the number is less than 100
         else if (arg < 100)
         {
            return 'less than 100';
         }
         //Returns equal to 100 if the first two checks failed
         else
         {
            return 'equal to 100';
         }
         break;
      //Check if the argument is a function
      case 'function':
         return arg(true);
         break;
     }
   }
}
