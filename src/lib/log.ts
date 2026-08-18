/**
 * Minimal structured logger. Output lands in Vercel function logs.
 * Deliberately dependency-free; swap for a proper sink later if needed.
 */
type Level = "info" | "warn" | "error";

function emit(level: Level, scope: string, message: string, meta?: Record<string, unknown>) {
  const line = JSON.stringify({
    level,
    scope,
    site: process.env.SITE,
    message,
    ...meta,
  });
  if (level === "error") console.error(line);
  else if (level === "warn") console.warn(line);
  else console.log(line);
}

export const log = {
  info: (scope: string, message: string, meta?: Record<string, unknown>) =>
    emit("info", scope, message, meta),
  warn: (scope: string, message: string, meta?: Record<string, unknown>) =>
    emit("warn", scope, message, meta),
  error: (scope: string, message: string, meta?: Record<string, unknown>) =>
    emit("error", scope, message, meta),
};
