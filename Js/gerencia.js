



function mostraQuantidade ()
{

    var quant = document.getElementById('quantidade').value;
    var entr = document.getElementById('entrada').value;


    for (s=0; s < quant; s++)
    {
        var cal = (entr*80)/100;
        document.writeln(cal + ' ,');
    }
  
 

}