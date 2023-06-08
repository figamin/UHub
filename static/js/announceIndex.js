$.getJSON('https://umass.ch/uhub/res/2.json', function(data) {
    let i = data.posts.length - 1;
    while (data.posts[i].signedRole !== "Admin")
    {
        i -= 1;
    }
    let d = new Date(data.posts[i].creation)
    /*let subj = data.posts[i].subject;
    if (subj == null)
    {
    document.getElementById("annoHeader").innerText = data.posts[i].name + " on "
    + d.toLocaleDateString() + " at " + d.toLocaleTimeString();
    }
    else*/
    document.getElementById("annoTitle").innerHTML = "<b>" + data.posts[i].subject + "</b><span style='float:right'>" + "by " + data.posts[i].name + " on " + d.toLocaleDateString() + " at " + d.toLocaleTimeString() + "</span>";
    //document.getElementById("annoSubtitle").innerText = ;
    if (data.posts[i].message.length > 600) {
        document.getElementById("annoMessage").innerText = data.posts[i].message.substring(0, 600) + "...";
    }
    else {
        document.getElementById("annoMessage").innerText = data.posts[i].message;
    }
    if(data.posts[i].files.length) {
        document.getElementById("annoImage").src = data.posts[i].files[0].path;
        document.getElementById("annoImage").title = data.posts[i].files[0].originalName;
    }
    else {
        document.getElementById("annoImage").hidden = "hidden"
    }
    document.getElementById("annoLink").href = "https://umass.ch/uhub/res/2.html#" + data.posts[i].postId;
    document.getElementById("annoLink").innerText = "Discuss..."
});
