const useProjects = () => {
    
    const projects: Project[] = [
        {
            name: 'Project X',
            description: 'Project X is so cool',
            owner: { name: 'Omar Yasser', avatar: 'https://randomuser.me/api/port', email: 'Omaryasser.cs@gmail.com' },
            date: new Date().toLocaleDateString(),
            autherizedMembers: [
                { name: 'Hamed Ahmed', avatar: 'https://randomuser.me/api/port', email: 'Omaryasser.cs@gmail.com' },
                { name: 'Abdo', avatar: 'https://randomuser.me/api/port', email: 'Omaryasser.cs@gmail.com' },
            ]
        },
        {
            name: 'Project Y',
            description: 'Project Y is so cool',
            owner: { name: 'Omar Yasser', avatar: 'https://randomuser.me/api/port', email: 'Omaryasser.cs@gmail.com' },
            date: new Date().toLocaleDateString(),
            autherizedMembers: [
                { name: 'Hamed Ahmed', avatar: 'https://randomuser.me/api/port', email: 'Omaryasser.cs@gmail.com' },
                { name: 'Abdo', avatar: 'https://randomuser.me/api/port', email: 'Omaryasser.cs@gmail.com' },
            ]
        },
        {
            name: 'Project Z',
            description: 'Project Z is so cool',
            owner: { name: 'Hamed Ahmed', avatar: 'https://randomuser.me/api/port', email: 'Omaryasser.cs@gmail.com' },
            date: new Date().toLocaleDateString(),
            autherizedMembers: [
                { name: 'Hamed Ahmed', avatar: 'https://randomuser.me/api/port', email: 'Omaryasser.cs@gmail.com' },
                { name: 'Abdo', avatar: 'https://randomuser.me/api/port', email: 'Omaryasser.cs@gmail.com' },
            ]
        },
    ]

    return projects
}

export default useProjects