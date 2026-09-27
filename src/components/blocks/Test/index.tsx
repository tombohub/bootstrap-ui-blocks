import CopyButton from "../../CopyButton";
import buttonHtml from "./test.html?raw";

export default function Test() {
  return (
    <>
      <CopyButton text={buttonHtml} />
      {buttonHtml}
      <div dangerouslySetInnerHTML={{ __html: buttonHtml }}></div>
    </>
  );
}
