export async function GET(request) {
  const projects = [
    {
      name: "personal - hashtag blog",
      description:
        "crafted a personalized blogging web application having jwt for authentication, and Cloudflare Workers for deployment. Notably, spiced it up with a rich text editor and multi level comments.",
      stack: ["typescript", "react", "prismaORM", "hono", "jwt", "cloudflare"],
      link: "https://example.com",
      image: "",
      largeImage: "",
    },
    {
      name: "personal - w.o.r.e",
      description:
        "Write Once Read Everywhere. while writting blogs i face an issue where i want to write them on multiple platforms. so built a tool.",
      stack: ["typescript", "nextJS"],
      link: "https://example.com",
      image: "",
      largeImage: "",
    },
    {
      name: "freelance - course landing",
      description:
        "developed a high-converting course landing page using Next.js, attracting 100+ daily visitors and facilitating 300+ course sales. Integrated Razorpay for secure transactions and managed deployment on AWS EC2 to handle consistent traffic.",
      stack: ["typescript", "nextJS", "shadcn", "razorpay"],
      link: "https://example.com",
      image: "",
    },
    {
      name: "freelance - guru codes",
      description:
        "I developed a comprehensive e-learning platform using Next.js, integrating features like article reading, interactive coding practice, job notifications, and portfolio management. PrismaORM ensured efficient data management, and NextAuth provided secure user authentication. Additionally, I integrated the Judge0 IDE platform for real-time code execution and built a web scraping solution for job notifications",
      stack: [
        "typescript",
        "nextJS",
        "apis",
        "cheerio",
        "prisma",
        "mdx",
        "judge0",
      ],
      link: "https://example.com/",
      image: "",
    },
  ];

  return Response.json(projects, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
