import { CodeDeployClient, PutLifecycleEventHookExecutionStatusCommand } from '@aws-sdk/client-codedeploy';

const codedeploy = new CodeDeployClient({ region: 'us-east-1' });

// Function to signal success to CodeDeploy
export async function signalSuccess(event: any) {
    const deploymentId = event.DeploymentId;
    const lifecycleEventHookExecutionId = event.LifecycleEventHookExecutionId;

    console.log('deploymentId', deploymentId);
    console.log('lifecycleEventHookExecutionId', lifecycleEventHookExecutionId);

    const command = new PutLifecycleEventHookExecutionStatusCommand({
        deploymentId: deploymentId,
        lifecycleEventHookExecutionId: lifecycleEventHookExecutionId,
        status: 'Succeeded', // Indicate success
    });
    return codedeploy.send(command); // Send the command to AWS CodeDeploy
}

// Function to signal failure to CodeDeploy
export async function signalFailure(event: any) {
    const deploymentId = event.DeploymentId;
    const lifecycleEventHookExecutionId = event.LifecycleEventHookExecutionId;

    console.log('deploymentId', deploymentId);
    console.log('lifecycleEventHookExecutionId', lifecycleEventHookExecutionId);

    const command = new PutLifecycleEventHookExecutionStatusCommand({
        deploymentId: deploymentId,
        lifecycleEventHookExecutionId: lifecycleEventHookExecutionId,
        status: 'Failed', // Indicate failure
    });
    return codedeploy.send(command); // Send the command to AWS CodeDeploy
}
