import { PrismaClient, Prisma } from "../app/generated/prisma/client";
import { PrismaPg } from '@prisma/adapter-pg'
import 'dotenv/config'


const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
})

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  // Clear existing data
  await prisma.booking.deleteMany();
  await prisma.event.deleteMany();

  // Create Events
  const event1 = await prisma.event.create({
    data: {
      title: "Tech Conference 2026",
      slug: "tech-conference-2026",
      description: "Join us for the biggest tech conference of the year featuring industry leaders and cutting-edge innovations.",
      overview: "A two-day immersive experience with keynotes, workshops, and networking opportunities.",
      location: "San Francisco, CA",
      venue: "Moscone Center",
      image: "/images/tech-conference.jpg",
      date: "2026-03-15",
      time: "09:00 AM - 06:00 PM",
      audience: "Developers, Tech Enthusiasts, Entrepreneurs",
      agenda: "Day 1: Keynotes & Panels. Day 2: Workshops & Networking.",
      organizer: "TechEvents Inc.",
      tags: ["technology", "conference", "networking", "innovation"],
    },
  });

  const event2 = await prisma.event.create({
    data: {
      title: "Web Development Workshop",
      slug: "web-development-workshop",
      description: "Hands-on workshop covering modern web development practices with React and Next.js.",
      overview: "Learn to build full-stack applications from scratch with industry best practices.",
      location: "New York, NY",
      venue: "Tech Hub NYC",
      image: "/images/web-workshop.jpg",
      date: "2026-04-20",
      time: "10:00 AM - 04:00 PM",
      audience: "Junior Developers, Students, Career Changers",
      agenda: "Morning: React fundamentals. Afternoon: Next.js & deployment.",
      organizer: "Code Academy",
      tags: ["workshop", "web development", "react", "nextjs"],
    },
  });

  const event3 = await prisma.event.create({
    data: {
      title: "AI & Machine Learning Summit",
      slug: "ai-machine-learning-summit",
      description: "Explore the latest advancements in artificial intelligence and machine learning.",
      overview: "Industry experts share insights on AI trends, ethics, and practical applications.",
      location: "Austin, TX",
      venue: "Austin Convention Center",
      image: "/images/ai-summit.jpg",
      date: "2026-05-10",
      time: "08:30 AM - 05:30 PM",
      audience: "Data Scientists, ML Engineers, Researchers",
      agenda: "Keynotes, technical deep-dives, and live demos.",
      organizer: "AI Alliance",
      tags: ["AI", "machine learning", "data science", "summit"],
    },
  });

  const event4 = await prisma.event.create({
    data: {
      title: "Startup Pitch Night",
      slug: "startup-pitch-night",
      description: "Watch innovative startups pitch their ideas to a panel of investors and industry experts.",
      overview: "An evening of entrepreneurship, networking, and groundbreaking ideas.",
      location: "Seattle, WA",
      venue: "The Startup Hub",
      image: "/images/pitch-night.jpg",
      date: "2026-06-05",
      time: "06:00 PM - 10:00 PM",
      audience: "Entrepreneurs, Investors, Business Professionals",
      agenda: "6PM: Networking. 7PM: Pitches. 9PM: Awards & Closing.",
      organizer: "Venture Connect",
      tags: ["startup", "entrepreneurship", "pitch", "investors"],
    },
  });

  // Create Bookings
  await prisma.booking.createMany({
    data: [
      { eventId: event1.id, email: "john.doe@example.com" },
      { eventId: event1.id, email: "jane.smith@example.com" },
      { eventId: event1.id, email: "developer@techcorp.com" },
      { eventId: event2.id, email: "student@university.edu" },
      { eventId: event2.id, email: "learner@gmail.com" },
      { eventId: event3.id, email: "researcher@ai-lab.org" },
      { eventId: event3.id, email: "ml.engineer@startup.io" },
      { eventId: event4.id, email: "founder@newstartup.com" },
    ],
  });

  console.log("Seed data created successfully!");
  console.log(`Created ${4} events and ${8} bookings.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });