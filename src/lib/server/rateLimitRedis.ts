
import { redis, ensureRedis } from './redis';

export async function rateLimitIpRedis(ip: string, opts?: { limit?: number; windowSec?: number }) {
	const limit = opts?.limit ?? 3;
	const windowSec = opts?.windowSec ?? 600;

	await ensureRedis();

	const key = `rl:contact:${ip}`;

	// INCR is atomic
	const count = await redis.incr(key);

	// first hit sets TTL
	if (count === 1) {
		await redis.expire(key, windowSec);
	}

	const ttl = await redis.ttl(key); // seconds remaining

	return {
		allowed: count <= limit,
		count,
		remaining: Math.max(0, limit - count),
		retryAfter: ttl > 0 ? ttl : windowSec
	};
}
