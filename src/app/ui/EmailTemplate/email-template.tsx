export const EmailTemplate = () => (
  <table
    width="100%"
    cellSpacing="0"
    cellPadding="0"
    style={{ margin: "0 auto", textAlign: "center", background: "#fafafa" }}
  >
    <tbody>
      <tr>
        <td style={{ textAlign: "center", padding: "20px" }}>
          <table align="center" style={{ margin: "0 auto" }}>
            <tr>
              <td align="center" valign="top">
                <a
                  href="https://www.modkimono.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://d1ubia13l7zsdh.cloudfront.net/email_logo.png"
                    alt="Mod Kimono Logo"
                    width="75"
                    height="60"
                    style={{ display: "block", margin: "0 auto" }}
                  />
                </a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td
          align="center"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;",
          }}
        >
          <table
            align="center"
            style={{
              maxWidth: "500px",
              width: "100%",
              padding: "30px",
              margin: "0 auto",
              borderRadius: "10px",
              background: "white",
            }}
          >
            <tr>
              <td align="left" style={{ fontSize: "16px", fontFamily: "Inter" }}>
                <p>
                  Thanks for joining the waitlist for ModKimono! We're thrilled
                  you're interested in being one of the first to experience our
                  modernised kimonos.
                </p>
                <p>
                  We're working hard to finalize the product and we'll keep you
                  updated on our progress along the way.
                </p>
                <p>
                  In the meantime, stay tuned for more exciting news! We'll be
                  in touch again soon with a specific date for when you can
                  expect to hear back from us.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td
          style={{
            fontSize: "9px",
            color: "#999999",
            paddingBottom: "15px",
            paddingTop: "30px",
          }}
        >
          Sent by ModKimono •{" "}
          <a
            href="https://modkimono.com"
            style={{ color: "#D95B31", textDecoration: "none" }}
          >
            Check Our Blog
          </a>{" "}
          •{" "}
          <a
            href="https://twitter.com/discord"
            style={{ color: "#D95B31", textDecoration: "none" }}
          >
            @ModKimono
          </a>
          <br />
          <br />
          514 E 82ND ST, New York, NY 10028, USA
          <br />
        </td>
      </tr>
    </tbody>
  </table>
);
