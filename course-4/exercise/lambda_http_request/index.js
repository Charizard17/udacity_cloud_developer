const AWS = require("aws-sdk");
const axios = require("axios");

// Name of a service, any string
const serviceName = process.env.SERVICE_NAME;
// URL of a service to test
const url = process.env.URL;

// CloudWatch client
const cloudwatch = new AWS.CloudWatch();

exports.handler = async (event) => {
  // TODO: Use these variables to record metric values
  let endTime;
  let requestWasSuccessful;

  const startTime = timeInMs();
  await axios.get(url);

  // Example of how to write a single data point
  // await cloudwatch.putMetricData({
  //   MetricData: [
  //     {
  //       MetricName: 'Latency',
  //       Dimensions: [
  //         {
  //           Name: 'ServiceName',
  //           Value: serviceName
  //         }
  //       ],
  //       Unit: 'Milliseconds',
  //       Value: 0
  //     }
  //   ],
  //   Namespace: 'Udacity/Serveless'
  // }).promise()

  // TODO: Record time it took to get a response
  // TODO: Record if a response was successful or not
};

function timeInMs() {
  return new Date().getTime();
}
