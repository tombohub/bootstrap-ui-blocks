// @ts-expect-error react-syntax-highlighter does not ship bundled types.
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// @ts-expect-error react-syntax-highlighter styles do not ship bundled types.
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyButton from "./CopyButton";

interface BlockContainerProps {
  code: string;
}

export default function BlockContainer({ code }: BlockContainerProps) {
  return (
    <div className="card overflow-hidden">
      <div className="card-header d-flex align-items-center justify-content-between gap-2">
        <span className="fw-semibold">Preview</span>
      </div>

      <div className="card-body">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>

      <div className="border-top bg-body-tertiary">
        <div className="px-3 py-2 border-bottom d-flex align-items-center justify-content-between gap-2">
          <span className="fw-semibold">Code</span>
          <CopyButton text={code} />
        </div>
        <SyntaxHighlighter
          language="html"
          style={oneLight}
          customStyle={{
            margin: 0,
            padding: "1rem",
            background: "transparent",
          }}
          wrapLongLines
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
