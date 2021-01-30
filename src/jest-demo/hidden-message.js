import React from 'react';

// 点击复选框 显示/隐藏 children
function HiddenMessage({ children }) {
  const [showMessage, setShowMessage] = React.useState(false);
  return (
    <section>
      <div>
        <label htmlFor="toggle">Show Message</label>
        <input
          type="checkbox"
          id="toggle"
          onChange={(e) => setShowMessage(e.target.checked) }
          checked={showMessage}
        />
        { showMessage ? children : null }
      </div>
    </section>
  );
}

export default HiddenMessage;
