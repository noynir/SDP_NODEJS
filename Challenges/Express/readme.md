# Express Challenge
###Phase 1 - Setup

In this phase you are asked to setup an Express app.

1. Open the `Express\stackoverflow\stackoverflowChallenge\app.js` file

2. Setup the view engine.
      - `app.set('view engine', 'jade')`;

3. setup the views folder.
    - `app.set('views', path.join(__dirname, 'views'))`;

4. setup the static middleware for serving static resources from the public folder
    - `app.use(express.static(path.join(__dirname, 'public')));`

5. create a new router contaning a route for the root path '/'

6. the route should render the *index* view.
    - `res.render("index")`

7. run the project from the command line (you can run `npm start` in the app folder path) or the IDE 

8. browse to [localhost:3000](http://localhost:3000) and make sure that your are seeing the correct view.

### Phase 2 - Questions

In this phase you are asked to create a Node.JS questions view.

1. **View**
      - under the routes folder create a router with a route for "/questions"
      - the route should render the **questions** view located in your views folder
      - the questions views should extend the layout.jade file. and fill the content inside the
      named blocks:
          - *header* - should contain the page header.
          - *content*- should contain the questions data.
          - *pager*-  should contain 2 links for the next and previous set of results **(Not required for this Phase)**

2. **Data**
       - under the *Modules* folder there a *stackApiClient.js* file which holds the api module for the
          questions data.
          the module contains 2 methods:
          - `getQuestions(page,pagesize,callback)`
              - `page`- requested page (for this phase should be 1);
              - `pagesize`- requested page size default is 10.
              - `callback`- a javascript callback function to execute when completed.
                the callback should be in the format of `function(err,data)`
      
          - `searchQuestions(query,page,pagesize,callback)`
              - `query`- the search term.
              - `page,pagesize,callback`- same as above.
          - the `data` questions object schema returned inside the callback function is sepcified below

3. **Putting it all together**
      - inside the questions router include the question api module using the `require` function.
      - your */questions* route handler should call the get questions method and provide a callback.
      - when the callback is executed pass the data object to your questions.jade view.
      - inside the questions.jade view itreate over the `items` property and generate the JADE output for every
      item

####Questions JSON

                  {
                      "items": [
                      {
                        "tags": [
                          "javascript",
                          "node.js",
                          "express"
                        ],
                        "owner": {
                          "reputation": 3114,
                          "user_id": 133747,
                          "user_type": "registered",
                          "accept_rate": 85,
                          "profile_image": "https://www.gravatar.com/avatar/6703c5e8fecd2b0d0d3e137bcff7c61e?s=128&d=identicon&r=PG",
                          "display_name": "huggie",
                          "link": "http://stackoverflow.com/users/133747/huggie"
                        },
                        "is_answered": true,
                        "view_count": 1820,
                        "accepted_answer_id": 25305272,
                        "answer_count": 4,
                        "score": 10,
                        "last_activity_date": 1433007467,
                        "creation_date": 1407835844,
                        "last_edit_date": 1407854628,
                        "question_id": 25260818,
                        "link": "http://stackoverflow.com/questions/25260818/rest-with-express-js-nested-router",
                        "title": "Rest with Express.js nested router"
                      }],
                      "has_more": true,
                      "quota_max": 10000,
                      "quota_remaining": 9964
                  }
