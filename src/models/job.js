import mongoose, { Schema } from "mongoose";

const jobSchema = new Schema({
    jtitle: {
        type: String,
        required: true
    },
    jdescription: {
        type: String,
        required: true,
    }
}, 
{ timestamps: true }
);

const Job = mongoose.models.Job || mongoose.model("Job", jobSchema); 

export default Job;