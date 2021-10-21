var textList = document.getElementById("textList")

function getTask() {

    $.get("https://immense-plateau-68535.herokuapp.com/list", function(data) {
        for (let i = 0; i < data.data.length; i++) {
            var getTask = document.createElement("div")
            getTask.classList.add("card")
            getTask.classList.add("text-white")
            getTask.classList.add("bg-primary")
            getTask.classList.add("mb-3")
            getTask.classList.add("card-body")
            getTask.innerHTML = data.data[i]
            textList.appendChild(getTask)
        }
    });

}


function newTask() {
    let addTask = document.getElementById("addtask").value;
    $.post("https://immense-plateau-68535.herokuapp.com/add", {
        todoitem: addTask + " - Enrique"
    }, function update() { location.reload(true); });

}
getTask()