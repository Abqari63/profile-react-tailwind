import { postDetails } from '../Data/content.json'

const posts = postDetails.posts
let totalPosts = postDetails.totalPosts

const Posts = () => {
    return (
        <div className="mt-12">
            <div className="flex justify-center items-center">
                <div className="post-count p-3 flex justify-center items-center font-bold text-xl text-blue-500 w-48 h-12 border-t-2 border-r-2 border-gray-200">
                    <h3>{totalPosts}</h3>
                </div>
                <div className="p-3 w-full h-12 border-b-2 border-gray-200"></div>
            </div>
            <div className="outer-container-posts flex flex-col">
                {posts.map((post) => {
                    return <div key={post.postID} className="px-5 py-10 flex flex-col gap-10 border-b-2 border-gray-200">
                        <div className="post-heading flex justify-between items-center font-extrabold text-2xl">
                            <h2>{post.postTitle}</h2>
                            <span className="text-2xl"><i className="fa-regular fa-thumbs-up flex justify-center items-center p-1 bg-yellow-600 text-white text-xs w-6 h-6 rounded-full"></i></span>
                        </div>
                        <div className="post-description">{post.postDescription}</div>
                        <div className="post-footer flex justify-between items-center">
                            <span className="post-signature font-semibold font-serif text-sm text-blue-500">{post.postSignature} <span className="text-black">by abqariabbas</span></span>
                            <span className="post-date font-semibold font-sans text-sm text-gray-400">{post.postDate}</span>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Posts
