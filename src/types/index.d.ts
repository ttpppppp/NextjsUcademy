type TMenuItem = {
    url : string , 
    title : string ,
    icon : React.ReactNode
}
type TActiveLinkProps = {
    url: string;
    children: React.ReactNode;
}
type TcreateUserParam = {
    clerkId : string,
    username : string,
    email : string,
    name ?: string,
    avatar ?: string
}
export {TMenuItem ,  TActiveLinkProps , TcreateUserParam}