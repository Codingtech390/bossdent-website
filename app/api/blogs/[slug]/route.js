import { NextResponse } from "next/server";
import connectDB from "../../lib/mongodb";
import Blog from "../../server/models/blog";


export async function GET(req, { params }) {
  try {
    await connectDB();

    const { slug } = await params;

    const blog = await Blog.findOne({ slug: slug, status: "published" });

    if (!blog) {
      return NextResponse.json({ success: false, error: "Blog nahi mila" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: blog });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;
    const body = await req.json();

    const blog = await Blog.findByIdAndUpdate(id, body, { new: true, runValidators: true });

    if (!blog) {
      return NextResponse.json({ success: false, error: "Blog nahi mila" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: blog });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    const blog = await Blog.findByIdAndDelete(id);

    if (!blog) {
      return NextResponse.json({ success: false, error: "Blog nahi mila" }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: "Blog delete ho gaya" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
