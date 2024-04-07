
import connectMongoDB from "@/app/libs/mongodb"
import { NextResponse } from "next/server"
import Movie from '@/models/movies';

export const GET = async (request, { params }) => {
    const { id } = params;
  
    try {
      await connectMongoDB();
  
      const post = await Movie.findById(id);
  
      return new NextResponse(JSON.stringify(post), { status: 200 });
    } catch (err) {
      return new NextResponse("Database Error", { status: 500 });
    }
  };


  export const DELETE = async (request, { params }) => {
    const { id } = params;
  
    try {
      await connectMongoDB();
  
      await Movie.findByIdAndDelete(id);
  
      return new NextResponse("Movie has been deleted", { status: 200 });
    } catch (err) {
      return new NextResponse("Database Error", { status: 500 });
    }
  };