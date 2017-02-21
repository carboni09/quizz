
	/*$('.create-page').click(function showQuiz (){

		var a = 'What was the receiver\'s name';
		

		
		var newPageContent = '<div class="page" data-page="my-page">' +
                        
                          
                '<div class="page-content ">' +
                '<div class="progressbar" data-progress="20">'+
    
				'</div>'+
                '<div class="content-block">'+
                '<h1 class="text-center color-black" id="question"></h1>'+
                '</div>'+
                        '<div class="card hidden">'+
    '<div class="card-header">Question 1</div>'+
    '<div class="card-content">'+
        '<div class="card-content-inner" >Where was the destination of the package</div>'+
    '</div>'+
    
'</div> '+
                          '<br>'+
                          '<div class="card">'+
  '<div class="list-block">'+
    '<ul>'+
      '<li>'+
        '<a href="#" class="list-button item-link">A. School</a>'+
      '</li>'+
      '<li>'+
        '<a href="#" class="list-button item-link">B. Post Office</a>'+
      '</li>'+
      '<li>'+
        '<a href="#" class="list-button item-link">C. Warehouse</a>'+
      '</li>'+
      '<li>'+
        '<a href="#" class="list-button item-link">D. Cargo Plane</a>'+
      '</li>'+
    '</ul>'+
  '</div>'+
'</div>'+ 

	

                          '<div class="content-block">'+
                          '<p class="buttons-row">'+
  '<a href="#" class="options button button-big button-fill color-purple">A</a>'+
  '<a href="#" class="options button button-big button-fill color-orange">B</a>'+
  '<a href="#" class="options button button-big button-fill color-grey">C</a>'+
  '<a href="#" class=" options button button-big button-fill color-red">D</a>'+
'</p>'+	
	'</div>'+
	'<div class="content-block">'+
	'<p class="buttons-row">'+
	'<a href="#" class="hidden button button-big button-fill button-raised button-color color-green" id="next-button">CONTINUE</a>'+
		'</p>'+
		'</div>'+
                        '</div>' +
                      '</div>';

                      

		mainView.router.load({
  content: newPageContent,
  animatePages: false
});
		var a = 'How many percent of '+ Math.floor((Math.random() * 250) + 1) +' is '+ 
		Math.floor((Math.random() * 100) + 1) +' ?';
		document.getElementById("question").innerHTML = a;

		$('.options').click(function(){
			$("#next-button").removeClass("hidden");
			//$("#next-button").addClass("create-page");

		});
		
		

var timer = new Timer({
  tick    : 1,
  ontick  : function(ms) {
   //console.log(ms + ' milliseconds left') 

   $('#time-left').html(Math.floor((ms / 1000 ) / 60) );

	},
  onstart : function() { console.log('timer started') },
  onstop  : function() { console.log('timer stop') },
  onpause : function() { console.log('timer set on pause') },
  onend   : function() { 
  	console.log('timer ended normally')
  		mainView.router.load({pageName :'quiz'})
     }
});

	timer.start(2 * 60);

	})*/


	 $$('.create-page').on('click', function () {
        createContentPage();
    });




var dynamicPageIndex = 0;
	function createContentPage() {
	mainView.router.loadContent(
        '<div data-page="dynamic-pages" class="page">' +
                        
                          
                '<div class="page-content ">' +
                '<div class="progressbar hidden" data-progress="20">'+
    
				'</div>'+
                '<div class="content-block">'+
                '<h1 class="text-center color-black question"></h1>'+
                
                '</div>'+
                        '<div class="card hidden">'+
    '<div class="card-header">Question 1</div>'+
    '<div class="card-content">'+
        '<div class="card-content-inner" >Where was the destination of the package</div>'+
    '</div>'+
    
'</div> '+
                          '<br>'+
                          '<div class="card">'+
  '<div class="list-block">'+
    '<ul>'+
      '<li>'+
        '<a href="#" class="list-button item-link" >A. <span class="optionA"></span></a>'+
      '</li>'+
      '<li>'+
        '<a href="#" class="list-button item-link">B. <span class="optionB"></span></a>'+
      '</li>'+
      '<li>'+
        '<a href="#" class="list-button item-link">C. <span class="optionC"></span></a>'+
      '</li>'+
      '<li>'+
        '<a href="#" class="list-button item-link">D. <span class="optionD"></span></a>'+
      '</li>'+
    '</ul>'+
  '</div>'+
'</div>'+ 

	

                          '<div class="content-block">'+
                          '<p class="buttons-row">'+
  '<a href="#" class="options button button-big button-fill color-purple" >A</a>'+
  '<a href="#" class="options button button-big button-fill color-orange" id="optionB">B</a>'+
  '<a href="#" class="options button button-big button-fill color-grey" id="optionC">C</a>'+
  '<a href="#" class=" options button button-big button-fill color-red" id="optionD">D</a>'+
'</p>'+	
	'</div>'+
	'<div class="content-block">'+
	'<p class="buttons-row">'+
	'<a href="#" class="hidden button button-big button-fill button-raised button-color color-green next-button">CONTINUE</a>'+
	
		'</p>'+
		'</div>'+
                        '</div>' +
                      '</div>'
        );

	var  question = [
	{text:"A is for apple and B is for ?",
	 answer:"C" ,
	  optionA:"Zebra",
	  optionB:"Hall",
	  optionC:"Bread",
	  optionD:"Dread",
	   attempted:true},

	   {text:"Which of these is not an olympic sport ?",
	 answer:"B" ,
	  optionA:"Water Polo",
	  optionB:"Equisterean",
	  optionC:"Fending",
	  optionD:"Backstroke",
	   attempted:false},

	   {text:"Dundee is a town in which of these countries?",
	 answer:"D" ,
	  optionA:"Ireland",
	  optionB:"Wales",
	  optionC:"Sweden",
	  optionD:"Scotland",
	   attempted:false},


	   {text:"Who was the winner of the 2017 African Cup of Nation",
	 answer:"D" ,
	  optionA:"Sudan",
	  optionB:"Cameroon",
	  optionC:"Morocco",
	  optionD:"Gabon",
	   attempted:false},

	   {text:"According to the story, Mr. Adi was among the founders of which of these brands",
	 answer:"D" ,
	  optionA:"Nike",
	  optionB:"North Face",
	  optionC:"Adidas",
	  optionD:"ANDY 1",
	   attempted:false}


	   ];

	  i = Math.floor((Math.random() * 4) + 1)

	   
	var a = 'How many percent of '+ Math.floor((Math.random() * 250) + 1) +' is '+ 
		Math.floor((Math.random() * 100) + 1) +' ?';
		//document.getElementById("question").innerHTML = a +'Dynamic Page ' + (++dynamicPageIndex) ;
		$('.question').text(question[i].text)
		$('.optionA').text(question[i].optionA)
		$('.optionB').text(question[i].optionB)
		$('.optionC').text(question[i].optionC)
		$('.optionD').text(question[i].optionD)




$$('.options').on('click', function () {
 	    //var vvv = $(this).text();
 	    console.log($(this).text())
 	    $('.button').removeClass('faa-float animated');
 	    $(this).addClass('faa-float animated');
 	    $(".next-button").removeClass("hidden");
 	    
    });


$$('.next-button').on('click', function () {
					i--
 	     	    createContentPage();
 	    
    });


var timer = new Timer({
  tick    : 1,
  ontick  : function(ms) {
   //console.log(ms + ' milliseconds left') 

   $('#time-left').html(Math.floor((ms / 1000 ) / 60) );

	},
  onstart : function() { console.log('timer started') },
  onstop  : function() { console.log('timer stop') },
  onpause : function() { console.log('timer set on pause') },
  onend   : function() { 
  	console.log('timer ended normally')
  		mainView.router.load({pageName :'reading'})
     }
});

	timer.start(1*20);

};




	

	
    



	
    