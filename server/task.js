import { ListTablesCommand, DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  UpdateCommand,
  PutCommand,
  DynamoDBDocumentClient,
  ScanCommand,
  DeleteCommand,
} from "@aws-sdk/lib-dynamodb";
import crypto from "crypto";

const client = new DynamoDBClient({ region: "us-east-1" });
const docClient = DynamoDBDocumentClient.from(client);


// get all task from dynamoDB
export const fetchTasks = async () => {
  const command = new ScanCommand({
    ExpressionAttributeNames: { "#name": "name" },
    ProjectionExpression: "id, #name, completed",
    TableNames: "Tasks",
  });

  const response = await docClient.send(command);
  return response;
};


// Create new task and save to dynomoDB
const createTasks = async ({ name, completed }) => {
  const uuid = crypto.randomUUID();
  const command = new PutCommand({
    TableName: "Tasks",
    Item: {
      id: uuid,
      name,
      completed,
    },
  });

  const response = await docClient.send(command);
  return response;
};


// update task 
const updateTask = async ({ id, name, completed }) => {
  const command = new UpdateCommand({
    TableName: "Task",
    Key: {
      id,
    },
    ExpressionAttributeNames: {
      "#name": "name",
    },
    UpdateExpression: "set #name = :n, completed  = :c",
    ExpressionAttributeValues: {
      ":n": name,
      ":c": completed,
    },
    ReturnValues: "ALL_NEW",
  });
  const response = await docClient.send(command);
  return response;
};


// delete task
const deleteTask = async (id) => {
  const command = new DeleteCommand({
    TableName: "Task",
    Key: {
      id,
    },
  });
  const response = await docClient.send(command);
  return response;
};
