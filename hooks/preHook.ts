import { APIGatewayProxyResult } from 'aws-lambda';
import { signalFailure, signalSuccess } from './common';

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

export const lambdaHandler = async (event: any): Promise<APIGatewayProxyResult> => {
    try {
        await signalSuccess(event);
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'pre traffic hook new',
            }),
        };
    } catch (err) {
        await signalFailure(event);
        console.log(err);
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'some error happened',
            }),
        };
    }
};
