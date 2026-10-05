import { NextResponse } from "next/server";
import connectDB from "../lib/mongodb";
import Blog from "../server/models/blog";
// ── GET: Sabhi published blogs fetch karo ──
export async function GET() {
  try {
    await connectDB();

    const blogs = await Blog.find({ status: "published" })
      .sort({ createdAt: -1 })
      .select("title slug excerpt author coverImage createdAt");

    return NextResponse.json({ success: true, data: blogs });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}

// ── POST: Naya blog create karo ──
export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();
    const { title, slug, excerpt, content, author, coverImage, status } = body;

    // Validation
    if (!title || !slug || !excerpt || !content || !author) {
      return NextResponse.json(
        { success: false, error: "Sabhi required fields bharo" },
        { status: 400 },
      );
    }

    const blog = await Blog.create({ title, slug, excerpt, content, author, coverImage, status });

    return NextResponse.json({ success: true, data: blog }, { status: 201 });
  } catch (error) {
    // Duplicate slug error
    if (error.code === 11000) {
      return NextResponse.json(
        { success: false, error: "Yeh slug pehle se exist karta hai" },
        { status: 400 },
      );
    }
    console.error(error);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
