-- CreateEnum
CREATE TYPE "TypeCompany" AS ENUM ('CPF', 'CNPJ');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "code" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "image" TEXT,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "companyId" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "company" (
    "id" TEXT NOT NULL,
    "typeCompany" "TypeCompany" NOT NULL DEFAULT 'CNPJ',
    "document" TEXT NOT NULL,
    "statusCompany" TEXT,
    "sizeCompany" TEXT,
    "rg" TEXT,
    "socialRasion" TEXT NOT NULL,
    "nameFantasy" TEXT NOT NULL,
    "zipCode" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "complement" TEXT,
    "neighborhood" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "uf" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "phone2" TEXT NOT NULL,
    "whatsApp" TEXT NOT NULL,
    "instagran" TEXT NOT NULL,
    "facebook" TEXT NOT NULL,
    "webSite" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "company_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_code_key" ON "User"("code");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "company"("id") ON DELETE SET NULL ON UPDATE CASCADE;
