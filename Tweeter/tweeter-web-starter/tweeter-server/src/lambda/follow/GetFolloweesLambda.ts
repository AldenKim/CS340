import { PagedUserItemRequest, PagedUserItemResponse } from "tweeter-shared";
import { FollowService } from "../../model/service/FollowService";
import { DynamoDBDaoFactory } from "../../daos/factory/DynamoDBDaoFactory";

export const handler = async (
  request: PagedUserItemRequest
): Promise<PagedUserItemResponse> => {
  const followService = new FollowService(new DynamoDBDaoFactory());
  const [items, hasMore] = await followService.loadMoreFollowees(
    request.token,
    request.userAlias,
    request.pageSize,
    request.lastItem
  );

  return {
    success: true,
    message: null,
    items: items,
    hasMore: hasMore,
  };
};
