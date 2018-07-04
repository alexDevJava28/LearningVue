"use strict";

var app = new Vue({
    el: "#ok-vue",
    data: {
        todos: [
            {text: "Learn Vue;"},
            {text: "Learn React;"},
            {text: "Learn Angular;"}
        ]
    }
});

//app.todos.push({text: "Learn, learn and learn!"});