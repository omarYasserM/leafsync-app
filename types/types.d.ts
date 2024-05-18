type UserData = {
    name: string
    avatar: string
    email: string

}
type Project = {
    name: string
    description: string
    owner: UserData
    date: string
    autherizedMembers: UserData[]   
}