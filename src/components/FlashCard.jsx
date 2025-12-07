import {Trash2} from  "lucide-react";
import "../styles/FlashCard.css";

function FlashCard ({id, question, answer,onDel}) {
    return (
        <div className = "flashcard-box">
            <button className ="delete-btn">
                onClick={() => {
                    onDel(id);
                }}
                <Trash2 size={18} strokeWidth={2.5} />
            </button>

            <div className="flashcard">
                <div className="question">
                    <p>{question}</p>
                </div>
                <div className="answer">
                    <p>{answer}</p>
                </div>
            </div>
        </div>
    );
}

export default FlashCard