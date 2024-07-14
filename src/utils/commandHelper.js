const COMMANDS = [
  {
    command: "about",
    description: "About Me",
  },
  {
    command: "skills",
    description: "Tech Skills",
  },
  {
    command: "experience",
    description: "My Experience",
  },
  {
    command: "education",
    description: "My Education",
  },
  {
    command: "projects",
    description: "My Tech Projects",
  },
  {
    command: "resume",
    description: "My Resume",
  },
  {
    command: "contact",
    description: "Contact Me",
  },
  {
    command: "blog",
    description: "Visit my Blogs",
  },
  {
    command: "github",
    description: "My Github",
  },
  {
    command: "clear",
    description: "Clear terminal",
  },
];

const getProjects = async () => {
  const projects = await (await fetch("/api/projects")).json();
  let projectHTML =
    `<h3 style="font-size:17px">my work</h3>` +
    projects
      .map(
        (project) => `<div className="command">
        <a href="${
          project.link
        }" style="color: var(--secondary);text-decoration: underline" target="_blank"><b className="command">${
          project.name
        }</b></a> - <b>${project.stack.join(", ")}</b>
        <p className="meaning">${project.description}</p>
      </div>`
      )
      .join("");

  return projectHTML;
};

const getContacts = async () => {
  const contactMediums = await (await fetch("/api/contacts")).json();
  return contactMediums
    .map(
      (contact) => `<div style="display: flex; justify-content: space-between;">
      <p style="font-size: 15px">${contact.medium}</p>
      <a className="meaning" href="${contact.link}" style="color: var(--secondary);text-decoration: underline" target="_blank">${contact.username}</a>
    </div>`
    )
    .join("");
};

export const CONTENTS = {
  help: () =>
    COMMANDS.map(
      (command) => `<div style="display: flex; justify-content: space-between;">
        <p style="font-size: 15px">${command.command}</p>
        <p>${command.description}</p>
      </div>`
    ).join("") +
    `<br />
      <div classNameName="command">Type one of the above to view. For eg. <span style="color: var(--secondary)">about</span></div>`,
  about:
    () => `<strong>yo</strong>, i am <strong>sai</strong>. i love creating web applications. I create web so i am 'spiderman'. my current primary field of work is <strong>devops</strong> and yes i\'m a <strong>fullstack web developer</strong>.
    <br/>
    as of now i am ${getAge("August 26, 2002")}, rn living in hyderabad.
    <br/><br/>
    As a developer, i work with next.js, react, express.js, hono and tailwind, while worked with databases like postgreSQL, mongoDB, and redis; i’m proficient in java, javaScript/typescript, and I use git, gitHub and azure devops for version control, along with devOps tools like docker, kubernetes, cloudflare workers, nginx, aws, and azure devOps. also done end-end testing & automation too using cypress and power automate.
    <br /><br />
    I am working as devops/swe at <a style="color: var(--secondary)" href="https://kroll.com" target="_blank">kroll</a> ('23-Now).
 
    In my free time i do freelance/build stuff, checkout my <a style="color: var(--secondary)" href="https://github.com/KiranPolaki" target="_blank">github</a>.
  `,
  education: () =>
    `I graduated from <a href="https://www.adityatekkali.edu.in/" target="_blank" style="color: var(--secondary)">aditya institutes of technology and management</a> from the field <strong>electronics & communication</strong>.`,
  skills: () => `
  i am experienced with javascript/typescript and the web technologies dominating at the time:<br />
  <div className="skill" ><span style="color: var(--secondary)">frontend</span>: html, css, javascript, typescript tailwind, react.js, next.js<br /></div>
  <div className="skill"><span style="color: var(--secondary)">backend</span>: node.js, express, hono, next.js, websockets, JWT, clerk, cloudinary, s3 <br /></div>
  <div className="skill"><span style="color: var(--secondary)">database</span>: mongoDB, postgresql, redis<br /></div>
  <div className="skill"><span style="color: var(--secondary)">devops</span>: : docker, kubernetes, cloudflareworkers, ngnix, aws ecr ecs, azure <br /></div>
  <div className="skill"><span style="color: var(--secondary)">version controll</span>: git, github, azure devops<br /></div>
  <div className="skill"><span style="color: var(--secondary)">automation</span>: cypress, power automate<br /></div>
  `,
  projects: getProjects,
  contact: getContacts,
  resume: () => {
    window.open("https://example.com/resume.pdf", "_blank");
    return "";
  },
  error: (input) =>
    `<div className="help-command">sh: Unknown command: ${input}</div><div className="help-command">See \`help\` for info`,
  blog: () => {
    window.open("https://example.com", "_blank");
    return "";
  },
  youtube: () => {
    window.open("https://youtube.com", "_blank");
    return "";
  },
};

function getAge(dateString) {
  const today = new Date();
  const birthDate = new Date(dateString);

  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;

  return age;
}
