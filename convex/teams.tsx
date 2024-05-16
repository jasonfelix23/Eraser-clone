import {v} from "convex/values";
import { mutation, query } from "./_generated/server";

export const getTeam = query({
    args: {email: v.string()},
    handler:async(ctx, args) => {
        const result = await ctx.db.query('teams')
            .filter(q => q.eq(q.field('createdBy'), args.email))
            .collect();
        if(result.length > 0){
            return {status: 200, data: result};
        }else{
            return {status: 400, data: null}
        }
    }
})

export const createTeam = mutation({
    args: {teamName: v.string(), createdBy: v.string()},
    handler:async(ctx, args) => {
        const result = await ctx.db.insert('teams', args);
        return {status: 200, data: result};
    }
})