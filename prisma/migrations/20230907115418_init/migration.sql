-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Flag" (
    "id" SERIAL NOT NULL,
    "flagURL" TEXT NOT NULL,
    "flagName" TEXT NOT NULL,

    CONSTRAINT "Flag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Realm" (
    "id" SERIAL NOT NULL,
    "realmName" TEXT NOT NULL,
    "flagID" INTEGER NOT NULL,

    CONSTRAINT "Realm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fight" (
    "id" SERIAL NOT NULL,
    "userID" INTEGER NOT NULL,
    "date" TEXT NOT NULL,
    "locationLink" TEXT NOT NULL,
    "realmID" INTEGER NOT NULL,
    "challengersFaction" TEXT NOT NULL,
    "challengerName" TEXT NOT NULL,
    "challengerClass" TEXT NOT NULL,
    "opponentName" TEXT NOT NULL,
    "opponentClass" TEXT NOT NULL,
    "victory" TEXT NOT NULL,
    "rule" TEXT NOT NULL,
    "comment" TEXT NOT NULL,

    CONSTRAINT "Fight_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Realm" ADD CONSTRAINT "Realm_flagID_fkey" FOREIGN KEY ("flagID") REFERENCES "Flag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fight" ADD CONSTRAINT "Fight_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fight" ADD CONSTRAINT "Fight_realmID_fkey" FOREIGN KEY ("realmID") REFERENCES "Realm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
