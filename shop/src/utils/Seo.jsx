import { Helmet } from "react-helmet";

export const Seo = ({pageTitle}) => {
  return (
    <>
      <Helmet>
        {" "}
        <meta charSet="utf-8" />
        <title>{pageTitle}</title>
      </Helmet>
    </>
  );
};
