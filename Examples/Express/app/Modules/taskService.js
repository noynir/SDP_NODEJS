var Task=function(title,completed){
	this.title=title;
	this.completed=completed
	;
}
var tasksCollection=[
	new Task("Take out the trash"),
	new Task("Buy some milk",true),
	new Task("Pay electric bill")
]
module.exports.getTasks=function(){
	return tasksCollection;
}
module.exports.addTask=function(title,completed){
	tasksCollection.push(new Task(title,completed));
}
module.exports.setCompleted=function(title,completed){
	tasksCollection.forEach(function(element, index){
		if(title===element.title){
			element.completed=completed;
		}
	});
}