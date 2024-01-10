import prisma from "@/utils/connect"
import { NextResponse } from "next/server"

//Get Single Post

export const GET = async (req, { params }) => {

    const { slug } = params;

    try {
        const post = await prisma.post.findUnique({
            where: { slug },
        });
        return new NextResponse(JSON.stringify(post, { status: 200 }))
    } catch (err) {
        return new NextResponse(JSON.stringify({ message: 'Something went wrong!' }, { status: 500 }))
    }
}