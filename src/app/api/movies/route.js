// import connectMongoDB from "@/app/libs/mongodb"
// import Movie from "@/app/models/movies";
// import { NextResponse } from "next/server";


// // post 
// export async function POST(req) {
//   const { rating, description, time, image, title } = await req.json();
//   await connectMongoDB()
//   await Movie.create({ rating, description, time, image, title })
//   return NextResponse.json({ message: 'Movie Added' }, { status: 201 })
// }

// // get 
// export async function GET() {
//   await connectMongoDB()
//   const movies = await Movie.find()
//   return NextResponse.json({ movies })
// }


// // delete 
// export async function DELETE(req){
//  const id = req.nextUrl.searchParams.get("id")
//  await connectMongoDB()
//  await Movie.findByIdAndDelete(id)
//  return NextResponse.json({message : 'movie deleted'}, {status : 200})
// }



// // update 
// // export async function 









import connectMongoDB from "@/app/libs/mongodb"
import { NextResponse } from "next/server"
import Movie from '@/models/movies';

export const GET = async (req) => {

  try {

    await connectMongoDB()
    const movies = await Movie.find()
    // Convert movies to JSON format
    const moviesJSON = JSON.stringify(movies);
    return new NextResponse(moviesJSON , { status: 200 })


  } catch (error) {

    return new NextResponse("Database error", { status: 500 })
  }


}