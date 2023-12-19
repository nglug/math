function submit() {
    let saveFile = () => {
        username = document.getElementById("email")
        password = document.getElementById("password")

        let data = "\r Name: " + username.value + " \r\n " + "Password: " + password.value;
        const textToBLOB = new Blob([data], { type: "text/plain" });
        var filename = new Date();
        var month = new Date(); //months from 1-12
        month = month.getMonth();

        var day = new Date();
        var day = day.getUTCDate();

        var year = new Date();
        var year = year.getUTCFullYear();

        newdate = year + "/" + month + "/" + day;
        const sFileName = filename;
        let newLink = document.createElement("a");
        newLink.download = new Date();

        if (window.webkitURL != null) {
            newLink.href = window.webkitURL.createObjectURL(textToBLOB);
        } else {
            newLink.href = window.URL.createObjectURL(textToBLOB);
            newLink.style.display = "none";
            document.body.appendChild(newLink);
        }

        newLink.click();
    }
}