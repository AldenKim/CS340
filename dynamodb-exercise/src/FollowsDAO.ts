import {
    DeleteCommand,
  DynamoDBDocumentClient,
  GetCommand,
  PutCommand,
  UpdateCommand,
} from "@aws-sdk/lib-dynamodb";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { Follow } from "./Follow";

export class FollowsDAO {
  readonly tableName = "follows";
  readonly indexName = "follows_index";
  readonly followerAttr = "follower_handle";
  readonly followeeAttr = "followee_handle";
  readonly followerNameAttr = "follower_name";
  readonly followeeNameAttr = "followee_name";

  private readonly client = DynamoDBDocumentClient.from(new DynamoDBClient());

  public async putFollow(follow: Follow): Promise<void> {
    const params = {
      TableName: this.tableName,
      Item: {
        [this.followerAttr]: follow.follower_handle,
        [this.followerNameAttr]: follow.follower_name,
        [this.followeeAttr]: follow.followee_handle,
        [this.followeeNameAttr]: follow.followee_name,
      },
    };
    await this.client.send(new PutCommand(params));
  }

  public async getFollow(follow: Follow): Promise<Follow | undefined> {
    const params = {
      TableName: this.tableName,
      Key: {
        [this.followerAttr]: follow.follower_handle,
        [this.followeeAttr]: follow.followee_handle,
      },
    };

    const output = await this.client.send(new GetCommand(params));

    return output.Item == undefined
      ? undefined
      : new Follow(
          output.Item[this.followerAttr],
          output.Item[this.followerNameAttr],
          output.Item[this.followeeAttr],
          output.Item[this.followeeNameAttr]
        );
  }

  public async updateFollow(
    follow: Follow,
    newFollowerName: string,
    newFolloweeName: string
  ): Promise<void> {
    const params = {
      TableName: this.tableName,
      Key: {
        [this.followerAttr]: follow.follower_handle,
        [this.followeeAttr]: follow.followee_handle,
      },
      ExpressionAttributeValues: {
        ":fName": newFollowerName,
        ":feName": newFolloweeName,
      },
      UpdateExpression: "SET follower_name = :fName, followee_name = :feName",
    };
    await this.client.send(new UpdateCommand(params));
  }

  public async deleteFollow(follow: Follow): Promise<void> {
    const params = {
      TableName: this.tableName,
      Key: {
        [this.followerAttr]: follow.follower_handle,
        [this.followeeAttr]: follow.followee_handle,
      },
    };
    await this.client.send(new DeleteCommand(params));
  }
}
