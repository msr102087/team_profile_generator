const generateTeamCards = []
const Employee = getElementByClass('Employee');
const Manager = getElementByClass('Manager');
const Engineer = getElementByClass('Engineer');
const Intern = getElementByClass('Intern');

function generateHTML() {

    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
</head>
<body>
    
</body>
</html>`
}

function generateManager(manager) {

    for( var i = 0; i<manager.length; i++){

   
    return `
    
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h2>${manager[i].name}</h2>
      <h4>${manager[i].title}</h4>
      <p>Employee ID: ${manager[i].id}</p>
      <p>Email:  <a href="mailto: ${manager[i].email}">${manager[i].email}</a></p>
      <p>Office Number: ${manager[i].office} </p>
    </div>
</div>
`
}

}