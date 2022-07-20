var postList = [];

var testList = [
  {
    content: "Example post #1",
    comments: ["comment 1.1", "comment 1.2", "comment 1.3"],
  },
  {
    content: "Example post #2",
    comments: ["comment 2.1", "comment 2.2", "comment 2.3"],
  },
  {
    content: "Example post #3",
    comments: ["comment 3.1", "comment 3.2", "comment 3.3"],
  },
];

// CREATE POST
function createPost() {
  const postObject = {
    content: document.getElementById("content").value,
    comments: [],
  };
  testList.push(postObject);

  document.getElementById("content").value = "";
  getPosts();
}

// READ POST
function getPosts() {
  let entries = "";
  testList.forEach(function (postEntry, idx) {
    entries +=
      '<h3><a href="javascript:viewPost(' +
      idx +
      ');"> Post #' +
      (idx + 1) +
      "</a></h3>" +
      "<p>" +
      postEntry.content +
      "</p>" +
      "<p><em> " +
      postEntry.comments.length +
      " Comments: </em></p><p>" +
      postEntry.comments +
      '<script></script>'
      "</p>" +
      "<p> ****************************************************************** </p>";
  });
  document.getElementById("post-list").innerHTML = entries;
}

// VIEW - aka 'get post by id'
function viewPost(index) {
  Object.keys(null || {}); // what difference does this make?

  document.getElementById("content").value = testList[index].content;
  //document.getElementById("submit-btn").style.display="none";  // -- remove comment to prevent creating a new post!
  document.getElementById("comment-box").value = "";
  document.getElementById("comment-list").innerHTML = "";

  if (testList[index].comments.length == 0) {
    // getComments(index); - What if comment array is empty?
    console.log("no comments for this post");
  } else {
    console.log(
      "this post has " + testList[index].comments.length + " comments"
    );
    console.log();

    let html = "";
    testList[index].comments.forEach(function (item) {
      html += "<li>" + item + "</li>";
    });
    document.getElementById("comment-list").innerHTML = html;
  }

  document.getElementById("comment-header").removeAttribute("hidden");

  // Add comment
  document.getElementById("comment-box").removeAttribute("hidden");

  document.getElementById("comment-btn").removeAttribute("hidden");
  document.getElementById("comment-btn").onclick = function () {
    // Send to comment moderation function
    filterComment = document.getElementById("comment-box").value;
    bannedList = ["forbidden", "banned", "troll", "reject"];

    bannedList.forEach(function (word) {
      if (filterComment.includes(word)) {
        filterComment = "Rejected by moderator.";
      } else {}});

    testList[index].comments.push(filterComment);

    let html = "";
    testList[index].comments.forEach(function (item) {
      html += "<li>" + item + "</li>";
    });
    document.getElementById("comment-list").innerHTML = html;
    getPosts();
  };
}

// Passing parameters - why no work?
function moderate(_unfilteredComment) {
  bannedList = ["forbidden", "banned", "troll", "reject"];

  bannedList.forEach(function (word) {
    if (_unfilteredComment.includes(word)) {
      return "Rejected by moderator.";
    } else {
      return _unfilteredComment;
    }
  });
}
