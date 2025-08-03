import { NextResponse } from "next/server";
import dbConnect from "../../../lib/mongodb"; // bạn tạo file kết nối DB riêng
import Blog from "../../../models/Blog";
import Image from "../../../models/Image";

export async function GET(request: Request) {
  await dbConnect();

  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1");
  const search = searchParams.get("search") || "";

  const limit = 12;
  const skip = (page - 1) * limit;

  // Tìm blog theo title có chứa search (toLower)
  const query = search
    ? { title: { $regex: new RegExp(search, "i") } }
    : {};

  const blogs = await Blog.find(query)
    .sort({ createdDate: -1 })
    .skip(skip)
    .limit(limit)
    .lean();

  // Lấy 3 ảnh đầu cho mỗi blog
  const blogIds = blogs.map((b) => b._id);
  const images = await Image.find({ blogID: { $in: blogIds } })
    .sort({ createdDate: 1 })
    .lean();

  const blogsWithImages = blogs.map((blog) => {
    const blogIdStr = (blog._id as unknown as string) || String(blog._id);
    const imgsForBlog = images
        .filter((img) => img.blogID.toString() === blogIdStr)
        .slice(0, 3)
        .map((img) => img.imgUrl);
    return { ...blog, images: imgsForBlog };
 });
  return NextResponse.json({ blogs: blogsWithImages });
}
