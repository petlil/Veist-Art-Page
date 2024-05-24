
function loadPostData(projectName, feedPosition) {
    document.addEventListener("DOMContentLoaded", function () {
        fetch('data.json')
            .then(response => response.json())
            .then(data => {

                // INFO BAR -------------------------
                const authorDisplay = document.getElementsByClassName("author_name");
                const titleDisplay = document.getElementsByClassName("artwork_name");
                const descriptionDisplay = document.getElementsByClassName("work_description");

                // Create HTML elements to display the JSON data, then add them to DOM
                const authorElement = document.createElement("p");
                authorElement.textContent = "by " + findProperty(data, [projectName, "author"]);

                const titleElement = document.createElement("h1");
                titleElement.textContent = findProperty(data, [projectName, "title"]);

                const descriptionElement = document.createElement("p");
                descriptionElement.textContent = findProperty(data, [projectName, "description"]);


                // add elements to DOM
                authorDisplay[feedPosition].append(authorElement);
                titleDisplay[feedPosition].append(titleElement);
                descriptionDisplay[feedPosition].append(descriptionElement);


                // IMAGES ----------------------------
                const mainImageDisplay = document.getElementsByClassName("main_image");
                const mainImageElement = document.createElement("img");
                mainImageElement.src = "data/" + projectName + "/main.png";
                mainImageDisplay[feedPosition].append(mainImageElement);

                const subImageDisplay = document.getElementsByClassName("sub_img");
                const subImageElements = [];

                for (let i = 0; i < 4; i++) {
                    subImageElements.push(document.createElement("img"));
                    subImageElements[i].src = "data/" + projectName + "/sub_images/" + (i+1) + ".png";
                    subImageDisplay[(feedPosition*4) + i].append(subImageElements[i]);
                }

                const profileImageDisplay = document.getElementsByClassName("profile_img");
                const profileImageElement = document.createElement("img");
                profileImageElement.src = "data/" + projectName + "/profile_image.png";
                profileImageDisplay[feedPosition].append(profileImageElement);

            })
            .catch(error => console.error("Error fetching JSON data:", error));
    });

}


// taken from Christian at:
// https://stackoverflow.com/questions/9463233/how-to-access-nested-json-data
function findProperty(obj, prop, defval){
    if (typeof defval == 'undefined') defval = null;
    for (var i = 0; i < prop.length; i++) {
        if(typeof obj[prop[i]] == 'undefined')
            return defval;
        obj = obj[prop[i]];
    }
    return obj;
}