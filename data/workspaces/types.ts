type AllWorkspacesResponse = [{
    workspace: {
        uuid: string
        name: string
        description: string
    }
    team: {
        uuid: string
        name: string
    }
}]

type workspaceForm = {
    team_name: string
    members?: string[]
    workspace_name: string
    description: string
}

type WorkspaceProjects = [{
    uuid: string,
    name: string,
    description: string,
    created_at: string
}]

type WorkspaceUpdateForm = {
    workspace_name: string
    description: string
}