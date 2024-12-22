import { CodeDeployClient, PutLifecycleEventHookExecutionStatusCommand } from '@aws-sdk/client-codedeploy';
const codedeploy = new CodeDeployClient({ region: 'us-east-1' });

// Function to signal success to CodeDeploy
export async function signalSuccess(event) {
    const params = {
        deploymentId: event.deploymentId, // Get deploymentId from event
        status: 'Succeeded', // Indicate success
    };

    const command = new PutLifecycleEventHookExecutionStatusCommand(params);
    return codedeploy.send(command); // Send the command to AWS CodeDeploy
}

// Function to signal failure to CodeDeploy
export async function signalFailure(event) {
    const params = {
        deploymentId: event.deploymentId, // Get deploymentId from event
        status: 'Failed', // Indicate failure
    };

    const command = new PutLifecycleEventHookExecutionStatusCommand(params);
    return codedeploy.send(command); // Send the command to AWS CodeDeploy
}
