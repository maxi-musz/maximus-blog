import { Link } from "react-router-dom"
import Image from "./Image"

const FeaturedPosts = () => {
    return (
        <div className="mt-8 flex flex-col lg:flex-row gap-8">
            {/* First */}
            <div className="w-full lg:w-1/2 flex flex-col gap-82">
                {/* Image */}
                <Image src="featured1.jpeg" className="rounded-3xl object-cover w-full h-48 lg:h-64 lg:mb-8 md:mb4" />
                {/* Details */}
                <div className="flex items-center gap-4">
                    <h1 className="font-semibold lg:text-lg">01.</h1>
                    <Link className="text-teal-300 lg:text-lg">World Of Web Development</Link>
                    <span className="text-gray-500">2d ago</span>
                </div>
                {/* Title */}
                <Link to="/test" className="text-xl lg:text-3xl font-semibold lg:font-bold">
                    Loremmj hvjhxvc jsfdwv tfdtyfus tzvtxvjshb vvgcbjhs uvtycvybdzvdstud svbxtyvusbyd
                </Link>
            </div>

            {/* Others */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
                {/* Second */}
                <div className="lg:h-1/3 flex justify-between gap-4">
                    <Image 
                        src="featured2.jpeg" 
                        className="rounded-3xl object-cover w-1/3 aspect-video"
                    />
                    {/* Details and Title */}
                    <div className="w-2/3">
                        {/* Details */}
                        <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                            <h1 className="font-semibold">02.</h1>
                            <Link className="text-teal-300">Web Design</Link>
                            <span className="text-gray-500">2d ago</span>
                        </div>

                        {/* Title */}
                        <Link to="/test" className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">
                            ;lloasbjhdcbjkjkbsdjhbv bhsbdui hbvdcjhkxcs yuvzbc ubuizxcbnyv czubhzbc
                        </Link>
                    </div>
                </div> 

                {/* Placeholder Divs for More Posts */}
                {/* Second */}
                <div className="lg:h-1/3 flex justify-between gap-4">
                    <Image 
                        src="featured2.jpeg" 
                        className="rounded-3xl object-cover w-1/3 aspect-video"
                    />
                    {/* Details and Title */}
                    <div className="w-2/3">
                        {/* Details */}
                        <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                            <h1 className="font-semibold">02.</h1>
                            <Link className="text-teal-300">Web Design</Link>
                            <span className="text-gray-500">2d ago</span>
                        </div>

                        {/* Title */}
                        <Link to="/test" className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">
                            ;lloasbjhdcbjkjkbsdjhbv bhsbdui hbvdcjhkxcs yuvzbc ubuizxcbnyv czubhzbc
                        </Link>
                    </div>
                </div> 
                {/* Second */}
                <div className="lg:h-1/3 flex justify-between gap-4">
                    <Image 
                        src="featured2.jpeg" 
                        className="rounded-3xl object-cover w-1/3 aspect-video"
                    />
                    {/* Details and Title */}
                    <div className="w-2/3">
                        {/* Details */}
                        <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                            <h1 className="font-semibold">02.</h1>
                            <Link className="text-teal-300">Web Design</Link>
                            <span className="text-gray-500">2d ago</span>
                        </div>

                        {/* Title */}
                        <Link to="/test" className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">
                            ;lloasbjhdcbjkjkbsdjhbv bhsbdui hbvdcjhkxcs yuvzbc ubuizxcbnyv czubhzbc
                        </Link>
                    </div>
                </div> 
            </div>
        </div>
    );
}

export default FeaturedPosts;
