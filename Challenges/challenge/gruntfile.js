module.exports = function(grunt) {
	grunt.initConfig({

	    express:{ 
	    	challenge:{
		      	options: {
			        script: './bin/www',
			        port: 3030        
		      }   
		    }
		},
		open:{
			challenge:{
				path: 'http://localhost:3030',
				delay:100
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-keepalive');
	grunt.loadNpmTasks('grunt-open');
	grunt.loadNpmTasks('grunt-express-server');
	grunt.registerTask('challenge',["express:challenge","open:challenge","keepalive"]);


};