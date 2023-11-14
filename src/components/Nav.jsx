const Nav = () => {
    return (
        <nav className="navbar p-2 flex flex-col sm:flex-row justify-center sm:justify-between items-center h-fit sm:h-20 gap-5 w-full bg-black">
            <div className="logo flex justify-center items-center gap-3 sm:ml-3">
                <div className="logo-symbol flex justify-center items-center pb-1 bg-white w-12 h-12 font-extralight rounded-full text-3xl">ttt</div>
                <div className="logo-name flex justify-center items-center gap-2 text-lg w-fit p-3 text-white font-bold font-sans border-l-2 border-yellow-500">
                    <span>S</span><span>T</span><span>O</span><span>R</span><span>I</span><span>E</span><span>S</span>
                </div>
            </div>
            <button className="course-button bg-yellow-500 hover:bg-yellow-600 duration-200 px-3 text-xl py-3 font-bold rounded-lg sm:mr-3">Courses</button>
        </nav>
    )
}

export default Nav
