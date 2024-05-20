import React from "react";

function App(props) {
  function handleLinkClick(e) {
    // 기본 이벤트 동작 막기
    e.preventDefault();

    // 개발자가 원하는 동작 작성
  }

  function handleSubmitForm() {
    e.preventDefault();
    console.log("다른 동작");
  }

  return (
    <div>
      <a href="https://www.naver.com" onClick={handleLinkClick}>
        네이버
      </a>
      <hr />
      <form action="https://www.naver.com" onSubmit={handleSubmitForm}>
        <input type="text" />
        <button>전송</button>
      </form>
    </div>
  );
}

export default App;
