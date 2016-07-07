var mongoose=require('mongoose');

var taskSchema=mongoose.Schema({
    id:String,
    title:String,
    completed:Boolean
});

var Task = mongoose.model("task",taskSchema)

mongoose.connect("mongodb://localhost:27017/taskslistdb");
var _ = require('lodash');

module.exports.getTasks = function(){
    return Task.find();   
};

module.exports.addTask = function(title,isCompleted){
    var task = new Task({title:title,completed:isCompleted});
    return task.save();

};

module.exports.setCompleted = function(taskId,isCompleted){
       return Task.findOneAndUpdate({"_id": taskId},{completed:isCompleted},{fields:'completed'}).exec();     
};
