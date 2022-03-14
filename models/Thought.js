const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema(
    {
        userID: {
            type: Schema.Types.ObjectId,
            default: () => Types.ObjectId()
        },
        username: {
            type: String, 
            
        }
        
    }
)