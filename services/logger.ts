// logger.ts

const levels = {
  error: "ERROR",
  warn: "WARN",
  info: "INFO",
  debug: "DEBUG",
};

const logToLocalStorage = (
  level: keyof typeof levels,
  message: string,
  data?: unknown,
) => {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] [${levels[level]}] ${message}`;

  // Retrieve existing logs from localStorage
  const existingLogsJson = localStorage.getItem("logs");
  const existingLogs = existingLogsJson ? JSON.parse(existingLogsJson) : [];

  // Append new log
  const newLog = { logMessage, level: levels[level], message, data };
  const updatedLogs = [...existingLogs, newLog];

  // Store updated logs in localStorage
  localStorage.setItem("logs", JSON.stringify(updatedLogs));
};

export const error = (message: string, data?: unknown) =>
  logToLocalStorage("error", message, data);
export const warn = (message: string, data?: unknown) =>
  logToLocalStorage("warn", message, data);
export const info = (message: string, data?: unknown) =>
  logToLocalStorage("info", message, data);
export const debug = (message: string, data?: unknown) =>
  logToLocalStorage("debug", message, data);
