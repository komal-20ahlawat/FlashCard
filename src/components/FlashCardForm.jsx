import { X } from "lucide-react";
import { useRef,useEffect } from "react";
import "../styles/FlashCardForm.css";

function FlashCardForm({ onAddFlashCard, showModal, onClose }) {
  const questionRef = useRef(null);
  const answerRef = useRef(null);
  
  function submitCard(e) {
    e.preventDefault()
        if (!questionRef.current.value || !answerRef.current.value) return;
        const card ={question: questionRef.current.value,
            answer:answerRef.current.value,
        };
        onAddFlashCard(card);
        onClose()
  }
  useEffect(() => {
    if (showModal && questionRef.current) {
      questionRef.current.focus();
    }
  }, [showModal]);

  return (
    <>
      {showModal && (
        <div className="modal-overlay">
          <form className="flashcard-form">
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
