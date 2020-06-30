'use strict';

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.todos = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      [
        { id: 1, title:"Complete serverless api", complete: false},
        { id: 2, title:"Complete frontend", complete: true},
        { id: 3, title:"Complete refelction writing", complete: false},
        { id: 4, title:"Read research paper", complete: false},
        { id: 5, title:"Write blog post", complete: false},
        { id: 6, title:"Correct errors in web project", complete: true},
      ],
      null,
      2
    ),
  };
};

module.exports.createTodo = async event => {
  console.log("Creating a todo item");
  console.log(`Type ${typeof event.body}`);

  return {
    statusCode: 200,
    body: event.body,
  };
};

module.exports.getTodo = async event => {
  console.log("Returning a todo");
  console.log(event);
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        id: 1, title:"Complete serverless api", complete: false
      },
      null,
      2
    ),
  };
};

module.exports.updateTodo = async event => {
  console.log("Updating a todo");
  console.log(event);

  return {
    statusCode: 200,
    body: event.body,
  };
};


module.exports.deleteTodo = async event => {
  console.log("Deleting a todo");
  console.log(event);

  return {
    statusCode: 200,
    body: "",
  };
};