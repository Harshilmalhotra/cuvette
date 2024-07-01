import { connectMongoDB } from '/src/lib/mongodb.js';
import User from '/src/models/user.js'; 
import { NextResponse } from 'next/server';
import mongoose from 'mongoose';




export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const user = await User.findOne({ _id: id }); 
    return NextResponse.json({ user }, { status: 200 }); 
  }