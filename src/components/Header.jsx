import logo from "../assets/quiz-logo.png";
export default function Header(){
    return(
        <header className="text-center my-6 text-[1.6rem] md:text-4xl">
            <img className=" md:w-18 md:h-18 w-11 my-3 mx-auto" src={logo} alt="" />
            <h1>ReactQuiz</h1>
        </header>
    )
}