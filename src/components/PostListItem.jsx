import { Link } from "react-router-dom";
import Image from "./Image";

const PostListItem = () => {
    return (
        <div className="flex flex-col gap-8 xl:flex-row">
            {/* Image */}
            <div className="md:hidden xl:block xl:w-1/3 ">
                <Image src="postImg.jpeg" className="rounded-3xl object-cover" w="732"/>
            </div>
            {/* Details */}
            <div className="flex flex-col gap-4 xl:w-2/3">
                <Link to="/test" className="text-4xl font-semibold">
                    sjdbcjhbjh bjxb cbb jhsx bjhbxjk nsh hbjnxh bhxbjn jhcb jhbksj,dxn bmc bjxn jxbm vjhlsnd uibiolMXa,calkcn,byjv ulabdjd
                </Link>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <span>Written by: </span>
                    <Link to="/test" className="text-blue-500">John Doe</Link>
                    <span>on</span>
                    <Link to="/test" className="text-blue-500">Web Design</Link>
                    <span>2d ago</span>
                </div>
                <p>
                    zjhxvcbvyuij shvzx bnjksnx kbhfhb iunkxjc nchb ,xjcn kjnck nxln ,bfb idfnx kn,cbxcbh jv dkn on fiudbi fndxkjc ,bnhvb bjxkcnm kxjcb ifb ijnxk, fndk fjdf hxvcbvyuij shvzx bnjksnx kbhfhb iunkxjc nchb ,xjcn kjnck nxln ,bfb idfnx kn,cbxcbh jv dkn on fiudbi fndxkjc ,bnhvb bjxkcnm kxjcb ifb ijnxk, fndk fjdf 
                </p>
                <Link to="/test" className="underline text-blue-500 text-sm">Read more</Link>
            </div>
        </div>
    )
}

export default PostListItem;