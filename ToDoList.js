let list = [];
let countt = 0;
let count = 0;
let msgContainer = document.querySelector(".msg");
let NewList = document.querySelector(".newlist");
let day = document.querySelector(".dateTime");


let date = new Date;
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let calender = days[date.getDay()]+","+" "+date.toLocaleDateString();
day.innerText = calender;
console.log(calender);

function AddTask() {
    let text = document.querySelector("#Text").value;
    console.log("task entered by user:", text);
    if (text !== "") {
        let category = document.querySelector(".category").value;
        console.log("category choosen by user:", category)

        if (category === "personal" || category === "work" || category === "study" || category === "fitness" || category === "finance") {
            list.push(text);
            console.log("The list generated is:", list);

            let taskBox = document.createElement("div");
            taskBox.classList.add("taskBox");

            let icon = document.createElement("input");
            icon.id = "select";
            icon.type = "checkbox";
            icon.classList.add("tasklist");

            icon.onclick = () => {

                if (icon.checked) {
                    countt++;
                    console.log("The completed task number is:", countt);
                }
                else {
                    countt--;
                    console.log("The completed task number is:", countt);
                }


                if (count === countt && count !== 0) {
                    msgContainer.classList.remove("hide");
                    msgContainer.innerText = "Nothing left to chase, just calm in place";

                    NewList.classList.remove("hide");
                }
            }

            let taskItem = document.createElement("span");
            taskItem.innerText = text;
            taskItem.classList.add("taskitem");

            let type = document.createElement("span");
            type.innerText = category;
            type.classList.add("taskcategory");

            let remove = document.createElement("i");
            remove.classList.add("fa-solid", "fa-trash");

            remove.onclick = () => {

                taskBox.remove();
                list.pop();
                count--;
                console.log("number of items remaining in list after removal of task is:", list.length);
                console.log("Task removed");
            }

            taskBox.appendChild(icon);
            taskBox.appendChild(taskItem);
            taskBox.appendChild(type);
            taskBox.appendChild(remove);

            document.getElementById("tasklist").appendChild(taskBox);

            document.querySelector("#Text").value = "";
            document.querySelector(".category").value = "";

            count = list.length;
            console.log("Number of items in the list are:", count);

        }

        else {
            alert("Please Choose The Category");
        }
    }

    else {
        alert("Please Enter Some Task");
    }
}

NewList.onclick = () => {
    list = [];
    countt = 0;
    count = 0;
    msgContainer.classList.add("hide");
    NewList.classList.add("hide");
    document.getElementById("tasklist").innerHTML = "";
}