import mongoose from 'mongoose'

const clothesSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a name"],
        },
        clothesType: {
            type: String,
            enum: ['Hat', 'Jacket', 'Shirt', 'Pants', 'Shoe'],
            required: [true, 'Please select the type of clothing']
        },
        weatherType: {
            type: [String],
            enum: ['Snow', 'Rain', 'Cold', 'Hot', 'Moderate', 'Sunny', 'Overcast'],
            required: [true, 'Choose 1 or more types of weather']
        },
        picture: {
            type: String,
            get: v => `${root}${v}`
          } 
    }
)
const Clothes = mongoose.models.Clothes || mongoose.model('Clothes', clothesSchema)


export default Clothes