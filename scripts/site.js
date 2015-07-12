$(document).ready(function(){
	
	var $gallery = $('.gallerySlider');
	var galleryStart = $(document).width() / 2 - 590;
	$($gallery).css('width', $('.gallerySlider li').length * 1180);
	$($gallery).css('left', galleryStart);
	var galleryEnd = galleryStart - $gallery.width() + 1180;
	var currentLeft = galleryStart;

	
	//alert(galleryEnd)
	
	/*$($gallery).draggable({ 
		axis: "x",
		addClasses: false
	});

	$($gallery).bind( "dragstop", function(event, ui) {
  		var nextStop;
  		
  		if(ui.offset.left > galleryStart){
			nextStop = galleryStart;
  		} else if(ui.offset.left < galleryEnd){
  			nextStop = galleryEnd;
  		} else if (ui.offset.left > currentLeft){
  			nextStop = currentLeft + 1180;
  		} else if (ui.offset.left < currentLeft){
  			nextStop = currentLeft - 1180;
  		}
		
		$($gallery).animate({
  				left: nextStop
  			}, 'fast', 'swing',  function(){
  				currentLeft = nextStop;
  			}
  		);
  		
	});*/
	
	
	// function to set and change the widths dynamically
	function setWidth(){
		var $image = $('.leftImage');
		//var ratio = $image.width() / $image.height();
		//console.log($(document).width() * 0.2)
		$image.css('width', $(document).width() * 0.25);
	}
	setWidth();
	$(window).resize(function(){
		setWidth();
	});
	
	// new gallery stuff
	
	$('.contLink').click(function(){
		$('.contGallery').css({
			borderLeft: '1px dotted #ec008c'
		});
		$('.kidsGallery').css({
			borderRight: 'none'
		}).animate({
			left: '-50%'
		}, function(){
			$(this).css('right', '-50%');
			$('#contImages').fadeIn();
			$('.contGallery .closeButton').fadeIn(function(){
				$(this).css('display', 'block');
			});
		});
		return false;
	});
	
	$('.kidsLink').click(function(){
		$('.kidsGallery').css({
			borderRight: '1px dotted #ec008c'
		});
		$('.contGallery').css({
			borderLeft: 'none'
		}).animate({
			right: '-50%'
		}, function(){
			$(this).css('right', '-50%');
			$('#kidsImages').fadeIn();
			$('.kidsGallery .closeButton').fadeIn(function(){
				$(this).css('display', 'block');
			});
		});
		return false;
		
	});
	$('.contGallery .closeButton').click(function(e){
		e.stopPropagation();
		$(this).fadeOut();
		$('#contImages').fadeOut(function(){
			$('.kidsGallery').animate({
				left: 0
			});
		});
		return false;
	});
	
	$('.kidsGallery .closeButton').click(function(e){
		e.stopPropagation();
		$(this).fadeOut();
		$('#kidsImages').fadeOut(function(){
			$('.contGallery').animate({
				right: '0'
			});
		});
		return false;
	});
	
	//console.log($(document).height());
	//console.log($('#header').height());
	
	var maxGalHeight = $(document).height() - $('#header').height();
	if (maxGalHeight < 500){
		//console.log(maxGalHeight);
		var findTop = ((maxGalHeight - 130) / 2) * -1;
		$('#galleryContainer').height(maxGalHeight - 50).css('margin-top', findTop);
		$('#contImages').css('margin-top', findTop);
		$('#kidsImages').css('margin-top', findTop);
	}	
	$('.tabNav a').click(function(){
		$('.tabPages>div').hide();
		$('.tabPages '+ $(this).attr('href')).fadeIn();
		$('.tabNav a').removeClass('active');
		$(this).addClass('active');
		return false;
	});
	
});