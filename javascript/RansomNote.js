function checkMagazine(magazine, note) {
   const magazineArray = magazine.split(" ");
   const noteArray = note.split(" ");
  console.log(magazineArray);
   const magazineObj = {};
  
   magazineArray.forEach((item) => {
     if(!magazineObj[item]) magazineObj[item] = 0;
     magazineObj[item]++;
   });
  
  var isPossible = true;
  
   noteArray.forEach((item) => {
     if (magazineObj[item]) {
       magazineObj[item]--;
       if (magazineObj[item] < 0) 
         isPossible = false;
     }
     else {
       isPossible = false;
     }
    })
   console.log(isPossible);
 }
checkMagazine("two times three is not four four Four","two times two is four")
