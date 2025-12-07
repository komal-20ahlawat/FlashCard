import { X } from "lucide-react";
import { useRef } from "react";
import "../styles/FlashCardForm.css";

function FlashCardForm({ addFlashcard, showModal, onClose }) {
  const questionRef = useRef(null);
  const answerRef = useRef(null);
  
  function SubmitCard(e) {
    e.preventDefault();

    const question = questionRef.current.value;
    const answer = answerRef.current.value;

    if (!question || !answer) return;

    addFlashcard({ question, answer });

    questionRef.current.value = "";
    answerRef.current.value = "";

    onClose();
  }

  return (
    <>
      {showModal && (
        <div className="modal-overlay">
          <form className="flashcard-form" onSubmit={SubmitCard}>
            <button className="close-btn" type="button" onClick={onClose}>
              <X size={26} strokeWidth={2.5} />
            </button>

            <label>Question</label>
            <input ref={questionRef} type="text" name="question" />

            <label>Answer</label>
            <input ref={answerRef} type="text" name="answer" />

            <button type="submit" onSubmit={submitCard}>Add Flashcard</button>
          </form>
        </div>
      )}
    </>
  );
}

export default FlashCardForm;
