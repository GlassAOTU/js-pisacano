export default function Informational() {
    return (
        // for the section background behind the cards
        <div className="relative w-full h-auto flex lg:px-5 px-0 bg-purple-200">
            {/* for the spacing at the sides of the card */}
            <div className="w-full h-auto flex flex-col items-center mt-0 mb-0 lg:mt-[-65px] lg:mb-[-65px]">
                {/* for the content of the card */}
                <div className="w-full h-auto max-w-[1360px] bg-white lg:shadow-xl lg:rounded-lg p-20 text-center space-y-10">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl pt-3">
                        Welcome to the <b>Joseph & Susan Pisacano Memorial Foundation</b>
                    </h1>
                    <p className="text-lg sm:text-xl lg:text-2xl">
                        We are a not-for-profit 501(C)(3) corporation
                        established in 2023. Our mission is to help graduating
                        students from Walt Whitman High School and other schools
                        who have lost a parent or are in the foster care system.
                        We provide financial assistance to students who need
                        help to attend higher education or who are timing out of
                        the foster care system.
                    </p>
                </div>
            </div>
        </div>
    );
}
