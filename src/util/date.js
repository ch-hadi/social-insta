export function getTimeAgo(postDate) {
  const now = new Date();
  const postedAt = new Date(postDate);
  const timeElapsed = now - postedAt;

  // Define time intervals in milliseconds
  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;
  const month = 30 * day;
  const year = 12 * month;

  if (timeElapsed < minute) {
    return 'just now';
  } else if (timeElapsed < 2 * minute) {
    return '1 minute ago';
  } else if (timeElapsed < hour) {
    return `${Math.floor(timeElapsed / minute)} minutes ago`;
  } else if (timeElapsed < 2 * hour) {
    return '1 hour ago';
  } else if (timeElapsed < day) {
    return `${Math.floor(timeElapsed / hour)} hours ago`;
  } else if (timeElapsed < 2 * day) {
    return '1 day ago';
  } else if (timeElapsed < month) {
    return `${Math.floor(timeElapsed / day)} days ago`;
  } else if (timeElapsed < 2 * month) {
    return '1 month ago';
  } else if (timeElapsed < year) {
    return `${Math.floor(timeElapsed / month)} months ago`;
  } else if (timeElapsed < 2 * year) {
    return '1 year ago';
  } else {
    return `${Math.floor(timeElapsed / year)} years ago`;
  }
}

// Usage example:
// const postDate = '2023-08-05T12:30:00'; // Replace this with your post's date
// const timeAgo = getTimeAgo(postDate);
// console.log(timeAgo); // Output will be like "just now", "5 minutes ago", "1 hour ago", etc.
