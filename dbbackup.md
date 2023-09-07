CREATE TABLE "passengers" (
	"id" serial NOT NULL,
	"firstName" TEXT NOT NULL,
	"lastName" TEXT NOT NULL,
	CONSTRAINT "passengers_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "travels" (
	"id" serial NOT NULL,
	"passengerId" integer NOT NULL,
	"flightId" integer NOT NULL,
	CONSTRAINT "travels_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "flights" (
	"id" serial NOT NULL,
	"origin" integer NOT NULL,
	"destination" integer NOT NULL,
	"date" DATE NOT NULL,
	CONSTRAINT "flights_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "cities" (
	"id" serial NOT NULL,
	"name" TEXT NOT NULL,
	CONSTRAINT "cities_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

ALTER TABLE "travels" ADD CONSTRAINT "travels_fk0" FOREIGN KEY ("passengerId") REFERENCES "passengers"("id");
ALTER TABLE "travels" ADD CONSTRAINT "travels_fk1" FOREIGN KEY ("flightId") REFERENCES "flights"("id");
ALTER TABLE "flights" ADD CONSTRAINT "flights_fk0" FOREIGN KEY ("origin") REFERENCES "cities"("id");
ALTER TABLE "flights" ADD CONSTRAINT "flights_fk1" FOREIGN KEY ("destination") REFERENCES "cities"("id");