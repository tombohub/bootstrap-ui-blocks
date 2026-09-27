import { useState } from "react";

type CopyButtonProps = {
  /**
   * text to be copied to the clipboard
   */
  text: string;
};

/**
 * Button which copies to clipboard text passed as a prop
 */
export default function CopyButton({ text }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  async function handleCopy() {
    await navigator.clipboard.writeText(text);
    setCopied(true);

    window.setTimeout(() => {
      setCopied(false);
    }, 1500);
  }

  return (
    <>
      <button
        className={`btn btn-sm ${copied ? "btn-success" : "btn-outline-secondary"}`}
        onClick={handleCopy}
      >
        <i className={`bi ${copied ? "bi-check" : "bi-clipboard"}`}></i>
        {copied ? "Copied" : "Copy"}
      </button>
    </>
  );
}
