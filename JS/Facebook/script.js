var database = [
    {
        username: "Andrei",
        password: "ZtmStudents"
    },

    {
        username: "Colt",
        password: "WebBootcamp"
    },

    {
        username: 'Claire',
        password: 'ZtmStudent',
    },
];

var newsfeed = [
    {
        username: "Andy",
        timeline: "I am immortal and everyone knows, even if it was to be a secret"
    },
    
    {
        username: "Becky",
        timeline: "I am so excited, I am having a baby and I am going to be a mother by december"
    },

    {
        username: "Seth",
        timeline: "Super exciting, I am going to be a father by december"
    }
];

function isUserValid(username, password) {
    for (let i = 0; i < database.length; i++) {
      if (database[i].username === username &&database[i].password === password) {
            return true;
        }
    }
    return false;
}

function signIn(username, password) {
    if (isUserValid(username, password)) {
        console.log(newsfeed);
    } else {
        alert("Sorry, invalid username or password")
    }
}

var userNamePrompt = prompt("What's your username");
var passwordPrompt = prompt("What's your password");

signIn(userNamePrompt, passwordPrompt)