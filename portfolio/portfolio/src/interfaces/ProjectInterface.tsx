interface Project {
    id: Number,
    attributes: {
        createdAt: string,
        demo: object,
        description: string,
        link: string,
        name: string,
        project_categories: object,
        publishedAt: string,
        repository: string,
        soundtrack: {
            data: {
                id: Number,
                attributes: {
                    url: string
                }
            }
        },
        thumbnail: {
            data: {
                id: Number,
                attributes: {
                    url: string
                }
            }
        },
        updatedAt: string
    }
}

export default Project;