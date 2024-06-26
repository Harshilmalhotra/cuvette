import { connectMongoDB } from '/src/lib/mongodbJob.js';
import Job from '/src/models/job.js'; 
import { NextResponse } from 'next/server'; 

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: jtitle, newDescription: jdescription } = await request.json();
  await connectMongoDB();
  
  await Job.findByIdAndUpdate(id, {jtitle,jdescription });
  return NextResponse.json({ message: "Job Description updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const job = await Job.findOne({ _id: id }); 
  return NextResponse.json({ job }, { status: 200 }); 
}