import image_bd23f82d6593be6b333143549ad520ddf1ec48a5 from 'figma:asset/bd23f82d6593be6b333143549ad520ddf1ec48a5.png';
import imgRectangle64 from "figma:asset/3a36055fd551fb1ae339017a75b24ee956138a8d.png";
import imgRectangle66 from "figma:asset/fe178bf0f7bc61ddb688dd59a7d8fa5a1024d183.png";
import imgRectangle65 from "figma:asset/1e334d6e1818957563eb0f82fb966c7fd0cb30b0.png";
import imgRectangle67 from "figma:asset/bd23f82d6593be6b333143549ad520ddf1ec48a5.png";
import imgRectangle68 from "figma:asset/338169b37c7dd12c395caf8526bdc49a0ac1a5ee.png";
import imgRectangle69 from "figma:asset/0c7e95a4d343ba35798ca2aaa6101e47cd9be02c.png";
import imgRectangle70 from "figma:asset/b7b290e95807b2e63e4e709ae9007c87ca62bc93.png";
import { ArrowLeft } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

function Background() {
  return (
    <div
      className="absolute left-[754px] size-[808px] top-[459px]"
      data-name="Background"
    >
      <div className="absolute inset-[-20%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1132 1132"
        >
          <g id="Background">
            <g filter="url(#filter0_f_1_275)" id="Light Shadow">
              <circle
                cx="565.6"
                cy="565.6"
                fill="url(#paint0_radial_1_275)"
                fillOpacity="0.6"
                r="404"
              />
            </g>
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="1131.2"
              id="filter0_f_1_275"
              width="1131.2"
              x="0"
              y="0"
            >
              <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
              />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_275"
                stdDeviation="80.8"
              />
            </filter>
            <radialGradient
              cx="0"
              cy="0"
              gradientTransform="translate(517.12 488.84) rotate(51.2098) scale(505.18)"
              gradientUnits="userSpaceOnUse"
              id="paint0_radial_1_275"
              r="1"
            >
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
    <div
      className="absolute left-[10px] size-[24px] top-[10px]"
      data-name="home"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="home">
          <path
            d={svgPaths.p1e128b00}
            fill="var(--fill-0, #0F103F)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Home1() {
  return (
    <div
      className="absolute left-0 size-[44px] top-0"
      data-name="Home"
    >
      <Home />
    </div>
  );
}

function PersonOutline() {
  return (
    <div
      className="absolute left-[10px] size-[24px] top-[10px]"
      data-name="person_outline"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="person_outline">
          <path
            d={svgPaths.p18946880}
            fill="var(--fill-0, #0F103F)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function About() {
  return (
    <div
      className="absolute left-0 size-[44px] top-[124px]"
      data-name="About"
    >
      <PersonOutline />
    </div>
  );
}

function Work() {
  return (
    <div
      className="absolute left-[10px] size-[24px] top-[10px]"
      data-name="work"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="work">
          <path
            d={svgPaths.p1641fb80}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Portfolio() {
  return (
    <div
      className="absolute left-0 size-[44px] top-[248px]"
      data-name="Portfolio"
    >
      <Work />
    </div>
  );
}

function PhoneFill() {
  return (
    <div
      className="absolute left-[10px] size-[23px] top-[10px]"
      data-name="Phone_fill"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 23 23"
      >
        <g id="Phone_fill">
          <path
            d={svgPaths.p2dbe2d00}
            fill="var(--fill-0, #0F103F)"
            id="Vector 189"
          />
        </g>
      </svg>
    </div>
  );
}

function Contact() {
  return (
    <div
      className="absolute left-[0.5px] size-[43px] top-[372px]"
      data-name="Contact"
    >
      <PhoneFill />
    </div>
  );
}

function Search() {
  return (
    <div
      className="absolute left-[10px] size-[24px] top-[10px]"
      data-name="search"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="search">
          <path
            d={svgPaths.p89aed78}
            fill="var(--fill-0, #0F103F)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Search1() {
  return (
    <div
      className="absolute left-0 size-[44px] top-[495px]"
      data-name="Search"
    >
      <Search />
    </div>
  );
}

function MenuIcons() {
  return (
    <div
      className="absolute h-[539px] left-[18px] top-[81px] w-[44px]"
      data-name="Menu icons"
    >
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
    <div
      className="absolute backdrop-blur-[10.054px] backdrop-filter bg-[rgba(255,255,255,0.4)] h-[700px] left-0 rounded-br-[50px] rounded-tr-[50px] top-[163px] w-[80px]"
      data-name="Side menu"
    >
      <div className="h-[700px] overflow-clip relative rounded-[inherit] w-[80px]">
        <div
          className="absolute h-[700px] left-0 top-0 w-[80px]"
          data-name="Background"
        >
          <div className="absolute bottom-[-11.39%] left-[-49.84%] right-[-49.84%] top-0">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 160 780"
            >
              <foreignObject
                height="799.855"
                width="159.747"
                x="0"
                y="-20.1079"
              >
                <div
                  style={{
                    backdropFilter: "blur(10.05px)",
                    clipPath: "url(#bgblur_0_1_273_clip_path)",
                    height: "100%",
                    width: "100%",
                  }}
                  xmlns="http://www.w3.org/1999/xhtml"
                />
              </foreignObject>
              <g
                data-figma-bg-blur-radius="20.1079"
                filter="url(#filter0_d_1_273)"
                id="Background"
              >
                <path
                  d={svgPaths.p1c198600}
                  fill="var(--fill-0, white)"
                  fillOpacity="0.4"
                />
                <path
                  d={svgPaths.p56da180}
                  stroke="url(#paint0_linear_1_273)"
                  strokeWidth="1.32912"
                  style={{ mixBlendMode: "overlay" }}
                />
              </g>
              <defs>
                <filter
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                  height="799.855"
                  id="filter0_d_1_273"
                  width="159.747"
                  x="0"
                  y="-20.1079"
                >
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy="39.8736" />
                  <feGaussianBlur stdDeviation="19.9368" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.269263 0 0 0 0 0.166562 0 0 0 0 0.4875 0 0 0 0.15 0"
                  />
                  <feBlend
                    in2="BackgroundImageFix"
                    mode="normal"
                    result="effect1_dropShadow_1_273"
                  />
                  <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1_273"
                    mode="normal"
                    result="shape"
                  />
                </filter>
                <clipPath
                  id="bgblur_0_1_273_clip_path"
                  transform="translate(0 20.1079)"
                >
                  <path d={svgPaths.p1c198600} />
                </clipPath>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id="paint0_linear_1_273"
                  x1="39.8736"
                  x2="197.811"
                  y1="0"
                  y2="18.05"
                >
                  <stop stopColor="white" stopOpacity="0.6" />
                  <stop offset="1" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <MenuIcons />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[1.329px] border-[rgba(255,255,255,0.6)] border-solid inset-0 pointer-events-none rounded-br-[50px] rounded-tr-[50px] shadow-[0px_39.874px_39.874px_0px_rgba(69,42,124,0.15)]"
      />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[31px] left-[849px] top-[368px] w-[359px]" />
  );
}

function Frame40() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[73px] items-start justify-center left-[124px] top-[217px] w-[1235px]">
      <div className="font-['Poppins:Bold',sans-serif] h-[242px] leading-[normal] not-italic relative shrink-0 text-[20.671px] text-black w-full">
        <p className="mb-0">{`Academia Analytics: Student Risk and intervention Console `}</p>
        <p className="mb-0">&nbsp;</p>
        <p className="font-['Poppins:Regular',sans-serif] whitespace-pre-wrap">{`Academia is a desktop administrative console   used by the university academic advisors and counselors. The system aggregates student,data, grade,attendance financial holds to generate a predictive risk score for potential dropout . The console also provides tools for advisors to identify at-risk-students, launch and track specific intervention campaigns and monitor the effectiveness of these efforts across assigned roaster.`}</p>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <div
      className="absolute bg-[#f2f2f2] h-[925px] left-[48px] top-[-11px] w-[1440px]"
      data-name="Home page"
    >
      <Background />
      <SideMenu />
      <Frame />
      <Frame40 />
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[normal] left-[140px] not-italic text-[20.671px] text-black text-nowrap top-[483px] whitespace-pre">{`Time Line `}</p>
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[normal] left-[492px] not-italic text-[20.671px] text-black text-nowrap top-[489px] whitespace-pre">{`Platform `}</p>
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[normal] left-[871px] not-italic text-[20.671px] text-black text-nowrap top-[483px] whitespace-pre">{`Team  `}</p>
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[normal] left-[1230px] not-italic text-[20.671px] text-black text-nowrap top-[483px] whitespace-pre">{`Year `}</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[894px] not-italic text-[20.671px] text-black text-nowrap top-[544px] whitespace-pre">
        1
      </p>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[140px] not-italic text-[20.671px] text-black text-nowrap top-[536px] whitespace-pre">{`3 weeks `}</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[492px] not-italic text-[20.671px] text-black text-nowrap top-[544px] whitespace-pre">{`Figma (Desktop) `}</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[1230px] not-italic text-[20.671px] text-black text-nowrap top-[544px] whitespace-pre">
        2025
      </p>
      <div className="absolute font-['Poppins:Regular',sans-serif] h-[424px] leading-[normal] left-[141px] not-italic text-[20.671px] text-black top-[603px] w-[1017px]">
        <p className="font-['Poppins:Bold',sans-serif] mb-0">
          My Role
        </p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">Lead Product Designer</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">
          • I led the end-to-end design process from reseach to
          final implementation
        </p>
        <p className="mb-0">
          • Conducted user research and interviews
        </p>
        <p className="mb-0">
          • Created user personas and journey maps
        </p>
        <p className="mb-0">
          • Designed wireframes and highfi delity mockups
        </p>
        <p className="mb-0">• Led usability testing sessions</p>
        <p>• Collaborated with developers on implementation</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[23.479px] items-start not-italic relative shrink-0 text-black">
      <p className="font-['Poppins:Bold',sans-serif] leading-[0.9] relative shrink-0 text-[42.689px] w-[285px]">
        Problem Statement
      </p>
      <p className="font-['Poppins:Regular',sans-serif] h-[329px] leading-[normal] relative shrink-0 text-[20.671px] w-[316px]">
        Academic advisors struggle to identify at-risk students
        and manage interventions because student data is
        scattered across multiple systems. This leads to delayed
        support, inconsistent follow-up, and reduced student
        success. Academica provides a unified console that
        consolidates risk scores, academic data, and
        intervention tools, enabling advisors to quickly triage
        students and deliver timely, effective support.
      </p>
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
    <div className="content-stretch flex font-['Poppins:Regular',sans-serif] gap-[23.479px] h-[784px] items-start leading-[0] not-italic relative shrink-0 text-[#0066ff] text-[20.671px] w-full">
      <div className="relative shrink-0 w-[401px]">
        <p className="leading-[normal] mb-0">Needs</p>
        <ul className="list-disc">
          <li className="mb-0 ms-[31.0065px]">
            <span className="leading-[normal] text-black">
              Quickly identify students at risk of dropping out.
            </span>
          </li>
          <li className="mb-0 ms-[31.0065px]">
            <span className="leading-[normal] text-black">
              Easily filter and sort students by risk score,
              major, or last intervention.
            </span>
          </li>
          <li className="mb-0 ms-[31.0065px]">
            <span className="leading-[normal] text-black">
              Access a complete 360° student view (grades,
              attendance, financial holds, notes,
              interventions).
            </span>
          </li>
          <li className="mb-0 ms-[31.0065px]">
            <span className="leading-[normal] text-black">
              Take action immediately: send emails, schedule
              meetings, or create campaigns.
            </span>
          </li>
          <li className="mb-0 ms-[31.0065px]">
            <span className="leading-[normal] text-black">
              Automate repetitive communication tasks.
            </span>
          </li>
          <li className="mb-0 ms-[31.0065px]">
            <span className="leading-[normal] text-black">
              Track how risk scores change over time to measure
              success.
            </span>
          </li>
          <li className="mb-0 ms-[31.0065px]">
            <span className="leading-[normal] text-black">
              See which interventions worked and which didn’t.
            </span>
          </li>
          <li className="mb-0 ms-[31.0065px]">
            <span className="leading-[normal] text-black">
              Keep all notes, past conversations, and meeting
              logs in one place.
            </span>
          </li>
          <li className="mb-0 ms-[31.0065px]">
            <span className="leading-[normal] text-black">
              Manage a large student roster efficiently with
              minimal admin effort.
            </span>
          </li>
          <li className="ms-[31.0065px]">
            <span className="leading-[normal] text-black">
              Maintain an organized advising calendar with
              reminders and follow-ups.
            </span>
          </li>
        </ul>
      </div>
      <div className="relative shrink-0 w-[363px]">
        <p className="leading-[normal] mb-0">Struggles</p>
        <ul className="list-disc">
          <li className="mb-0 ms-[31.0065px]">
            <span className="leading-[normal] text-black">
              Data is scattered across multiple systems, making
              it hard to see the full picture.
            </span>
          </li>
          <li className="mb-0 ms-[31.0065px]">
            <span className="leading-[normal] text-black">
              Difficult to prioritize which students need
              attention first.
            </span>
          </li>
          <li className="mb-0 ms-[31.0065px]">
            <span className="leading-[normal] text-black">
              Manual communication (emails, scheduling) takes
              too much time.
            </span>
          </li>
          <li className="mb-0 ms-[31.0065px]">
            <span className="leading-[normal] text-black">
              No clear feedback loop to show if interventions
              improved student outcomes.
            </span>
          </li>
          <li className="mb-0 ms-[31.0065px]">
            <span className="leading-[normal] text-black">
              Notes and meeting records are fragmented and hard
              to retrieve.
            </span>
          </li>
          <li className="mb-0 ms-[31.0065px]">
            <span className="leading-[normal] text-black">
              High workload and stress from managing 100+
              students at once.
            </span>
          </li>
          <li className="ms-[31.0065px]">
            <span className="leading-[normal] text-black">
              Risk of missing critical issues due to lack of
              centralized alerts or updates.
            </span>
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
        <p className="leading-[normal] mb-0">
          Centralized, data-driven administrative console
          featuring:
        </p>
        <ul className="list-disc">
          <li className="mb-0 ms-[31.0065px]">
            <span className="leading-[normal]">
              •Built-in tools for advisors to launch and track
              interventions such as emails, meetings, and
              follow-up campaigns
            </span>
          </li>
          <li className="mb-0 ms-[31.0065px]">
            <span className="leading-[normal]">
              •A detailed, single-student view consolidating
              academic history, attendance, engagement metrics,
              financial holds, and past interventions.
            </span>
          </li>
          <li className="mb-0 ms-[31.0065px]">
            <span className="leading-[normal]">
              •Tools to create and automate outreach sequences
              such as emails or meeting requests—for groups of
              students sharing similar risk factors
            </span>
          </li>
          <li className="ms-[31.0065px]">
            <span className="leading-[normal]">{`•Historical graphs showing changes in a student’s risk score over time, helping advisors evaluate the effectiveness of their interventions. `}</span>
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
      <div
        aria-hidden="true"
        className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[20px]"
      />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[14.273px] items-start not-italic relative shrink-0 text-black">
      <p className="font-['Proxima_Nova:Bold',sans-serif] leading-[0.9] relative shrink-0 text-[25.95px] w-[127.155px]">
        Empathy
      </p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[12.565px] w-[199.815px]">
        This stage focuses on understanding academic advisors
        the primary users their daily workflows, frustrations,
        and goals. Through interviews, observation, and
        reviewing existing processes, the aim is to learn how
        advisors identify at-risk students, manage
        communication, and track interventions. The insights
        gathered help reveal their pain points around data
        overload, fragmented systems, and time pressure.
      </p>
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
      <p className="font-['Proxima_Nova:Bold',sans-serif] leading-[0.9] relative shrink-0 text-[25.95px] w-[199.815px]">
        Define
      </p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[12.565px] w-[199.815px]">
        In this phase, user insights are synthesized into clear
        problem statements. The core challenge is framing the
        real issues advisors face: difficulty identifying
        high-risk students quickly, inefficient communication,
        and lack of visibility into intervention outcomes. This
        step clarifies user needs, aligns goals for the
        platform, and outlines the essential MVP features
        required to address these challenges.
      </p>
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
      <p className="font-['Proxima_Nova:Bold',sans-serif] leading-[0.9] relative shrink-0 text-[25.95px] w-[199.815px]">
        Ideate
      </p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[12.565px] w-[199.815px]">
        Here, multiple ideas are explored to solve the defined
        problems. Designers brainstorm interface concepts,
        workflows, and features such as the at-risk dashboard,
        student 360 profile, intervention manager, and risk
        trend visualization. The goal is to generate a variety
        of possible solutions before narrowing down the most
        effective ones.
      </p>
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
      <p className="font-['Proxima_Nova:Bold',sans-serif] leading-[0.9] relative shrink-0 text-[25.95px] w-[199.815px]">
        Prototype
      </p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[12.565px] w-[199.815px]">
        Selected ideas are transformed into tangible wireframes
        and mockups. Starting with low-fidelity sketches and
        gradually moving to mid- and high fidelity screens,
        designers create interactive layouts of the dashboard,
        student profiles, calendars, and intervention tools.
        This phase focuses on visual hierarchy, usability, and
        aligning the interface with the institutional brand sty.
      </p>
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
      <p className="font-['Proxima_Nova:Bold',sans-serif] leading-[0.9] relative shrink-0 text-[25.95px] w-[199.815px]">
        Testing
      </p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[12.565px] w-[199.815px]">
        In the final stage, the prototype is tested with
        advisors to evaluate usability and clarity. Users
        perform key tasks like identifying at-risk students or
        launching an intervention and provide feedback on
        navigation, data visibility, and ease of use. The
        insights from testing guide refinements to ensure the
        platform is efficient, intuitive, and truly supportive
        of advisors’ workflows.
      </p>
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
      <div
        aria-hidden="true"
        className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[20px]"
      />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[46.958px] items-start relative shrink-0">
      <p className="font-['Poppins:Bold',sans-serif] leading-[0.9] not-italic relative shrink-0 text-[74.706px] text-black text-nowrap whitespace-pre">
        Wireframes
      </p>
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
        <div className="absolute h-[264px] left-[11px] top-[221.26px] w-[403px]">
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
          >
            <img
              alt=""
              className="absolute max-w-none object-center object-cover size-full"
              src="https://ik.imagekit.io/nn50yidhh/Splash.png"
            />
            <img
              alt=""
              className="absolute max-w-none object-center object-cover size-full"
              src="https://ik.imagekit.io/nn50yidhh/Academia%20Splash.png"
            />
          </div>
        </div>
        <div className="absolute h-[359px] left-[435px] top-[221.26px] w-[491px]">
          <img
            alt=""
            className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full"
            src="https://ik.imagekit.io/nn50yidhh/At-Risk%20Student%20Dashboard%201.png"
          />
        </div>
        <div className="absolute h-[246px] left-[947px] top-[221.26px] w-[304px]">
          <img
            alt=""
            className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full"
            src="https://ik.imagekit.io/nn50yidhh/Academia%20360%20Profile%201.png"
          />
        </div>
        <p className="absolute font-['Poppins:Bold',sans-serif] leading-[0.9] left-[77px] not-italic text-[16.336px] text-black top-[176.26px] w-[174.674px]">{`Academia sign in `}</p>
        <p className="absolute font-['Poppins:Bold',sans-serif] leading-[0.9] left-[462px] not-italic text-[16.336px] text-black top-[171.26px] w-[219px]">{`Academia Dashboard `}</p>
        <p className="absolute font-['Poppins:Bold',sans-serif] leading-[0.9] left-[947px] not-italic text-[16.336px] text-black top-[179.26px] w-[219px]">{`Academia 360 Profile `}</p>
        {/* Additional wireframe stock images */}
        <div className="absolute h-[200px] left-[30px] top-[500px] w-[350px] rounded-[8px] overflow-hidden">
          
        </div>
        <div className="absolute h-[200px] left-[400px] top-[500px] w-[350px] rounded-[8px] overflow-hidden">
          
        </div>
        <div className="absolute h-[200px] left-[770px] top-[500px] w-[350px] rounded-[8px] overflow-hidden">
          
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[20px]"
      />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[46.958px] items-start relative shrink-0">
      <p className="font-['Poppins:Bold',sans-serif] leading-[0.9] not-italic relative shrink-0 text-[74.706px] text-black text-nowrap whitespace-pre">
        Prototype
      </p>
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
  return (
    <div className="absolute h-[55.232px] left-[184px] top-[709.26px] w-[978.148px]" />
  );
}

function LogosFigma() {
  return (
    <div
      className="h-[25.349px] relative shrink-0 w-[16.9px]"
      data-name="logos:figma"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 17 26"
      >
        <g clipPath="url(#clip0_1_540)" id="logos:figma">
          <path
            d={svgPaths.p3f46c100}
            fill="var(--fill-0, #0ACF83)"
            id="Vector"
          />
          <path
            d={svgPaths.p2962fb72}
            fill="var(--fill-0, #A259FF)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p30ab7700}
            fill="var(--fill-0, #F24E1E)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p2d5ccb80}
            fill="var(--fill-0, #FF7262)"
            id="Vector_4"
          />
          <path
            d={svgPaths.p15558600}
            fill="var(--fill-0, #1ABCFE)"
            id="Vector_5"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_540">
            <rect
              fill="white"
              height="25.3494"
              width="16.8996"
            />
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
      <a
        className="[white-space-collapse:collapse] block font-['Proxima_Nova:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[16.336px] text-black text-nowrap"
        href="https://www.figma.com/design/VjcGBH7enPqaXlHRJJvFgu/Academia-Prototype?t=pQKVW0CoQcVwYXHO-1"
      >
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid leading-[normal] underline whitespace-pre">
          https://bit.ly/MaqubsAcademyWebUI
        </p>
      </a>
    </div>
  );
}

function Frame27() {
  return (
    <div className="absolute box-border content-stretch flex gap-[21.345px] items-center left-[95px] px-[10.672px] py-[6.403px] rounded-[10.672px] top-[714.26px]">
      <div
        aria-hidden="true"
        className="absolute border-[1.067px] border-black border-solid inset-0 pointer-events-none rounded-[10.672px]"
      />
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
        <div className="absolute h-[264px] left-[24px] top-[279.26px] w-[403px]">
          <img
            alt=""
            className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full"
            src="https://ik.imagekit.io/nn50yidhh/Splash.png"
          />
        </div>
        <div className="absolute h-[359px] left-[448px] top-[279.26px] w-[491px]">
          <img
            alt=""
            className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full"
            src="https://ik.imagekit.io/nn50yidhh/At-Risk%20Student%20Dashboard.png"
          />
        </div>
        <div className="absolute h-[246px] left-[960px] top-[279.26px] w-[304px]">
          <img
            alt=""
            className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full"
            src="https://ik.imagekit.io/nn50yidhh/Student%20360%20Profile.png"
          />
        </div>
        <p className="absolute font-['Poppins:Bold',sans-serif] leading-[0.9] left-[90px] not-italic text-[16.336px] text-black top-[234.26px] w-[174.674px]">{`Academia sign in `}</p>
        <p className="absolute font-['Poppins:Bold',sans-serif] leading-[0.9] left-[475px] not-italic text-[16.336px] text-black top-[229.26px] w-[219px]">{`Academia Dashboard `}</p>
        <p className="absolute font-['Poppins:Bold',sans-serif] leading-[0.9] left-[960px] not-italic text-[16.336px] text-black top-[237.26px] w-[219px]">{`Academia 360 Profile `}</p>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[20px]"
      />
    </div>
  );
}

function Frame41() {
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
    <div
      className="relative shrink-0 size-[24px]"
      data-name="home"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="home">
          <path
            d={svgPaths.p1e128b00}
            fill="var(--fill-0, #F2F2F2)"
            id="Vector"
          />
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
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.432] not-italic relative shrink-0 text-[#f2f2f2] text-[17px] text-nowrap whitespace-pre">
        Home
      </p>
    </div>
  );
}

function Home3() {
  return (
    <div
      className="content-stretch flex items-center justify-center relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
      data-name="Home"
    >
      <Frame34 />
      <Frame33 />
    </div>
  );
}

function PersonOutline1() {
  return (
    <div
      className="relative shrink-0 size-[24px]"
      data-name="person_outline"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="person_outline">
          <path
            d={svgPaths.p18946880}
            fill="var(--fill-0, #F2F2F2)"
            id="Vector"
          />
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
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.432] not-italic relative shrink-0 text-[#f2f2f2] text-[17px] text-nowrap whitespace-pre">
        About me
      </p>
    </div>
  );
}

function About1() {
  return (
    <div
      className="content-stretch flex items-center justify-center relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
      data-name="About"
    >
      <Frame35 />
      <Frame36 />
    </div>
  );
}

function PhoneFill1() {
  return (
    <div
      className="relative shrink-0 size-[23px]"
      data-name="Phone_fill"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 23 23"
      >
        <g id="Phone_fill">
          <path
            d={svgPaths.p2dbe2d00}
            fill="var(--fill-0, #F2F2F2)"
            id="Vector 189"
          />
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
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.432] not-italic relative shrink-0 text-[#f2f2f2] text-[17px] text-nowrap whitespace-pre">
        Contact
      </p>
    </div>
  );
}

function Contact1() {
  return (
    <div
      className="content-stretch flex items-center justify-center relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
      data-name="Contact"
    >
      <Frame37 />
      <Frame38 />
    </div>
  );
}

function Menu() {
  return (
    <div
      className="absolute content-stretch flex gap-[50px] items-start left-[112px] top-[99px]"
      data-name="Menu"
    >
      <Home3 />
      <About1 />
      <Contact1 />
    </div>
  );
}

function Footer() {
  return (
    <div
      className="absolute bg-black h-[226px] left-[-2px] overflow-clip top-[6046px] w-[1536px]"
      data-name="Footer"
    >
      <Menu />
      <div
        className="absolute bg-[rgba(255,255,255,0.15)] h-[2px] left-[40px] top-[316px] w-[1360px]"
        data-name="Separator"
      />
    </div>
  );
}

function Frame39() {
  return (
    <div className="absolute bg-white h-[98px] left-0 overflow-clip top-px w-[1536px]">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[1.432] left-[44px] not-italic text-[#fffefe] text-[24px] text-nowrap top-[36px] whitespace-pre">
        YOUR LOGO
      </p>
    </div>
  );
}

function Home4() {
  return (
    <div
      className="box-border content-stretch flex gap-[10px] items-start p-[10px] relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
      data-name="Home"
    >
      <p className="font-['Poppins:Medium',sans-serif] leading-[1.432] not-italic relative shrink-0 text-[17px] text-black text-nowrap whitespace-pre">
        Home
      </p>
    </div>
  );
}

function About2() {
  return (
    <div
      className="box-border content-stretch flex gap-[10px] items-start p-[10px] relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
      data-name="About"
    >
      <p className="font-['Poppins:Medium',sans-serif] leading-[1.432] not-italic relative shrink-0 text-[17px] text-black text-nowrap whitespace-pre">
        About me
      </p>
    </div>
  );
}

function Work1() {
  return (
    <div
      className="box-border content-stretch flex gap-[10px] items-start p-[10px] relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
      data-name="Work"
    >
      <p className="font-['Poppins:Medium',sans-serif] leading-[1.432] not-italic relative shrink-0 text-[17px] text-black text-nowrap whitespace-pre">
        Work
      </p>
    </div>
  );
}

function TopMenu() {
  return (
    <div
      className="absolute content-stretch flex gap-[70px] items-center justify-center left-[1040px] top-[22px]"
      data-name="Top menu"
    >
      <Home4 />
      <About2 />
      <Work1 />
    </div>
  );
}

export default function SingleProjectPageCompany() {
  return (
    <div
      className="bg-[#f2f2f2] relative size-full"
      data-name="Single-project page-company1"
    >
      <HomePage />
      <div className="absolute h-[895px] left-[76px] rounded-[50px] top-[960px] w-[1350px]">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-center object-cover pointer-events-none rounded-[50px] size-full"
          src="https://ik.imagekit.io/nn50yidhh/Splash.png"
        />
      </div>
      <Frame41 />
      <Footer />
      <Frame39 />
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[1.432] left-[90px] not-italic text-[17px] text-black text-nowrap top-[36px] whitespace-pre cursor-pointer" data-name="BackToProjects">{`Back to Projects `}</p>
      <div className="absolute inset-[0.65%_94.47%_99.11%_3.91%] cursor-pointer" data-name="BackToProjects">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 15">
          <path d="M24.7427 7.47199C24.7522 7.46247 24.7522 7.46247 24.7617 7.45295C24.7617 7.45295 24.7617 7.45295 24.7617 7.44344C24.7996 7.38583 24.8185 7.31863 24.8185 7.24183C24.8185 7.16503 24.7996 7.09783 24.7617 7.04022C24.7617 7.04022 24.7617 7.04022 24.7617 7.0307C24.7522 7.02119 24.7522 7.02119 24.7427 7.01167L17.9954 0.264366C17.8438 0.112773 17.5973 0.112773 17.4457 0.264366C17.2941 0.415959 17.2941 0.662462 17.4457 0.814055L23.4056 6.77394H0.577257C0.366171 6.77394 0.19458 6.94552 0.19458 7.15661C0.19458 7.3677 0.366171 7.53929 0.577257 7.53929H23.4056L17.4457 13.4992C17.2941 13.6508 17.2941 13.8973 17.4457 14.0489C17.5215 14.1246 17.6257 14.1625 17.7206 14.1625C17.8154 14.1625 17.9103 14.1246 17.9954 14.0489L24.7427 7.47199Z" fill="black" />
        </svg>
      </div>
      <TopMenu />
    </div>
  );
}
