//\/\\inerva.JS & Stylesheets by /\/\\!sterZ!k
$ (document).ready( function () {
	
	// Variables
	var imgTime = 4000,
           tranSpeed = 400;

           // Selects all direct child elements specified by "child" of elements specified by "parent".
      	var listItems = $ ("#slider").children('li'),
           dotItems = $ ('#dots').children('li'),
           // The number of elements in the jQuery object.
           listLen = listItems.length,
           current,
           changeTimeout;

     
	function moveTo(newIndex) {  
		// Index Loop
           	var i = newIndex;
	           // Controllers Settings
	           if (newIndex == 'prev') {	          
	           	i = (current > 0) ? (current - 1) : (listLen - 1);	           
	           }

	           if (newIndex == 'next') {	           	
	           	i = (current < listLen - 1) ? (current + 1) : 0;	            
	           }
	           
	           // Reduce the set of matched elements to the one at the specified index.
	           dotItems.removeClass('active')	          
	           .eq(i).addClass('active');
	           
	           listItems.fadeOut(tranSpeed)
	           .eq(i).fadeIn(tranSpeed);
	           current = i;

	           clearTimeout(changeTimeout);
	           changeTimeout = setTimeout(function() { moveTo('next'); }, imgTime);


};

// Event handlers
$("#dots li").click(function () {    
	var i = $('#dots li').index(this);
      	moveTo(i);

});

$("#prev").click(function () {

   moveTo('prev');  

});

$("#next").click(function () {  

      moveTo('next');

	});
});