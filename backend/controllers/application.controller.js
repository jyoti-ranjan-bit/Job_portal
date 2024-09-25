import { Application } from "../models/application.js";
import { Job } from "../models/job.model.js";



export const applyJob = async (req, res) => {
    try {
        const userId = req.id;
        const jobId = req.params.id;
        if (!jobId) {
            return res.status(400).json({
                message: "Job id is required.",
                success: false
            })
        };
        // check if the user has already applied for the job
        const existingApplication = await Application.findOne({ job: jobId, applicant: userId });

        if (existingApplication) {
            return res.status(400).json({
                message: "You have already applied for this jobs",
                success: false
            });
        }

        // check if the jobs exists
        const job = await Job.findById(jobId);
        if (!job) {
            return res.status(404).json({
                message: "Job not found",
                success: false
            })
        }
        // create a new application
        const newApplication = await Application.create({
            job:jobId,
            applicant:userId,
        });

        job.applications.push(newApplication._id);
        await job.save();
        return res.status(201).json({
            message:"Job applied successfully.",
            success:true
        })
    } catch (error) {
        console.log(error);
    }
};
export const getAppliedJobs = async(req,res)=>{
    try {
        const userId=req.id;
        const application = await Application.find({applicant:userId}).sort({createdAt:-1}).populate({
            path:'job',
            options:{sort:{createdAt:-1}},
            populate:{
                path:'company',
                options :{sort:{createdAt:-1}},
            }
        })
    if(!application){
        return req.status(404).json({
            message:"application Not Found",
            success:false
        })
    }
    return res.status(200).json({
        application,
        success:true
    })

    } catch (error) {
        console.log(error);
    }
}
export const getApplicants = async(req,res)=>{
    try {
        const  jobId =req.params.id;
        const job=await Job.findById(jobId).populate({
            path:'applications',
            options:{sort:{createdAt:-1}},
            populate:{
                path:'applicant',
                options :{sort:{createdAt:-1}},
            }
        })
        if(!job){
            return req.status(404).json({
                message:"Job not found",
                success:false
            })
        };
        return res.status(200).json({
            job,
            success:true
        })
    

    } catch (error) {
        console.log(error);
    }
}

export const updateStatus = async (req,res)=>{
    try {
        const {status} =req.body
        const applicationId = req.params.id;
        if(!status){
            return req.status(400).json({
                message:"status is required",
                success:false
            })
        };
        //find the applicatioin by application id

        const application =await Application.findOne({_id:applicant})
        if(!application){
            return req.status(404).json({
                message:"Applicationn not found",
                success:false
            })
        };
        //update status
application.status = status.toLowerCase();
await application.save();

return res.status(200).json({
    message:"status updated succesfully",
    success:true
})

    } catch (error) {
        console.log(error)
    }
}