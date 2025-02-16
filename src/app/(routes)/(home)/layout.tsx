// import { getOrCreateUser } from "@/actions/user";
import ProgressBar from "@/components/common/progressvar";
import Navbar from "@/components/custom/home/navbar";
import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import React, { Suspense } from "react";

const layout = async ({ children }: { children: React.ReactNode }) => {
  // await getOrCreateUser()
 
//   const user = await currentUser();
//   if (!user) {
//     return null;
//   }
//   const loggedInUser = await prisma.user.findUnique({
//     where: { clerkUserId: user.id },
//   });
//   if (!loggedInUser) {
//     await prisma.user.create({
//       data: {
//         name: `${user.fullName} ${user.lastName}`,
//         clerkUserId: user.id,
//         email: user.emailAddresses[0].emailAddress,
//         imageUrl: user.imageUrl,
//       },
//     });
//   }
  return (
    <div>
      <Suspense fallback={
        <ProgressBar/>
      }>
      <Navbar />
      </Suspense>
      {children}
    </div>
  );
};

export default layout;
