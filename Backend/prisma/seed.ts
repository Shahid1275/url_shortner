import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  // Create default roles if they don't exist
  await prisma.user_role.upsert({
    where: { role_name: "admin" },
    update: {},
    create: {
      role_name: "admin",
      description: "Administrator",
    },
  });

  await prisma.user_role.upsert({
    where: { role_name: "user" },
    update: {},
    create: {
      role_name: "user",
      description: "Regular user",
    },
  });

  console.log("Database seeded successfully");
}

seed()
  .catch((e) => {
    console.error("Seeding failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
