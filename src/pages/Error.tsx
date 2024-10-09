import { Helmet } from "react-helmet";

export default function Error() {
  return (
    <div>
      Error! Page not found
      <Helmet>
        <title> Error page Terminology Service </title>
        <meta
          name="description"
          content="Error page of the Terminology Service"
        />
      </Helmet>
    </div>
  );
}
