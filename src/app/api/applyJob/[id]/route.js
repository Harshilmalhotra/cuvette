import { connectMongoDB } from '/src/lib/mongodb.js';
import User from '/src/models/user.js'; 
import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

export async function PATCH(request, { params }) {
  try {
    const { id } = params;
    const { addJob: japply } = await request.json();
    await connectMongoDB();
    
    // Ensure `id` is a valid ObjectId
    const filter = { _id: new mongoose.Types.ObjectId(id) };
    const update = { $set: { japply } };
    
    const result = await User.updateOne(filter, update);
    
    // Check if the document was found and updated
    if (result.matchedCount === 0) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Job Applied" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "An error occurred" }, { status: 500 });
  }
}