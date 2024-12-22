import { CodeDeployClient, PutLifecycleEventHookExecutionStatusCommand } from '@aws-sdk/client-codedeploy';
import { APIGatewayProxyEvent } from 'aws-lambda';
const codedeploy = new CodeDeployClient({ region: 'us-east-1' });

// Function to signal success to CodeDeploy
export async function signalSuccess(event: any) {
    const command = new PutLifecycleEventHookExecutionStatusCommand({
        deploymentId: event.deploymentId, // Get deploymentId from event
        status: 'Succeeded', // Indicate success
    });
    return codedeploy.send(command); // Send the command to AWS CodeDeploy
}

// Function to signal failure to CodeDeploy
export async function signalFailure(event: any) {
    const command = new PutLifecycleEventHookExecutionStatusCommand({
        deploymentId: event.deploymentId, // Get deploymentId from event
        status: 'Failed', // Indicate failure
    });
    return codedeploy.send(command); // Send the command to AWS CodeDeploy
}
