interface EnvConfig {
    GROQ_API_KEY: string;
    SARVAM_API_KEY: string;
}

export const envConfig: EnvConfig = {
    GROQ_API_KEY: process.env.NEXT_PUBLIC_GROQ_API_KEY || '',
    SARVAM_API_KEY: process.env.NEXT_PUBLIC_SARVAM_API_KEY || '',
};

export function validateEnvConfig(): void {
    const missingVars = Object.entries(envConfig)
        .filter(([_, value]) => value === '')
        .map(([key]) => key);

    if (missingVars.length > 0) {
        throw new Error(`Missing environment variables: ${missingVars.join(', ')}`);
    }
}
validateEnvConfig();