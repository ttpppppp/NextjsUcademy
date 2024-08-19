import {IconComment, IconExplore , IconOrder, IconPlay, IconStudy, IconUser} from "@/component/icons/";
import IconCart from "@/component/icons/IconCart";
import { TMenuItem } from "@/types";

export const menuItem : TMenuItem[] = [
    {
        url : "/",
        title : "Khám phá",
        icon : <IconPlay className = "size-5"/>
    },
    {
        url : "/study",
        title : "Khu vực học tập",
        icon : <IconExplore className = "size-5"/>
    },
    {
        url : "/manage/course",
        title : "Quản lý khóa học",
        icon : <IconCart className = "size-5"/>
    },
    {
        url : "/manage/member",
        title : "Quản lý thành viên",
        icon : <IconUser className = "size-5"/>
    },
    {
        url : "/manage/order",
        title : "Quản lý đơn hàng",
        icon : <IconOrder className = "size-5"/>
    },
    {
        url : "/manage/comment",
        title : "Quản lý bình luận",
        icon : <IconComment className = "size-5"/>
    },
];