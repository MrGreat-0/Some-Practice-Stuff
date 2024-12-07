let iStatus = document.querySelector(".card h3");
let btn = document.querySelector("#btn-container #add");

let heart = document.querySelector(".card i");

let body = document.querySelector("body");
let cursor = document.querySelector(".cursor");

let card = document.querySelector(".card");

let elem = document.querySelectorAll(".elem");

let insta = document.querySelectorAll(".insta");
let fullScr = document.querySelector(".full-scr");
let stories = document.querySelector(".stories");


let flag = 0;
btn.addEventListener("click", function () {
    if (flag == 0) {
        iStatus.innerHTML = "lol...";
        iStatus.style.color = "green";
        btn.innerHTML = "Remove";
        btn.style.backgroundColor = "#dadada";
        btn.style.color = "#000";
        flag = 1;
    } else {
        iStatus.innerHTML = "Blah...blah...";
        iStatus.style.color = "red";
        btn.innerHTML = "Add Friend";
        btn.style.backgroundColor = "cadetblue";
        btn.style.color = "#fff";
        flag = 0;
    }
});

card.addEventListener("dblclick", function () {
    heart.style.opacity = 0.8;
    heart.style.transform = "translate(-50%,-50%) scale(1)";
    setTimeout(function () {
        heart.style.opacity = 0;
    }, 700);
    setTimeout(function () {
        heart.style.transform = "translate(-50%,-50%) scale(0)";
    }, 701);
});

let isDragging = false;
function cursorMoving() {
    body.addEventListener("mouseleave", function (event) {
        cursor.style.opacity = 0;
    });

    body.addEventListener("mouseenter", function (event) {
        cursor.style.opacity = 1;
    });

    body.addEventListener("mousemove", function (event) {
        if (!isDragging) {
            cursor.style.left = event.pageX + "px";
            cursor.style.top = event.pageY + "px";
        }
    });

    body.addEventListener("mousedown", function (event) {
        isDragging = true;
    });

    body.addEventListener("mouseup", function (event) {
        isDragging = false;
    });
};


function movingPictures() {

    elem.forEach(function (val) {

        val.addEventListener("mouseenter", function () {
            val.childNodes[3].style.opacity = 1;
        });

        val.addEventListener("mouseleave", function () {
            val.childNodes[3].style.opacity = 0;
        });

        val.addEventListener('mousemove', function (event) {

            // Get the bounding rectangle of the parent element
            const rect = val.getBoundingClientRect().top;

            // Calculate the cursor's position relative to the parent element
            const offsetX = event.clientX;
            const offsetY = event.clientY - rect;

            // console.log(`Cursor Position - X: ${offsetX}, Y: ${offsetY}`);

            // Apply the offset to the image
            val.querySelector('img').style.left = offsetX + 'px';
            val.querySelector('img').style.top = offsetY + 'px';

        });

    });

};


let data = [

    {
        dp: "https://images.unsplash.com/photo-1468112014733-deb9e1f8ddd2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1467632499275-7a693a761056?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    {
        dp: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    {
        dp: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1462804993656-fac4ff489837?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    {
        dp: "https://images.unsplash.com/photo-1514993805013-c428d7f63ad4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    {
        dp: "https://images.unsplash.com/photo-1656432606161-41c3071950ca?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1656523267493-31b9b2cfdc47?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }

];

let createStory = () => {

    let clutter = "";
    data.forEach((elem, ind) => {
        clutter += `     <div class="story">
                        <img id="${ind}" src="${elem.dp}" alt="">
                    </div>`;
    });
    stories.innerHTML = clutter;

    stories.addEventListener('click', (dets) => {
        if (dets.target.tagName === 'IMG') {
            fullScr.style.display = "block";
            fullScr.style.backgroundImage = `url(${data[dets.target.id].story})`;
            setTimeout(() => {
                fullScr.style.display = "none";
            }, 2000);
        } else {
            console.log("Clicked outside of an image");
        }
    });

}


function anime() {
    let angle = 0;

    function animate() {
        angle += 1;
        document.querySelector('.rect').style.transform = `rotate(${angle}deg)`;
        document.querySelector('.rect2').style.transform = `translate(-50%, -50%) rotate(${-angle}deg)`;
    }
    // Update animation every 16.65 milliseconds (roughly 60 frames per second)
    setInterval(animate, 16.65);

}


cursorMoving();
movingPictures();
createStory();
anime();


//-------------below this just rough work--------------//
const makeTry = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true;
        if (success) {
            resolve('Operation successful!');
        } else {
            reject('Operation failed.');
        }
    }, 1000);
});

// console.log(makeTry);


// A function that accepts a callback function as an argument
function fetchData(callback) {
    // Simulate a delay using setTimeout
    setTimeout(() => {
        const data = "Hello, World!";
        // Call the callback function and pass the data to it
        callback(data);
    }, 1000);
}

// Define a callback function
function processData(data) {
    console.log("Data received:", data);
}

// Call fetchData and pass processData as the callback
// fetchData(processData);