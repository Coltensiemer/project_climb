import { Prisma, PrismaClient } from "@prisma/client";

const client = new PrismaClient(); 

const getUsers = () : Prisma.UserCreateInput[] => [
	{
		id: "1",
		name: 'Test',
		email: "test@gmail.com",
		emailVerified: null,
		image: null,
	},
	{
		id: "2",
		name: 'Test2',
		email: "test2@gmail.com",
		emailVerified: null,
		image: null,
	}
]

const getUSAClimbingEvents = () : Prisma.USAClimbingEventsCreateInput