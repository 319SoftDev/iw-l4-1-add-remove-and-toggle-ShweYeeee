const heading = document.querySelector("#heading");
const subheading = document.querySelector("#subheading");

const changefontcolor = (e) => {
    e.target.classList.add("blue-text");
}

heading.addEventListener("click", changefontcolor);


subheading.addEventListener("click", changefontcolor);

const toggleblue = (e) => {
    e.target.classList.toggle("blue-text");
}
heading.addEventListener("dblclick", toggleblue);
subheading.addEventListener("dblclick", toggleblue);

const replybutton = document.querySelector("#reply-button");
const replymessage = document.querySelector("#reply-message");

const openreplymsg = () => {
    replymessage.classList.remove("hidden");
}

replybutton.addEventListener("click", openreplymsg);

const sendbutton = document.querySelector("#send-button");
const cancelbutton = document.querySelector("#cancel-button");

const closereplymsg = () => {
    replymessage.classList.add("hidden");
}

sendbutton.addEventListener("click", closereplymsg);
cancelbutton.addEventListener("click", closereplymsg);

const openbutton = document.querySelector("#open-button");
const inboxmessage = document.querySelector("#inbox-message");
const inbox = document.querySelector("#inbox");
const markread = document.querySelector("#mark-button");

const openmsg = () => {
    inbox.classList.add("is-read");
    inboxmessage.classList.remove("hidden");
    markread.classList.remove("hidden");
}

const markunread = () => {
    inbox.classList.remove("is-read");
    inboxmessage.classList.add("hidden");
    markread.classList.add("hidden");
    replymessage.classList.add("hidden");
}
openbutton.addEventListener("click", openmsg);
markread.addEventListener("click", markunread);

const close = document.querySelector("#close");

const closeinboxmsg = () => {
    inboxmessage.classList.add("hidden");
    replymessage.classList.add("hidden");
}

close.addEventListener("click", closeinboxmsg);

const checkbox = document.querySelector("#checkbox");
const actionbuttons = document.querySelector("#action-buttons");

const checkboxfunc = (e) => {
    inbox.classList.toggle("is-selected");
    actionbuttons.classList.toggle("hidden");
}

checkbox.addEventListener("click", checkboxfunc);


const meowbutton = document.querySelector("#meow");

const togglemeow = () => {
    meowbutton.classList.toggle("hidden");
}

subheading.addEventListener("click", togglemeow);

const deletemsg = document.querySelector("#delete-button");

const deletemessage = () => {
    inbox.classList.toggle("hidden");
    inboxmessage.classList.toggle("hidden");
    replymessage.classList.toggle("hidden");
    deletemsg.innerHTML = "undo deltetion";
    
} 

deletemsg.addEventListener("click", deletemessage,);

const markreadbutton = document.querySelector("#markread-button");

const markreadmessage = () => {
    inbox.classList.add("is-read");
    inboxmessage.classList.add("hidden");
    replymessage.classList.add("hidden");
    checkboxfunc();
    checkbox.checked = false;
    checkbox.disabled = true;
}
markreadbutton.addEventListener("click", markreadmessage);