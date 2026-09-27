import navigationHtml from "./navigation.html?raw";

export default function Navigation() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: navigationHtml }}></div>
    </>
  );
}
