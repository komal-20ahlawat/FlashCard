import {X} from "lucide-react";
import "../styles/FlashCardForm.css";
import {useRef} from "react"

function FlashCardForm ({showModal,onClose}) {
    const questionRef = useRef(null);
    const answerRef = useRef(null);
    function submitCard (e) {
        e.preventDefault()
        if (!questionRef.current.value || !answerRef.current.value) return;
        const card ={question: questionRef.current.value,
            answer:answerRef.current.value,
        };
        onAddFlashCard(card);
        onClose()
    }
    return (
        <>
        {showModal && (
        <div className="modal-overlay">
            <form className="flashcard-form">
                <button className="close-btn" type="button">
                <X sixe={26} strokeWidth={2.5}/>
                </button>

                <label>Questions</label>
                <input ref={questionRef} type="text" name="answer" />

                <label>Answers</label>
                <input ref={answerRefRef} type="text" name="answer" />

                <button type="submit">Add Flashcard</button>
            </form>
        </div>
    )}    
        </>
    );
}
export default FlashCardForm;