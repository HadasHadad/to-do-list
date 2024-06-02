import Todo from "../../../../models/todo";
import connectMongoDB from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function PUT(req , {params}){
    const {id} = params;
    const {newTitle: title, newDescription: description} = await req.json();
    await connectMongoDB();
    await Todo.findByIdAndUpdate (id, {title, description});
    return NextResponse.json({message:"todo updated"}, {status:200})

}

export async function GET(req, {params}){
    const {id} = params;
    await connectMongoDB();
    const todo = await Todo.findOne({_id: id});
    return NextResponse.json({todo}, {status:200})

}