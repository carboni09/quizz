 		
         $('#login-button').click(function(){

    
            var username = $('#user-name').val();
        	var password = $('#pass-word').val();

        	if(username == '1234'  && password == 'pass'){

            	//mainView.router.loadPage('start.html');
            	window.location.href = "start.html";
            	
            

            }else {
            	myApp.alert('You username or password is invalid', 'Error')
            }



            


   			})


        




        $('#signup-button').click(function(){

        	var username = $('#signup-username').val();
        	var password = $('#signup-password').val();
        	var text = 'Thank you for signing up. Your verification code is 12345';

        	

            $.ajax({
            	type:'GET',
            	url:'http://api.bemastech.com/api/sendsms/plain?user=univasa&password=univasa123&sender=Quizz App&SMSText='+text+'&type=longSMS&GSM='+username,
            	//data:{},
            	success: function(response){
            		mainView.router.load({pageName: 'verify'})

            	}

            })
            /*if(username == '1234'  && password == 'pass'){

            	mainView.router.load({pageName: 'verify'})
            }else {
            	myApp.alert('You username or password is invalid', 'Error')
            }*/
        });




        $('#verify-button').click(function(){

        	var verificationCode = $('#verification-code').val();
        

        	

            if(verificationCode == '12345'){

            	//mainView.router.loadPage('start.html');
            	window.location.href= 'start.html';
            }else {
            	myApp.alert('Wrong verification code', 'Error')
            }
        });


        $('#logout-button').click(function(){
        	window.location.href='index.html';
        })


        $('#tap').click(function(){

            mainView.router.load({pageName: 'quiz'});
            
        })

         $('#play-audio-button').click(function(){
        	
        	
         	var media = new Media('http://s3-us-west-2.amazonaws.com/coursemate-course-materials/lecture-notes/ielts.mp3');
    
    // Play audio
    media.play();





        $('#pause-audio-button').click(function(){

            media.stop();
        });



        });


         $('#start-reading-button').click(function(){

            mainView.router.load({pageName: 'reading'});
        })




