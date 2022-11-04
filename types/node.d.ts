declare namespace NodeJS {
    export interface ProcessEnv {
        NEXT_AUTH_GITHUB_ID: string;
        NEXT_AUTH_GITHUB_SECRET: string;
        DATABASE_URL: string;
    }
}
