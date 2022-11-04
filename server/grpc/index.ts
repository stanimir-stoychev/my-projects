import { ServerApp } from '@/server/types';

export const gRPCServerApp: ServerApp = {
    name: 'gRPC application',
    description: 'This app will basically serve an API for gRPC requests',
    async run() {
        console.log('Will eventually "start" a "gRPC" app', '\n', 'Work in progress...');
    },
};
