"use strict";

const AWS = require("aws-sdk");
const uuid = require("uuid");

const docClient = new AWS.DynamoDB.DocumentClient();
const groupsTable = process.env.GROUPS_TABLE;

exports.handler = async (event) => {
  console.log("Processing event: ", event);

  return {};
};
