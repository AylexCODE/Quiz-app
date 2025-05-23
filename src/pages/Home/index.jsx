import React, { useState } from 'react';

import HomeStyle from './index.module.css';

import LoadingScreen from '../../components/Loader/LoadingScreen';
import Border from '../../components/Border.module.css';
import Nav from '../../components/HeaderNav';
import MultipleChoiceIcon from '../../assets/icons/MultipleChoice';
import TruthAndLieIcon from '../../assets/icons/TruthAndLie';
import EnumerationIcon from '../../assets/icons/Enumeration';
import TrueOrFalseIcon from '../../assets/icons/TrueOrFalse';
import ArrowLeftIcon from '../../assets/icons/ArrowLeft';
import JavaIcon from '../../assets/icons/JavaIcon';

import cookieFunctions from '../../features/cookie/cookie_manager';
import { useNavigate, useLocation } from 'react-router-dom';

function Home(){
    const [isLoading, setIsLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState("");
    const [progLanguage, setProgLanguage] = useState("");

    const userInfo = useLocation();
    const navigate = useNavigate();
    
    async function isLoggedIn(){
        let savedUser = await cookieFunctions.GetCookie();
        
        setTimeout(() => {
            if(!savedUser){
                savedUser = userInfo.state;
                if(savedUser){
                    setCurrentUser(savedUser);
                    setIsLoading(false);
                }else{
                    navigate("/Login", { replace: true, state: "FromHome" });
                }
            }else{
                setCurrentUser(savedUser);
                setIsLoading(false);
            }
        }, 2000);
    }

    isLoggedIn();

    return (
        <main>
        {isLoading === false ? (
            <>
            <Nav name_initial={currentUser} />
            <div className={HomeStyle.optionsInfo}>
                <p>Step {progLanguage === "" ? "1" : "2"}/2: {progLanguage}</p>
                <button className={Border.noDesignButton} onClick={() => setProgLanguage("")}>
                    {progLanguage === "" ? null : (
                        <ArrowLeftIcon />
                    )}
                </button>
            </div>
            <div className={HomeStyle.wrapper}>
                {progLanguage === "" ? (
                    <>
                    <span>
                        <button className={Border.buttonBorder} onClick={() => setProgLanguage("Java")}>
                            <div className={HomeStyle.placeholderIcon}><JavaIcon /></div>
                            <p>Java</p>
                        </button>
                    </span>
                    <span>
                        <button className={Border.buttonBorder} onClick={() => setProgLanguage("C")}>
                            <div className={HomeStyle.placeholderIcon}></div>
                            <p>C</p>
                        </button>
                    </span>
                    <span>
                        <button className={Border.buttonBorder} onClick={() => setProgLanguage("MySQL")}>
                            <div className={HomeStyle.placeholderIcon}></div>
                            <p>MySQL</p>
                        </button>
                    </span>
                </> 
                ) : (
                    <>
                    <button className={Border.buttonBorder} onClick={() => navigate("/Quiz", { replace: true, state: "MultipleChoice" })}>
                        <MultipleChoiceIcon />
                        <p>Multiple Choice</p>
                        <span>
                            Everyones favorite type of test.
                        </span>
                    </button>
                    <button className={Border.buttonBorder} onClick={() => navigate("/Quiz", { replace: true, state: "TruthAndLie" })}>
                        <TruthAndLieIcon />
                        <p>2 Truths 1 Lie</p>
                        <span>
                            Identify which one is a lie.
                        </span>
                    </button>
                    <button className={Border.buttonBorder} onClick={() => navigate("/Quiz", { replace: true, state: "Enumeration" })}>
                    <EnumerationIcon />
                        <p>Enumeration</p>
                        <span>
                            Specify the expected number of answers.
                        </span>
                    </button>
                    <button className={Border.buttonBorder} onClick={() => navigate("/Quiz", { replace: true })}>
                        <TrueOrFalseIcon />
                        <p>True or False</p>
                        <span>
                            Determine whether a statement is correct.
                        </span>
                    </button>
                    </>
                )}
            </div>
            </>
        ) : (
            <LoadingScreen />
        )}
        </main>
    );
}

export default Home;
