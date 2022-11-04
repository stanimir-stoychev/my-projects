import { ServerApp } from '@/server/types';

export const ExpressServerApp: ServerApp = {
    name: 'Express application',
    description: 'This app will basically serve an API for http requests',
    async run() {
        console.log('Will eventually "start" an "express" app', '\n', 'Work in progress...');
    },
};
