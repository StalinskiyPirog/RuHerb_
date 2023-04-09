-- CreateTable
CREATE TABLE "Product" (
    "category1" TEXT NOT NULL,
    "category2" TEXT NOT NULL,
    "category3" TEXT NOT NULL,
    "category4" TEXT NOT NULL,
    "articul" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "count" TEXT NOT NULL,
    "descr" TEXT NOT NULL,
    "images" TEXT[],
    "id" SERIAL NOT NULL,
    "clicks" INTEGER NOT NULL DEFAULT 0,
    "cart" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Client" (
    "id" SERIAL NOT NULL,
    "FIO" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "sex" BOOLEAN NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Action" (
    "index" TEXT NOT NULL,
    "clicks" INTEGER NOT NULL,

    CONSTRAINT "Action_pkey" PRIMARY KEY ("index")
);

-- CreateIndex
CREATE UNIQUE INDEX "Action_index_key" ON "Action"("index");
