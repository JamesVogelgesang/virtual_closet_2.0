import dbConnect from "@/database/database";
import Clothes from "@/app/model/clothesModel";
import { NextResponse } from "next/server";

export async function GET() {
    await dbConnect()
    
    const clothes = await Clothes.find()
    console.log(clothes)
    return NextResponse.json({clothes}) 
}

export async function POST(request){

}