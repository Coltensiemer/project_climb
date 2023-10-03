/*
  Warnings:

  - The primary key for the `USAClimbingEvents` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `events` on the `USAClimbingEvents` table. All the data in the column will be lost.
  - The `id` column on the `USAClimbingEvents` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `USAEventResults` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `USAEventResults` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[userName]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `event` to the `USAClimbingEvents` table without a default value. This is not possible if the table is not empty.
  - Added the required column `resultsURL` to the `USAClimbingEvents` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `USAEventResults` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `USAEventResults` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `eventid` on the `USAEventResults` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `freeAccount` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `premiumAccount` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "USAEventResults" DROP CONSTRAINT "USAEventResults_eventid_fkey";

-- AlterTable
ALTER TABLE "USAClimbingEvents" DROP CONSTRAINT "USAClimbingEvents_pkey",
DROP COLUMN "events",
ADD COLUMN     "event" TEXT NOT NULL,
ADD COLUMN     "resultsURL" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "USAClimbingEvents_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "USAEventResults" DROP CONSTRAINT "USAEventResults_pkey",
ADD COLUMN     "date" TEXT NOT NULL,
ADD COLUMN     "location" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "eventid",
ADD COLUMN     "eventid" INTEGER NOT NULL,
ADD CONSTRAINT "USAEventResults_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "freeAccount" BOOLEAN NOT NULL,
ADD COLUMN     "premiumAccount" BOOLEAN NOT NULL,
ADD COLUMN     "userName" TEXT;

-- CreateTable
CREATE TABLE "Gym" (
    "id" TEXT NOT NULL,
    "gymName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "address" TEXT,
    "image" TEXT,
    "events" TEXT NOT NULL,

    CONSTRAINT "Gym_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClimberResult" (
    "id" TEXT NOT NULL,
    "climberId" TEXT NOT NULL,
    "eventId" INTEGER NOT NULL,
    "rank" INTEGER NOT NULL,
    "points" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "ClimberResult_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Climber" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "categroy" TEXT,
    "qe_rank_boulder" INTEGER,
    "qu_rank_lead" INTEGER,
    "membership" INTEGER,
    "city" TEXT,
    "state" TEXT,

    CONSTRAINT "Climber_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Teams" (
    "id" TEXT NOT NULL,
    "team_name" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "city" TEXT,
    "state" TEXT,
    "website" TEXT,
    "contact" TEXT,

    CONSTRAINT "Teams_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Gym_gymName_key" ON "Gym"("gymName");

-- CreateIndex
CREATE UNIQUE INDEX "Teams_team_name_key" ON "Teams"("team_name");

-- CreateIndex
CREATE UNIQUE INDEX "User_userName_key" ON "User"("userName");

-- AddForeignKey
ALTER TABLE "USAEventResults" ADD CONSTRAINT "USAEventResults_eventid_fkey" FOREIGN KEY ("eventid") REFERENCES "USAClimbingEvents"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClimberResult" ADD CONSTRAINT "ClimberResult_climberId_fkey" FOREIGN KEY ("climberId") REFERENCES "Climber"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClimberResult" ADD CONSTRAINT "ClimberResult_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "USAEventResults"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Climber" ADD CONSTRAINT "Climber_id_fkey" FOREIGN KEY ("id") REFERENCES "Teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
