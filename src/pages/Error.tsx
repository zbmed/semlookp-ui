import { Helmet } from "react-helmet";

export default function Error() {
  return (
    <div>
      Error! Page not found
      <Helmet>
        <title> Error page &gt; SemLookP </title>
        <meta
          name="description"
          content="Error page of the semantic Lookup Service - SemLookP"
        />
      </Helmet>
    </div>
  );
}
