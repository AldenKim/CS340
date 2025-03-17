import { Follow } from "./Follow";
import { FollowsDAO } from "./FollowsDAO";

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
  await getFollower();
  await deleteFollow();
}

run();
