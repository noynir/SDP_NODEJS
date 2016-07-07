# File System Challenge

Create a simple node application which receives a full file path as an argument
and prints it's content to the console.

The application should validate if the file exists and if the path is a directory a different error message for each case.

- Use `process.argv[i]` to read arguments
- To validate just use `fs.stat(path,callback)` and check if the `err` parmater inside the callback has value.
