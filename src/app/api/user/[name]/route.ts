import prisma from "@/app/libs/prisma";

export async function GET(
  request: Request,
  { params }: { params: { name: string } }
) {
  // Prisma Model에서 id는 int 타입이므로 Number 타입으로의 형변환이 필요하다.
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
