declare module 'process' {
    global {
        const process: NodeJS.Process;
        namespace NodeJS {
            interface Process {
                env: {
                    NODE_ENV: string;
                    ORIGIN: string;
                    MAILER_AUTH_TOKEN: string;
                    TELEGRAM_CHAT_ID: string;
                    MANAGER_EMAIL: string;
                };
            }
        }
    }
}
