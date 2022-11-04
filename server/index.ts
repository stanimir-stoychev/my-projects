import { ExpressServerApp } from './express';
import { gRPCServerApp } from './grpc';

[ExpressServerApp, gRPCServerApp].forEach((app) =>
    app
        .run()
        .then(() => {
            console.log(`\nSuccessfully started "${app.name}"`);
        })
        .catch((error) => {
            console.error(`\nFailed to start "${app.name}"`);
            throw error;
        }),
);
