import { PrismaClient, Prisma, USAClimbingEvents } from "@prisma/client";
// const { } = require('@prisma/client')

const client = new PrismaClient();

const getUsers = (): Prisma.UserCreateInput[] => [
  {
    name: "Test",
    email: "test@gmail.com",
    emailVerified: null,
    image: null,
  },
  {
    name: "Test2",
    email: "test2@gmail.com",
    emailVerified: null,
    image: null,
  },
];

const getUSAClimbingEvents = (): Prisma.USAClimbingEventsCreateInput[] => [
  {
    events:
      "2023/04/01 Southeast Divisional Boulder, LeadTR The Overlook Climbing & Fitness/Stone Summit Kennesaw Atlanta GA",
  },
  {
    events:
      "2023/04/01 West Coast Divisional Boulder, LeadTR Mesa Rim North City San Marcos CA",
  },
];

const main = async () => {
  try {
    const events = await Promise.all(
      getUSAClimbingEvents().map((event) =>
        client.uSAClimbingEvents.create({
          data: event,
        }),
      ),
    );
  } catch (error) {
    console.log("error with seeding:", error);
  }
};

main().catch((e) => {
  console.log("Error with Prisma Client in seed.ts:", e);
});
