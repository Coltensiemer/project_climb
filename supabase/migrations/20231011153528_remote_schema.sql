
SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE EXTENSION IF NOT EXISTS "pgsodium" WITH SCHEMA "pgsodium";

ALTER SCHEMA "public" OWNER TO "postgres";

CREATE EXTENSION IF NOT EXISTS "pg_graphql" WITH SCHEMA "graphql";

CREATE EXTENSION IF NOT EXISTS "pg_stat_statements" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "pgcrypto" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "pgjwt" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "supabase_vault" WITH SCHEMA "vault";

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA "extensions";

SET default_tablespace = '';

SET default_table_access_method = "heap";

CREATE TABLE IF NOT EXISTS "public"."Account" (
    "type" "text" NOT NULL,
    "provider" "text" NOT NULL,
    "providerAccountId" "text" NOT NULL,
    "refresh_token" "text",
    "access_token" "text",
    "expires_at" integer,
    "token_type" "text",
    "scope" "text",
    "id_token" "text",
    "session_state" "text",
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "id" integer NOT NULL,
    "userId" integer NOT NULL
);

ALTER TABLE "public"."Account" OWNER TO "postgres";

CREATE SEQUENCE IF NOT EXISTS "public"."Account_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER TABLE "public"."Account_id_seq" OWNER TO "postgres";

ALTER SEQUENCE "public"."Account_id_seq" OWNED BY "public"."Account"."id";

CREATE TABLE IF NOT EXISTS "public"."Climber" (
    "name" "text" NOT NULL,
    "region" "text" NOT NULL,
    "categroy" "text",
    "qe_rank_boulder" integer,
    "qu_rank_lead" integer,
    "membership" integer,
    "city" "text",
    "state" "text",
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "teamId" integer NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "id" integer NOT NULL
);

ALTER TABLE "public"."Climber" OWNER TO "postgres";

CREATE TABLE IF NOT EXISTS "public"."ClimberResult" (
    "eventId" integer NOT NULL,
    "rank" integer NOT NULL,
    "points" double precision NOT NULL,
    "id" integer NOT NULL,
    "climberId" integer NOT NULL
);

ALTER TABLE "public"."ClimberResult" OWNER TO "postgres";

CREATE SEQUENCE IF NOT EXISTS "public"."ClimberResult_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER TABLE "public"."ClimberResult_id_seq" OWNER TO "postgres";

ALTER SEQUENCE "public"."ClimberResult_id_seq" OWNED BY "public"."ClimberResult"."id";

CREATE SEQUENCE IF NOT EXISTS "public"."Climber_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER TABLE "public"."Climber_id_seq" OWNER TO "postgres";

ALTER SEQUENCE "public"."Climber_id_seq" OWNED BY "public"."Climber"."id";

CREATE TABLE IF NOT EXISTS "public"."Example" (
    "id" "text" NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);

ALTER TABLE "public"."Example" OWNER TO "postgres";

CREATE TABLE IF NOT EXISTS "public"."Gym" (
    "gymName" "text" NOT NULL,
    "email" "text" NOT NULL,
    "address" "text",
    "image" "text",
    "events" "text" NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "id" integer NOT NULL
);

ALTER TABLE "public"."Gym" OWNER TO "postgres";

CREATE SEQUENCE IF NOT EXISTS "public"."Gym_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER TABLE "public"."Gym_id_seq" OWNER TO "postgres";

ALTER SEQUENCE "public"."Gym_id_seq" OWNED BY "public"."Gym"."id";

CREATE TABLE IF NOT EXISTS "public"."Session" (
    "sessionToken" "text" NOT NULL,
    "expires" timestamp(3) without time zone NOT NULL,
    "id" integer NOT NULL,
    "userId" integer NOT NULL
);

ALTER TABLE "public"."Session" OWNER TO "postgres";

CREATE SEQUENCE IF NOT EXISTS "public"."Session_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER TABLE "public"."Session_id_seq" OWNER TO "postgres";

ALTER SEQUENCE "public"."Session_id_seq" OWNED BY "public"."Session"."id";

CREATE TABLE IF NOT EXISTS "public"."Teams" (
    "team_name" "text" NOT NULL,
    "region" "text" NOT NULL,
    "city" "text",
    "state" "text",
    "website" "text",
    "contact" "text",
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "id" integer NOT NULL
);

ALTER TABLE "public"."Teams" OWNER TO "postgres";

CREATE SEQUENCE IF NOT EXISTS "public"."Teams_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER TABLE "public"."Teams_id_seq" OWNER TO "postgres";

ALTER SEQUENCE "public"."Teams_id_seq" OWNED BY "public"."Teams"."id";

CREATE TABLE IF NOT EXISTS "public"."USAClimbingEvents" (
    "event" "text" NOT NULL,
    "resultsURL" "text" NOT NULL,
    "id" integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);

ALTER TABLE "public"."USAClimbingEvents" OWNER TO "postgres";

CREATE SEQUENCE IF NOT EXISTS "public"."USAClimbingEvents_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER TABLE "public"."USAClimbingEvents_id_seq" OWNER TO "postgres";

ALTER SEQUENCE "public"."USAClimbingEvents_id_seq" OWNED BY "public"."USAClimbingEvents"."id";

CREATE TABLE IF NOT EXISTS "public"."USAEventResults" (
    "date" "text" NOT NULL,
    "location" "text" NOT NULL,
    "id" integer NOT NULL,
    "eventid" integer NOT NULL
);

ALTER TABLE "public"."USAEventResults" OWNER TO "postgres";

CREATE SEQUENCE IF NOT EXISTS "public"."USAEventResults_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER TABLE "public"."USAEventResults_id_seq" OWNER TO "postgres";

ALTER SEQUENCE "public"."USAEventResults_id_seq" OWNED BY "public"."USAEventResults"."id";

CREATE TABLE IF NOT EXISTS "public"."User" (
    "name" "text",
    "email" "text",
    "emailVerified" timestamp(3) without time zone,
    "image" "text",
    "freeAccount" boolean NOT NULL,
    "premiumAccount" boolean NOT NULL,
    "userName" "text",
    "id" integer NOT NULL
);

ALTER TABLE "public"."User" OWNER TO "postgres";

CREATE SEQUENCE IF NOT EXISTS "public"."User_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER TABLE "public"."User_id_seq" OWNER TO "postgres";

ALTER SEQUENCE "public"."User_id_seq" OWNED BY "public"."User"."id";

CREATE TABLE IF NOT EXISTS "public"."VerificationToken" (
    "identifier" "text" NOT NULL,
    "token" "text" NOT NULL,
    "expires" timestamp(3) without time zone NOT NULL
);

ALTER TABLE "public"."VerificationToken" OWNER TO "postgres";

CREATE TABLE IF NOT EXISTS "public"."_prisma_migrations" (
    "id" character varying(36) NOT NULL,
    "checksum" character varying(64) NOT NULL,
    "finished_at" timestamp with time zone,
    "migration_name" character varying(255) NOT NULL,
    "logs" "text",
    "rolled_back_at" timestamp with time zone,
    "started_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "applied_steps_count" integer DEFAULT 0 NOT NULL
);

ALTER TABLE "public"."_prisma_migrations" OWNER TO "postgres";

ALTER TABLE ONLY "public"."Account" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."Account_id_seq"'::"regclass");

ALTER TABLE ONLY "public"."Climber" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."Climber_id_seq"'::"regclass");

ALTER TABLE ONLY "public"."ClimberResult" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."ClimberResult_id_seq"'::"regclass");

ALTER TABLE ONLY "public"."Gym" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."Gym_id_seq"'::"regclass");

ALTER TABLE ONLY "public"."Session" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."Session_id_seq"'::"regclass");

ALTER TABLE ONLY "public"."Teams" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."Teams_id_seq"'::"regclass");

ALTER TABLE ONLY "public"."USAClimbingEvents" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."USAClimbingEvents_id_seq"'::"regclass");

ALTER TABLE ONLY "public"."USAEventResults" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."USAEventResults_id_seq"'::"regclass");

ALTER TABLE ONLY "public"."User" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."User_id_seq"'::"regclass");

ALTER TABLE ONLY "public"."Account"
    ADD CONSTRAINT "Account_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."ClimberResult"
    ADD CONSTRAINT "ClimberResult_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."Climber"
    ADD CONSTRAINT "Climber_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."Example"
    ADD CONSTRAINT "Example_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."Gym"
    ADD CONSTRAINT "Gym_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."Session"
    ADD CONSTRAINT "Session_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."Teams"
    ADD CONSTRAINT "Teams_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."USAClimbingEvents"
    ADD CONSTRAINT "USAClimbingEvents_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."USAEventResults"
    ADD CONSTRAINT "USAEventResults_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."_prisma_migrations"
    ADD CONSTRAINT "_prisma_migrations_pkey" PRIMARY KEY ("id");

CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "public"."Account" USING "btree" ("provider", "providerAccountId");

CREATE UNIQUE INDEX "Gym_gymName_key" ON "public"."Gym" USING "btree" ("gymName");

CREATE UNIQUE INDEX "Session_sessionToken_key" ON "public"."Session" USING "btree" ("sessionToken");

CREATE UNIQUE INDEX "Teams_team_name_key" ON "public"."Teams" USING "btree" ("team_name");

CREATE UNIQUE INDEX "USAClimbingEvents_resultsURL_key" ON "public"."USAClimbingEvents" USING "btree" ("resultsURL");

CREATE UNIQUE INDEX "User_email_key" ON "public"."User" USING "btree" ("email");

CREATE UNIQUE INDEX "User_userName_key" ON "public"."User" USING "btree" ("userName");

CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "public"."VerificationToken" USING "btree" ("identifier", "token");

CREATE UNIQUE INDEX "VerificationToken_token_key" ON "public"."VerificationToken" USING "btree" ("token");

ALTER TABLE ONLY "public"."Account"
    ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE ONLY "public"."ClimberResult"
    ADD CONSTRAINT "ClimberResult_climberId_fkey" FOREIGN KEY ("climberId") REFERENCES "public"."Climber"("id") ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE ONLY "public"."ClimberResult"
    ADD CONSTRAINT "ClimberResult_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "public"."USAEventResults"("id") ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE ONLY "public"."Climber"
    ADD CONSTRAINT "Climber_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "public"."Teams"("id") ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE ONLY "public"."Session"
    ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE ONLY "public"."USAEventResults"
    ADD CONSTRAINT "USAEventResults_eventid_fkey" FOREIGN KEY ("eventid") REFERENCES "public"."USAClimbingEvents"("id") ON UPDATE CASCADE ON DELETE RESTRICT;

REVOKE USAGE ON SCHEMA "public" FROM PUBLIC;
GRANT USAGE ON SCHEMA "public" TO "anon";
GRANT USAGE ON SCHEMA "public" TO "authenticated";
GRANT USAGE ON SCHEMA "public" TO "service_role";

GRANT ALL ON TABLE "public"."Account" TO "anon";
GRANT ALL ON TABLE "public"."Account" TO "authenticated";
GRANT ALL ON TABLE "public"."Account" TO "service_role";

GRANT ALL ON SEQUENCE "public"."Account_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."Account_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."Account_id_seq" TO "service_role";

GRANT ALL ON TABLE "public"."Climber" TO "anon";
GRANT ALL ON TABLE "public"."Climber" TO "authenticated";
GRANT ALL ON TABLE "public"."Climber" TO "service_role";

GRANT ALL ON TABLE "public"."ClimberResult" TO "anon";
GRANT ALL ON TABLE "public"."ClimberResult" TO "authenticated";
GRANT ALL ON TABLE "public"."ClimberResult" TO "service_role";

GRANT ALL ON SEQUENCE "public"."ClimberResult_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."ClimberResult_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."ClimberResult_id_seq" TO "service_role";

GRANT ALL ON SEQUENCE "public"."Climber_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."Climber_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."Climber_id_seq" TO "service_role";

GRANT ALL ON TABLE "public"."Example" TO "anon";
GRANT ALL ON TABLE "public"."Example" TO "authenticated";
GRANT ALL ON TABLE "public"."Example" TO "service_role";

GRANT ALL ON TABLE "public"."Gym" TO "anon";
GRANT ALL ON TABLE "public"."Gym" TO "authenticated";
GRANT ALL ON TABLE "public"."Gym" TO "service_role";

GRANT ALL ON SEQUENCE "public"."Gym_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."Gym_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."Gym_id_seq" TO "service_role";

GRANT ALL ON TABLE "public"."Session" TO "anon";
GRANT ALL ON TABLE "public"."Session" TO "authenticated";
GRANT ALL ON TABLE "public"."Session" TO "service_role";

GRANT ALL ON SEQUENCE "public"."Session_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."Session_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."Session_id_seq" TO "service_role";

GRANT ALL ON TABLE "public"."Teams" TO "anon";
GRANT ALL ON TABLE "public"."Teams" TO "authenticated";
GRANT ALL ON TABLE "public"."Teams" TO "service_role";

GRANT ALL ON SEQUENCE "public"."Teams_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."Teams_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."Teams_id_seq" TO "service_role";

GRANT ALL ON TABLE "public"."USAClimbingEvents" TO "anon";
GRANT ALL ON TABLE "public"."USAClimbingEvents" TO "authenticated";
GRANT ALL ON TABLE "public"."USAClimbingEvents" TO "service_role";

GRANT ALL ON SEQUENCE "public"."USAClimbingEvents_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."USAClimbingEvents_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."USAClimbingEvents_id_seq" TO "service_role";

GRANT ALL ON TABLE "public"."USAEventResults" TO "anon";
GRANT ALL ON TABLE "public"."USAEventResults" TO "authenticated";
GRANT ALL ON TABLE "public"."USAEventResults" TO "service_role";

GRANT ALL ON SEQUENCE "public"."USAEventResults_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."USAEventResults_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."USAEventResults_id_seq" TO "service_role";

GRANT ALL ON TABLE "public"."User" TO "anon";
GRANT ALL ON TABLE "public"."User" TO "authenticated";
GRANT ALL ON TABLE "public"."User" TO "service_role";

GRANT ALL ON SEQUENCE "public"."User_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."User_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."User_id_seq" TO "service_role";

GRANT ALL ON TABLE "public"."VerificationToken" TO "anon";
GRANT ALL ON TABLE "public"."VerificationToken" TO "authenticated";
GRANT ALL ON TABLE "public"."VerificationToken" TO "service_role";

GRANT ALL ON TABLE "public"."_prisma_migrations" TO "anon";
GRANT ALL ON TABLE "public"."_prisma_migrations" TO "authenticated";
GRANT ALL ON TABLE "public"."_prisma_migrations" TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "service_role";

RESET ALL;
