import { useState } from 'react';
import './ShareButton.css';

interface ShareButtonProps {
  shortId: string;
}

export default function ShareButton({ shortId }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const shareUrl = `${window.location.origin}/result?id=${shortId}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="share-button-container">
      <button
        className={`share-button ${copied ? 'copied' : ''}`}
        onClick={handleCopy}
        title={shareUrl}
      >
        {copied ? '✓ 已复制' : '分享结果'}
      </button>
      <p className="share-hint">分享你的MBTI结果，让朋友也来测试吧！</p>
    </div>
  );
}
