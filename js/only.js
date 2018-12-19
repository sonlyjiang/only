$('.btn').click(function(event) {
	music.play();

	$('.only_circle').removeClass('only_heart');
	$('.only_circle').addClass('only_circle1');
	$('.only_p').html('糟了！<br>心动的感觉');
	setTimeout(function(){
		$('.only_p').hide(0);
	    $('.btn').css('border', 'none');
	    $('.btn').addClass('btn1');
	},1500);
	setTimeout(function(){
		// $('.tree_gan').addClass('tree_gan1');

		// setTimeout(function(){
			$('.love').show();
		// },2000)
	},4500)

	
});
var num=0;
$('.love').click(function(){
	if(num==0){

		$('.shuidiv').css('transform', 'rotate(45deg)');
		setTimeout(function(){
			// $('.water').show();
			$('.water').addClass('watertop');
			setTimeout(function(){
				$('.water').css('transition', '0s');
				$('.water').removeClass('watertop');
				$('.shui_one').html("给我们的树浇水");
				$('.shuidiv').css('transform', 'rotate(0deg)');
			},2000)
		},1000)
		// setTimeout(function(){
		// 	$('.shuidiv i').addClass('shu');
		// 	$('.love').hide()
		// },2000)

		// 种子发芽
		setTimeout(function(){
			$('.tree_gan').addClass('tree_gan1');
			$('.onlybot').addClass('onlybota');
		},4000)
	}else if(num>0){
		$('.shuidiv').css('transform', 'rotate(45deg)');
		setTimeout(function(){
			$('.shuidiv').css('transform', 'rotate(0deg)');
			$('.water').css('transition', '0s');
			$('.water').removeClass('watertop');
		},2000)
			
		setTimeout(function(){
			$('.water').css('transition', '3s');
			$('.water').addClass('watertop');
			setTimeout(function(){
	           $('.only_tree').show(1000);
	           setTimeout(function(){
	           		for(var i=0;i<$('.heart').length;i+=6){
		           		$('.only_tree').children().eq(i).removeClass('heartshow')
		           }
	           },1500)
	           setTimeout(function(){
	           		for(var i=0;i<$('.heart').length;i+=5){
		           		$('.only_tree').children().eq(i).removeClass('heartshow')
		           }
	           },3000)
	           setTimeout(function(){
		           	for(var i=0;i<$('.heart').length;i+=4){
		           		$('.only_tree').children().eq(i).removeClass('heartshow')
		           }
	           },4000)
	           setTimeout(function(){
		           	for(var i=0;i<$('.heart').length;i+=3){
		           		$('.only_tree').children().eq(i).removeClass('heartshow')
		           }
	           },5000)
	           setTimeout(function(){
	           		for(var i=0;i<$('.heart').length;i+=2){
		           		$('.only_tree').children().eq(i).removeClass('heartshow')
		           }
	           },6000)
		       setTimeout(function(){
	           		for(var i=0;i<$('.heart').length;i+=1){
		           		$('.only_tree').children().eq(i).removeClass('heartshow')
		           }
	           },7000)    
	           
		           
			},2500)
			setTimeout(function(){
				$('.tree_gan').addClass('tree_gan2');
			},1500)
			
			setTimeout(function(){
				 setTimeout(function(){
					$('.shuidiv i').addClass('shu');
					$('.love').hide()
				},2000)
			},11500)

		},1000);
	}
	
	
	num++;
	
		
})