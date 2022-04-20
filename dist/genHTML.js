createHTML = (profiles) => {
  return `<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Generator</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1 id="header">Team Generator<h1>

      <section class="container d-flex justify-content-center m-2">
        <div class="team">
          <div class="team-member m-2 p-1">

            ${profiles}
          
          </div>
        </div>
      </section>

      <footer id="footer">"If everyone is moving forward together, then success takes care of itself." – Henry Ford </footer>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
	<script src="index.js"></script>
  </body>
</html>`;
};

//creates the manager card
printManager = (manager) => {
  return `<div>
              <div class="card">
                        <h3 class="title">Manager <i class="bi-cup-fill"></i></h3>
                        <h4 class="name">${manager.name}</h4>
                        <p class="id text">ID: ${manager.id}</p>
                        <p class="office-number text">Office: ${manager.officeNumber}</p>
                        <p class="email text">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                    </div>
                </div>`;
};

//creates the engineer card
printEngineer = (engineer) => {
  return ` <div>
                <div class="card">
                <h3 class="title">Engineer <i class="bi-gear-wide-connected"></i></h3>
                  <h4 class="name">${engineer.name}</h4>
                    <p class="id text">ID: ${engineer.id}</p>
                    <p class="github text">Github: <a href="https://github.com/${engineer.github}"></a></p>
                    <p class="email text">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                    </div>
                </div>`;
};

//creates the intern card
printIntern = (intern) => {
  return `<div>
          <div class="card">
          <h3 class="title">Intern <i class="bi-book-half"></i></h3>
            <h4 class="name">${intern.name}</h3>
            <p class="id text">ID: ${intern.id}</p>
            <p class="school text">School: ${intern.school}</p>
            <p class="email text">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
          </div>
      </div>`;
};

//generates the HTML file
function genHTML(data) {
  let teamMembers = [];
  for (let i = 0; i < data.length; i++) {
    //creates an employee object and gets the role for every team emember
    const employee = data[i];
    const role = employee.getRole();

    //produces a different card based on role
    switch (role) {
      case "Manager":
        const managerProf = printManager(employee);
        teamMembers.push(managerProf);
        break;
      case "Engineer":
        const engineerProf = printEngineer(employee);
        teamMembers.push(engineerProf);
        break;
      case "Intern":
        const internProf = printIntern(employee);
        teamMembers.push(internProf);
        break;
    }
  }

  //joins all the team profiles then creates pushes it to the HTML files
  const teamProfiles = teamMembers.join("");

  //creates the HTML file
  return createHTML(teamProfiles);
}

module.exports = genHTML;
