import USERS from "../models/users.js";

export const geminiPrompt =async (userId) => {
try {

   
 const user=await USERS.findOne({userId})

const prompt=`Channel: ${user.name}
    title:${user.title}
    channelStats:${JSON.stringify(user.channelStats)}
In 5 short bullets, tell this creator exactly what to do next month to 3x faster growth:

1. START doing:  
2. STOP doing:  
3. KEEP doing:  
4. Post this next:  
5. Post this after:

Be brutally direct. One short line per bullet. No fluff.`
   
return prompt;    

  } catch (error) {
    console.log(error)
  }
}
