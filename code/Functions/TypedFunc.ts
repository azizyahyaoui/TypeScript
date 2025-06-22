// Function with typed parameters and rest parameters

console.log("------------------- Function with typed parameters -------------------");

type LoggedLevel = "info" | "warn" | "error";

const loggedMessage = (level: LoggedLevel, ...messages: string[]): void => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] [${level.toUpperCase()}]:`, ...messages);
}

// Example usage
loggedMessage("info", "This is an info message.");
loggedMessage("warn", "This is a warning message.");
loggedMessage("error", "This is an error message.");

// This will cause a TypeScript error if uncommented
// loggedMessage("debug", "This is a debug message."); // Error: Argument of type