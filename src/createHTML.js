const fs = require('fs');

// Initial create HTML function, pluging in the generated cards with the template lteral.

function createHTML(data){
    retun `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <title>My Team Generator</title>
</head>
<body>
    <style>
        body {
            box-sizing: border-box;
        }
        .container {
            display:flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }

        #project {
            background: cornsilk;
            color: palevioletred;
        }

        #person {
            background: cornsilk;
            color: darkorange;
        }

        .subject {
            font-size: larger;
            font-weight: bolder;
        }
    </style>

    <div class = "jumbortron" id="project">
        <h1 class = "text-center">Our Development Team</h1>
    </div>

    <div class = "container">

        <!--Card for Manager-->
        <div class = "card cardbody">
            <div class = "card-header" id = "person">
                <p class = "subject">Kishan</p>
                <div>Manager</div>
            </div>
            <div class="card-body">
                <form role="form">
                    <div class="form-group">
                        <label>ID: 20</label>
                    </div>
                    <div class="form-group">
                        <label>Email: <a href="mailto:kishan.gosrani@hotmail.com">kishan.gosrani@hotmail.com</a></label>
                    </div>
                    <div class="form-group">
                        <label>Office Line Extention: 200 </label>
                    </div>
                </form>
            </div>
        </div>
        <!--Card for Intern-->
        <div class = "card cardbody">
            <div class = "card-header" id = "person">
                <p class = "subject">Marco</p>
                <div>Intern</div>
            </div>
            <div class="card-body">
                <form role="form">
                    <div class="form-group">
                        <label>ID: 21</label>
                    </div>
                    <div class="form-group">
                        <label>Email: <a href="mailto:marco@marco.com">marco@marco.com</a></label>
                    </div>
                    <div class="form-group">
                        <label>School: UWA </label>
                    </div>
                </form>
            </div>
        </div>
        <!--Card for Engineer-->
        <div class = "card cardbody">
            <div class = "card-header" id = "person">
                <p class = "subject">Luca</p>
                <div>Engineer</div>
            </div>
            <div class="card-body">
                <form role="form">
                    <div class="form-group">
                        <label>ID: 22</label>
                    </div>
                    <div class="form-group">
                        <label>Email: <a href="mailto:luca@luca.com">luca@luca.com</a></label>
                    </div>
                    <div class="form-group">
                        <label>Github: <a href="https://github.com/kishan254">Github</a></label>
                    </div>
                </form>
            </div>
        </div>
    </div>
</body>
</html>
    `
}

//Function to determine role being added, then calling the correct function

function allCards (data) {
    return data.map((data) => {
        let role = data.getRole();
        switch(role){
            case "Manager":
                return createManager(data);
            break;
            case "Intern":
                return createIntern(data);
            break;
            case "Engineer":
                return createEngineer(data);
        }
    }).join("\n");
}

//Create a manager card 

function createManager(data) {
    return `
        <div class = "card cardbody">
            <div class = "card-header" id = "person">
                <p class = "subject">Kishan</p>
                <div>Manager</div>
            </div>
            <div class="card-body">
                <form role="form">
                    <div class="form-group">
                        <label>ID: 20</label>
                    </div>
                    <div class="form-group">
                        <label>Email: <a href="mailto:kishan.gosrani@hotmail.com">kishan.gosrani@hotmail.com</a></label>
                    </div>
                    <div class="form-group">
                        <label>Office Line Extention: 200 </label>
                    </div>
                </form>
            </div>
        </div>`
}

//Create an intern card

function createIntern(data);{
    return `
    <div class = "card cardbody">
            <div class = "card-header" id = "person">
                <p class = "subject">Marco</p>
                <div>Intern</div>
            </div>
            <div class="card-body">
                <form role="form">
                    <div class="form-group">
                        <label>ID: 21</label>
                    </div>
                    <div class="form-group">
                        <label>Email: <a href="mailto:marco@marco.com">marco@marco.com</a></label>
                    </div>
                    <div class="form-group">
                        <label>School: UWA </label>
                    </div>
                </form>
            </div>
        </div>`
}

//Create an engineer card

function createEngineer(data) {
    return `
    <div class = "card cardbody">
            <div class = "card-header" id = "person">
                <p class = "subject">Luca</p>
                <div>Engineer</div>
            </div>
            <div class="card-body">
                <form role="form">
                    <div class="form-group">
                        <label>ID: 22</label>
                    </div>
                    <div class="form-group">
                        <label>Email: <a href="mailto:luca@luca.com">luca@luca.com</a></label>
                    </div>
                    <div class="form-group">
                        <label>Github: <a href="https://github.com/kishan254">Github</a></label>
                    </div>
                </form>
            </div>
        </div>`
}

//Exports the createHTML function

module.exports = createHTML;