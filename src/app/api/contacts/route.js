export async function GET(request) {
  const contactMediums = [
    {
      medium: "github",
      username: "saipolaki",
      link: "https://github.com/KiranPolaki",
    },
    {
      medium: "linkedin",
      username: "polakikiran",
      link: "https://www.linkedin.com/in/polaki-sai-kiran-ab4a92222/",
    },
    {
      medium: "twitter",
      username: "saiiik",
      link: "https://x.com/saiiiii_k",
    },
    {
      medium: "email",
      username: "polakisaikiran1@gmail.com",
      link: "mailto:polakisaikiran1@gmail.com",
    },
  ];

  return Response.json(contactMediums, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
