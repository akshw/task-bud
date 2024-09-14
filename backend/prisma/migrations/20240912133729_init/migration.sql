-- CreateTable
CREATE TABLE "Todo" (
    "id" SERIAL NOT NULL,
    "tittle" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);
