(function(){
	$(function(){
		var liElms=$('li.list-group-item a,li.list-group-item s').click(function(){
				var elm=$(this);
				var completed=elm.is('s');
				$.ajax({
					url:"tasks/setCompleted",
					type:"POST",
					data:{ id:elm.attr('id'),title:elm.html(), completed:!completed}
				}).success(function(data){
					if(data.success){
						var html=elm.html();
						var element = data.completed ? "<s>" : "<a>";
						elm.replaceWith($(element).html(html));
					}
					
				})
				

			}
		)
		
	})

})();