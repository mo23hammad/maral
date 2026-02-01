import { rateLimitIpRedis } from '$lib/server/rateLimitRedis'; 
import { json, type RequestHandler } from '@sveltejs/kit';
import { sendContactEmail } from '$lib/server/ses';

// simple email check
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const POST: RequestHandler = async ({ request, getClientAddress }) => {
	try {
		const data = await request.json();

		const name = String(data.name ?? '').trim();
		const email = String(data.email ?? '').trim();
		const email2 = String(data.email2 ?? '').trim();
        const website = String(data.website ?? '').trim();
		const message = String(data.message ?? '').trim();
        const company = String(data.company ?? '').trim();
        const timeline = data.timeline?.toString();
        const budgetMax = data.budgetMax;
        const budgetMin = data.budgetMin;
        const elapsedMs = data.elapsedMs;


		// Validation
		if (name.length < 2 || name.length > 80) {
			return json({ ok: false, error: 'Invalid name' }, { status: 400 });
		}
		if (!emailRegex.test(email)) {
			return json({ ok: false, error: 'Invalid email' }, { status: 400 });
		}
        if (email !== email2) {
			return json({ ok: false, error: 'Please make sure both emails match' }, { status: 400 });
        }
		if (message.length < 10 || message.length > 2000) {
			return json({ ok: false, error: 'Invalid message length' }, { status: 400 });
		}
        if (timeline === ''){
			return json({ ok: false, error: 'Empty handover time. if you don\'t want to set it choose today.' }, { status: 400 });
        }
        if (website){
            return json({ ok: true },{ status:200 });
        }
        if (typeof elapsedMs === "number" && elapsedMs < 1200) {
            return json({ ok: true },{ status:200 });
        }

        

        // const ip = getClientAddress();
        // const rl = await rateLimitIpRedis(ip, { limit: 3, windowSec: 600 });
        //
        // if (!rl.allowed) {
        //   return json(
        //     { ok: false, error: 'Too many requests. Please try again later.' },
        //     { status: 429, headers: { 'Retry-After': String(rl.retryAfter) } }
        //   );
        // }
		
		await sendContactEmail({ name, email, message,company, budgetMax, budgetMin ,timeline });

		return json({ ok: true });
	} catch (err) {
		console.error(err);
		return json({ ok: false, error: 'Server error' }, { status: 500 });
	}
};
