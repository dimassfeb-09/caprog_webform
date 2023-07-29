const Nav = () => {
    return (
        <>
            <div
                className="absolute h-16 w-full bg-gradient-to-r from-[#fb68fe] via-[#7ffffe] to-[#c0aaff] blur-3xl"></div>
            <nav
                className="sticky z-50 top-0 mb-3 flex items-center justify-center h-16 w-full backdrop-blur-md font-bold border-b">
                <div className="text-sm">
                    Pendaftaran Asisten dan Programmer Lab Psikologi UG
                </div>
            </nav>
        </>
    );
};

export default Nav;
