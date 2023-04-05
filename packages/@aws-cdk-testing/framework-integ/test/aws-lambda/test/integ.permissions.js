"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const iam = require("aws-cdk-lib/aws-iam");
const cdk = require("aws-cdk-lib");
const lambda = require("aws-cdk-lib/aws-lambda");
const app = new cdk.App();
const stack = new cdk.Stack(app, 'lambda-permissions');
const fn = new lambda.Function(stack, 'MyLambda', {
    code: new lambda.InlineCode('foo'),
    handler: 'index.handler',
    runtime: lambda.Runtime.NODEJS_14_X,
});
fn.grantInvoke(new iam.AnyPrincipal().inOrganization('o-yyyyyyyyyy'));
fn.grantInvoke(new iam.OrganizationPrincipal('o-xxxxxxxxxx'));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZWcucGVybWlzc2lvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbnRlZy5wZXJtaXNzaW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUEyQztBQUMzQyxtQ0FBbUM7QUFDbkMsaURBQWlEO0FBRWpELE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBRTFCLE1BQU0sS0FBSyxHQUFHLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztBQUV2RCxNQUFNLEVBQUUsR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRTtJQUNoRCxJQUFJLEVBQUUsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztJQUNsQyxPQUFPLEVBQUUsZUFBZTtJQUN4QixPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXO0NBQ3BDLENBQUMsQ0FBQztBQUVILEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7QUFFdEUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgaWFtIGZyb20gJ2F3cy1jZGstbGliL2F3cy1pYW0nO1xuaW1wb3J0ICogYXMgY2RrIGZyb20gJ2F3cy1jZGstbGliJztcbmltcG9ydCAqIGFzIGxhbWJkYSBmcm9tICdhd3MtY2RrLWxpYi9hd3MtbGFtYmRhJztcblxuY29uc3QgYXBwID0gbmV3IGNkay5BcHAoKTtcblxuY29uc3Qgc3RhY2sgPSBuZXcgY2RrLlN0YWNrKGFwcCwgJ2xhbWJkYS1wZXJtaXNzaW9ucycpO1xuXG5jb25zdCBmbiA9IG5ldyBsYW1iZGEuRnVuY3Rpb24oc3RhY2ssICdNeUxhbWJkYScsIHtcbiAgY29kZTogbmV3IGxhbWJkYS5JbmxpbmVDb2RlKCdmb28nKSxcbiAgaGFuZGxlcjogJ2luZGV4LmhhbmRsZXInLFxuICBydW50aW1lOiBsYW1iZGEuUnVudGltZS5OT0RFSlNfMTRfWCxcbn0pO1xuXG5mbi5ncmFudEludm9rZShuZXcgaWFtLkFueVByaW5jaXBhbCgpLmluT3JnYW5pemF0aW9uKCdvLXl5eXl5eXl5eXknKSk7XG5cbmZuLmdyYW50SW52b2tlKG5ldyBpYW0uT3JnYW5pemF0aW9uUHJpbmNpcGFsKCdvLXh4eHh4eHh4eHgnKSk7XG4iXX0=