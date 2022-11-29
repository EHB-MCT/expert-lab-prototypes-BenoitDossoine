class ProjectService {
    private readonly baseUrl = 'http://localhost:1337/api/'

    public async fetchProjects()
    {
        const categories = await fetch(`${this.baseUrl}projects?populate=*`)
            .then(response=>response.json())
            .then(data=>data.data)
        return categories;
    }
}


export const projectService = new ProjectService();