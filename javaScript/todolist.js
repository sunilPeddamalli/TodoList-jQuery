
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");

/*	if($(this).css("color")==="rgb(128, 128, 128)"){
		$(this).css({
		color: "black",
		textDecoration:"none"
	})
	}else{
		$(this).css({
		color: "gray",
		textDecoration:"line-through"
	})
	}*/
	
})

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove()
	});
	event.stopPropagation();
})

$("input[type='text']").keypress(function(event){
	var todoText=$(this).val();
	if(event.which===13){
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+todoText+"</li>")
	}

})


$("#abc").click(function(){
	$("input").addClass("hide")
	$(this).css("display","none");
	$("#xyz").css({
		display:"inline-block",
		float:"right"
				})
})

$("#xyz").click(function(){
	$("input").removeClass("hide")
	$(this).css("display","none");
	$("#abc").css({
		display:"inline-block",
		float:"right"
				})
})
