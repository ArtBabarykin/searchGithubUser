class GitHub {
    constructor(){
        //Hardcoded for educational purpose. Not for production usage.
        this.client_id = '51be10bdf5287a44c4c1';
        this.client_secret = '7d94d02ab6cbe4ae935b3d3d215598ee536ff42e';
        this.repos_count = 5;
        this.repos_sort = 'created: asc'
    }
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const profile = await profileResponse.json();
        const repos= await repoResponse.json();

        return {profile: profile, repos: repos};
    }
}