import { NextRequest, NextResponse } from "next/server";

export function GET() {
    const data = Array.from({ length: 30 }, (_, index) => ({
        post: `Post ${index + 1}`,
        id: index + 1,
        user: `User ${index + 1}`
    }));

    return NextResponse.json(data);
}

export function DELETE( ){
    return NextResponse.json({meesge:"DELETE"})
}

export function POST( ){
    return NextResponse.json({meesge:"POST"})
}

export function PUT( ){
    return NextResponse.json({meesge:"PUT"})
}



// או שהוא שומע ממש טוב או שזה בגלל שאנחנו יושבות קרוב
// אבל הוא ממש שומע כל מה שאנחנו אומרות