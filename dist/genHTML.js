createHTML = (profiles) => {
  return `<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Generator</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1 id="header">Team Generator<h1>

      <section class="container">
        <div class="team">
        <div class="team-member>${profiles}
        </div>
        </div>
      </section>

      <footer id="footer">"If everyone is moving forward together, then success takes care of itself." – Henry Ford </footer>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
	<script src="index.js"></script>
  </body>
</html>`;
};

printManager = (manager) => {
  return `<div class="card">
           <i class="bi-cup-fill"></i>
              <div class="card">
                        <h4 class="title">Manager</h5>
                        <h3 class="name">${manager.name}</h4>
                        <p class="id text">ID: ${manager.id}</p>
                        <p class="office-number text">Office: ${manager.officeNumber}</p>
                        <p class="email text">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                    </div>
                </div>`;
};

printEngineer = (engineer) => {
  return ` <div class="card">
            <i class="bi-gear-wide-connected"></i>
                <div class="card">
                <h4 class="title">Engineer</h5>
                  <h3 class="name">${engineer.name}</h4>
                    <p class="id text">ID: ${engineer.id}</p>
                    <p class="github text">Github: <a href="https://github.com/${engineer.github}"></a></p>
                    <p class="email text">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                    </div>
                </div>`;
};

printIntern = (intern) => {
  return `<div class="card">
        <i class="bi-book-half"></i>
          <div class="card">
          <h4 class="title">Intern</h4>
            <h3 class="name">${intern.name}</h3>
            <p class="id text">ID: ${intern.id}</p>
            <p class="school text">School: ${intern.school}"></p>
            <p class="email text">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
          </div>
      </div>`;
};

function genHTML(data) {
  let teamMembers = [];
  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();
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

  const teamProfiles = teamMembers.join("");
  const genProfiles = createHTML(teamProfiles);
  return genProfiles;
}

module.exports = genHTML;
