// var index = 0;
// while (index<=10) {
//    console.log(index);// 0 1
//    if (index==5) {
//      break;
//    } 
//    index++;
// }

var index = 0; // 0 1 2 3 4  5
while (index<=10) {  // 
   console.log(index);// 0 1 2 3 4 5  5  5  5   5
   index++;
   if (index==5) {
     continue;
   } 
   
}

for (let index = 0; index < 6; index++) {
   //console.log(index); // 0 1  2 3
   if (index==3) {
     continue;
   }
   console.log(index);

}

