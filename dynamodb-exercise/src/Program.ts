import { Follow } from "./Follow";
import { FollowPageDAO } from "./FollowPageDAO";
import { FollowsDAO } from "./FollowsDAO";

const pageDao = new FollowPageDAO();

async function insertFollows() {
  const dao = new FollowsDAO();

  const followerHandle = "@FredFlintstone";
  const followerName = "Fred Flintstone";

  for (let i = 1; i <= 25; i++) {
    const followeeHandle = `@Followee${i}`;
    const followeeName = `Followee ${i}`;

    const follow = new Follow(
      followerHandle,
      followerName,
      followeeHandle,
      followeeName
    );
    await dao.putFollow(follow);
  }
}

async function insertFollowees() {
  const dao = new FollowsDAO();

  const followeeHandle = "@FredFlintstone";
  const followeeName = "Fred Flintstone";

  for (let i = 1; i <= 25; i++) {
    const followerHandle = `@Followee${i}`;
    const followerName = `Followee ${i}`;

    const follow = new Follow(
      followerHandle,
      followerName,
      followeeHandle,
      followeeName
    );
    await dao.putFollow(follow);
  }
}

async function getFollower() {
  const dao = new FollowsDAO();
  const followerHandle = "@FredFlintstone";
  const followeeHandle = "@Followee1";

  const tempFollow = new Follow(
    followerHandle,
    "followerName",
    followeeHandle,
    "followeeName"
  );

  const follow = await dao.getFollow(tempFollow);

  console.log(follow!.follower_handle);
  console.log(follow!.followee_handle);
  console.log(follow!.follower_name);
  console.log(follow!.followee_name);
}

async function updateFollower() {
  const dao = new FollowsDAO();
  const followerHandle = "@FredFlintstone";
  const followeeHandle = "@Followee1";

  const tempFollow = new Follow(
    followerHandle,
    "followerName",
    followeeHandle,
    "followeeName"
  );

  const newFollowerName = "AldenTest";
  const newFolloweeName = "AldenFolloweeTest";

  await dao.updateFollow(tempFollow, newFollowerName, newFolloweeName);
}

async function deleteFollow() {
  const dao = new FollowsDAO();
  const followerHandle = "@FredFlintstone";
  const followeeHandle = "@Followee1";

  const tempFollow = new Follow(
    followerHandle,
    "followerName",
    followeeHandle,
    "followeeName"
  );

  await dao.deleteFollow(tempFollow);
}

async function run() {
  await insertFollows();
  await insertFollowees();
  await getFollower();
  await updateFollower();
  console.log();
  await getFollower();
  await deleteFollow();

  console.log();

  console.log("List of Followees based on a Follower");
  let object = await pageDao.getPageOfFollowees(
    "@FredFlintstone",
    10,
    undefined
  );
  let items = object.values;
  let hasMorePages = object.hasMorePages;

  items.forEach((item) => {
    console.log("Follower handle:", item.follower_handle);
    console.log("Follower name:", item.follower_name);
    console.log("Followee handle:", item.followee_handle);
    console.log("Followee name:", item.followee_name);
    console.log("-------------");
  });

  console.log();

  if (hasMorePages) {
    console.log("List of Followees based on a Follower Page 2");
    items = (
      await pageDao.getPageOfFollowees("@FredFlintstone", 10, "@Followee19")
    ).values;

    items.forEach((item) => {
      console.log("Follower handle:", item.follower_handle);
      console.log("Follower name:", item.follower_name);
      console.log("Followee handle:", item.followee_handle);
      console.log("Followee name:", item.followee_name);
      console.log("-------------");
    });

    console.log();
  }

  console.log("List of Followers based on a Followee");
  items = (await pageDao.getPageOfFollowers("@FredFlintstone", 5, undefined))
    .values;

  items.forEach((item) => {
    console.log("Follower handle:", item.follower_handle);
    console.log("Follower name:", item.follower_name);
    console.log("Followee handle:", item.followee_handle);
    console.log("Followee name:", item.followee_name);
    console.log("-------------");
  });

  console.log();
}

run();
