import { NextResponse } from "next/server"


export  async function GET(request: Request) {

	/// Set up Cookies 

	  return NextResponse.json({message: "hello"})

} 