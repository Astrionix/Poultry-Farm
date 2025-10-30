import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getServiceSupabaseClient } from "@/lib/supabase";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(6),
  subject: z.string().min(2),
  purpose: z.string().min(2),
  message: z.string().min(10),
});

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { message: "Invalid request", errors: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const supabase = getServiceSupabaseClient();
  const { data, error } = await supabase
    .from("contact_inquiries")
    .insert({
      ...parsed.data,
      status: "new",
    })
    .select("id")
    .single();

  if (error) {
    console.error("Failed to create contact inquiry", error);
    return NextResponse.json(
      { message: "Unable to submit inquiry at the moment" },
      { status: 500 },
    );
  }

  return NextResponse.json(
    {
      message: "Inquiry submitted",
      id: data.id,
    },
    { status: 201 },
  );
}
