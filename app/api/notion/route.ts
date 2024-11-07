import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  try {
    const notion = new Client({ auth: process.env.NOTION_SECRET });
    const response = await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DB,
      },
      properties: {
        Email: {
          rich_text: [
            {
              type: "text",
              text: {
                content: body?.email,
              },
            },
          ],
        },
        Name: {
          rich_text: [
            {
              type: "text",
              text: {
                content: body?.name,
              },
            },
          ],
        },
        Phone: {
          phone_number: body?.phone,
        },
        Gender: {
          rich_text: [
            {
              type: "text",
              text: {
                content: body?.gender,
              },
            },
          ],
        },
        University: {
          rich_text: [
            {
              type: "text",
              text: {
                content: body?.university,
              },
            },
          ],
        },
        Faculty: {
          rich_text: [
            {
              type: "text",
              text: {
                content: body?.faculty,
              },
            },
          ],
        },
        TimeStamp: {
          rich_text: [
            {
              type: "text",
              text: {
                content: new Date().toISOString(),
              },
            },
          ],
        },
      },
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error adding entry to Notion:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
