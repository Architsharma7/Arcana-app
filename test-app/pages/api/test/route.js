import {NextResponse} from "next/server";

export async function POST(req) {
  const { emailId, address, publickey, username } = await req.json();

  console.log(emailId, address, publickey, username)

  return NextResponse.json({msg :["from createdb"]});
}
