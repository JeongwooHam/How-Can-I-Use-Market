import { signJwtAccessToken } from "@/app/libs/jwt";
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

    const accessToken = signJwtAccessToken(userWithoutPassword);
    const result = {
      ...userWithoutPassword,
      accessToken,
    };
    return new Response(JSON.stringify(result));
  } else return new Response(JSON.stringify(null));
}
