import {v} from 'convex/values';
import { mutation, query } from './_generated/server';

export const createFile = mutation({
    args:{
        fileName: v.string(),
        teamId: v.string(),
        createdBy: v.string(),
        archive: v.boolean(),
        document: v.string(),
        whiteboard: v.string(),
    },
    handler:async(ctx, args) => {
        const result = await ctx.db.insert('files', args);
        return {status: 200, data: result};
    }
})

export const getAllFiles = query({
    args: {
        teamId: v.string(),
    }, handler: async(ctx, args)=> {
        const result = await ctx.db.query('files')
        .filter(q => q.eq(q.field('teamId'), args.teamId))
        .collect();
        return {status: 200, data: result};
    }
})