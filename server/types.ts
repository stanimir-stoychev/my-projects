export interface ServerApp {
    name: string;
    description?: string;
    run(): Promise<void>;
}
