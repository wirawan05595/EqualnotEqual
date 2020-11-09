$(document).ready( function(){
  
  var left = "button#left";
  
  var right = "button#right",
      slider = ".slider",
      slide  = ".slide",
      slideNo = 1,
      width = $(slider).width(),
      slides = document.getElementsByClassName('slide').length,
      fraction = (100 / slides)*0.01,
      currentWidth = width,
      newPos = 0, 
      third = width * fraction;
    //console.log('Slide number is '+fraction);
 
  
  function selectPage(){
    
  }
 
  function activeBtn(){
    for( let x = 0 ; x < slides; x++){
      $('.select:nth-of-type('+(x+1)+')').removeClass('active');
    }
    $('.select:nth-of-type('+(slideNo)+')').addClass('active');
  }
  function adjustSelectButtons(){
    let optWidth = $('.options').width();
    let  btnPos = (third - optWidth) / 2;
    $('.options').css({"left": btnPos+"px"});
  }
  
  (function createSelectButtons(){
     
    var divs = '';
    for(let x = 0; x < slides; x++){
      divs += `<div class="select" data-slide="${x+1}"> </div>`;
    }
    $('.options').append(divs);
    adjustSelectButtons();
    activeBtn();
  })();
  
  $(slide).css({"width": third+"px"});
  
  $(window).resize(function(){
        width = $(slider).width();
        currentWidth = width * fraction;
        third = currentWidth;
        newPos = (slideNo-1)*(-third);
          $(slide).css({"width": currentWidth+"px"});
    $(slider).css({ "transition-duration" :"0s"});
     $(slider).css({'transform' : "translateX("+newPos+"px)"});
    adjustSelectButtons();
       console.log("Resized: new position is "+newPos);
    console.log("Resized: new third is "+third);
    console.log("Resized: currentWidth is "+currentWidth);
    
    setTimeout (function(){ 
      $(slider).css({ "transition-duration" :"0.3s"});}, 500);

    
});
  
  $('.select').on('click', function(){
     var num = $(this).attr('data-slide'); 
       slideNo = num;
       newPos = (slideNo -1) * (-third);
     $(slider).css({'transform' : "translateX("+newPos+"px)"})
     activeBtn();
   })
  
  $(left).on('click', function(){
    
    
    slideNo--;
    if( slideNo != 0){
        newPos = (slideNo -1) * (-third);
     $(slider).css({'transform' : "translateX("+newPos+"px)"})
     
    console.log("Left: new position is "+newPos);
    console.log("current: "+currentWidth);
    }else{
      slideNo = slides;
      newPos = (slideNo -1) * (-third);
     $(slider).css({'transform' : "translateX("+newPos+"px)"})
    }
    activeBtn();
    
    
  })
  
  $(right).on('click', function(){
    slideNo++;
    if(slideNo < slides+1){
       newPos = (slideNo-1) * (- third);
     $(slider).css({'transform' : "translateX("+newPos+"px)"})
     console.log("Right:new position is "+newPos);
     console.log("current: "+currentWidth);
    }else{
      slideNo =1;
      newPos = (slideNo-1) * (- third);
     $(slider).css({'transform' : "translateX("+newPos+"px)"})
    }
    activeBtn();
  
  })
  
})