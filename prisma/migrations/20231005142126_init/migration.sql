/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `USAClimbingEvents` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "USAClimbingEvents" DROP COLUMN "updatedAt";
grant usage on schema public to postgres, anon, authenticated, service_role;

grant all privileges on all tables in schema public to postgres, anon, authenticated, service_role;
grant all privileges on all functions in schema public to postgres, anon, authenticated, service_role;
grant all privileges on all sequences in schema public to postgres, anon, authenticated, service_role;

alter default privileges in schema public grant all on tables to postgres, anon, authenticated, service_role;
alter default privileges in schema public grant all on functions to postgres, anon, authenticated, service_role;
alter default privileges in schema public grant all on sequences to postgres, anon, authenticated, service_role;

