'use server';

import { prisma } from '@/lib/prisma';
import { currentUser } from '@clerk/nextjs/server';

export async function getOrCreateUser() {
  'use server';

  const user = await currentUser();
  if (!user) return null;

  // Check if the user exists in the database
  let loggedInUser = await prisma.user.findUnique({
    where: { clerkUserId: user.id },
  });

  // If user does not exist, create a new one
  if (!loggedInUser) {
    loggedInUser = await prisma.user.create({
      data: {
        name: `${user.firstName} ${user.lastName}`,
        clerkUserId: user.id,
        email: user.emailAddresses[0]?.emailAddress || '',
        imageUrl: user.imageUrl,
      },
    });
  }

  return loggedInUser;
}
