import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import { env } from '$env/dynamic/private';



const region = env.AWS_REGION!;
const fromEmail = env.SES_FROM_EMAIL!;
const toEmail = env.CONTACT_TO_EMAIL!;

const ses = new SESClient({
	region,
	credentials: {
		accessKeyId: env.AWS_ACCESS_KEY_ID!,
		secretAccessKey: env.AWS_SECRET_ACCESS_KEY!
	}
});

type ContactPayload = {
	name: string;
    company: string;
	email: string;
	message: string;
    budgetMax:string;
    budgetMin:string;
    timeline: string;
};

export async function sendContactEmail({ name, company, email, message, budgetMax, budgetMin, timeline }: ContactPayload) {
	const subject = `New contact form: ${name}`;

	const bodyText =
		`New message from your maral.systems\n\n` +
		`Name: ${name}\n` +
        `Company: ${company}\n`+
		`Email: ${email}\n\n` +
		`Message:\n${message}\n`+
        `Price Range: ${budgetMin} - ${budgetMax}\n`+
        `Until: ${timeline}`;


	const cmd = new SendEmailCommand({
		Source: fromEmail,
		Destination: { ToAddresses: [toEmail] },
		ReplyToAddresses: [email],
		Message: {
			Subject: { Data: subject, Charset: 'UTF-8' },
			Body: {
				Text: { Data: bodyText, Charset: 'UTF-8' }
			}
		}
	});

	await ses.send(cmd);
}
