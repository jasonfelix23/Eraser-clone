import {v} from 'convex/values';
import { query } from './_generated/server';
import { mutation } from './_generated/server';

export const getUser = query({
    args: {email: v.string()},
    handler: async (ctx, args) => {
        const users = await ctx.db
            .query('users')
            .filter((q) => q.eq(q.field('email'), args.email))
            .collect();
        
        if (users.length > 0) {
            return { status: 200, data: users[0] }; // User found, return status 200 and user data
        } else {
            return { status: 400, data: null }; // User not found, return status 400
        }
    },
})

export const addUser = mutation({
    args: {
        email: v.string(),
        name: v.string(),
        profilePic: v.string()
    }, 
    handler: async(ctx, args) => {
        const result = await ctx.db.insert('users', args)
    }
})