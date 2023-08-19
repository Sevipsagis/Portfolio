import Cover from './section/Cover';

type LandingPageProps = {};

function LandingPage(props: LandingPageProps): JSX.Element {
  return (
    <div className="container max-w-full h-screen overflow-y-scroll snap-y snap-mandatory">
      <Cover />
      <Cover />
      <Cover />
      <Cover />
    </div>
  );
}

export default LandingPage;
