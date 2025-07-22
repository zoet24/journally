import React from "react";
import "./App.css";
import JournalForm from "./JournalForm";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="text-center py-8">
        <h1 className="text-3xl font-bold">Journally</h1>
        <p className="text-gray-600 mt-2">Your daily journal app</p>
      </header>
      <main>
        <JournalForm />
      </main>
    </div>
  );
}

export default App;
