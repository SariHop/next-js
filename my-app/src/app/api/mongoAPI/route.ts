import connect from '@/app/lib/db/mongodb'
import { NextRequest, NextResponse } from "next/server";
import User from '@/app/lib/models/users'

export async function GET() {
   try {
      await connect()
      const data = await User.find()
      console.log(data)

      return NextResponse.json({ data });

   } catch (error) {
      return NextResponse.json({ messege: error });
   }
}

export async function POST(req: NextRequest) {

   try {
      await connect()
      const { email, userName, password } = await req.json()
      console.log(email, userName, password)
      //  validathion
      const user = new User({ email, userName, password })
      await user.save()

      return NextResponse.json({ newuser: user });
   } catch {
      return NextResponse.json({ "messege": "error" });
   }



}

