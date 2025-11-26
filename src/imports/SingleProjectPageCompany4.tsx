import image_04798df0bb3d4310b5121a2a56684addc0554dbc from 'figma:asset/04798df0bb3d4310b5121a2a56684addc0554dbc.png';
import image_56099eee5a0a7227d3966acedddce842fd8153e1 from 'figma:asset/56099eee5a0a7227d3966acedddce842fd8153e1.png';
import svgPaths from "./svg-bhqqra1ilu";
import imgRectangle71 from "figma:asset/e83d22345c6c0b1be0b60597390fc14b0309abab.png";
import imgRectangle72 from "figma:asset/04798df0bb3d4310b5121a2a56684addc0554dbc.png";
import imgRectangle73 from "figma:asset/56099eee5a0a7227d3966acedddce842fd8153e1.png";
import imgRectangle67 from "figma:asset/0bf754e73891255d7dfe40251e6080cfa39c6894.png";
import imgRectangle69 from "figma:asset/11f0919cba3b21cc5ea9c1bd74b17b9357411d78.png";
import imgRectangle70 from "figma:asset/9569f336138afe7c2851152bdb9db57ceb8632b8.png";
import imgRectangle63 from "figma:asset/d242b7f30d70f33358f3e4e47ef6ed0724db3e8f.png";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

function Background() {
  return (
    <div className="absolute left-[754px] size-[808px] top-[459px]" data-name="Background">
      <div className="absolute inset-[-20%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1132 1132">
          <g id="Background">
            <g filter="url(#filter0_f_1_781)" id="Light Shadow">
              <circle cx="565.6" cy="565.6" fill="url(#paint0_radial_1_781)" fillOpacity="0.6" r="404" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1131.2" id="filter0_f_1_781" width="1131.2" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_1_781" stdDeviation="80.8" />
            </filter>
            <radialGradient cx="0" cy="0" gradientTransform="translate(517.12 488.84) rotate(51.2098) scale(505.18)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_781" r="1">
              <stop stopColor="#F2F2F2" />
              <stop offset="1" stopColor="#F2F2F2" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="absolute left-[10px] size-[24px] top-[10px]" data-name="home">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="home">
          <path d={svgPaths.p1e128b00} fill="var(--fill-0, #0F103F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Home1() {
  return (
    <div className="absolute left-0 size-[44px] top-0" data-name="Home">
      <Home />
    </div>
  );
}

function PersonOutline() {
  return (
    <div className="absolute left-[10px] size-[24px] top-[10px]" data-name="person_outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="person_outline">
          <path d={svgPaths.p18946880} fill="var(--fill-0, #0F103F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function About() {
  return (
    <div className="absolute left-0 size-[44px] top-[124px]" data-name="About">
      <PersonOutline />
    </div>
  );
}

function Work() {
  return (
    <div className="absolute left-[10px] size-[24px] top-[10px]" data-name="work">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="work">
          <path d={svgPaths.p1641fb80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Portfolio() {
  return (
    <div className="absolute left-0 size-[44px] top-[248px]" data-name="Portfolio">
      <Work />
    </div>
  );
}

function PhoneFill() {
  return (
    <div className="absolute left-[10px] size-[23px] top-[10px]" data-name="Phone_fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
        <g id="Phone_fill">
          <path d={svgPaths.p2dbe2d00} fill="var(--fill-0, #0F103F)" id="Vector 189" />
        </g>
      </svg>
    </div>
  );
}

function Contact() {
  return (
    <div className="absolute left-[0.5px] size-[43px] top-[372px]" data-name="Contact">
      <PhoneFill />
    </div>
  );
}

function Search() {
  return (
    <div className="absolute left-[10px] size-[24px] top-[10px]" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="search">
          <path d={svgPaths.p89aed78} fill="var(--fill-0, #0F103F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Search1() {
  return (
    <div className="absolute left-0 size-[44px] top-[495px]" data-name="Search">
      <Search />
    </div>
  );
}

function MenuIcons() {
  return (
    <div className="absolute h-[539px] left-[18px] top-[81px] w-[44px]" data-name="Menu icons">
      <Home1 />
      <About />
      <Portfolio />
      <Contact />
      <Search1 />
    </div>
  );
}

function SideMenu() {
  return (
    <div className="absolute backdrop-blur-[10.054px] backdrop-filter bg-[rgba(255,255,255,0.4)] h-[700px] left-0 rounded-br-[50px] rounded-tr-[50px] top-[163px] w-[80px]" data-name="Side menu">
      <div className="h-[700px] overflow-clip relative rounded-[inherit] w-[80px]">
        <div className="absolute h-[700px] left-0 top-0 w-[80px]" data-name="Background">
          <div className="absolute bottom-[-11.39%] left-[-49.84%] right-[-49.84%] top-0">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 160 780">
              <foreignObject height="799.855" width="159.747" x="0" y="-20.1079">
                <div style={{ backdropFilter: "blur(10.05px)", clipPath: "url(#bgblur_0_1_761_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
              </foreignObject>
              <g data-figma-bg-blur-radius="20.1079" filter="url(#filter0_d_1_761)" id="Background">
                <path d={svgPaths.p1c198600} fill="var(--fill-0, white)" fillOpacity="0.4" />
                <path d={svgPaths.p56da180} stroke="url(#paint0_linear_1_761)" strokeWidth="1.32912" style={{ mixBlendMode: "overlay" }} />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="799.855" id="filter0_d_1_761" width="159.747" x="0" y="-20.1079">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="39.8736" />
                  <feGaussianBlur stdDeviation="19.9368" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.269263 0 0 0 0 0.166562 0 0 0 0 0.4875 0 0 0 0.15 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_761" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_761" mode="normal" result="shape" />
                </filter>
                <clipPath id="bgblur_0_1_761_clip_path" transform="translate(0 20.1079)">
                  <path d={svgPaths.p1c198600} />
                </clipPath>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_761" x1="39.8736" x2="197.811" y1="0" y2="18.05">
                  <stop stopColor="white" stopOpacity="0.6" />
                  <stop offset="1" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <MenuIcons />
      </div>
      <div aria-hidden="true" className="absolute border-[1.329px] border-[rgba(255,255,255,0.6)] border-solid inset-0 pointer-events-none rounded-br-[50px] rounded-tr-[50px] shadow-[0px_39.874px_39.874px_0px_rgba(69,42,124,0.15)]" />
    </div>
  );
}

function Frame() {
  return <div className="absolute h-[31px] left-[849px] top-[368px] w-[359px]" />;
}

function Frame39() {
  return <div className="absolute h-[236px] left-[124px] top-[256px] w-[1235px]" />;
}

function HomePage() {
  return (
    <div className="absolute bg-[#f2f2f2] h-[925px] left-[48px] top-[-11px] w-[1440px]" data-name="Home page">
      <Background />
      <SideMenu />
      <Frame />
      <Frame39 />
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[normal] left-[134px] not-italic text-[20.671px] text-black text-nowrap top-[514px] whitespace-pre">{`Time Line `}</p>
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[normal] left-[486px] not-italic text-[20.671px] text-black text-nowrap top-[520px] whitespace-pre">{`Platform `}</p>
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[normal] left-[865px] not-italic text-[20.671px] text-black text-nowrap top-[514px] whitespace-pre">{`Team  `}</p>
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[normal] left-[1224px] not-italic text-[20.671px] text-black text-nowrap top-[514px] whitespace-pre">{`Year `}</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[883px] not-italic text-[20.671px] text-black text-nowrap top-[567px] whitespace-pre">5</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[134px] not-italic text-[20.671px] text-black text-nowrap top-[567px] whitespace-pre">{`4 weeks `}</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[486px] not-italic text-[20.671px] text-black text-nowrap top-[575px] whitespace-pre">{`Figma Desktop) `}</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[1224px] not-italic text-[20.671px] text-black text-nowrap top-[575px] whitespace-pre">2025</p>
      <div className="absolute font-['Poppins:Bold',sans-serif] leading-[normal] left-[134px] not-italic text-[20.671px] text-black top-[193px] w-[1273px]">
        <p className="mb-0">Theacademy- A learning resource Sharing Web App</p>
        <p className="mb-0">&nbsp;</p>
        <p className="font-['Poppins:Regular',sans-serif]">{`Theachedemy is a modern digital platform at the intersection of education, collaboration, and community. We are launching a new web app designed for students and educators to share, discover, and organize valuable learning resources. We are seeking a top-tier design agency to partner with us in creating a world-class web application. The primary goal is to build a seamless, intuitive, and visually engaging online experience that communicates our brand's unique value proposition of community-driven knowledge. This platform will be our primary channel for user engagement, telling the story of a brand that empowers learning and academic success.`}</p>
      </div>
      <div className="absolute font-['Poppins:Bold',sans-serif] leading-[normal] left-[135px] not-italic text-[20.671px] text-black text-nowrap top-[681px] whitespace-pre">
        <p className="mb-0">My Role</p>
        <p className="mb-0">&nbsp;</p>
        <p className="font-['Poppins:Regular',sans-serif] mb-0">{`Prototyping and Testing lead `}</p>
        <p className="mb-0">&nbsp;</p>
        <p className="font-['Poppins:Regular',sans-serif] mb-0">{`• Was responsible for prototyping and functionality `}</p>
        <p className="font-['Poppins:Regular',sans-serif] mb-0">• Did a comprehensive Quality Assurance testing</p>
        <p className="font-['Poppins:Regular',sans-serif] mb-0">• And Performance, security, and accessibility testing.</p>
        <p className="font-['Poppins:Regular',sans-serif] mb-0"> </p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[23.479px] items-start not-italic relative shrink-0 text-black">
      <p className="font-['Poppins:Bold',sans-serif] leading-[0.9] relative shrink-0 text-[42.689px] w-[285px]">Problem Statement</p>
      <p className="font-['Poppins:Regular',sans-serif] h-[329px] leading-[normal] relative shrink-0 text-[20.671px] w-[316px]">Students and educators often struggle to find credible, well-organized, and easily accessible learning resources across different subjects and courses. Existing digital solutions are scattered, inconsistent in quality, and lack a strong community-driven environment. This leads to wasted time, difficulty in discovering relevant materials, and limited collaboration opportunities. Theachedemy aims to solve this by creating a seamless, intuitive, and visually engaging web platform that centralizes shared educational resources and fosters collaborative learning.</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#f2f2f2] box-border content-stretch flex gap-[21.345px] h-[435.429px] items-start overflow-clip px-[21.345px] py-[27.748px] relative rounded-[21.345px] shrink-0">
      <Frame5 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex font-['Poppins:Regular',sans-serif] gap-[23.479px] h-[488px] items-start leading-[0] not-italic relative shrink-0 text-[#0066ff] text-[20.671px] w-full">
      <div className="relative shrink-0 w-[401px]">
        <p className="leading-[normal] mb-0">Needs</p>
        <ul className="list-disc">
          <li className="mb-0 ms-[31.0065px]">
            <span className="leading-[normal] text-black">A unified platform to discover, share, and organize academic resources easily.</span>
          </li>
          <li className="mb-0 ms-[31.0065px]">
            <span className="leading-[normal] text-black">Clear categorization, filtering, and search tools to find relevant materials quickly.</span>
          </li>
          <li className="mb-0 ms-[31.0065px]">
            <span className="leading-[normal] text-black">A simple upload process to contribute content without friction</span>
          </li>
          <li className="mb-0 ms-[31.0065px]">
            <span className="leading-[normal] text-black">Access to a supportive learning community, including peer insights, reviews, and collaborative spaces.</span>
          </li>
          <li className="ms-[31.0065px]">
            <span className="leading-[normal] text-black">Reliable responsive access across all devices to support learning on the go</span>
          </li>
        </ul>
      </div>
      <div className="relative shrink-0 w-[363px]">
        <p className="leading-[normal] mb-0">Struggles</p>
        <ul className="list-disc">
          <li className="mb-0 ms-[31.0065px]">
            <span className="leading-[normal] text-black">Difficulty finding quality learning resources across multiple unorganized platforms.</span>
          </li>
          <li className="mb-0 ms-[31.0065px]">
            <span className="leading-[normal] text-black">Lack of transparency and reliability in community-shared content.</span>
          </li>
          <li className="mb-0 ms-[31.0065px]">
            <span className="leading-[normal] text-black">Limited ways to collaborate with peers or educators outside the classroom.</span>
          </li>
          <li className="mb-0 ms-[31.0065px]">
            <span className="leading-[normal] text-black">Inefficient navigation in existing platforms, resulting in poor user experience.</span>
          </li>
          <li className="ms-[31.0065px]">
            <span className="leading-[normal] text-black">No centralized space for reviews, ratings, or study hubs to guide learning</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[23.479px] items-start relative shrink-0 w-[821px]">
      <p className="font-['Poppins:Bold',sans-serif] leading-[0.9] not-italic relative shrink-0 text-[42.689px] text-black w-[328.706px]">{`User Needs & Struggles`}</p>
      <Frame32 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#f2f2f2] box-border content-stretch flex gap-[21.345px] items-start overflow-clip px-[21.345px] py-[27.748px] relative rounded-[21.345px] shrink-0 w-[805px]">
      <Frame11 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[1163.28px]">
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[23.479px] items-start leading-[0] not-italic relative shrink-0 text-black w-[868.723px]">
      <div className="font-['Poppins:Bold',sans-serif] leading-[0.9] relative shrink-0 text-[42.689px] w-[328.706px]">
        <p className="mb-0">Proposed</p>
        <p>Solution</p>
      </div>
      <div className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[20.671px] w-[868.723px]">
        <p className="leading-[normal] mb-0">Theachedemy introduces a community-driven learning resource sharing web app that empowers both students and educators. The platform will offer:</p>
        <p className="leading-[normal] mb-0">Core Features</p>
        <ul className="list-disc">
          <li className="mb-0 ms-[31.0065px]">
            <span className="leading-[normal]">{`Powerful search & filtering, including faceted search by subject, course, resource type, and more.`}</span>
          </li>
          <li className="mb-0 ms-[31.0065px]">
            <span className="leading-[normal]">Detailed resource pages with previews, ratings, descriptions, and uploader profiles.</span>
          </li>
          <li className="mb-0 ms-[31.0065px]">
            <span className="leading-[normal]">User profiles with saved resources, uploads, and content history.</span>
          </li>
          <li className="mb-0 ms-[31.0065px]">
            <span className="leading-[normal]">Seamless upload flow enabling multi-file uploads, tagging, and categorization.</span>
          </li>
          <li className="mb-0 ms-[31.0065px]">
            <span className="leading-[normal]">A “Study Corner” community hub featuring forums, tips, contributor leaderboards, and top-rated resources.</span>
          </li>
          <li className="ms-[31.0065px]">
            <span className="leading-[normal]">Fully responsive design for desktop and mobile.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#f2f2f2] box-border content-stretch flex gap-[21.345px] items-start overflow-clip px-[21.345px] py-[27.748px] relative rounded-[21.345px] shrink-0 w-[1163.28px]">
      <Frame12 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[42.689px] items-start relative shrink-0 w-[1163.28px]">
      <Frame31 />
      <Frame4 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative rounded-[20px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[21.345px] items-start px-[53.361px] py-[64.034px] relative w-full">
          <Frame6 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[14.273px] items-start not-italic relative shrink-0 text-black">
      <p className="font-['Proxima_Nova:Bold',sans-serif] leading-[0.9] relative shrink-0 text-[25.95px] w-[127.155px]">Empathy</p>
      <div className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[12.565px] w-[199.815px]">
        <p className="mb-0">-Conduct stakeholder interviews, workshops, and user interviews to understand user behavior, motivations, frustrations, and expectations.</p>
        <p>-Research competitors and gather insights about existing educational resource platforms.</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#f2f2f2] box-border content-stretch flex gap-[12.975px] h-[266px] items-start overflow-clip px-[12.975px] py-[16.868px] relative rounded-[12.975px] shrink-0">
      <Frame13 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[14.273px] items-start not-italic relative shrink-0 text-black">
      <p className="font-['Proxima_Nova:Bold',sans-serif] leading-[0.9] relative shrink-0 text-[25.95px] w-[199.815px]">Define</p>
      <div className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[12.565px] w-[199.815px]">
        <p className="mb-0">-Identify the core problems students and educators face when searching for or sharing learning resources.</p>
        <p className="mb-0">-Develop user personas and problem statements based on research findings.</p>
        <p>-Establish KPIs to measure success (engagement, resource uploads, search efficiency, etc.).</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[#f2f2f2] box-border content-stretch flex gap-[12.975px] h-[266px] items-start overflow-clip px-[12.975px] py-[16.868px] relative rounded-[12.975px] shrink-0">
      <Frame15 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[14.273px] items-start not-italic relative shrink-0 text-black">
      <p className="font-['Proxima_Nova:Bold',sans-serif] leading-[0.9] relative shrink-0 text-[25.95px] w-[199.815px]">Ideate</p>
      <div className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[12.565px] w-[199.815px]">
        <p className="mb-0">-Generate concepts for navigation structures, resource sharing flows, and community engagement features.</p>
        <p>-Sketch user journeys and explore ways to enhance discoverability, collaboration, and usability.</p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-[#f2f2f2] box-border content-stretch flex gap-[12.975px] h-[266px] items-start overflow-clip px-[12.975px] py-[16.868px] relative rounded-[12.975px] shrink-0">
      <Frame17 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[14.273px] items-start not-italic relative shrink-0 text-black">
      <p className="font-['Proxima_Nova:Bold',sans-serif] leading-[0.9] relative shrink-0 text-[25.95px] w-[199.815px]">Prototype</p>
      <div className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[12.565px] w-[199.815px]">
        <p className="mb-0">-Create wireframes, sitemaps, user flows, and interactive prototypes for key pages (mobile and desktop).</p>
        <p>-Build early drafts of the design system to maintain UI consistency.</p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-[#f2f2f2] box-border content-stretch flex gap-[12.975px] h-[266px] items-start overflow-clip px-[12.975px] py-[16.868px] relative rounded-[12.975px] shrink-0">
      <Frame19 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[14.273px] items-start not-italic relative shrink-0 text-black">
      <p className="font-['Proxima_Nova:Bold',sans-serif] leading-[0.9] relative shrink-0 text-[25.95px] w-[199.815px]">Testing</p>
      <div className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[12.565px] w-[199.815px]">
        <p className="mb-0">-Conduct usability testing with target users.</p>
        <p className="mb-0">-Evaluate clarity of navigation, search experience, upload interactions, and community engagement flows.</p>
        <p>-Refine designs based on user feedback.</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-[#f2f2f2] box-border content-stretch flex gap-[12.975px] items-start overflow-clip px-[12.975px] py-[16.868px] relative rounded-[12.975px] shrink-0">
      <Frame21 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[1163.28px]">
      <Frame14 />
      <Frame16 />
      <Frame18 />
      <Frame20 />
      <Frame22 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[46.958px] items-start relative shrink-0">
      <div className="font-['Poppins:Bold',sans-serif] leading-[0.9] not-italic relative shrink-0 text-[74.706px] text-black text-nowrap whitespace-pre">
        <p className="mb-0">Design</p>
        <p>Thinking.</p>
      </div>
      <Frame7 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="relative rounded-[20px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[21.345px] items-start px-[53.361px] py-[64.034px] relative w-full">
          <Frame8 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[46.958px] items-start relative shrink-0">
      <p className="font-['Poppins:Bold',sans-serif] leading-[0.9] not-italic relative shrink-0 text-[74.706px] text-black text-nowrap whitespace-pre">Wireframes</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="absolute content-stretch flex gap-[53.361px] items-center left-[53.36px] top-[64.03px]">
      <Frame24 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="h-[706px] relative rounded-[20px] shrink-0 w-full">
      <div className="h-[706px] overflow-clip relative rounded-[inherit] w-full">
        <Frame28 />
        <div className="absolute h-[451px] left-[90px] top-[219.27px] w-[322px]">
          <ImageWithFallback alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" src={imgRectangle71} />
        </div>
        <div className="absolute h-[451px] left-[494px] top-[219.28px] w-[322px]">
          <ImageWithFallback alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" src={image_04798df0bb3d4310b5121a2a56684addc0554dbc} />
        </div>
        <div className="absolute h-[451px] left-[879px] top-[219.27px] w-[322px]">
          <ImageWithFallback alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" src={imgRectangle73} />
        </div>
        <p className="absolute font-['Poppins:Bold',sans-serif] leading-[0.9] left-[74px] not-italic text-[16.336px] text-black text-nowrap top-[174.27px] whitespace-pre">{`The academy -Search Results  `}</p>
        <p className="absolute font-['Poppins:Bold',sans-serif] leading-[0.9] left-[508px] not-italic text-[16.336px] text-black top-[172.27px] w-[219px]">{`The academy -Resources `}</p>
        <p className="absolute font-['Poppins:Bold',sans-serif] leading-[0.9] left-[898px] not-italic text-[16.336px] text-black top-[172.27px] w-[303px] whitespace-pre-wrap">{`The academy -Study corner  `}</p>
        {/* Additional wireframe stock images */}
        <div className="absolute h-[200px] left-[30px] top-[500px] w-[350px] rounded-[8px] overflow-hidden">
          
        </div>
        <div className="absolute h-[200px] left-[400px] top-[500px] w-[350px] rounded-[8px] overflow-hidden">
          
        </div>
        <div className="absolute h-[200px] left-[770px] top-[500px] w-[350px] rounded-[8px] overflow-hidden">
          <ImageWithFallback
            alt="Web design prototype"
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1585229259079-05ab82f93c7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBwcm90b3R5cGV8ZW58MXx8fHwxNzYzOTk2ODg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[46.958px] items-start relative shrink-0">
      <p className="font-['Poppins:Bold',sans-serif] leading-[0.9] not-italic relative shrink-0 text-[74.706px] text-black text-nowrap whitespace-pre">Prototype</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="absolute content-stretch flex gap-[53.361px] items-center left-[53px] top-[64px]">
      <Frame25 />
    </div>
  );
}

function Frame29() {
  return <div className="absolute h-[55.232px] left-[184px] top-[709.26px] w-[978.148px]" />;
}

function LogosFigma() {
  return (
    <div className="h-[25.349px] relative shrink-0 w-[16.9px]" data-name="logos:figma">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 26">
        <g clipPath="url(#clip0_1_754)" id="logos:figma">
          <path d={svgPaths.p3f46c100} fill="var(--fill-0, #0ACF83)" id="Vector" />
          <path d={svgPaths.p2962fb72} fill="var(--fill-0, #A259FF)" id="Vector_2" />
          <path d={svgPaths.p30ab7700} fill="var(--fill-0, #F24E1E)" id="Vector_3" />
          <path d={svgPaths.p2d5ccb80} fill="var(--fill-0, #FF7262)" id="Vector_4" />
          <path d={svgPaths.p15558600} fill="var(--fill-0, #1ABCFE)" id="Vector_5" />
        </g>
        <defs>
          <clipPath id="clip0_1_754">
            <rect fill="white" height="25.3494" width="16.8996" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame26() {
  return (
    <div className="bg-[#2954a3] box-border content-stretch flex gap-[21.345px] items-center justify-center px-[21.345px] py-[8.538px] relative rounded-[4.269px] shrink-0">
      <LogosFigma />
      <a className="[white-space-collapse:collapse] block font-['Proxima_Nova:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[16.336px] text-black text-nowrap" href="https://www.figma.com/proto/ftRIKUoi7yAQiDXKhFFnjH/TheAchedemy-New-File?node-id=0-1&t=EjmOUui9hZKWqKW4-1">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid leading-[normal] underline whitespace-pre">https://bit.ly/MaqubsAcademyWebUI</p>
      </a>
    </div>
  );
}

function Frame27() {
  return (
    <div className="absolute box-border content-stretch flex gap-[21.345px] items-center left-[95px] px-[10.672px] py-[6.403px] rounded-[10.672px] top-[714.26px]">
      <div aria-hidden="true" className="absolute border-[1.067px] border-black border-solid inset-0 pointer-events-none rounded-[10.672px]" />
      <p className="font-['Proxima_Nova:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16.336px] text-black text-nowrap whitespace-pre">{` Prototype`}</p>
      <Frame26 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="h-[817px] relative rounded-[20px] shrink-0 w-[1288px]">
      <div className="h-[817px] overflow-clip relative rounded-[inherit] w-[1288px]">
        <Frame30 />
        <Frame29 />
        <Frame27 />
        <div className="absolute h-[451px] left-[95px] top-[205.26px] w-[322px]">
          <ImageWithFallback alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" src={imgRectangle67} />
        </div>
        <div className="absolute h-[451px] left-[499px] top-[205.27px] w-[322px]">
          <ImageWithFallback alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" src={imgRectangle69} />
        </div>
        <div className="absolute h-[451px] left-[884px] top-[205.26px] w-[322px]">
          <ImageWithFallback alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" src={imgRectangle70} />
        </div>
        <div className="absolute h-[359px] left-[448px] top-[279.26px] w-[491px]" />
        <p className="absolute font-['Poppins:Bold',sans-serif] leading-[0.9] left-[79px] not-italic text-[16.336px] text-black top-[160.26px] w-[219px]">{`The academy -Home `}</p>
        <p className="absolute font-['Poppins:Bold',sans-serif] leading-[0.9] left-[513px] not-italic text-[16.336px] text-black top-[158.26px] w-[219px]">{`The academy -Resources `}</p>
        <p className="absolute font-['Poppins:Bold',sans-serif] leading-[0.9] left-[903px] not-italic text-[16.336px] text-black top-[158.26px] w-[303px] whitespace-pre-wrap">{`The academy -Study corner  `}</p>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame40() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[90px] items-start left-1/2 top-[1901px] translate-x-[-50%] w-[1366px]">
      <Frame1 />
      <Frame23 />
      <Frame9 />
      <Frame10 />
    </div>
  );
}

function Home2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="home">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="home">
          <path d={svgPaths.p1e128b00} fill="var(--fill-0, #F2F2F2)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame34() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-start p-[10px] relative shrink-0">
      <Home2 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-start p-[10px] relative shrink-0">
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.432] not-italic relative shrink-0 text-[#f2f2f2] text-[17px] text-nowrap whitespace-pre">Home</p>
    </div>
  );
}

function Home3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity" data-name="Home">
      <Frame34 />
      <Frame33 />
    </div>
  );
}

function PersonOutline1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="person_outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="person_outline">
          <path d={svgPaths.p18946880} fill="var(--fill-0, #F2F2F2)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame35() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-start p-[10px] relative shrink-0">
      <PersonOutline1 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-start p-[10px] relative shrink-0">
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.432] not-italic relative shrink-0 text-[#f2f2f2] text-[17px] text-nowrap whitespace-pre">About me</p>
    </div>
  );
}

function About1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity" data-name="About">
      <Frame35 />
      <Frame36 />
    </div>
  );
}

function PhoneFill1() {
  return (
    <div className="relative shrink-0 size-[23px]" data-name="Phone_fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
        <g id="Phone_fill">
          <path d={svgPaths.p2dbe2d00} fill="var(--fill-0, #F2F2F2)" id="Vector 189" />
        </g>
      </svg>
    </div>
  );
}

function Frame37() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-start p-[10px] relative shrink-0">
      <PhoneFill1 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-start p-[10px] relative shrink-0">
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.432] not-italic relative shrink-0 text-[#f2f2f2] text-[17px] text-nowrap whitespace-pre">Contact</p>
    </div>
  );
}

function Contact1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity" data-name="Contact">
      <Frame37 />
      <Frame38 />
    </div>
  );
}

function Menu() {
  return (
    <div className="absolute content-stretch flex gap-[50px] items-start left-[112px] top-[99px]" data-name="Menu">
      <Home3 />
      <About1 />
      <Contact1 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-black h-[226px] left-[-10px] overflow-clip top-[6046px] w-[1536px]" data-name="Footer">
      <Menu />
      <div className="absolute bg-[rgba(255,255,255,0.15)] h-[2px] left-[40px] top-[316px] w-[1360px]" data-name="Separator" />
    </div>
  );
}

function Frame41() {
  return (
    <div className="absolute bg-white h-[98px] left-0 overflow-clip top-0 w-[1536px]">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[1.432] left-[44px] not-italic text-[#fffefe] text-[24px] text-nowrap top-[36px] whitespace-pre">YOUR LOGO</p>
    </div>
  );
}

function Home4() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-start p-[10px] relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity" data-name="Home">
      <p className="font-['Poppins:Medium',sans-serif] leading-[1.432] not-italic relative shrink-0 text-[17px] text-black text-nowrap whitespace-pre">Home</p>
    </div>
  );
}

function About2() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-start p-[10px] relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity" data-name="About">
      <p className="font-['Poppins:Medium',sans-serif] leading-[1.432] not-italic relative shrink-0 text-[17px] text-black text-nowrap whitespace-pre">About me</p>
    </div>
  );
}

function Work1() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-start p-[10px] relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity" data-name="Work">
      <p className="font-['Poppins:Medium',sans-serif] leading-[1.432] not-italic relative shrink-0 text-[17px] text-black text-nowrap whitespace-pre">Work</p>
    </div>
  );
}

function TopMenu() {
  return (
    <div className="absolute content-stretch flex gap-[70px] items-center justify-center left-[1040px] top-[21px]" data-name="Top menu">
      <Home4 />
      <About2 />
      <Work1 />
    </div>
  );
}

export default function SingleProjectPageCompany() {
  return (
    <div className="bg-[#f2f2f2] relative size-full" data-name="Single-project page-company4">
      <HomePage />
      <Frame40 />
      <div className="absolute h-[895px] left-1/2 rounded-[50px] top-[957px] translate-x-[-50%] w-[1350px]">
        <ImageWithFallback alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none rounded-[50px] size-full" src={imgRectangle63} />
      </div>
      <Footer />
      <Frame41 />
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[1.432] left-[90px] not-italic text-[17px] text-black text-nowrap top-[36px] whitespace-pre cursor-pointer" data-name="BackToProjects">{`Back to Projects `}</p>
      <div className="absolute inset-[0.65%_94.47%_99.11%_3.91%] cursor-pointer" data-name="BackToProjects">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 15">
          <path d={svgPaths.p279eb280} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <TopMenu />
    </div>
  );
}