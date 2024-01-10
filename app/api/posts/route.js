import prisma from "@/utils/connect"
import { NextResponse } from "next/server"

//Fetch posts
export const GET = async (req) => {

    const { searchParams } = new URL(req.url);
    const cat = searchParams.get("cat");

    const query = {
        where: {
            ...(cat && { catSlug: cat }),
        }
    }
    try {
        const posts = await prisma.post.findMany(query);
        return new NextResponse(JSON.stringify(posts, { status: 200 }))
    } catch (err) {
        return new NextResponse(JSON.stringify({ message: 'Something went wrong!' }, { status: 500 }))
    }
}

// Create a new post
export const POST = async (req) => {
    try {
        const body = await req.json();
        const post = await prisma.post.create({
            data: {
                ...body,
            }
        })
        return new NextResponse(JSON.stringify(post, { status: 200 }))
    } catch (err) {
        console.log(err)
        return new NextResponse(JSON.stringify({ message: 'Something went wrong!' }, { status: 500 }))
    }
}