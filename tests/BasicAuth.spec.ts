import {request, test} from "@playwright/test";

const buffer = Buffer.from('user:password');

test('API',async () =>  {
    const context = await request.newContext({
        baseURL: 'https://reqres.in/api',
        extraHTTPHeaders: {
            'Authorization':'Basic '+ buffer.toString('base64'),
        },
    });
    const response = await context.get('/users/2');
    console.log(response.json())
});