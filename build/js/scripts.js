
// Data
// ////////////////////////////////////////////////////

var data = [
    {   
        line1: 'COMPUTERS',
        line2: 'ARE USELESS',
        line3: 'THEY ONLY',
        line4: 'GIVE ANSWERS',
        author: 'Pablo Picasso'
    }, 
    {   
        line1: 'SO MUCH',
        line2: 'TECHNOLOGY',
        line3: 'SO LITTLE',
        line4: 'TALENT',
        author: 'Vernor Vinge'
    },
    {   
        line1: 'HARDWARE IS',
        line2: 'THE PART OF',
        line3: 'A COMPUTER',
        line4: 'WE CAN KICK',
        author: 'Jeff Pesis'
    }, 
    {   
        line1: 'f',
        line2: 'f',
        line3: 'f',
        line4: 'f',
        author: ''
    }, 
    {   
        line1: 'f',
        line2: 'f',
        line3: 'f',
        line4: 'f',
        author: ''
    }, 
    {   
        line1: 'f',
        line2: 'f',
        line3: 'f',
        line4: 'f',
        author: ''
    }, 
    {   
        line1: 'f',
        line2: 'f',
        line3: 'f',
        line4: 'f',
        author: ''
    }, 
      
];

$(document).ready(function(){
	init();
	
    $(".face").hover(function(){
        // $(this).parent().find(".face").css('opacity','.5');
        $(this).toggleClass("hover");
    });

    $(".face").click(function(){
        if($(this).is(".off")){
            $(this).toggleClass("off", false);
        } else {
            $(this).toggleClass("off", true);
        }
    });
    
    $(".fill").click(function(){
    	$(".face").toggleClass("off", false);
    });
    
    $(".clear").click(function(){
    	$(".face").toggleClass("off", true);
    });
    
    $(".write-dialog").click(function(){
    	$(".form-container").toggleClass("active");
    });

    $(".next").click(function(){
    	if(count==quotes.length-1){
    		count=0;
    	} else{
    		count++;
    	}
    	$line1=quotes[count].line1;
    	$line2=quotes[count].line2;
    	$line3=quotes[count].line3;
    	$line4=quotes[count].line4;
    	$author=quotes[count].author;
    	write();
    });
    
    $(".cancel").click(function(){
    	$(".form-container").toggleClass("active");
    });
    
    $(".write").click(function(){
		$line1=$("input").eq(0).val().toUpperCase();
		$line2=$("input").eq(1).val().toUpperCase();
		$line3=$("input").eq(2).val().toUpperCase();
		$line4=$("input").eq(3).val().toUpperCase();
		$author=$("input[name='author']").eq(0).val().toUpperCase();
		$(".form-container").toggleClass("active");
		write();
    	
    });

});

var $current, $line1, $line2, $line3, $line4, $author, count=0;

function init(){
	$line1=quotes[count].line1;
	$line2=quotes[count].line2;
	$line3=quotes[count].line3;
	$line4=quotes[count].line4;
	$author=quotes[count].author;
	write();
	resize();
}

function resize(){
	$cube_width=$(".cube").width();
	$(".cube").height(2*$cube_width);
	// $cube_height=$(".cube").height();
	// $(".cube").width($cube_height*.5);
}

var delay = (function(){
  var timer = 0;
  return function(callback, ms){
    clearTimeout (timer);
    timer = setTimeout(callback, ms);
  };
})();

$(window).resize(function () {
	delay(function(){
		console.log('Resize...');
	      resize();
	}, 200);
});

function write(){
	if($author){ 	$(".by-line").text($author);	}	 
	else { 			$(".by-line").text("UNKNOWN");	}

	for(var l=0; l<4; l++){
		if(l==0){ $current=$line1; }
		if(l==1){ $current=$line2; }
		if(l==2){ $current=$line3; }
		if(l==3){ $current=$line4; }	
	
		if($current){
			for(var i=0; i<$current.length; i++){
				var $cube=$(".cube").eq((12*l)+i);
				if($current[i]=='A'){
					$cube.find(".top-close").toggleClass("off", false);
					$cube.find(".top-far").toggleClass("off", false);
					$cube.find(".right-top").toggleClass("off", false);
					$cube.find(".right-bottom").toggleClass("off", false);
					$cube.find(".bottom-far").toggleClass("off", true);
					$cube.find(".bottom-close").toggleClass("off", true);
					$cube.find(".left-bottom").toggleClass("off", false);
					$cube.find(".left-top").toggleClass("off", false);
					$cube.find(".middle-top").toggleClass("off", true);
					$cube.find(".middle-bottom").toggleClass("off", true);
					$cube.find(".cross").toggleClass("off", false);
				} 
				else if($current[i]=='B'){
					$cube.find(".top-close").toggleClass("off", false);
					$cube.find(".top-far").toggleClass("off", false);
					$cube.find(".right-top").toggleClass("off", false);
					$cube.find(".right-bottom").toggleClass("off", false);
					$cube.find(".bottom-far").toggleClass("off", false);
					$cube.find(".bottom-close").toggleClass("off", false);
					$cube.find(".left-bottom").toggleClass("off", false);
					$cube.find(".left-top").toggleClass("off", false);
					$cube.find(".middle-top").toggleClass("off", true);
					$cube.find(".middle-bottom").toggleClass("off", true);
					$cube.find(".cross").toggleClass("off", false);
				}
				else if($current[i]=='C'){
					$cube.find(".top-close").toggleClass("off", false);
					$cube.find(".top-far").toggleClass("off", false);
					$cube.find(".right-top").toggleClass("off", true);
					$cube.find(".right-bottom").toggleClass("off", true);
					$cube.find(".bottom-far").toggleClass("off", false);
					$cube.find(".bottom-close").toggleClass("off", false);
					$cube.find(".left-bottom").toggleClass("off", false);
					$cube.find(".left-top").toggleClass("off", false);
					$cube.find(".middle-top").toggleClass("off", true);
					$cube.find(".middle-bottom").toggleClass("off", true);
					$cube.find(".cross").toggleClass("off", true);
				}
				else if($current[i]=='D'){
					$cube.find(".top-close").toggleClass("off", false);
					$cube.find(".top-far").toggleClass("off", false);
					$cube.find(".right-top").toggleClass("off", false);
					$cube.find(".right-bottom").toggleClass("off", false);
					$cube.find(".bottom-far").toggleClass("off", false);
					$cube.find(".bottom-close").toggleClass("off", false);
					$cube.find(".left-bottom").toggleClass("off", true);
					$cube.find(".left-top").toggleClass("off", true);
					$cube.find(".middle-top").toggleClass("off", false);
					$cube.find(".middle-bottom").toggleClass("off", false);
					$cube.find(".cross").toggleClass("off", true);
				}
				else if($current[i]=='E'){
					$cube.find(".top-close").toggleClass("off", false);
					$cube.find(".top-far").toggleClass("off", false);
					$cube.find(".right-top").toggleClass("off", true);
					$cube.find(".right-bottom").toggleClass("off", true);
					$cube.find(".bottom-far").toggleClass("off", false);
					$cube.find(".bottom-close").toggleClass("off", false);
					$cube.find(".left-bottom").toggleClass("off", false);
					$cube.find(".left-top").toggleClass("off", false);
					$cube.find(".middle-top").toggleClass("off", true);
					$cube.find(".middle-bottom").toggleClass("off", true);
					$cube.find(".cross").toggleClass("off", false);
				}
				else if($current[i]=='F'){
					$cube.find(".top-close").toggleClass("off", false);
					$cube.find(".top-far").toggleClass("off", false);
					$cube.find(".right-top").toggleClass("off", true);
					$cube.find(".right-bottom").toggleClass("off", true);
					$cube.find(".bottom-far").toggleClass("off", true);
					$cube.find(".bottom-close").toggleClass("off", true);
					$cube.find(".left-bottom").toggleClass("off", false);
					$cube.find(".left-top").toggleClass("off", false);
					$cube.find(".middle-top").toggleClass("off", true);
					$cube.find(".middle-bottom").toggleClass("off", true);
					$cube.find(".cross").toggleClass("off", false);
				}
				else if($current[i]=='G'){
					$cube.find(".top-close").toggleClass("off", false);
					$cube.find(".top-far").toggleClass("off", false);
					$cube.find(".right-top").toggleClass("off", true);
					$cube.find(".right-bottom").toggleClass("off", false);
					$cube.find(".bottom-far").toggleClass("off", false);
					$cube.find(".bottom-close").toggleClass("off", false);
					$cube.find(".left-bottom").toggleClass("off", false);
					$cube.find(".left-top").toggleClass("off", false);
					$cube.find(".middle-top").toggleClass("off", true);
					$cube.find(".middle-bottom").toggleClass("off", true);
					$cube.find(".cross").toggleClass("off", false);
				}
				else if($current[i]=='H'){
					$cube.find(".top-close").toggleClass("off", true);
					$cube.find(".top-far").toggleClass("off", true);
					$cube.find(".right-top").toggleClass("off", false);
					$cube.find(".right-bottom").toggleClass("off", false);
					$cube.find(".bottom-far").toggleClass("off", true);
					$cube.find(".bottom-close").toggleClass("off", true);
					$cube.find(".left-bottom").toggleClass("off", false);
					$cube.find(".left-top").toggleClass("off", false);
					$cube.find(".middle-top").toggleClass("off", true);
					$cube.find(".middle-bottom").toggleClass("off", true);
					$cube.find(".cross").toggleClass("off", false);
				}
				else if($current[i]=='I'){
					$cube.find(".top-close").toggleClass("off",false);
					$cube.find(".top-far").toggleClass("off", false);
					$cube.find(".right-top").toggleClass("off", true);
					$cube.find(".right-bottom").toggleClass("off", true);
					$cube.find(".bottom-far").toggleClass("off", false);
					$cube.find(".bottom-close").toggleClass("off", false);
					$cube.find(".left-bottom").toggleClass("off", true);
					$cube.find(".left-top").toggleClass("off", true);
					$cube.find(".middle-top").toggleClass("off", false);
					$cube.find(".middle-bottom").toggleClass("off", false);
					$cube.find(".cross").toggleClass("off", true);
				}
				else if($current[i]=='J'){
					$cube.find(".top-close").toggleClass("off", true);
					$cube.find(".top-far").toggleClass("off", true);
					$cube.find(".right-top").toggleClass("off", false);
					$cube.find(".right-bottom").toggleClass("off", false);
					$cube.find(".bottom-far").toggleClass("off", false);
					$cube.find(".bottom-close").toggleClass("off", false);
					$cube.find(".left-bottom").toggleClass("off", false);
					$cube.find(".left-top").toggleClass("off", true);
					$cube.find(".middle-top").toggleClass("off", true);
					$cube.find(".middle-bottom").toggleClass("off", true);
					$cube.find(".cross").toggleClass("off", true);
				}
				else if($current[i]=='K'){
					$cube.find(".top-close").toggleClass("off", true);
					$cube.find(".top-far").toggleClass("off", false);
					$cube.find(".right-top").toggleClass("off", true);
					$cube.find(".right-bottom").toggleClass("off", false);
					$cube.find(".bottom-far").toggleClass("off", true);
					$cube.find(".bottom-close").toggleClass("off", true);
					$cube.find(".left-bottom").toggleClass("off", false);
					$cube.find(".left-top").toggleClass("off", false);
					$cube.find(".middle-top").toggleClass("off", false);
					$cube.find(".middle-bottom").toggleClass("off", true);
					$cube.find(".cross").toggleClass("off", false);
				}
				else if($current[i]=='L'){
					$cube.find(".top-close").toggleClass("off", true);
					$cube.find(".top-far").toggleClass("off", true);
					$cube.find(".right-top").toggleClass("off", true);
					$cube.find(".right-bottom").toggleClass("off", true);
					$cube.find(".bottom-far").toggleClass("off", false);
					$cube.find(".bottom-close").toggleClass("off", false);
					$cube.find(".left-bottom").toggleClass("off", false);
					$cube.find(".left-top").toggleClass("off", false);
					$cube.find(".middle-top").toggleClass("off", true);
					$cube.find(".middle-bottom").toggleClass("off", true);
					$cube.find(".cross").toggleClass("off", true);
				}
				else if($current[i]=='M'){
					$cube.find(".top-close").toggleClass("off", false);
					$cube.find(".top-far").toggleClass("off", false);
					$cube.find(".right-top").toggleClass("off", false);
					$cube.find(".right-bottom").toggleClass("off", false);
					$cube.find(".bottom-far").toggleClass("off", true);
					$cube.find(".bottom-close").toggleClass("off", true);
					$cube.find(".left-bottom").toggleClass("off", false);
					$cube.find(".left-top").toggleClass("off", false);
					$cube.find(".middle-top").toggleClass("off", false);
					$cube.find(".middle-bottom").toggleClass("off", false);
					$cube.find(".cross").toggleClass("off", true);
				}
				else if($current[i]=='N'){
					$cube.find(".top-close").toggleClass("off", false);
					$cube.find(".top-far").toggleClass("off", true);
					$cube.find(".right-top").toggleClass("off", false);
					$cube.find(".right-bottom").toggleClass("off", false);
					$cube.find(".bottom-far").toggleClass("off", false);
					$cube.find(".bottom-close").toggleClass("off", true);
					$cube.find(".left-bottom").toggleClass("off", false);
					$cube.find(".left-top").toggleClass("off", false);
					$cube.find(".middle-top").toggleClass("off", false);
					$cube.find(".middle-bottom").toggleClass("off", false);
					$cube.find(".cross").toggleClass("off", true);
				}
				else if($current[i]=='O'){
					$cube.find(".top-close").toggleClass("off", false);
					$cube.find(".top-far").toggleClass("off", false);
					$cube.find(".right-top").toggleClass("off", false);
					$cube.find(".right-bottom").toggleClass("off", false);
					$cube.find(".bottom-far").toggleClass("off", false);
					$cube.find(".bottom-close").toggleClass("off", false);
					$cube.find(".left-bottom").toggleClass("off", false);
					$cube.find(".left-top").toggleClass("off", false);
					$cube.find(".middle-top").toggleClass("off", true);
					$cube.find(".middle-bottom").toggleClass("off", true);
					$cube.find(".cross").toggleClass("off", true);
				}
				else if($current[i]=='P'){
					$cube.find(".top-close").toggleClass("off", false);
					$cube.find(".top-far").toggleClass("off", false);
					$cube.find(".right-top").toggleClass("off", false);
					$cube.find(".right-bottom").toggleClass("off", true);
					$cube.find(".bottom-far").toggleClass("off", true);
					$cube.find(".bottom-close").toggleClass("off", true);
					$cube.find(".left-bottom").toggleClass("off", false);
					$cube.find(".left-top").toggleClass("off", false);
					$cube.find(".middle-top").toggleClass("off", true);
					$cube.find(".middle-bottom").toggleClass("off", true);
					$cube.find(".cross").toggleClass("off", false);
				}
				else if($current[i]=='Q'){
					$cube.find(".top-close").toggleClass("off", false);
					$cube.find(".top-far").toggleClass("off", false);
					$cube.find(".right-top").toggleClass("off", false);
					$cube.find(".right-bottom").toggleClass("off", false);
					$cube.find(".bottom-far").toggleClass("off", false);
					$cube.find(".bottom-close").toggleClass("off", false);
					$cube.find(".left-bottom").toggleClass("off", false);
					$cube.find(".left-top").toggleClass("off", false);
					$cube.find(".middle-top").toggleClass("off", false);
					$cube.find(".middle-bottom").toggleClass("off", false);
					$cube.find(".cross").toggleClass("off", false);
				}
				else if($current[i]=='R'){
					$cube.find(".top-close").toggleClass("off", false);
					$cube.find(".top-far").toggleClass("off", false);
					$cube.find(".right-top").toggleClass("off", false);
					$cube.find(".right-bottom").toggleClass("off", true);
					$cube.find(".bottom-far").toggleClass("off", false);
					$cube.find(".bottom-close").toggleClass("off", true);
					$cube.find(".left-bottom").toggleClass("off", false);
					$cube.find(".left-top").toggleClass("off", false);
					$cube.find(".middle-top").toggleClass("off", true);
					$cube.find(".middle-bottom").toggleClass("off", false);
					$cube.find(".cross").toggleClass("off", false);
				}
				else if($current[i]=='S'){
					$cube.find(".top-close").toggleClass("off", false);
					$cube.find(".top-far").toggleClass("off", false);
					$cube.find(".right-top").toggleClass("off", true);
					$cube.find(".right-bottom").toggleClass("off", false);
					$cube.find(".bottom-far").toggleClass("off", false);
					$cube.find(".bottom-close").toggleClass("off", false);
					$cube.find(".left-bottom").toggleClass("off", true);
					$cube.find(".left-top").toggleClass("off", false);
					$cube.find(".middle-top").toggleClass("off", true);
					$cube.find(".middle-bottom").toggleClass("off", true);
					$cube.find(".cross").toggleClass("off", false);
				}
				else if($current[i]=='T'){
					$cube.find(".top-close").toggleClass("off", false);
					$cube.find(".top-far").toggleClass("off", false);
					$cube.find(".right-top").toggleClass("off", true);
					$cube.find(".right-bottom").toggleClass("off", true);
					$cube.find(".bottom-far").toggleClass("off", true);
					$cube.find(".bottom-close").toggleClass("off", true);
					$cube.find(".left-bottom").toggleClass("off", true);
					$cube.find(".left-top").toggleClass("off", true);
					$cube.find(".middle-top").toggleClass("off", false);
					$cube.find(".middle-bottom").toggleClass("off", false);
					$cube.find(".cross").toggleClass("off", true);
				}
				else if($current[i]=='U'){
					$cube.find(".top-close").toggleClass("off", true);
					$cube.find(".top-far").toggleClass("off", true);
					$cube.find(".right-top").toggleClass("off", false);
					$cube.find(".right-bottom").toggleClass("off", false);
					$cube.find(".bottom-far").toggleClass("off", false);
					$cube.find(".bottom-close").toggleClass("off", false);
					$cube.find(".left-bottom").toggleClass("off", false);
					$cube.find(".left-top").toggleClass("off", false);
					$cube.find(".middle-top").toggleClass("off", true);
					$cube.find(".middle-bottom").toggleClass("off", true);
					$cube.find(".cross").toggleClass("off", true);
				}
				else if($current[i]=='V'){
					$cube.find(".top-close").toggleClass("off", true);
					$cube.find(".top-far").toggleClass("off", true);
					$cube.find(".right-top").toggleClass("off", true);
					$cube.find(".right-bottom").toggleClass("off", true);
					$cube.find(".bottom-far").toggleClass("off", true);
					$cube.find(".bottom-close").toggleClass("off", false);
					$cube.find(".left-bottom").toggleClass("off", false);
					$cube.find(".left-top").toggleClass("off", false);
					$cube.find(".middle-top").toggleClass("off", false);
					$cube.find(".middle-bottom").toggleClass("off", false);
					$cube.find(".cross").toggleClass("off", true);
				}
				else if($current[i]=='W'){
					$cube.find(".top-close").toggleClass("off", true);
					$cube.find(".top-far").toggleClass("off", true);
					$cube.find(".right-top").toggleClass("off", false);
					$cube.find(".right-bottom").toggleClass("off", false);
					$cube.find(".bottom-far").toggleClass("off", false);
					$cube.find(".bottom-close").toggleClass("off", false);
					$cube.find(".left-bottom").toggleClass("off", false);
					$cube.find(".left-top").toggleClass("off", false);
					$cube.find(".middle-top").toggleClass("off", false);
					$cube.find(".middle-bottom").toggleClass("off", false);
					$cube.find(".cross").toggleClass("off", true);
				}
				else if($current[i]=='X'){
					$cube.find(".top-close").toggleClass("off", true);
					$cube.find(".top-far").toggleClass("off", true);
					$cube.find(".right-top").toggleClass("off", false);
					$cube.find(".right-bottom").toggleClass("off", true);
					$cube.find(".bottom-far").toggleClass("off", true);
					$cube.find(".bottom-close").toggleClass("off", true);
					$cube.find(".left-bottom").toggleClass("off", false);
					$cube.find(".left-top").toggleClass("off", true);
					$cube.find(".middle-top").toggleClass("off", false);
					$cube.find(".middle-bottom").toggleClass("off", false);
					$cube.find(".cross").toggleClass("off", false);
				}
				else if($current[i]=='Y'){
					$cube.find(".top-close").toggleClass("off", true);
					$cube.find(".top-far").toggleClass("off", true);
					$cube.find(".right-top").toggleClass("off", false);
					$cube.find(".right-bottom").toggleClass("off", true);
					$cube.find(".bottom-far").toggleClass("off", true);
					$cube.find(".bottom-close").toggleClass("off", true);
					$cube.find(".left-bottom").toggleClass("off", true);
					$cube.find(".left-top").toggleClass("off", false);
					$cube.find(".middle-top").toggleClass("off", true);
					$cube.find(".middle-bottom").toggleClass("off", false);
					$cube.find(".cross").toggleClass("off", false);
				}
				else if($current[i]=='Z'){
					$cube.find(".top-close").toggleClass("off", false);
					$cube.find(".top-far").toggleClass("off", false);
					$cube.find(".right-top").toggleClass("off", false);
					$cube.find(".right-bottom").toggleClass("off", true);
					$cube.find(".bottom-far").toggleClass("off", false);
					$cube.find(".bottom-close").toggleClass("off", false);
					$cube.find(".left-bottom").toggleClass("off", false);
					$cube.find(".left-top").toggleClass("off", true);
					$cube.find(".middle-top").toggleClass("off", true);
					$cube.find(".middle-bottom").toggleClass("off", true);
					$cube.find(".cross").toggleClass("off", false);
				}
				else{
					$cube.find(".face").toggleClass("off", true);
				}
			}
		
			if($current.length<12){
				for(var i=$current.length; i<12; i++){
					var $cube=$(".cube").eq((l*12)+i);
					$cube.find(".face").toggleClass("off", true);
				}
			}
		}
	}

}




// Data
// ////////////////////////////////////////////////////

var quotes = [
    {   
        line1: 'COMPUTERS',
        line2: 'ARE USELESS',
        line3: 'THEY ONLY',
        line4: 'GIVE ANSWERS',
        author: 'Pablo Picasso'
    }, 
    {   
        line1: 'SO MUCH',
        line2: 'TECHNOLOGY',
        line3: 'SO LITTLE',
        line4: 'TALENT',
        author: 'Vernor Vinge'
    },
    {   
        line1: 'HARDWARE IS',
        line2: 'THE PART OF',
        line3: 'THE COMPUTER',
        line4: 'WE CAN KICK',
        author: 'Jeff Pesis'
    }, 
    {   
        line1: 'TECHNOLOGY',
        line2: 'IS A GOOD',
        line3: 'SERVANT BUT',
        line4: 'A BAD MASTER',
        author: 'Christian Lous Lange'
    }, 
    {   
        line1: 'THE HUMAN',
        line2: 'SPIRIT MUST',
        line3: 'PREVAIL OVER',
        line4: 'TECHNOLOGY',
        author: 'Albert Einstein'
    }, 
    {   
        line1: 'ADVANCED',
        line2: 'TECHNOLOGY',
        line3: 'IS EQUAL',
        line4: ' TO MAGIC',
        author: 'Sir Arthur C. Clarke'
    } 
];

