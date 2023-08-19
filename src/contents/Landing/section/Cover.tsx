type CoverComponentProps = {};

function CoverSection(props: CoverComponentProps): JSX.Element {
  return (
    <section id="cover" className="container max-w-full flex justify-center item-center snap-start">
      <div className="flex h-[100dvh] max-w-[1600px] justify-between items-center p-auto gap-[72px]">
        <div className="max-w-[648px]">
          <h3 className="text-[48px] text-[#B08968] font-bold">Hi there, I'm</h3>
          <h1 className="text-[72px] text-[#7F5539] font-bold leading-tight">Nuttapol Phomthon</h1>
          <em className="text-[24px] text-[#B08968] font-light">
            — I’m a platform service engineer specializing in building things for the web. Currently, I’m focused on
            building developer portal platform at &nbsp;
            <a className="text-[#7F5539] hover:underline" href="https://scbtechx.io/">
              SCB TechX
            </a>
            . —
          </em>
        </div>
        <div className="max-w-[480px]">
          <img className="bg-[#E6CCB2] rounded-full" src="/src/assets/images/avatar.webp" alt="avatar-image" />
        </div>
      </div>
    </section>
  );
}

export default CoverSection;
