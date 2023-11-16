const Nav = () => {
    return (
        <nav className="navbar p-2 flex flex-col sm:flex-row justify-center sm:justify-between items-center h-fit sm:h-20 gap-5 w-full bg-black">
            <div className="logo flex justify-center items-center gap-3 sm:ml-3">
                <div className="logo-symbol flex justify-center items-center pb-1 bg-white w-10 h-10 md:w-12 md:h-12 font-extralight rounded-full text-xl md:text-3xl">ttt</div>
                <div className="logo-name flex justify-center items-center gap-2 text-lg md:text-xl w-fit p-3 text-white font-bold font-sans border-l-2 border-yellow-500">
                    <span>S</span><span>T</span><span>O</span><span>R</span><span>I</span><span>E</span><span>S</span>
                </div>
            </div>
            <button className="course-button bg-yellow-500 hover:bg-yellow-600 duration-200 px-2 md:px-3 py-2 md:py-3 text-lg md:text-xl  font-bold rounded-md sm:mr-3">Courses</button>
        </nav>
    )
}

export default Nav
