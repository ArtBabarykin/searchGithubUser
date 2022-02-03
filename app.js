//Init GitHub
const github = new GitHub();
//Init UI
const ui = new UI();
//Search Input
const searchUser = document.getElementById('searchUser');

//Search Input Event Listener
searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;
    //Validate if input is not empty
    if(userText !== ''){
        github.getUser(userText)
            .then(data => {
                if(data.profile.message === 'Not Found'){
                    //  Show alert
                    ui.showAlert('User not found', 'alert alert-danger');
                } else {
                    //Show profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos)
                    console.log(data);
                }
            });
    } else {
        //Clear profile
        ui.clearProfile();
    }
})