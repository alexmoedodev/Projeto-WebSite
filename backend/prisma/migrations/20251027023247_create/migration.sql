/*
  Warnings:

  - Added the required column `category` to the `logs` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TypeLog" AS ENUM ('CADASTRO', 'EXCLUSÃO', 'EDIÇÃO', 'ERROR');

-- AlterTable
ALTER TABLE "logs" ADD COLUMN     "category" "TypeLog" NOT NULL;
