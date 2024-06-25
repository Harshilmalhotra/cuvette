import { connectMongoDB } from '/src/lib/mongodbJob.js';
import Job from '/src/models/job.js';
import { NextResponse } from 'next/server';
export async function POST(request){

    const {jtitle,jdescription} = await request.json();
    await connectMongoDB();

    await Job.create({jtitle,jdescription});
    return NextResponse.json({message: "Job added successfully"},{status:201});
}

export async function GET(){
    await connectMongoDB();
    const jobs = await Job.find({});
    return NextResponse.json(jobs);
}

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Job.findByIdAndDelete(id);
    return NextResponse.json({message: "Job deleted successfully"},{status:200});
}