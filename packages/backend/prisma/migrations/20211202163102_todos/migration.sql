-- CreateEnum
CREATE TYPE "TodoStatus" AS ENUM ('PENDING', 'FINISHED');

-- CreateTable
CREATE TABLE "Todo" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "status" "TodoStatus" NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Todo" ADD CONSTRAINT "Todo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
