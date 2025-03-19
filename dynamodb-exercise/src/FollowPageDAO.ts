import {
    DynamoDBDocumentClient,
    QueryCommand,
  } from "@aws-sdk/lib-dynamodb";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DataPage } from "./DataPage";
import { Follow } from "./Follow";

export class FollowPageDAO {
  readonly tableName = "follows";
  readonly indexName = "follows_index";
  readonly followerAttr = "follower_handle";
  readonly followeeAttr = "followee_handle";
  readonly followerNameAttr = "follower_name";
  readonly followeeNameAttr = "followee_name";

  private readonly client = DynamoDBDocumentClient.from(new DynamoDBClient());

  async getPageOfFollowees(
    followerHandle: string,
    pageSize: number,
    lastFolloweeHandle: string | undefined
  ): Promise<DataPage<Follow>> {
    const params: any = {
      TableName: this.tableName,
      KeyConditionExpression: `${this.followerAttr} = :followerHandle`,
      ExpressionAttributeValues: {
        ":followerHandle": followerHandle,
      },
      Limit: pageSize,
      ExclusiveStartKey: lastFolloweeHandle === undefined ? undefined :  {
        [this.followerAttr]: followerHandle,
        [this.followeeAttr]: lastFolloweeHandle,
      },
    };


    const items: Follow[] = [];
    const data  = await this.client.send(new QueryCommand(params));
    
    data.Items?.forEach((item) =>
      items.push(
        new Follow(
            item[this.followerAttr],
            item[this.followerNameAttr],
            item[this.followeeAttr],
            item[this.followeeNameAttr]
        )
      )
    );

    const hasMorePages = data.LastEvaluatedKey !== undefined;
    return new DataPage<Follow>(items, hasMorePages);
  }

  async getPageOfFollowers(
    followeeHandle: string,
    pageSize: number,
    lastFollowerHandle: string | undefined
  ): Promise<DataPage<Follow>> {
    const params: any = {
      TableName: this.tableName,
      IndexName: this.indexName,
      KeyConditionExpression: `${this.followeeAttr} = :followeeHandle`,
      ExpressionAttributeValues: {
        ":followeeHandle": followeeHandle,
      },
      Limit: pageSize,
      ExclusiveStartKey: lastFollowerHandle === undefined ? undefined :  {
        [this.followeeAttr]: followeeHandle,
        [this.followerAttr]: lastFollowerHandle,
      },
    };


    const items: Follow[] = [];
    const data  = await this.client.send(new QueryCommand(params));
    
    data.Items?.forEach((item) =>
      items.push(
        new Follow(
            item[this.followerAttr],
            item[this.followerNameAttr],
            item[this.followeeAttr],
            item[this.followeeNameAttr]
        )
      )
    );

    const hasMorePages = data.LastEvaluatedKey !== undefined;
    return new DataPage<Follow>(items, hasMorePages);
  }
}
