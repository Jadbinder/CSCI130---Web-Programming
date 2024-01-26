function isPrime(x){
   for(let i = 2; i <= x/2; i++){
      if(x % i === 0){
         return false;
      }
   };
   return true;
};
function generatePrime(n){
   var max;
   let i = 2;
   let j = 0;
   while(j < n){
      if(isPrime(i)){
         max = i;
		 ++j
      };
      i = i+1
   };
   return max;
};

function createTable(){
	var num_rows = document.getElementById('n').value;
	var theader = '<table border="1">\n';
    var tbody = '';

    for(var i = 0; i< num_rows; i++)
    {
        tbody += '<tr>';
        for(var j = 0; j < 2; j++)
        {
			if(j == 0){
				tbody += '<td>';
				tbody += i+1;
				tbody += '</td>'
			}
			if(j == 1){
				tbody += '<td>';
				tbody += generatePrime(i+1);
				tbody += '</td>'
			}
        }
        tbody += '</tr>\n';
    }
    var tfooter = '</table>';
    document.getElementById('generatedTable').innerHTML = theader + tbody + tfooter;
}