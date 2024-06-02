import connectMongoDB from "@/lib/mongodb";
import { NextResponse } from "next/server";
import Todo from '../../../models/todo'


export async function POST (req){
    
    try{
        const {title,description} = await req.json();
        await connectMongoDB();
        await Todo.create({title, description});
         return NextResponse.json({message:"Todo created"},{status:201})
    }catch(e){
         return NextResponse.json({message:`${e.message}`},{status:400})
    }

}

export async function GET(){
    await connectMongoDB();
    const todos = await Todo.find();
    return NextResponse.json({todos});
}

export async function DELETE(req){
const id = req.nextUrl.searchParams.get("id");
await connectMongoDB();
await Todo.findByIdAndDelete(id);
return NextResponse.json({message:"todo deleted"}, {status: 200});
}

