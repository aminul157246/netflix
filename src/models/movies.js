import mongoose from 'mongoose';
const { Schema } = mongoose
const movieSchema = new Schema(

    {
        title: {
            type: String,
            unique: true,
            required: true
        },

        image: {
            type: String,
            unique: true,
            required: true
        },

        description: {
            type: String,
            unique: true,
            required: true
        },

        time: {
            type: String,
            unique: true,
            required: true
        },

        rating: {
            type: String,
            unique: true,
            required: true
        },
    },

    {
        timestamps : true
    }

)


export default mongoose.models.Movie || mongoose.model('Movie', movieSchema)  