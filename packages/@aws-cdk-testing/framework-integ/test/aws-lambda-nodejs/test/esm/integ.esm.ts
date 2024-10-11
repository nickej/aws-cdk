import * as path from 'path';
import { App, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda-nodejs';
import { IntegTest } from '@aws-cdk/integ-tests-alpha';

class TestESMStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new lambda.NodejsFunction(this, 'esm', {
      entry: path.join(__dirname, 'integ-handlers/esm.ts'),
      bundling: {
        format: lambda.OutputFormat.ESM,
      },
    });
  }
}

class TestESMDefaultEntryStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new lambda.NodejsFunction(this, 'esm-default-entry', {
      bundling: {
        format: lambda.OutputFormat.ESM,
      },
    });
  }
}

const app = new App();
const esmStack = new TestESMStack(app, 'cdk-integ-lambda-nodejs-esm');
const esmDefaultEntryStack = new TestESMDefaultEntryStack(app, 'cdk-integ-lambda-nodejs-esm-default-entry');

new IntegTest(app, 'LambdaNodeJsEsmInteg', {
  testCases: [esmStack, esmDefaultEntryStack],
  diffAssets: true,
});
app.synth();
