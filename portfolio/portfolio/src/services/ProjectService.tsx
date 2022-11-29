class ProjectService {
    private readonly baseUrl = 'http://localhost:1337/api/'

    public async fetchProjects()
    {
        const projects = await fetch(`${this.baseUrl}projects?populate=*`)
            .then(response=>response.json())
            .then(data=>data.data);
        return projects;
    }

    public async fetchProjectById(id:Number)
    {
        const project = await fetch(`${this.baseUrl}projects/${id}?populate=*`)
            .then(response=>response.json())
            .then(data=>data.data);
        return project;
    }
}


export const projectService = new ProjectService();