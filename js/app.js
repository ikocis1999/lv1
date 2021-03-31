function addTable(){
	var predmet = document.getElementById('inpt1').value;
	var godina = document.getElementById('inpt2').value;
	var ects = document.getElementById('inpt3').value;
	var table = document.getElementById('tableId');
	var tRow = '<tr><td>'+predmet+'</td><td>'+godina+'</td><td>'+ects+'</td></tr>';
	
	document.getElementById('tableId').innerHTML +='<tr><td>'+predmet+'</td><td>'+godina+'</td><td>'+ects+'</td><td><button onclick="Obrisi(this)">Obrisi</button></td></tr>';
	
}
function Obrisi(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i);
}
