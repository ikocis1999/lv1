function addTable(){
	var predmet = document.getElementById('inpt1').value;
	var godina = document.getElementById('inpt2').value;
	var ects = document.getElementById('inpt3').value;
	var table = document.getElementById('tableId');
	var tRow = '<tr><td>'+predmet+'</td><td>'+godina+'</td><td>'+ects+'</td></tr>';
	
	document.getElementById('tableId').innerHTML +='<tr><td>'+predmet+'</td><td>'+godina+'</td><td>'+ects+'</td><td><button onclick="Obrisi(this)">Obrisi</button></td><td><input type="checkbox" onclick="DajBoju(this)" />&nbsp;</td></tr>';
	
}
function Obrisi(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i);
}

function DajBoju(indeks){
	var y = indeks.parentNode.parentNode;
  if(indeks.checked){
  	y.classList.add("boja");
  }
  else if(!(indeks.checked)){
  	y.classList.remove("boja");
  }
}

$(document).ready(function(){

  // Search all columns
  $('#txt_searchall').keyup(function(){
    // Search Text
    var search = $(this).val();

    // Hide all table tbody rows
    $('table tbody tr').hide();

    // Count total search result
    var len = $('table tbody tr:not(.notfound) td:contains("'+search+'")').length;

    if(len > 0){
      // Searching text in columns and show match row
      $('table tbody tr:not(.notfound) td:contains("'+search+'")').each(function(){
        $(this).closest('tr').show();
      });
    }else{
      $('.notfound').show();
    }

  });
});

// Case-insensitive searching 
$.expr[":"].contains = $.expr.createPseudo(function(arg) {
   return function( elem ) {
     return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
   };
});
