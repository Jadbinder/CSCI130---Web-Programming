var currentValue = '';
var valueLength = '';

function expression(x){
	currentValue += x;
	document.getElementById('display').value += x;
}
function operator(x){
	currentValue = '';
	document.getElementById('display').value += x;
}
function clearValues(){
	currentValue = '';
	document.getElementById('display').value = '';
}
function toggleSign(){
	document.getElementById('display').value = document.getElementById('display').value.toString().slice(0,-currentValue.length);
	currentValue = currentValue * -1;
	document.getElementById('display').value += currentValue;
	}

function squareRoot(){
	document.getElementById('display').value = document.getElementById('display').value.toString().slice(0,-currentValue.length);
	currentValue = Math.sqrt(currentValue).toString();
	document.getElementById('display').value += currentValue;
    }
	
function evaluateExpression(){
	document.getElementById('display').value = eval(document.getElementById('display').value);
	currentValue = document.getElementById('display').value;
}


function createMatrixA(){
	var num_rows = document.getElementById('rA').value;
	var num_columns = document.getElementById('cA').value;
	var theader = '<table border="1">\n';
    var tbody = '';

    for(var i = 0; i < num_rows; i++)
    {
        tbody += '<tr>';
        for(var j = 0; j < num_columns; j++)
        {
			tbody += '<td>';
			tbody += '<form name = "number"><input type = "text" name = string id = string></form>';
			tbody += '</td>'
        }
        tbody += '</tr>\n';
    }
    var tfooter = '</table>';
    document.getElementById('generatedMatrixA').innerHTML = '<label>Enter numbers for A: <label>' + theader + tbody + tfooter;
}

function createMatrixB(){
	var num_rows = document.getElementById('rB').value;
	var num_columns = document.getElementById('cB').value;
	var theader = '<table border="1">\n';
    var tbody = '';

    for(var i = 0; i < num_rows; i++)
    {
        tbody += '<tr>';
        for(var j = 0; j < num_columns; j++)
        {
			tbody += '<td>';
			tbody += '<form name = "number"><input type = "text" name = string id = string></form>';
			tbody += '</td>'
        }
        tbody += '</tr>\n';
    }
    var tfooter = '</table>';
    document.getElementById('generatedMatrixB').innerHTML = '<label>Enter numbers for B: <label>' + theader + tbody + tfooter;
}