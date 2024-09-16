function About() {
  return (
    <div className="mt-20 text-amber-50 mb-20">
      <div className="text-2xl ">About me</div>
      <div className="mt-2">
        Software developer with over 3 years of experience primarily working on
        frontend technologies. Passionate about innovation, design thinking and
        complex problem solving.Commited to delivering robust solutions,
        advocating for continuous innovation and providing top notch customer
        support.
      </div>

      <div className="text-2xl mt-10">Professional experience</div>
      <div className="text-xl font-bold mt-2">Associate Software Developer</div>
      <div className="text-lg">SAP Labs, India</div>
      <div className="text-md">July 2021 - Present | Bengaluru, KA</div>
      <div className="text-lg font-semibold mt-6">
        Project: NFT Management Application
      </div>
      <ul className="pl-5 list-disc">
        <div>
          <li className="italic">
            Role: Frontend Developer working on Web 3.0 and NFTs
          </li>
          <ul className="ml-6 mt-2">
            <li>
              Designed and implemented UI components using TypeScript and React
            </li>
            <li>
              Collaborated with cross-functional teams to build responsive UIs
            </li>
            <li>Implemented automated testing, reducing bugs by 70%</li>
          </ul>
          <li className="mt-2">
            Tech Stack: Material UI, React.js, GraphQL, Go, Next.js, TypeScript,
            PostgreSQL, Redux
          </li>
        </div>
      </ul>
      <div className="text-lg font-semibold mt-6">
        Project: Supplier Chain Law (Procurement Application)
      </div>
      <ul className="pl-5 list-disc">
        {/* Project: Supplier Chain Law */}
        <div className="mt-6">
          <li className="italic">Role: Lead Frontend Developer</li>
          <ul className="ml-6 mt-2">
            <li>
              Developed the application from scratch, improving procurement
              process
            </li>
            <li>Enhanced UI design, reducing user clicks by 40%</li>
            <li>Mentored developers, improving team productivity by 20%</li>
          </ul>
          <li className="mt-2">Tech Stack: SAP UI5, JavaScript, OPA5, Qunit</li>
        </div>
      </ul>
      <div className="text-2xl mt-10">Projects</div>
      <ul className="mt-2">
        <li>Netflix Clone Website</li>
        <ul className="list-disc pl-5">
          <li>
            I was always very facinated as to how netflix works behind the scene
            from a frontend aspect as it has some pretty cool UI/UX screens and
            experience.
          </li>
          <li>
            <a
              href="https://github.com/Leodicap99/Netflix-Clone-with-built-in-AI-features"
              className="text-yellow-400 underline"
            >
              Codebase
            </a>
          </li>
        </ul>
        <div className="mt-2">Swiggy Clone Website</div>
        <ul className="list-disc pl-5">
          <li>
            Here we go again. Who else feels this? Swiggy is way ahead of any
            food delivery app I have seen in terms of user experience. Hence the
            passion to recreate it and boy oh boy did I love doing it.
          </li>
          <li>
            <a
              href="https://github.com/Leodicap99/Food-Delivery-App-Clone"
              className="text-yellow-400 underline"
            >
              Codebase
            </a>
          </li>
        </ul>
        <div className="mt-2">Rock Paper Scissors Multiplayer Game</div>
        <ul className="list-disc pl-5">
          <li>
            Hold on! It sounds cooler than you think! I used purely localStorage
            to manage data where the website has a player ranking page, an
            authentication page and the play area. Users can play in two
            different tabs with different user ids. Also you get to choose which
            player you wanna play against
          </li>
          <li>
            <a
              href="https://github.com/Leodicap99/Rock-Paper-Scissors-Game"
              className="text-yellow-400 underline"
            >
              Codebase
            </a>
          </li>
        </ul>
      </ul>
    </div>
  );
}

export default About;
