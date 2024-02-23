import dbConnect from "@/database/database";
import Clothes from "@/app/model/clothesModel";
import { NextResponse } from "next/server";

export async function GET() {
    await dbConnect()
    const clothes = await Clothes.find()
    return NextResponse.json({clothes}) 
}

export async function POST(request){
    const { name, clothesType, weatherType, image } = await request.json()
    await dbConnect()
    await Clothes.create({ name, clothesType, weatherType, image })
    return NextResponse.json({message: "Clothing created"})
}

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get('id')
    await dbConnect()
    await Clothes.findByIdAndDelete(id)
    return NextResponse.json({ message: "Clothing deleted" })
}

