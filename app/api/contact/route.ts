
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  service: z.string().min(1),
  message: z.string().min(10),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message } = formSchema.parse(body);

    // Check for environment variables
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_EMAIL } = process.env;

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
      console.warn("Missing SMTP environment variables. Email will NOT be sent.");
      console.log("Form Data:", { name, email, phone, service, message });
      
      // In development or if unconfigured, we simulate success
      return NextResponse.json({ success: true, message: "Message received (Simulation)" });
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 587,
      secure: Number(SMTP_PORT) === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    // Email to business
    const businessMailOptions = {
      from: `"Smarting.gr Contact" <${SMTP_USER}>`,
      to: CONTACT_EMAIL || SMTP_USER,
      subject: `New Contact Request: ${service} from ${name}`,
      text: `
        New Contact Request from Smarting.gr

        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Service Interest: ${service}
        
        Message:
        ${message}
      `,
      html: `
        <h2>New Contact Request from Smarting.gr</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service Interest:</strong> ${service}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    };

    // Confirmation email to client
    const clientMailOptions = {
      from: `"Smarting.gr" <${SMTP_USER}>`,
      to: email,
      subject: 'Ευχαριστούμε για το μήνυμά σας - Smarting.gr',
      text: `
        Αγαπητέ/ή ${name},

        Σας ευχαριστούμε που επικοινωνήσατε μαζί μας!

        Λάβαμε το μήνυμά σας σχετικά με: ${service}

        Θα επικοινωνήσουμε μαζί σας το συντομότερο δυνατό στο ${phone} ή στο ${email}.

        Με εκτίμηση,
        Η ομάδα της Smarting.gr

        ---
        Αυτό είναι ένα αυτόματο μήνυμα επιβεβαίωσης. Παρακαλούμε μην απαντήσετε σε αυτό το email.
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
          <div style="background-color: #0B3D59; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: #00ADB5; margin: 0;">Smarting.gr</h1>
          </div>
          <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px;">
            <h2 style="color: #0B3D59;">Αγαπητέ/ή ${name},</h2>
            <p style="color: #333; line-height: 1.6;">
              Σας ευχαριστούμε που επικοινωνήσατε μαζί μας!
            </p>
            <p style="color: #333; line-height: 1.6;">
              Λάβαμε το μήνυμά σας σχετικά με: <strong style="color: #00ADB5;">${service}</strong>
            </p>
            <p style="color: #333; line-height: 1.6;">
              Θα επικοινωνήσουμε μαζί σας το συντομότερο δυνατό στο <strong>${phone}</strong> ή στο <strong>${email}</strong>.
            </p>
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
              <p style="color: #666; font-size: 14px; margin: 0;">
                Με εκτίμηση,<br/>
                Η ομάδα της Smarting.gr
              </p>
            </div>
            <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #00ADB5; border-radius: 4px;">
              <p style="color: #666; font-size: 12px; margin: 0;">
                <em>Αυτό είναι ένα αυτόματο μήνυμα επιβεβαίωσης. Παρακαλούμε μην απαντήσετε σε αυτό το email.</em>
              </p>
            </div>
          </div>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(businessMailOptions),
      transporter.sendMail(clientMailOptions),
    ]);

    return NextResponse.json({ success: true, message: "Emails sent successfully" });

  } catch (error) {
    console.error("Error processing contact form:", error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, error: "Validation failed", details: error.issues }, { status: 400 });
    }
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
