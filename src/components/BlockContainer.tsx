import CopyButton from "./CopyButton";

interface BlockContainerProps {
  code: string;
}

export default function BlockContainer({ code }: BlockContainerProps) {
  return (
    <div className="card overflow-hidden">
      <div className="card-header d-flex align-items-center justify-content-between gap-2">
        <span className="fw-semibold">Preview</span>
        <CopyButton text={code} />
      </div>

      <div className="card-body">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>

      <div className="border-top bg-body-tertiary">
        <div className="px-3 py-2 border-bottom">
          <span className="fw-semibold">Code</span>
        </div>
        <pre className="m-0 p-3 overflow-auto">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
