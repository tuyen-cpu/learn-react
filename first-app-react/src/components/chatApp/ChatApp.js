import React, { useEffect, useState } from "react";

const lessons = [
  { id: 1, name: "Lesson 1" },
  { id: 2, name: "Lesson 2" },
  { id: 3, name: "Lesson 3" },
];
function ChatApp() {
  const [lessonId, setLessonId] = useState(1);
  useEffect(() => {
    const handleComments = ({ detail }) => {
      console.log(detail);
    };
    window.addEventListener(`lesson-${lessonId}`, handleComments);
    return () => {
      window.removeEventListener(`lesson-${lessonId}`, handleComments);
    };
  }, [lessonId]);
  return (
    <div>
      <ul>
        {lessons.map((lesson) => (
          <li
            key={lesson.id}
            style={{
              color: lesson.id === lessonId ? "red" : "#333",
              cursor: "pointer",
              padding: "10px",
            }}
            onClick={() => setLessonId(lesson.id)}
          >
            {lesson.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChatApp;
