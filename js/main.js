
$(document).ready( function() {
    
    
/*-------------------------------------------------- 
Preloader
---------------------------------------------------*/
var width = 100,
    perfData = window.performance.timing,
    EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
    time = ((EstimatedTime / 1) % 100) * 100


// Percentage Increment Animation
var PercentageID = $(".percentage"),
    start = 0,
    end = 100,
    durataion = time;
animateValue(PercentageID, start, end, durataion);

function animateValue(id, start, end, duration) {

    var range = end - start,
        current = start,
        increment = end > start ? 1 : -1,
        stepTime = Math.abs(Math.floor(duration / range)),
        obj = $(id);


    var timer = setInterval(function () {
        current += increment;
        $(obj).text(current);
        //obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}



setTimeout(function () {
    $('.preloader').fadeOut();

    $('.cd-transition-layer').addClass('closing').delay(2000).queue(function () {
        $(this).removeClass("visible closing opening").dequeue();
    });

}, time);
		
    


   // FADE OUT EFFECT WHEN CLICK A LINK
    $(document).on("click", "a:not(.lightbox)", function () {
        var newUrl = $(this).attr("href");
        if (!newUrl || newUrl[0] === "#") {
            location.hash = newUrl;
            return;
        }
        $("html").fadeOut(function () {
            location = newUrl;
        });
        return false;
    });
    

    var paget = $(".page-title .title").text();

    $( ".page-title").append("<span></span>");
    $( ".page-title span").append(paget);


    
    //posts page hover 
    $('.blog-post .blog-link').hover(function(){
        $(this).parent('.content-outter').parent('.blog-post').toggleClass('mousef');
        $(this).parent('.blog-post').toggleClass('mousef');
    });

/*--------------------------------------------------
Smoke Effect
---------------------------------------------------*/	

function smokeeffect () {

    //cache some jQuery objects
    var modalTrigger = $('.nav-icon'),
        transitionLayer = $('.cd-transition-layer'),
        transitionBackground = transitionLayer.children(),
        modalWindow = $('.full-menu');

    var frameProportion = 1.78, //png frame aspect ratio
        frames = 25, //number of png frames
        resize = false;

    //set transitionBackground dimentions
    setLayerDimensions();
    $(window).on('resize', function(){
        if( !resize ) {
            resize = true;
            (!window.requestAnimationFrame) ? setTimeout(setLayerDimensions, 300) : window.requestAnimationFrame(setLayerDimensions);
        }
    });

    //open modal window
    modalTrigger.on('click', function(event){   
        event.preventDefault();
        transitionLayer.addClass('visible opening');
        var delay = ( $('.no-cssanimations').length > 0 ) ? 0 : 600;
        setTimeout(function(){
            modalWindow.addClass('visible');
        }, delay);
    });

    //close modal window
    modalWindow.on('click', '.modal-close', function(event){
        event.preventDefault();
        transitionLayer.addClass('closing');
        modalWindow.removeClass('visible');
        transitionBackground.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
            transitionLayer.removeClass('closing opening visible');
            transitionBackground.off('webkitAnimationEnd oanimationend msAnimationEnd animationend');
        });
    });

    function setLayerDimensions() {
        var windowWidth = $(window).width(),
            windowHeight = $(window).height(),
            layerHeight, layerWidth;

        if( windowWidth/windowHeight > frameProportion ) {
            layerWidth = windowWidth;
            layerHeight = layerWidth/frameProportion;
        } else {
            layerHeight = windowHeight*1.2;
            layerWidth = layerHeight*frameProportion;
        }

        transitionBackground.css({
            'width': layerWidth*frames+'px',
            'height': layerHeight+'px',
        });

        resize = false;
    }

}
smokeeffect();



//Прогрузка изображений


 
    
/*--------------------------------------------------
 Hero Section Height
---------------------------------------------------*/	
     function homeh() {
        var hometext = $('.main')

        hometext.css({
            "height": $(window).height() + "px"
        });
        $('.content').css({
           "margin-top":  $(window).height() + "px"
        });
         
    }
        
    homeh();
    $(window).resize(homeh);

    $( ".page-menu li:not(.social) a, .portfolio_filter ul li a").append( "<span></span>" );
    
    $(".hassub ul").hide();
    $('li.hassub .arrow').on("click", function(){
            $('li.hassub a').not(this).next('ul').slideUp();
            $(this).next('ul').slideToggle();
            
    });


    $('.nav-icon',).on("click", function(){
            $(this).toggleClass('modal-close');
    });


    //Filter Show
    $(window).scroll(function() {               
        var scroll = $(window).scrollTop();
        var homeheight = $(".main").height();    
        var vf = $(".vf").height();   
        var content = $(".content").height();          


        if (scroll+homeheight/1.5 > homeheight - 1 ) { 
            $(".vf").addClass("show");
        }else {
            $(".vf").removeClass("show");
        }

        if (scroll+homeheight > homeheight+content ) { 
            $(".vf").addClass("fix");
        }else {
            $(".vf").removeClass("fix");
        }
        
        

    });

    //Main Down Arrow
    $('.down-arrow').on('click', function(){
        $('body,html').animate({ scrollTop: $('.main').height() }, 800);
    });
    
   //Up To Top Link
   function uptotop(){
        var pagetop = $('body').scrollTop();
        $('.uptotop').on('click', function(){
            $('html, body').animate({ 
                scrollTop: pagetop
            }, 800);
        });
    }

    uptotop();

window.onpageshow = function(event) {
    if (event.persisted) {
        window.location.reload() 
    }
};

$(window).bind("pageshow", function(event) {
    if (event.originalEvent.persisted) {
        window.location.reload() 
    }
});
    


/*--------------------------------------------------
 scale Effect
---------------------------------------------------*/   

if ($(window).width() > 481) {
      function promoEffect() {
        var pro = $('.main');
        var where =  window.pageYOffset || document.documentElement.scrollTop;
        pro.css({
            'transform': 'scale('+(100 - where/100)/100+')',
             'opacity' : (1 - (where/20) / 19)
        }) 
    }
    promoEffect();
    $(window).scroll(promoEffect);
}else{
      function promoEffect() {
        var pro = $('.main');
        var where =  window.pageYOffset || document.documentElement.scrollTop;
        pro.css({
            'transform': 'scale('+(100 - where/100)/99+')',
             'opacity' : (1 - (where/20) / 15)
        }) 
    }
    promoEffect();
    $(window).scroll(promoEffect);

}
 


    
		
    
}); // document read end 


// Start Vue

		//  for Services
		const SericesNow = new Vue({
			el: '#ourServices',
			data: {
				activetab: 1,				
			},
		});
		// for Slider portfolio
		const SliderNow = new Vue({
			el: '#unitSliders',
			data: {
				activeslide: 1,
				booleanValue:true
			},
		});
		// for Team
		const team = (name, profession, image, biography, text) => ({
			name,
			profession,
			image,
			biography,
			text
		});

		const person = [
			team("Name 1", "developer", "img/head-1.png",
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. ",
				"10 years"),
			team("Name 2", "Mmanager", "img/head-2.png",
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
				"10 years"),
			team("Name 3", "work", "img/head-3.png",
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
				"10 years"),
			team("Name 4", "prof", "img/head-4.png",
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
				"10 years")
		];

		const personal = new Vue({
			el: "#team",
			data: {
				person: person,
				team: person[0],
				selectnameindex: 0,
				selectpersonindex: 0
			},
			methods: {
				selectname: function (index) {
					// console.log("Hello",index)
					this.team = person[index]
					this.selectnameindex = index
				},
				selectperson: function (index) {
					this.team = person[index]
					this.selectpersonindex = index
				}
			}
		});
// End for Team


// End Vue


$(document).load( function() {
    
smokeeffect()

}); // document load end 




