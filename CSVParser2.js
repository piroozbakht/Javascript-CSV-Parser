// CSV parser function
// This function get CSV file and change it to 2D array that called pars
// vahid
function parser(data) 
{
  var parsChar=0;	 
  var parsLine=0;
  var br=-1;
  var pars=[];
  pars[parsLine]=[];
  pars[parsLine][0]='';
  var qut=false;

  for(var dataChar=0;dataChar<data.length; dataChar++)
  {   
    if ((data[dataChar]==',') && (!qut) )
    {
      parsChar++;
      dataChar++;
      pars[parsLine][parsChar]='';
    }
    
    if ((qut) && (data[dataChar]=='"'))
    {
      qut=false;
      dataChar++;
      parsChar++;
      pars[parsLine][parsChar]='';
    }
    if ((!qut) && (data[dataChar]=='"'))
    {
      if(data[dataChar+1]=='"')
      {
        dataChar++;
      } else {
        qut=true;
        parsChar++;
        dataChar++;
        pars[parsLine][parsChar]='';
      }      
    }

    br=data[dataChar].search(/\r/);        
    if ((!qut) && (br==0))
    {
      parsLine++;
      parsChar=0; 
      pars[parsLine]=[];
      pars[parsLine][parsChar]=''; 
      br=-1;   
    }
    if ((qut) && (br==0))
    {
      pars[parsLine][parsChar]=pars[parsLine][parsChar]+"\r";          
    } else {
      pars[parsLine][parsChar]=pars[parsLine][parsChar]+data[dataChar];
    }    
  }

  // print pars array 2D
  document.write("<table  border=1>");
  for (var i = 0 ; i <pars.length ; i++) {
    document.write("<tr>");
    for (var j = 0 ; j <pars[i].length ; j++) {
      document.write("<td>");
      document.write(pars[i][j]);
      document.write("</td>");
    }
    document.write('</tr>');
  }  
  document.write("</table >");
}