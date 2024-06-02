import Todo from "@/components/Todo";
import connectMongoDB from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function PUT(req , {params}){
    const {id} = params;
    const {newTitle, newDescription} = await req.json();
    await connectMongoDB();
    await Todo.findByIdAndUpdate(id, {newTitle, newDescription});
    return NextResponse.json({message:"todo updated"}, {status:200})

}