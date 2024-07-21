-- CreateTable
CREATE TABLE `Referral` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `referrerName` VARCHAR(100) NOT NULL,
    `referrerEmail` VARCHAR(191) NOT NULL,
    `referrerPhone` VARCHAR(15) NOT NULL,
    `refereeName` VARCHAR(100) NOT NULL,
    `refereeEmail` VARCHAR(191) NOT NULL,
    `refereePhone` VARCHAR(15) NOT NULL,

    UNIQUE INDEX `Referral_referrerEmail_key`(`referrerEmail`),
    UNIQUE INDEX `Referral_refereeEmail_key`(`refereeEmail`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
