
function includeJS(incFile)
	{document.write('<script type="text/javascript" src="'+ incFile+ '"></script>');}

includeJS('https://code.jquery.com/jquery-latest.js');

includeJS('JS/pushy.js');

$(function(){
      $("#nav-menu").load("nav-menu.html");
      $("#footer").load("footer.html"); 
    });

