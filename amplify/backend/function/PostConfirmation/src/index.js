const aws = require('aws-sdk')
const ddb = new aws.DynamoDB()

/* Amplify Params - DO NOT EDIT
	API_CHATAPP_GRAPHQLAPIIDOUTPUT
	API_CHATAPP_USERTABLE_ARN
	API_CHATAPP_USERTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    if (event.request.userAttributes.sub) {
        const { userName, request: { userAttributes: { sub } } } = event;
        const params = {
            TableName: 'User-ywrnshs2e5ggba2dbsmfryw4ja-dev',
            Item: {
                'id': { S: sub },
                'username': { S: userName },
            },
        };
        try {
            await ddb.putItem(params).promise()
            console.log('Success')
        } catch (err) {
            console.log(JSON.stringify(err))
            console.log('Error saving user to database')
        }
    }
};
