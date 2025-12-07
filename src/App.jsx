import { useState } from "react";
import "./App.css";
import FlashCardForm from "./components/FlashCardForm";
import FlashCard from "./components/FlashCard";
import { Plus } from "lucide-react";

function App() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [flashCards, setFlashCards] = useState([]);
  function addFlashcard(card) {
    const lastId = flashCards.length > 0 ? flashCards[flashCards.length-1].id : -1;
    const newId = lastId + 1
    setFlashCards(prev => [...prev,{id: newId, ...card}]);
  }


  function delFlashcard(id) {
    setFlashCards((prev) => prev.filter((item) => item.id !== id));
  }

  function toggleModal() {
    setShowAddModal((prev) => (!prev));
  }

  return (
    <>
      <nav>
        <h1 className="nav-title">Flashcard App</h1>
        <button onClick={toggleModal} id="add-button">
          <Plus />
        </button>
      </nav>
      <div>
        <FlashCardForm
          onAddFlashcard={addFlashcard}
          showAddModal={showAddModal}
          onClose={toggleModal}
        />

        <div className="flashcard-container">
          {flashCards?.map((item) => {
            return (
              <FlashCard
                key={item.id}
                id={item.id}
                question={item.question}
                answer={item.answer}
                onDelete={delFlashcard}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;