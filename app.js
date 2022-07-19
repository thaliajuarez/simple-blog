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
    comments: []
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
      "<div>" +
      '<h3><a href="javascript:viewPost(' +
      idx +
      ');"> Post #' +
      (idx + 1) +
      "</a></h3>" +
      "<p>" +
      postEntry.content +
      "</p>" +
      "<p><em> " +
      postEntry.comments.length + " Comments: </em></p><p>" +
      postEntry.comments +
      "</p>" +
      "<p> ****************************************************************** </p>" +
      "</div>";
  });
  document.getElementById("post-list").innerHTML = entries;
}

// VIEW - aka 'get post by id'
function viewPost(index) {

  Object.keys(null || {}); // what difference does this make?

  document.getElementById("content").value = testList[index].content;
  //document.getElementById("submit-btn").style.display="none";  // -- remove comment to prevent creating a new post!
  document.getElementById("comment-box").value = '';
  document.getElementById("comment-list").innerHTML = '';

  if (testList[index].comments.length == 0) {  // getComments(index); - What if comment array is empty?
    console.log("no comments for this post");
  } else {
    console.log("this post has " + testList[index].comments.length + " comments");
    console.log();

    let html = "";
    testList[index].comments.forEach(function (item) {
      html += "<li>" + item + "</li>";
    });
    document.getElementById("comment-list").innerHTML = html;
  }

  document.getElementById("comment-header").removeAttribute("hidden");

  document.getElementById("comment-box").removeAttribute("hidden");

  document.getElementById("comment-btn").removeAttribute("hidden");
  document.getElementById("comment-btn").onclick = function() {
    testList[index].comments.push(document.getElementById("comment-box").value);
    getPosts();
  }
}

// UPDATE
function editPost(index) {
  document.getElementById("content").value = postList[index].content;

  document.getElementById("submit-btn").innerHTML = "Edit Post";
  document.getElementById("submit-btn").onclick = function () {
    let commentList = postList[index].comments;
    commentList.push(document.getElementById("comment").value);
    // --- replace the current post ---
    const editedObject = {
      content: document.getElementById("content").value,
      comments: commentList,
      edited: true,
    };

    postList[index] = editedObject;
    document.getElementById("content").value = "";
    document.getElementById("comment").value = "";

    getPosts();
  };
}

// CREATE COMMENT
function createComment(index) {}

// READ COMMENT
function getComments(postObject) {
  //let entries = "";
  //postObject.comments.forEach(function(item) {
  //    entries += '<div><blockquote><p>' +
  //        item.comments + '</blockquote></p></div>';
  //});
  //document.getElementById('post-list').innerHTML = entries;
}

function TESTcreatePost() {
  var examplePost = document.getElementById("content").value;
  postList.push(examplePost);
  document.getElementById("content").value = "";

  const previousPosts = document.querySelector(".post-list");
  previousPosts.setAttribute("style", "padding: 10px; border: 1px solid;");

  const newPost = document.createElement("div");
  newPost.textContent = examplePost;

  const comment = document.createElement("input");
  comment.setAttribute("style", "padding: 5px;");
  comment.setAttribute("type", "text");

  const listOfComments = document.createElement("div");
  listOfComments.setAttribute("style", "background-color: light-gray;");
  listOfComments.setAttribute("id", "new-comment");

  const submitComment = document.createElement("button");
  submitComment.textContent = "Add Comment";
  submitComment.onclick = function () {
    commentList.push(comment.value);
    comment.value = "";
    showComments();
  };

  newPost.appendChild(listOfComments); // KEEP
  previousPosts.appendChild(comment); // KEEP
  previousPosts.insertBefore(newPost, comment); // KEEP
  previousPosts.appendChild(submitComment); // KEEP
}

function showComments() {
  var idx = "";
  commentList.forEach(function (item) {
    idx += "<li>" + item + "</li>";
  });
  document.getElementById("new-comment").innerHTML = "<ul>" + idx + "</ul>";
}
