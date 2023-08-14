import moment from "moment-timezone";

// co can timezone ko nhi
export const convertToRelativeTime = (unixTimestamp) => {
  const currentTime = moment();
  const postTime = moment.unix(unixTimestamp);
  const timeDifference = currentTime.diff(postTime, "seconds");

  if (timeDifference < 60) {
    return "Just now";
  } else if (timeDifference < 3600) {
    return `${Math.floor(timeDifference / 60)} mins ago`;
  } else if (timeDifference < 86400) {
    return `${Math.floor(timeDifference / 3600)} hours ago`;
  } else if (timeDifference < 2592000) {
    return `${Math.floor(timeDifference / 86400)} days ago`;
  } else {
    return postTime.format("MMM D");
  }
};
