import { verifyJwtAccessToken } from "@/app/libs/jwt";
import prisma from "@/app/libs/prisma";

export async function GET(
  request: Request,
  { params }: { params: { name: string } }
) {
  // accessToken으로 세션 보호하기
  const accessToken = request.headers.get("authorization");
  if (!accessToken || !verifyJwtAccessToken(accessToken)) {
    return new Response(JSON.stringify({ error: "No Authorization" }), {
      status: 401,
    });
  }

  const authorName = params.name;
  const targetPosts = await prisma.post.findMany({
    where: {
      authorName,
    },
    include: {
      author: {
        select: {
          email: true,
          name: true,
        },
      },
    },
  });
  return new Response(JSON.stringify(targetPosts));
}
