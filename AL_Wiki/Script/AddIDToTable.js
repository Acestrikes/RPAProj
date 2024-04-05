function addIDToElems(elem, className)
{
    var tables = document.getElementsByClassName(className);
    
    var count = 1;
    
    for(i=0; i < tables.length; i++)
    {
        tables[i].setAttribute("id", "Table" + count.toString());
        count++;
    }
}