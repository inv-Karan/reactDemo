// Import required AWS SDK clients and commands for Node.js
const { SNSClient, PublishCommand } =  require("@aws-sdk/client-sns")

// Set the AWS Region
const REGION = "ap-south-1"; //e.g. "us-east-1"

// Set the parameters
var params = {
  Message: "HI", // MESSAGE_TEXT
  TopicArn: "+919099178011", //TOPIC_ARN
};

// Create SNS service object
const sns = new SNSClient({ region: REGION });

const run = async () => {
  try {
    const data = await sns.send(new PublishCommand(params));
    console.log("Message sent to the topic");
    console.log("MessageID is " + data.MessageId);
  } catch (err) {
    console.error(err, err.stack);
  }
};
run();