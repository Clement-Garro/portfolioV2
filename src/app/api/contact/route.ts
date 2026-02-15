import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validation des champs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Récupération du webhook depuis les variables d'environnement serveur (sécurisé)
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

    if (!webhookUrl) {
      console.error('DISCORD_WEBHOOK_URL is not defined');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Payload Discord avec embed
    const payload = {
      embeds: [
        {
          title: "📬 Nouveau message de contact",
          color: 0x5865F2, // Couleur Discord blurple
          fields: [
            { name: "👤 Nom", value: String(name), inline: true },
            { name: "📧 Email", value: String(email), inline: true },
            { name: "💬 Message", value: String(message), inline: false },
          ],
          footer: {
            text: "Portfolio Contact Form"
          },
          timestamp: new Date().toISOString(),
        }
      ]
    };

    // Envoi au webhook Discord
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error('Discord webhook error:', response.status, response.statusText);
      return NextResponse.json(
        { error: 'Failed to send message' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Error in contact API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

