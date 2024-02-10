import prisma from "@/app/libs/prisma";
import * as bcrypt from "bcrypt";

interface RequestBody {
  email: string;
  password: string;
}

export async function POST(req: Request) {
  const body: RequestBody = await req.json();

  const user = await prisma.user.findFirst({
    where: {
      email: body.email,
    },
  });

  if (
    user &&
    user.hashedPassword &&
    (await bcrypt.compare(body.password, user.hashedPassword))
  ) {
    const { hashedPassword, ...userWithoutPassword } = user;
    return new Response(JSON.stringify(userWithoutPassword));
  } else return new Response(JSON.stringify(null));
}
