import { connectMongoDB } from '/src/lib/mongodbJob.js';
import Job from '/src/models/job.js'; // Adjust the path as necessary
import { NextResponse } from 'next/server'; // Assuming NextResponse is from Next.js

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: jtitle, newDescription: jdescription } = await request.json();
  await connectMongoDB();
  // Ensure the object keys match your schema fields
  await Job.findByIdAndUpdate(id, { title: jtitle, description: jdescription });
  return NextResponse.json({ message: "Job Description updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const job = await Job.findOne({ _id: id }); // Changed variable name to 'job' to match the response
  return NextResponse.json({ job }, { status: 200 }); // Corrected to return 'job'
}