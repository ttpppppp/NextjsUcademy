import createUser from "@/lib/actions/user.action";
import { WebhookEvent } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { Webhook } from "svix";
export async function POST(req: Request) {
  const svix_id = req.headers.get("svix-id") ?? "";
  const svix_timestamp = req.headers.get("svix-timestamp") ?? "";
  const svix_signature = req.headers.get("svix-signature") ?? "";

  if(!process.env.WEBHOOK_SECRET){
    throw Error("WEBHOOK_SECRET is not set")
  }
  const payload = await req.json();
  const body = JSON.stringify(payload);

  const sivx = new Webhook(process.env.WEBHOOK_SECRET);

  let msg : WebhookEvent;
  
  try {
    msg = sivx.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    return new Response("Bad Request", { status: 400 });
  }

  const evenType = msg.type;

  if(evenType === "user.created"){
    const {id ,username ,email_addresses , image_url } = msg.data;
    const user = createUser(
        {
            username : username! , 
            email : email_addresses[0].email_address ,
            clerkId : id , 
            avatar : image_url,
        }
    );
    return NextResponse.json({
        message : "OK",
        user
    })
  }
  return new Response("OK", { status: 200 });
}