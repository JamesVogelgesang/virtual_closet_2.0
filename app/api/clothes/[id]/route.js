import Clothes from "@/app/model/clothesModel";
import dbConnect from "@/database/database";
import { NextResponse } from "next/server";

export async function PUT(request, {params}){
    const {id} = params;
    const { newName: name, newClothesType: clothesType, newWeatherType: weatherType, newImage: image } = await request.json()
    await dbConnect()
    await Clothes.findByIdAndUpdate(id, { name, clothesType, weatherType, image })
    return NextResponse.json({message: "Clothing updated"})
}