import { Circle } from "better-react-spinkit";

function Loading() {
  return (
    <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div>
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pinclipart.com%2Fpicdir%2Fbig%2F194-1947602_whatsapp-logo-transparent-png-whatsapp-logo-vector-black.png&f=1&nofb=1"
          height={200}
          style={{
            marginBottom: 10,
          }}
        />
        <Circle color="black" size={60} />
      </div>
    </center>
  );
}

export default Loading;
