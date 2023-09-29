import { PrismaClient, Prisma, USAClimbingEvents } from "@prisma/client";
// const { PrismaClient } = require('@prisma/client')
// const { Prisma } = require('@prisma/client')

const client = new PrismaClient();

const getUsers = (): Prisma.UserCreateInput[] => [
  {
    name: "Test",
    email: "test@gmail.com",
    emailVerified: null,
    image: null,
    freeAccount: true,
    premiumAccount: false,
  },
  {
    name: "Test2",
    email: "test2@gmail.com",
    emailVerified: null,
    image: null,
    freeAccount: false,
    premiumAccount: true,
  },
];

const getUSAClimbingEvents = (): Prisma.USAClimbingEventsCreateInput[] => [
  {
    event:
      "2023/08/04 Elite National LeadTR, Speed inSPIRE Rock Gym Cypress TX",
    resultsURL: "Test URL 1",
  },
  {
    event:
      "2023/04/01 West Coast Divisional Boulder, LeadTR Mesa Rim North City San Marcos CA",
    resultsURL: "Test URL 2",
  },
];

const getTeam = (): Prisma.TeamsCreateInput[] => [
  {
    team_name: "team 1",
    region: "R1",
    city: "TestCity1",
    state: "TN",
    website: "",
  },
  {
    team_name: "team 2",
    region: "R2",
    city: "TestCity2",
    state: "TN",
  },
];

const getClimber = (): Prisma.ClimberCreateInput[] => [
  {
    name: "climber 1",
    region: "R1",
  },
  {
    name: "climber 2",
    region: "R2",
  },
];
// Was not working?? Comment out for no erroros

const main = async () => {
  try {
    const users = await Promise.all(
      getUsers().map((user) => client.user.create({ data: user })),
    );
    const events = await Promise.all(
      getUSAClimbingEvents().map((event) =>
        client.uSAClimbingEvents.create({
          data: event,
        }),
      ),
    );
    const teams = await Promise.all(
      getTeam().map((teams) => client.teams.create({ data: teams })),
    );
    const climbers = await Promise.all(
      getClimber().map((climber) =>
        client.climber.create({
          data: climber,
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
